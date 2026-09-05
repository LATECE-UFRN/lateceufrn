/**
 * i18n.js — Sistema de internacionalização
 * Carrega arquivos de tradução usando resolvePath, e não modifica a URL.
 */

// Estado
const state = {
  locale: 'pt',
  translations: {},
  fallbackLocale: 'pt',
};

const STORAGE_KEY = 'latece-locale';

/**
 * Inicializa o sistema i18n: carrega preferência e traduções
 */
export async function initI18n() {
  // Detecta idioma do localStorage ou navegador
  const storedLocale = localStorage.getItem(STORAGE_KEY);
  const browserLocale = detectBrowserLocale();

  state.locale = storedLocale || browserLocale || 'pt';
  
  // Carregar traduções
  await loadTranslations(state.locale);
  
  // Aplicar traduções ao DOM
  applyTranslations();
}

/**
 * Detecta idioma do navegador
 */
function detectBrowserLocale() {
  const langs = navigator.languages || [navigator.language];
  for (const lang of langs) {
    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('es')) return 'es'; // NOVO
  }
  return null;
}

/**
 * Carrega o arquivo de tradução para o idioma especificado usando resolvePath
 */
async function loadTranslations(locale) {
  try {
    const path = window.resolvePath(`locales/${locale}.json`);
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.translations = await response.json();
    console.log(`[i18n] Traduções carregadas para: ${locale}`);
  } catch (error) {
    console.error(`[i18n] Erro ao carregar traduções para ${locale}:`, error);
    // Fallback para português
    if (locale !== 'pt') {
      console.warn('[i18n] Usando fallback para português');
      await loadTranslations('pt');
      state.locale = 'pt';
    } else {
      state.translations = {};
    }
  }
}

/**
 * Retorna a tradução para a chave especificada
 * Suporta aninhamento com ponto (ex: 'nav.home')
 */
export function t(key, params = {}) {
  if (!key) return '';
  
  const keys = key.split('.');
  let value = state.translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`[i18n] Chave não encontrada: ${key}`);
      return key;
    }
  }
  
  if (typeof value !== 'string') {
    console.warn(`[i18n] Valor para a chave ${key} não é uma string:`, value);
    return key;
  }
  
  // Substituir parâmetros {name}
  if (params && Object.keys(params).length > 0) {
    return value.replace(/\{(\w+)\}/g, (match, paramName) => {
      return params[paramName] !== undefined ? params[paramName] : match;
    });
  }
  
  return value;
}

/**
 * Retorna o idioma atual
 */
export function getLocale() {
  return state.locale;
}

/**
 * Altera o idioma, recarrega traduções e atualiza o DOM sem modificar a URL.
 */
export async function setLocale(locale) {
  if (locale === state.locale) return;
  
  state.locale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  await loadTranslations(locale);
  applyTranslations();
  
  // Disparar evento para que componentes possam reagir
  document.dispatchEvent(new CustomEvent('localeChange', { detail: { locale } }));
}

/**
 * Aplica traduções ao DOM: elementos com data-i18n ou data-i18n-*
 */
function applyTranslations() {
  // Elementos com data-i18n (texto interno)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation !== key) {
      el.textContent = translation;
    }
  });
  
  // Elementos com data-i18n-placeholder (placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key);
    if (translation !== key && el.placeholder !== undefined) {
      el.placeholder = translation;
    }
  });
  
  // Elementos com data-i18n-aria-label (aria-label)
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const translation = t(key);
    if (translation !== key) {
      el.setAttribute('aria-label', translation);
    }
  });
  
  // Título da página
  const titleEl = document.querySelector('title');
  if (titleEl) {
    const titleKey = titleEl.getAttribute('data-i18n-title');
    if (titleKey) {
      const translation = t(titleKey);
      if (translation !== titleKey) {
        titleEl.textContent = translation;
      }
    }
  }
}

/**
 * Função auxiliar para traduzir um objeto de atributos
 * Útil para componentes que precisam de várias traduções
 */
export function translateObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string' && value.startsWith('i18n:')) {
      result[key] = t(value.substring(5));
    } else {
      result[key] = value;
    }
  }
  return result;
}
