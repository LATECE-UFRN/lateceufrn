/**
 * speech.js — Leitura Assistida por Voz (Text-to-Speech)
 *
 * v3 — adiciona fallback automático via Google Translate TTS:
 *   • Detecta falha silenciosa do SAPI5 no Windows (onstart nunca dispara
 *     mas onend dispara, sem áudio).
 *   • Troca para <audio> com endpoint do Google Translate na primeira falha.
 *   • Persiste a escolha em localStorage (latece-speech-engine).
 *   • Preserva chunking, pause/resume/stop, token de geração e watchdog.
 *
 * API pública: initSpeech, toggleSpeech, isSpeechEnabled, getSpeechState
 */

const STORAGE_KEY = 'latece-speech-enabled';
const ENGINE_KEY = 'latece-speech-engine'; // 'webspeech' | 'audio'
const CHUNK_MAX_CHARS = 180;
const VOICE_WAIT_MS = 2000;
const WATCHDOG_MS = 4000;
const AUDIO_FALLBACK_ENDPOINT = 'https://translate.google.com/translate_tts';

let isEnabled = false;
let isSpeaking = false;
let isPaused = false;
let currentTexts = [];
let currentIndex = 0;
let floatingButton = null;
let controlsContainer = null;

let generationToken = 0;
let activeEngine = localStorage.getItem(ENGINE_KEY) || 'webspeech';

// Web Speech API
let voices = [];
let voicesReady = false;

// Fallback <audio>
let currentAudio = null;

// ============================================================
// INICIALIZAÇÃO
// ============================================================

export function initSpeech() {
  isEnabled = localStorage.getItem(STORAGE_KEY) === 'true';
  loadVoices();
  if (isEnabled) createFloatingButton();
  document.addEventListener('speech-toggle', (e) => setEnabled(e.detail.enabled));
}

function setEnabled(enabled) {
  isEnabled = enabled;
  localStorage.setItem(STORAGE_KEY, String(enabled));
  if (enabled) createFloatingButton();
  else { stopSpeech(); removeFloatingButton(); }
}

export function toggleSpeech() {
  setEnabled(!isEnabled);
  document.dispatchEvent(new CustomEvent('speech-state-changed', { detail: { enabled: isEnabled } }));
}

export function isSpeechEnabled() { return isEnabled; }
export function getSpeechState() { return { isEnabled, isSpeaking, isPaused, engine: activeEngine }; }

// ============================================================
// VOZES — carregamento e escolha
// ============================================================

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const read = () => {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) { voicesReady = true; return true; }
    return false;
  };
  if (read()) return;
  const handler = () => { if (read()) window.speechSynthesis.removeEventListener('voiceschanged', handler); };
  window.speechSynthesis.addEventListener('voiceschanged', handler);
  setTimeout(() => { if (!voicesReady) read(); }, VOICE_WAIT_MS);
}

async function waitForVoices() {
  if (voicesReady || voices.length > 0) return;
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, VOICE_WAIT_MS);
    const handler = () => {
      voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        voicesReady = true;
        clearTimeout(timer);
        window.speechSynthesis.removeEventListener('voiceschanged', handler);
        resolve();
      }
    };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
  });
}

// Vozes que reportam como disponíveis mas não produzem áudio no Chrome desktop.
const BROKEN_VOICE_PATTERNS = [/microsoft\s+daniel/i];
const PREFERRED_VOICE_PATTERNS = [
  /microsoft\s+maria/i, /microsoft\s+francisca/i,
  /google\s+português/i, /google\s+portuguese/i,
  /luciana/i, /fernanda/i
];

function isBrokenVoice(v) { return v && v.name && BROKEN_VOICE_PATTERNS.some((r) => r.test(v.name)); }
function isPreferredVoice(v) { return v && v.name && PREFERRED_VOICE_PATTERNS.some((r) => r.test(v.name)); }

function pickVoice(lang) {
  if (!voices.length) return null;
  const target = (lang || 'pt-BR').toLowerCase();
  const prefix = target.split('-')[0];
  const candidates = voices.filter((v) => {
    const vl = v.lang.toLowerCase();
    return (vl === target || vl.startsWith(prefix)) && !isBrokenVoice(v);
  });
  if (candidates.length === 0) return voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) || null;
  const pref = candidates.find(isPreferredVoice);
  if (pref) return pref;
  const local = candidates.find((v) => v.localService);
  return local || candidates[0];
}

// ============================================================
// CHUNKING
// ============================================================

