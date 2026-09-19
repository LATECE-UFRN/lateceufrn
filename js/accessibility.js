/**
 * accessibility.js — Controles de acessibilidade
 * Gerenciamento de alto contraste, tamanho de fonte, espaçamento, movimento, temas
 * e Leitura Assistida (integrada com speech.js)
 */

// Importação dinâmica para evitar dependência circular
let speechModule = null;
const getSpeech = async () => {
  if (!speechModule) {
    try {
      speechModule = await import('./speech.js');
    } catch (e) {
      console.warn('[accessibility] Módulo speech.js não encontrado. Leitura Assistida indisponível.');
      speechModule = false;
    }
  }
  return speechModule;
};

// Estado
const state = {
  highContrast: false,
  fontSize: 16,
  reducedMotion: false,
  panelOpen: false,
  lineHeight: 1.6,
  letterSpacing: 0,
};

// Constantes
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 24;
const STORAGE_KEY_CONTRAST = 'latece-high-contrast';
const STORAGE_KEY_FONT = 'latece-font-size';
const STORAGE_KEY_MOTION = 'latece-reduced-motion';
const STORAGE_KEY_LINE_HEIGHT = 'latece-line-height';
const STORAGE_KEY_LETTER_SPACING = 'latece-letter-spacing';
const STORAGE_KEY_THEME = 'latece-theme';

/**
 * Inicializa a acessibilidade
 */
export function initAccessibility() {
  loadPreferences();
  createAccessibilityControls();
  setupKeyboardShortcuts();
  applyPreferences();
  detectSystemPreferences();
  loadTheme();

  // Listener para sincronizar com o módulo speech quando o estado mudar
  document.addEventListener('speech-state-changed', (e) => {
    const checkbox = document.getElementById('speech-toggle');
    if (checkbox) {
      checkbox.checked = e.detail.enabled;
    }
  });
}

/**
 * Carrega preferências do localStorage
 */
function loadPreferences() {
  const savedContrast = localStorage.getItem(STORAGE_KEY_CONTRAST);
  if (savedContrast === 'true') state.highContrast = true;

  const savedFont = localStorage.getItem(STORAGE_KEY_FONT);
  if (savedFont) {
    const parsed = parseInt(savedFont, 10);
    if (!isNaN(parsed) && parsed >= MIN_FONT_SIZE && parsed <= MAX_FONT_SIZE) {
      state.fontSize = parsed;
    }
  }

  const savedMotion = localStorage.getItem(STORAGE_KEY_MOTION);
  if (savedMotion === 'true') state.reducedMotion = true;

  const savedLineHeight = localStorage.getItem(STORAGE_KEY_LINE_HEIGHT);
  if (savedLineHeight) {
    const parsed = parseFloat(savedLineHeight);
    if (!isNaN(parsed) && parsed >= 1.0 && parsed <= 2.5) {
      state.lineHeight = parsed;
    }
  }

  const savedLetterSpacing = localStorage.getItem(STORAGE_KEY_LETTER_SPACING);
  if (savedLetterSpacing) {
    const parsed = parseFloat(savedLetterSpacing);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 3) {
      state.letterSpacing = parsed;
    }
  }
}

/**
 * Detecta preferências do sistema operacional
 */
function detectSystemPreferences() {
  if (localStorage.getItem(STORAGE_KEY_MOTION) !== null) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    state.reducedMotion = true;
    applyPreferences();
    savePreferences();
  }

  prefersReducedMotion.addEventListener('change', (e) => {
    if (localStorage.getItem(STORAGE_KEY_MOTION) === null) {
      state.reducedMotion = e.matches;
      applyPreferences();
      savePreferences();
      updatePanelUI();
    }
  });
}

/**
 * Aplica as preferências atuais ao DOM
 */
function applyPreferences() {
  // Alto contraste
  document.documentElement.classList.toggle('high-contrast', state.highContrast);

  // Tamanho da fonte
  document.documentElement.style.fontSize = `${state.fontSize}px`;

  // Redução de movimento
  if (state.reducedMotion) {
    document.documentElement.setAttribute('data-reduced-motion', 'true');
  } else {
    document.documentElement.removeAttribute('data-reduced-motion');
  }

  // Espaçamento
  document.body.style.setProperty('line-height', state.lineHeight, 'important');
  document.documentElement.style.letterSpacing = `${state.letterSpacing}px`;

  updatePanelUI();
}

/**
 * Salva as preferências no localStorage
 */
function savePreferences() {
  localStorage.setItem(STORAGE_KEY_CONTRAST, String(state.highContrast));
  localStorage.setItem(STORAGE_KEY_FONT, String(state.fontSize));
  localStorage.setItem(STORAGE_KEY_MOTION, String(state.reducedMotion));
  localStorage.setItem(STORAGE_KEY_LINE_HEIGHT, String(state.lineHeight));
  localStorage.setItem(STORAGE_KEY_LETTER_SPACING, String(state.letterSpacing));

  updateToggleBadge();
}

