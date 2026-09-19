/**
 * speech.js — Leitura Assistida por Voz (Text-to-Speech)
 * Utiliza Web Speech API, integrado ao painel de acessibilidade.
 * Estado: habilitado/desabilitado via localStorage.
 */

const STORAGE_KEY = 'latece-speech-enabled';
let isEnabled = false;
let isSpeaking = false;
let isPaused = false;
let utterance = null;
let currentUtterance = null;
let currentTexts = [];
let currentIndex = 0;
let floatingButton = null;
let controlsContainer = null;

// ============================================================
// INICIALIZAÇÃO
// ============================================================

export function initSpeech() {
  // Carregar estado do localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  isEnabled = saved === 'true';
  if (isEnabled) {
    createFloatingButton();
  }
  // Ouvir mudanças no estado via evento personalizado
  document.addEventListener('speech-toggle', (e) => {
    const enabled = e.detail.enabled;
    setEnabled(enabled);
  });
}

// ============================================================
// ATIVAÇÃO/DESATIVAÇÃO
// ============================================================

function setEnabled(enabled) {
  isEnabled = enabled;
  localStorage.setItem(STORAGE_KEY, String(enabled));
  if (enabled) {
    createFloatingButton();
  } else {
    stopSpeech();
    removeFloatingButton();
  }
}

export function toggleSpeech() {
  setEnabled(!isEnabled);
  // Disparar evento para sincronizar com o painel de acessibilidade
  document.dispatchEvent(new CustomEvent('speech-state-changed', { detail: { enabled: isEnabled } }));
}

export function isSpeechEnabled() {
  return isEnabled;
}

// ============================================================
// BOTÃO FLUTUANTE E CONTROLES
// ============================================================