function chunkText(text, maxLen = CHUNK_MAX_CHARS) {
  if (!text) return [];
  const t = text.trim();
  if (t.length <= maxLen) return [t];
  const parts = t.match(/[^.!?;:]+[.!?;:]?\s*/g) || [t];
  const chunks = [];
  let buf = '';
  for (const p of parts) {
    if ((buf + p).length > maxLen && buf) { chunks.push(buf.trim()); buf = p; }
    else { buf += p; }
    while (buf.length > maxLen) {
      const cut = buf.lastIndexOf(' ', maxLen);
      const take = cut > 0 ? cut : maxLen;
      chunks.push(buf.slice(0, take).trim());
      buf = buf.slice(take).trim();
    }
  }
  if (buf.trim()) chunks.push(buf.trim());
  return chunks;
}

// ============================================================
// EXTRAÇÃO DE CONTEÚDO
// ============================================================

function extractTextContent() {
  const main = document.querySelector('main');
  if (!main) return [];
  const selectors = [
    'h1','h2','h3','h4','h5','h6','p','li','label',
    '.hero-title','.hero-subtitle','.hero-badge','.section-title','.card-title','.card-text',
    '.article-title','.article-content p','.news-card .card-title','.news-card .card-excerpt',
    '.team-card .team-name','.team-card .team-role',
    '.equipment-card .equipment-name','.equipment-card .equipment-description',
    '.publication-item .pub-title','.publication-item .pub-authors','.publication-item .pub-abstract'
  ];
  const seen = new Set();
  const out = [];
main.querySelectorAll(selectors.join(',')).forEach((el) => {
  if (el.getAttribute('aria-hidden') === 'true' || el.hidden) return;

  // Respeita regiões marcadas para não serem lidas pela Leitura Assistida.
  // O atributo data-no-tts NÃO afeta leitores de tela; afeta apenas este módulo.
  if (el.closest('[data-no-tts]')) return;

  const s = window.getComputedStyle(el);
  if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0') return;
  let text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return;
    const key = text.slice(0, 60);
    if (seen.has(key)) return;
    seen.add(key);
    const aria = el.getAttribute('aria-label');
    if (aria && aria.trim() !== text) text = aria.trim() + '. ' + text;
    out.push(text);
  });
  if (out.length === 0) {
    const fb = (main.textContent || '').replace(/\s+/g, ' ').trim();
    if (fb) out.push(fb);
  }
  return out;
}

// ============================================================
// UI — botão flutuante e controles
// ============================================================

function createFloatingButton() {
  if (floatingButton) return;
  floatingButton = document.createElement('div');
  floatingButton.id = 'speech-float-btn';
  floatingButton.setAttribute('role', 'button');
  floatingButton.setAttribute('tabindex', '0');
  floatingButton.setAttribute('aria-label', 'Controles de leitura assistida');
  floatingButton.setAttribute('aria-expanded', 'false');
  floatingButton.style.cssText = `position:fixed;bottom:20px;left:20px;z-index:1000;background:var(--color-primary);color:var(--text-on-primary);border:none;border-radius:50%;width:56px;height:56px;font-size:1.5rem;box-shadow:var(--shadow-elevated);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .25s,background .25s;`;
  floatingButton.textContent = '🔊';
  floatingButton.addEventListener('click', toggleControls);
  floatingButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleControls(); }
  });
  document.body.appendChild(floatingButton);

  controlsContainer = document.createElement('div');
  controlsContainer.id = 'speech-controls';
  controlsContainer.style.cssText = `position:fixed;bottom:90px;left:20px;background:var(--surface-modal);border-radius:var(--radius-lg);box-shadow:var(--shadow-heavy);border:1px solid var(--border);padding:16px;display:none;flex-direction:column;gap:8px;min-width:200px;z-index:1001;`;
  controlsContainer.innerHTML = `
    <button class="speech-control-btn" data-action="play">▶ Ler página</button>
    <button class="speech-control-btn" data-action="pause">⏸ Pausar</button>
    <button class="speech-control-btn" data-action="resume">▶ Continuar</button>
    <button class="speech-control-btn" data-action="stop">⏹ Parar</button>
    <hr style="border-color:var(--border-light);margin:4px 0;">
    <button class="speech-control-btn" data-action="close">✕ Fechar controles</button>
  `;
  controlsContainer.querySelectorAll('.speech-control-btn').forEach((btn) => {
    btn.style.cssText = 'background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:.95rem;color:var(--text-primary);border-radius:6px;';
    btn.addEventListener('click', () => {
      const a = btn.dataset.action;
      if (a === 'play') startReading();
      else if (a === 'pause') pauseSpeech();
      else if (a === 'resume') resumeSpeech();
      else if (a === 'stop') stopSpeech();
      else if (a === 'close') toggleControls();
    });
  });
  document.body.appendChild(controlsContainer);

  document.addEventListener('click', (e) => {
    if (controlsContainer && controlsContainer.style.display === 'flex' &&
        !controlsContainer.contains(e.target) && e.target !== floatingButton) {
      controlsContainer.style.display = 'none';
      floatingButton.setAttribute('aria-expanded', 'false');
    }
  });
  updateControlsState();
}