/**
 * Atualiza o badge do botão de acessibilidade
 */
function updateToggleBadge() {
  const btn = document.querySelector('.accessibility-toggle-btn');
  if (!btn) return;
  const hasPreference = state.highContrast || state.fontSize !== 16 || state.reducedMotion ||
                        state.lineHeight !== 1.6 || state.letterSpacing !== 0;
  btn.classList.toggle('has-preference', hasPreference);
}

/**
 * ============================================
 * SISTEMA DE TEMAS (data-theme)
 * ============================================
 */

/**
 * Aplica um tema ao documento.
 * @param {string} theme - 'default' | 'high-contrast' | 'dark' | 'low-vision'
 */
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY_THEME, theme);
  updatePanelUI();
}

/**
 * Retorna o tema atual.
 */
export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'default';
}

/**
 * Carrega o tema salvo no localStorage.
 */
function loadTheme() {
  const saved = localStorage.getItem(STORAGE_KEY_THEME);
  if (saved) {
    setTheme(saved);
  } else {
    setTheme('default');
  }
}

// ============================================
// CONTROLES DE ACESSIBILIDADE (ALTERNAR)
// ============================================

export function toggleHighContrast() {
  state.highContrast = !state.highContrast;
  applyPreferences();
  savePreferences();
  announceToScreenReader(
    state.highContrast ? 'Modo de alto contraste ativado' : 'Modo de alto contraste desativado'
  );
}

export function increaseFontSize() {
  if (state.fontSize < MAX_FONT_SIZE) {
    state.fontSize += 2;
    applyPreferences();
    savePreferences();
    announceToScreenReader(`Fonte aumentada para ${state.fontSize} pixels`);
  }
}

export function decreaseFontSize() {
  if (state.fontSize > MIN_FONT_SIZE) {
    state.fontSize -= 2;
    applyPreferences();
    savePreferences();
    announceToScreenReader(`Fonte diminuída para ${state.fontSize} pixels`);
  }
}

export function resetFontSize() {
  state.fontSize = 16;
  applyPreferences();
  savePreferences();
  announceToScreenReader('Tamanho da fonte resetado para o padrão');
}

export function toggleReducedMotion() {
  state.reducedMotion = !state.reducedMotion;
  applyPreferences();
  savePreferences();
  announceToScreenReader(
    state.reducedMotion ? 'Modo de movimento reduzido ativado' : 'Modo de movimento reduzido desativado'
  );
}

export function getFontSize() { return state.fontSize; }
export function isHighContrast() { return state.highContrast; }
export function hasReducedMotion() { return state.reducedMotion; }

/**
 * Configura atalhos de teclado
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === 'c') {
      event.preventDefault();
      toggleHighContrast();
    }
    if (event.altKey && (event.key === '+' || (event.key === '=' && event.shiftKey))) {
      event.preventDefault();
      increaseFontSize();
    }
    if (event.altKey && event.key === '-') {
      event.preventDefault();
      decreaseFontSize();
    }
    if (event.altKey && event.key === '0') {
      event.preventDefault();
      resetFontSize();
    }
    if (event.altKey && event.key === 'm') {
      event.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => main.removeAttribute('tabindex'), 100);
      }
    }
  });
}

/**
 * Cria o painel de controles de acessibilidade no DOM
 */
