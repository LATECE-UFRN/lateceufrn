/**
 * security.js — Utilitários centralizados de segurança
 * Fase 1 (P0): escapeHtml, sanitizeHtml, safeUrl
 *
 * Regras:
 *  - escapeHtml: para texto simples que será interpolado em template HTML.
 *  - sanitizeHtml: para conteúdo HTML legítimo (ex.: news.content).
 *  - safeUrl: para URLs em atributos href/src.
 */

// ============================================================
// 1. ESCAPE DE TEXTO
// ============================================================

const HTML_ESCAPE_MAP = Object.freeze({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
});

/**
 * Escapa caracteres especiais de HTML em texto simples.
 * Use APENAS para texto (títulos, nomes, descrições, autores, etc.).
 * NÃO use em conteúdo HTML legítimo (use sanitizeHtml).
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, ch => HTML_ESCAPE_MAP[ch]);
}

// ============================================================
// 2. SANITIZAÇÃO DE HTML
// ============================================================

let domPurifyPromise = null;

// ============================================================
// DOMPurify — carregamento sob demanda via CDN
// ------------------------------------------------------------
// PENDÊNCIA (Fase 2 → Fase 4): adicionar Subresource Integrity.
// A URL utiliza jsDelivr; o hash SHA-384 deve ser obtido em:
//   https://www.jsdelivr.com/package/npm/dompurify
// Formato esperado:
//   integrity="sha384-..."
//   crossorigin="anonymous"
// Enquanto o SRI não estiver definido, o carregamento depende
// de SRI implícito do jsDelivr + HTTPS.
// ============================================================
const DOMPURIFY_URL = 'https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js';

const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's',
  'a', 'ul', 'ol', 'li',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'blockquote', 'code', 'pre', 'hr',
  'img', 'figure', 'figcaption',
  'span', 'div'
];

const ALLOWED_ATTR = [
  'href', 'src', 'alt', 'title', 'target', 'rel', 'class', 'id'
];

const FORBIDDEN_TAGS = [
  'script', 'style', 'iframe', 'object', 'embed',
  'form', 'input', 'button', 'textarea', 'select',
  'link', 'meta', 'base', 'svg', 'math', 'noscript', 'template'
];

const FORBIDDEN_ATTR = [
  'onerror', 'onload', 'onclick', 'onmouseover', 'onmouseout',
  'onfocus', 'onblur', 'onchange', 'onsubmit', 'oninput',
  'onkeydown', 'onkeyup', 'onkeypress', 'onmousedown', 'onmouseup',
  'style', 'formaction', 'xlink:href', 'srcdoc'
];

function loadDOMPurify() {
  if (domPurifyPromise) return domPurifyPromise;
  domPurifyPromise = new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.DOMPurify) {
      resolve(window.DOMPurify);
      return;
    }
    const script = document.createElement('script');
    script.src = DOMPURIFY_URL;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      if (window.DOMPurify) resolve(window.DOMPurify);
      else reject(new Error('DOMPurify não carregou'));
    };
    script.onerror = () => reject(new Error('Falha ao carregar DOMPurify'));
    document.head.appendChild(script);
  });
  return domPurifyPromise;
}

/**
 * Sanitiza HTML legítimo, preservando formatação e removendo vetores de ataque.
 * @param {string} html
 * @returns {Promise<string>}
 */
export async function sanitizeHtml(html) {
  if (!html) return '';
  const raw = String(html);
  try {
    const purifier = await loadDOMPurify();
    return purifier.sanitize(raw, {
      ALLOWED_TAGS,
      ALLOWED_ATTR,
      ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
      FORBID_TAGS,
      FORBID_ATTR,
      KEEP_CONTENT: true,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false
    });
  } catch (e) {
    console.warn('[security] DOMPurify indisponível. Fallback restritivo aplicado.');
    return sanitizeHtmlFallback(raw);
  }
}

/**
 * Fallback síncrono usando DOMParser.
 * Não é tão robusto quanto DOMPurify, mas cobre os vetores comuns.
 */
function sanitizeHtmlFallback(html) {
  try {
    const doc = new DOMParser().parseFromString(String(html), 'text/html');

    FORBIDDEN_TAGS.forEach(tag => {
      doc.querySelectorAll(tag).forEach(el => el.remove());
    });

    doc.querySelectorAll('*').forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        const name = attr.name.toLowerCase();
        const value = String(attr.value).trim();

        if (name.startsWith('on') || FORBIDDEN_ATTR.includes(name)) {
          el.removeAttribute(attr.name);
          return;
        }

        if (name === 'href' || name === 'src' || name === 'action') {
          const lower = value.replace(/[\s\u0000-\u001F]/g, '').toLowerCase();
          if (lower.startsWith('javascript:') ||
              lower.startsWith('vbscript:') ||
              (lower.startsWith('data:') && !(name === 'src' && lower.startsWith('data:image/')))) {
            el.removeAttribute(attr.name);
          }
        }
      });
    });

    return doc.body.innerHTML;
  } catch (e) {
    console.error('[security] Fallback de sanitização falhou. Removendo todo HTML.');
    return escapeHtml(html);
  }
}

// ============================================================
// 3. VALIDAÇÃO DE URL
// ============================================================

/**
 * Valida URLs para uso em atributos href/src.
 * Rejeita esquemas perigosos (javascript:, vbscript:, data: quando não for imagem).
 * @param {string} url
 * @param {{allowDataImage?: boolean}} options
 * @returns {string} URL segura ou string vazia
 */
export function safeUrl(url, options = {}) {
  if (!url) return '';
  const { allowDataImage = false } = options;
  const str = String(url).trim().replace(/[\s\u0000-\u001F]/g, '');

  if (!str) return '';

  // Relativas e âncoras
  if (/^[#]/.test(str)) return str;
  if (/^(\.{0,2}\/)/.test(str)) return str;
  if (/^\/[^/]/.test(str)) return str;

  // Esquemas permitidos
  if (/^(https?:|mailto:|tel:)/i.test(str)) return str;

  // data: apenas para imagens, quando permitido
  if (allowDataImage && /^data:image\//i.test(str)) return str;

  // Outros esquemas: rejeitar
  if (/^[a-z][a-z0-9+.-]*:/i.test(str)) return '';

  // Sem esquema → relativa
  return str;
}