function removeFloatingButton() {
  if (floatingButton) { floatingButton.remove(); floatingButton = null; }
  if (controlsContainer) { controlsContainer.remove(); controlsContainer = null; }
}

function toggleControls() {
  if (!controlsContainer || !floatingButton) return;
  const isOpen = controlsContainer.style.display === 'flex';
  controlsContainer.style.display = isOpen ? 'none' : 'flex';
  floatingButton.setAttribute('aria-expanded', String(!isOpen));
  if (!isOpen) updateControlsState();
}

function updateControlsState() {
  if (!controlsContainer) return;
  const play = controlsContainer.querySelector('[data-action="play"]');
  const pause = controlsContainer.querySelector('[data-action="pause"]');
  const resume = controlsContainer.querySelector('[data-action="resume"]');
  const stop = controlsContainer.querySelector('[data-action="stop"]');
  if (!play) return;
  if (isSpeaking && !isPaused) {
    play.style.display = 'none'; pause.style.display = 'block';
    resume.style.display = 'none'; stop.style.display = 'block';
  } else if (isSpeaking && isPaused) {
    play.style.display = 'none'; pause.style.display = 'none';
    resume.style.display = 'block'; stop.style.display = 'block';
  } else {
    play.style.display = 'block'; pause.style.display = 'none';
    resume.style.display = 'none'; stop.style.display = 'none';
  }
}

// ============================================================
// MOTOR DE FALA — Web Speech API
// ============================================================

async function speakWithWebSpeech(text, token, onEnded, onFailedSilent) {
  await waitForVoices();
  if (token !== generationToken) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = document.documentElement.lang || 'pt-BR';
  utter.rate = 1.0;
  utter.pitch = 1.0;
  utter.volume = 1;
  const voice = pickVoice(utter.lang);
  if (voice) utter.voice = voice;

  let started = false;
  let resolved = false;

  const finish = (ok) => {
    if (resolved) return;
    resolved = true;
    clearTimeout(watchdog);
    if (token !== generationToken) return;
    if (ok) onEnded();
    else onFailedSilent();
  };

  utter.onstart = () => { started = true; updateControlsState(); };
  utter.onend = () => finish(true);
  utter.onerror = (e) => {
    const reason = e && e.error;
    if (reason === 'interrupted' || reason === 'canceled') return;
    // Falha real
    if (started) finish(true);        // meio da fala → avança normalmente
    else finish(false);               // nunca começou → avisa
  };

const watchdog = setTimeout(() => {
  if (started) return;
  if (token !== generationToken) return;
  if (!isSpeaking || isPaused) return;
  try { window.speechSynthesis.cancel(); } catch { /* noop */ }
  finish(false); // não iniciou em 4s → considera falha silenciosa
}, WATCHDOG_MS);

  try { window.speechSynthesis.speak(utter); }
  catch (err) { clearTimeout(watchdog); finish(false); }
}

// ============================================================
// MOTOR DE FALA — Fallback <audio> (Google Translate TTS)
// ============================================================

function speakWithAudioFallback(text, token, onEnded, onFailed) {
  if (token !== generationToken) return;

  // Sanitiza o texto (Google Translate não lida bem com certos caracteres)
  const clean = text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200); // limite de segurança da API

  if (!clean) { onEnded(); return; }

  const lang = (document.documentElement.lang || 'pt-BR').split('-')[0] === 'pt'
    ? 'pt-BR'
    : (document.documentElement.lang || 'pt-BR');

  const url = `${AUDIO_FALLBACK_ENDPOINT}?ie=UTF-8&q=${encodeURIComponent(clean)}&tl=${encodeURIComponent(lang)}&client=tw-ob&total=1&idx=0&textlen=${clean.length}`;

  const audio = new Audio();
  audio.crossOrigin = 'anonymous';
  audio.src = url;
  audio.preload = 'auto';
  currentAudio = audio;

  let resolved = false;
  const finish = (ok) => {
    if (resolved) return;
    resolved = true;
    if (currentAudio === audio) currentAudio = null;
    if (token !== generationToken) return;
    if (ok) onEnded(); else onFailed();
  };

  audio.addEventListener('ended', () => finish(true));
  audio.addEventListener('error', () => finish(false));
  audio.addEventListener('stalled', () => { /* deixa o watchdog cuidar */ });