function createFloatingButton() {
  if (floatingButton) return;
  floatingButton = document.createElement('div');
  floatingButton.id = 'speech-float-btn';
  floatingButton.setAttribute('role', 'button');
  floatingButton.setAttribute('aria-label', 'Controles de leitura assistida');
  floatingButton.setAttribute('aria-expanded', 'false');
  floatingButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    background: var(--color-primary);
    color: var(--text-on-primary);
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
    box-shadow: var(--shadow-elevated);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast), background var(--transition-fast);
  `;
  floatingButton.textContent = '🔊';
  floatingButton.addEventListener('click', toggleControls);
  document.body.appendChild(floatingButton);

  // Criar container de controles (inicialmente oculto)
  controlsContainer = document.createElement('div');
  controlsContainer.id = 'speech-controls';
  controlsContainer.style.cssText = `
    position: fixed;
    bottom: 90px;
    left: 20px;
    background: var(--surface-modal);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-heavy);
    border: 1px solid var(--border);
    padding: 16px;
    display: none;
    flex-direction: column;
    gap: 8px;
    min-width: 180px;
    z-index: 1001;
  `;
  controlsContainer.innerHTML = `
    <button class="speech-control-btn" data-action="play" style="background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:0.95rem;color:var(--text-primary);">▶ Ler página</button>
    <button class="speech-control-btn" data-action="pause" style="background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:0.95rem;color:var(--text-primary);">⏸ Pausar</button>
    <button class="speech-control-btn" data-action="resume" style="background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:0.95rem;color:var(--text-primary);">▶ Continuar</button>
    <button class="speech-control-btn" data-action="stop" style="background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:0.95rem;color:var(--text-primary);">⏹ Parar</button>
    <hr style="border-color:var(--border-light);margin:4px 0;">
    <button class="speech-control-btn" data-action="close" style="background:none;border:none;text-align:left;padding:6px 12px;cursor:pointer;font-size:0.95rem;color:var(--text-muted);">✕ Fechar controles</button>
  `;
  document.body.appendChild(controlsContainer);

  // Eventos dos botões
  controlsContainer.querySelectorAll('.speech-control-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.action;
      switch (action) {
        case 'play': startReading(); break;
        case 'pause': pauseSpeech(); break;
        case 'resume': resumeSpeech(); break;
        case 'stop': stopSpeech(); break;
        case 'close': toggleControls(); break;
        default: break;
      }
    });
  });

  // Fechar controles ao clicar fora
  document.addEventListener('click', (e) => {
    if (controlsContainer && controlsContainer.style.display === 'flex') {
      if (!controlsContainer.contains(e.target) && e.target !== floatingButton) {
        controlsContainer.style.display = 'none';
        floatingButton.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Atualizar estado dos botões (play/pause/resume) conforme a fala
  updateControlsState();
}

function removeFloatingButton() {
  if (floatingButton) {
    floatingButton.remove();
    floatingButton = null;
  }
  if (controlsContainer) {
    controlsContainer.remove();
    controlsContainer = null;
  }
}

function toggleControls() {
  if (!controlsContainer) return;
  const isOpen = controlsContainer.style.display === 'flex';
  controlsContainer.style.display = isOpen ? 'none' : 'flex';
  floatingButton.setAttribute('aria-expanded', String(!isOpen));
  if (!isOpen) {
    // Atualizar estado dos botões ao abrir
    updateControlsState();
  }
}

function updateControlsState() {
  if (!controlsContainer) return;
  const playBtn = controlsContainer.querySelector('[data-action="play"]');
  const pauseBtn = controlsContainer.querySelector('[data-action="pause"]');
  const resumeBtn = controlsContainer.querySelector('[data-action="resume"]');
  const stopBtn = controlsContainer.querySelector('[data-action="stop"]');

  if (isSpeaking && !isPaused) {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
    stopBtn.style.display = 'block';
  } else if (isSpeaking && isPaused) {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
    stopBtn.style.display = 'block';
  } else {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    stopBtn.style.display = 'none';
  }
}

// ============================================================
// LEITURA — EXTRAÇÃO DE CONTEÚDO
// ============================================================

function extractTextContent() {
  const main = document.querySelector('main');
  if (!main) return [];

  // Ordem semântica: título da página, headings, parágrafos, links, botões, etc.
  const elements = [];
  const selectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'li', 'a', 'button', 'label',
    '.hero-title', '.hero-subtitle', '.hero-badge',
    '.section-title', '.card-title', '.card-text',
    '.article-title', '.article-content p',
    '.news-card .card-title', '.news-card .card-excerpt',
    '.team-card .team-name', '.team-card .team-role',
    '.equipment-card .equipment-name', '.equipment-card .equipment-description',
    '.publication-item .pub-title', '.publication-item .pub-authors', '.publication-item .pub-abstract'
  ];

  // Coletar texto de cada elemento, evitando duplicatas e conteúdo oculto
  const seen = new Set();
  const allElements = main.querySelectorAll(selectors.join(','));
  allElements.forEach(el => {
    // Ignorar elementos com aria-hidden="true" ou hidden
    if (el.getAttribute('aria-hidden') === 'true' || el.hidden) return;
    // Ignorar elementos que não são visíveis (display:none ou visibility:hidden)
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
    // Extrair texto, removendo espaços extras
    let text = el.textContent.trim();
    if (!text) return;
    // Evitar duplicatas (ex: mesmo texto em heading e parágrafo)
    const key = text.slice(0, 60);
    if (seen.has(key)) return;
    seen.add(key);
    // Considerar aria-label se existir e diferente do texto
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel && ariaLabel.trim() !== text) {
      text = ariaLabel.trim() + '. ' + text;
    }
    elements.push(text);
  });

  // Se nenhum elemento foi encontrado, usar o conteúdo do main como fallback
  if (elements.length === 0) {
    const mainText = main.textContent.trim();
    if (mainText) elements.push(mainText);
  }

  return elements;
}

// ============================================================
// CONTROLE DE LEITURA (Web Speech API)
// ============================================================

function startReading() {
  if (!window.speechSynthesis) {
    alert('Seu navegador não suporta síntese de voz.');
    return;
  }
  if (isSpeaking && !isPaused) {
    // Já está falando, apenas reiniciar?
    stopSpeech();
  }
  // Extrair texto
  const texts = extractTextContent();
  if (texts.length === 0) {
    alert('Nenhum conteúdo textual encontrado para leitura.');
    return;
  }
  currentTexts = texts;
  currentIndex = 0;
  isSpeaking = true;
  isPaused = false;
  readNext();
  updateControlsState();
}

function readNext() {
  if (currentIndex >= currentTexts.length) {
    // Fim da leitura
    isSpeaking = false;
    isPaused = false;
    updateControlsState();
    return;
  }
  const text = currentTexts[currentIndex];
  if (!text) {
    currentIndex++;
    readNext();
    return;
  }

  // Criar utterance
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = document.documentElement.lang || 'pt-BR';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  // Obter vozes disponíveis e escolher uma voz pt-BR se possível
  const voices = window.speechSynthesis.getVoices();
  const ptBRVoice = voices.find(v => v.lang.startsWith('pt') && v.lang.includes('BR'));
  if (ptBRVoice) utterance.voice = ptBRVoice;

  // Eventos
  utterance.onend = () => {
    currentIndex++;
    if (isSpeaking && !isPaused) {
      readNext();
    } else {
      // Se pausado ou interrompido, não continua
    }
  };
  utterance.onerror = (event) => {
    console.warn('Erro na síntese:', event);
    // Tentar continuar mesmo assim
    currentIndex++;
    if (isSpeaking && !isPaused) {
      readNext();
    }
  };

  // Armazenar utterance atual para possível cancelamento
  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  updateControlsState();
}

function pauseSpeech() {
  if (isSpeaking && !isPaused) {
    window.speechSynthesis.pause();
    isPaused = true;
    updateControlsState();
  }
}

function resumeSpeech() {
  if (isSpeaking && isPaused) {
    window.speechSynthesis.resume();
    isPaused = false;
    updateControlsState();
  }
}

function stopSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  isPaused = false;
  currentIndex = 0;
  currentTexts = [];
  currentUtterance = null;
  updateControlsState();
}

// ============================================================
// EXPORTAÇÃO PARA USO EXTERNO
// ============================================================

export function getSpeechState() {
  return { isEnabled, isSpeaking, isPaused };
}