function createAccessibilityControls() {
  if (document.querySelector('.accessibility-controls')) return;

  const container = document.createElement('div');
  container.className = 'accessibility-controls';
  container.setAttribute('aria-label', 'Controles de acessibilidade');

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'accessibility-toggle-btn';
  toggleBtn.setAttribute('aria-label', 'Abrir controles de acessibilidade');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.innerHTML = `♿<span class="badge"></span>`;
  toggleBtn.addEventListener('click', togglePanel);

  const panel = document.createElement('div');
  panel.className = 'accessibility-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Controles de acessibilidade');
  panel.setAttribute('aria-modal', 'true');

  panel.innerHTML = `
    <div class="accessibility-panel-header">
      <h3>♿ Acessibilidade</h3>
      <button class="accessibility-panel-close" aria-label="Fechar painel">✕</button>
    </div>

    <!-- Tema -->
    <div class="accessibility-control-group">
      <label for="theme-select">Tema</label>
      <select id="theme-select" class="form-control" style="margin-top: var(--space-1); width: 100%;">
        <option value="default">Padrão</option>
        <option value="dark">Escuro</option>
        <option value="low-vision">Baixa Visão</option>
      </select>
    </div>

    <!-- Alto contraste (toggle) -->
    <div class="accessibility-control-group">
      <label class="accessibility-toggle-switch">
        <input type="checkbox" id="high-contrast-toggle" ${state.highContrast ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <div>
        <label for="high-contrast-toggle">Alto contraste</label>
        <p class="control-description">Aumenta o contraste das cores para melhor legibilidade</p>
      </div>
    </div>

    <!-- Reduzir movimento -->
    <div class="accessibility-control-group">
      <label class="accessibility-toggle-switch">
        <input type="checkbox" id="reduced-motion-toggle" ${state.reducedMotion ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
      <div>
        <label for="reduced-motion-toggle">Reduzir movimento</label>
        <p class="control-description">Desativa animações e transições</p>
      </div>
    </div>

    <!-- Tamanho da fonte -->
    <div class="accessibility-control-group">
      <label>Tamanho do texto</label>
      <div class="font-size-controls">
        <button id="font-decrease" ${state.fontSize <= MIN_FONT_SIZE ? 'disabled' : ''}>A-</button>
        <span class="font-size-display" id="font-size-display">${state.fontSize}px</span>
        <button id="font-increase" ${state.fontSize >= MAX_FONT_SIZE ? 'disabled' : ''}>A+</button>
        <button class="reset-btn" id="font-reset">Reset</button>
      </div>
    </div>

    <!-- Espaçamento entre linhas -->
    <div class="accessibility-control-group">
      <label for="line-height-range">Espaçamento entre linhas</label>
      <input type="range" id="line-height-range" min="1.0" max="2.5" step="0.1" value="${state.lineHeight}">
      <span id="line-height-value" class="range-value">${state.lineHeight.toFixed(1)}</span>
    </div>

    <!-- Espaçamento entre letras -->
    <div class="accessibility-control-group">
      <label for="letter-spacing-range">Espaçamento entre letras</label>
      <input type="range" id="letter-spacing-range" min="0" max="3" step="0.5" value="${state.letterSpacing}">
      <span id="letter-spacing-value" class="range-value">${state.letterSpacing}px</span>
    </div>

    <!-- NOVO: Leitura Assistida -->
    <div class="accessibility-control-group">
      <label class="accessibility-toggle-switch">
        <input type="checkbox" id="speech-toggle">
        <span class="slider"></span>
      </label>
      <div>
        <label for="speech-toggle">Leitura assistida por voz</label>
        <p class="control-description">Ativa os controles de leitura de conteúdo por voz</p>
      </div>
    </div>

    <div class="accessibility-shortcuts">
      <strong>Atalhos:</strong><br>
      <kbd>Alt+C</kbd> Contraste &middot;
      <kbd>Alt++</kbd> Aumentar fonte &middot;
      <kbd>Alt+-</kbd> Diminuir fonte &middot;
      <kbd>Alt+0</kbd> Resetar fonte
    </div>
  `;

  container.appendChild(toggleBtn);
  container.appendChild(panel);
  document.body.appendChild(container);

  // ============================================
  // EVENTOS DO PAINEL
  // ============================================

  const closeBtn = panel.querySelector('.accessibility-panel-close');
  closeBtn.addEventListener('click', () => {
    if (panel.classList.contains('open')) togglePanel();
  });

  // Tema
  const themeSelect = panel.querySelector('#theme-select');
  if (themeSelect) {
    themeSelect.value = getTheme();
    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });
  }

  // Alto contraste
  const contrastCheckbox = panel.querySelector('#high-contrast-toggle');
  contrastCheckbox.addEventListener('change', (e) => {
    if (e.target.checked !== state.highContrast) toggleHighContrast();
  });

  // Reduzir movimento
  const motionCheckbox = panel.querySelector('#reduced-motion-toggle');
  motionCheckbox.addEventListener('change', (e) => {
    if (e.target.checked !== state.reducedMotion) toggleReducedMotion();
  });

  // Controles de fonte
  const decreaseBtn = panel.querySelector('#font-decrease');
  decreaseBtn.addEventListener('click', () => {
    decreaseFontSize();
    updatePanelUI();
  });

  const increaseBtn = panel.querySelector('#font-increase');
  increaseBtn.addEventListener('click', () => {
    increaseFontSize();
    updatePanelUI();
  });

  const resetBtn = panel.querySelector('#font-reset');
  resetBtn.addEventListener('click', () => {
    resetFontSize();
    updatePanelUI();
  });

  // Espaçamento entre linhas
  const lineHeightRange = panel.querySelector('#line-height-range');
  const lineHeightValue = panel.querySelector('#line-height-value');
  if (lineHeightRange) {
    lineHeightRange.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.lineHeight = val;
      lineHeightValue.textContent = val.toFixed(1);
      applyPreferences();
      savePreferences();
    });
  }

  // Espaçamento entre letras
  const letterSpacingRange = panel.querySelector('#letter-spacing-range');
  const letterSpacingValue = panel.querySelector('#letter-spacing-value');
  if (letterSpacingRange) {
    letterSpacingRange.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.letterSpacing = val;
      letterSpacingValue.textContent = `${val}px`;
      applyPreferences();
      savePreferences();
    });
  }

  // ============================================
  // NOVO: LEITURA ASSISTIDA
  // ============================================
  const speechCheckbox = panel.querySelector('#speech-toggle');
  if (speechCheckbox) {
    // Carregar estado inicial do módulo speech
    (async () => {
      const speech = await getSpeech();
      if (speech && speech.isSpeechEnabled) {
        speechCheckbox.checked = speech.isSpeechEnabled();
      } else {
        speechCheckbox.checked = false;
      }
    })();

    // Evento de mudança
    speechCheckbox.addEventListener('change', async (e) => {
      const checked = e.target.checked;
      const speech = await getSpeech();
      if (speech && speech.toggleSpeech) {
        const currentState = speech.isSpeechEnabled ? speech.isSpeechEnabled() : false;
        if (checked !== currentState) {
          speech.toggleSpeech();
        }
      } else {
        // Fallback: apenas armazenar no localStorage se o módulo não estiver disponível
        localStorage.setItem('latece-speech-enabled', String(checked));
        // Disparar evento para outros listeners
        document.dispatchEvent(new CustomEvent('speech-toggle', {
          detail: { enabled: checked }
        }));
      }
    });
  }

  updateToggleBadge();

  // Fechar painel com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      togglePanel();
    }
  });

  // Fechar painel ao clicar fora
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') && !e.target.closest('.accessibility-controls')) {
      togglePanel();
    }
  });

  // Referências para updatePanelUI
  window.__accessibility = {
    panel,
    toggleBtn,
    contrastCheckbox,
    motionCheckbox,
    decreaseBtn,
    increaseBtn,
    resetBtn,
    fontSizeDisplay: panel.querySelector('#font-size-display'),
    themeSelect,
    lineHeightRange,
    lineHeightValue,
    letterSpacingRange,
    letterSpacingValue,
    speechCheckbox, // NOVO
  };
}