const watchdog = setTimeout(() => {
  if (token !== generationToken) return;
  if (audio.readyState < 2) {
    try { audio.pause(); } catch { /* noop */ }
    finish(false);
  }
}, WATCHDOG_MS);

  audio.addEventListener('playing', () => clearTimeout(watchdog), { once: true });

  audio.play().catch(() => { clearTimeout(watchdog); finish(false); });
}

// ============================================================
// CONTROLE DE LEITURA
// ============================================================

function startReading() {
  // Verifica suporte
  const hasSpeech = 'speechSynthesis' in window;
  const useAudio = activeEngine === 'audio' || !hasSpeech;

  if (!hasSpeech && !useAudio) {
    alert('Seu navegador não suporta síntese de voz.');
    return;
  }

  // Se já estava lendo, invalida e cancela
if (isSpeaking) {
  generationToken++;
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch { /* noop */ }
  if (currentAudio) {
    try { currentAudio.pause(); currentAudio.src = ''; } catch { /* noop */ }
    currentAudio = null;
  }
}

  const rawTexts = extractTextContent();
  if (rawTexts.length === 0) {
    alert('Nenhum conteúdo textual encontrado para leitura.');
    return;
  }

  const texts = [];
  for (const t of rawTexts) {
    for (const c of chunkText(t)) if (c.trim()) texts.push(c.trim());
  }

  currentTexts = texts;
  currentIndex = 0;
  isSpeaking = true;
  isPaused = false;
  generationToken++;
  const token = generationToken;

  updateControlsState();
  readNext(token);
}

function readNext(token) {
  if (token !== generationToken) return;
  if (!isSpeaking || isPaused) return;

  if (currentIndex >= currentTexts.length) {
    finishReading(token);
    return;
  }

  const text = currentTexts[currentIndex];
  if (!text) { currentIndex++; readNext(token); return; }

  const goNext = () => {
    if (token !== generationToken) return;
    currentIndex++;
    if (isSpeaking && !isPaused) readNext(token);
  };

  const onSilentFailure = () => {
    if (token !== generationToken) return;
    if (activeEngine !== 'audio') {
      // Primeira falha silenciosa → muda para o fallback e reinicia do ponto atual
      console.warn('[speech] Web Speech API não produziu áudio. Alternando para fallback.');
      activeEngine = 'audio';
      localStorage.setItem(ENGINE_KEY, 'audio');
      // Re-tenta o MESMO trecho com o fallback
      speakWithAudioFallback(text, token, goNext, goNext);
    } else {
      // Já estamos no fallback e falhou → segue em frente mesmo assim
      goNext();
    }
  };

  if (activeEngine === 'audio') {
    speakWithAudioFallback(text, token, goNext, onSilentFailure);
  } else {
    speakWithWebSpeech(text, token, goNext, onSilentFailure);
  }
}

function finishReading(token) {
  if (token !== generationToken) return;
  isSpeaking = false;
  isPaused = false;
  currentIndex = 0;
  currentTexts = [];
  currentAudio = null;
  updateControlsState();
}

// ============================================================
// PAUSA / RETOMADA / PARADA (opera em ambos os motores)
// ============================================================

function pauseSpeech() {
  if (!isSpeaking || isPaused) return;
  if (activeEngine === 'audio') {
    if (currentAudio) {
      try { currentAudio.pause(); } catch { /* noop */ }
    }
  } else {
    try { window.speechSynthesis.pause(); } catch { /* noop */ }
  }
  isPaused = true;
  updateControlsState();
}

function resumeSpeech() {
  if (!isSpeaking || !isPaused) return;
  if (activeEngine === 'audio') {
    if (currentAudio) {
      currentAudio.play().catch(() => { /* noop */ });
    }
  } else {
    try { window.speechSynthesis.resume(); } catch { /* noop */ }
  }
  isPaused = false;
  updateControlsState();
}

function stopSpeech() {
  generationToken++;
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch { /* noop */ }
  if (currentAudio) {
    try { currentAudio.pause(); currentAudio.src = ''; } catch { /* noop */ }
    currentAudio = null;
  }
  isSpeaking = false;
  isPaused = false;
  currentIndex = 0;
  currentTexts = [];
  updateControlsState();
}