/**
 * Alterna a visibilidade do painel
 */
function togglePanel() {
  const panel = document.querySelector('.accessibility-panel');
  const btn = document.querySelector('.accessibility-toggle-btn');
  if (!panel || !btn) return;

  const isOpen = panel.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Fechar controles de acessibilidade' : 'Abrir controles de acessibilidade');

  if (isOpen) {
    setTimeout(() => {
      const firstFocusable = panel.querySelector('input, button, select');
      if (firstFocusable) firstFocusable.focus();
    }, 100);
  }
}

/**
 * Atualiza a UI do painel
 */
function updatePanelUI() {
  const refs = window.__accessibility;
  if (!refs) return;

  refs.contrastCheckbox.checked = state.highContrast;
  refs.motionCheckbox.checked = state.reducedMotion;
  refs.fontSizeDisplay.textContent = `${state.fontSize}px`;
  refs.decreaseBtn.disabled = state.fontSize <= MIN_FONT_SIZE;
  refs.increaseBtn.disabled = state.fontSize >= MAX_FONT_SIZE;

  if (refs.themeSelect) {
    refs.themeSelect.value = getTheme();
  }

  if (refs.lineHeightRange) {
    refs.lineHeightRange.value = state.lineHeight;
    if (refs.lineHeightValue) refs.lineHeightValue.textContent = state.lineHeight.toFixed(1);
  }

  if (refs.letterSpacingRange) {
    refs.letterSpacingRange.value = state.letterSpacing;
    if (refs.letterSpacingValue) refs.letterSpacingValue.textContent = `${state.letterSpacing}px`;
  }

  // NOVO: Atualizar estado do checkbox de leitura assistida
  if (refs.speechCheckbox) {
    (async () => {
      const speech = await getSpeech();
      if (speech && speech.isSpeechEnabled) {
        refs.speechCheckbox.checked = speech.isSpeechEnabled();
      }
    })();
  }

  updateToggleBadge();
}

/**
 * Anuncia uma mensagem para leitores de tela
 */
export function announceToScreenReader(message) {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;

  document.body.appendChild(announcer);
  setTimeout(() => {
    if (announcer.parentNode) announcer.parentNode.removeChild(announcer);
  }, 3000);
}

/**
 * Fecha o painel
 */
export function closeAccessibilityPanel() {
  const panel = document.querySelector('.accessibility-panel');
  const btn = document.querySelector('.accessibility-toggle-btn');
  if (panel && panel.classList.contains('open')) {
    panel.classList.remove('open');
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir controles de acessibilidade');
    }
  }
}