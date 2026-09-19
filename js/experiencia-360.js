/**
 * experiencia-360.js — Lógica específica para a página da Experiência 360º
 * Gerencia scroll reveal, fullscreen e comportamento da landing page.
 * Agora localizado em /js/ (raiz do projeto)
 */

import { announceToScreenReader } from './accessibility.js';

// ============================================
// SCROLL REVEAL (complementar)
// ============================================

function initScrollReveal360() {
  const elements = document.querySelectorAll('.ambientes-grid .card, .hero-content');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
  elements.forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    observer.observe(el);
  });
}

// ============================================
// FULLSCREEN (para a página, se necessário)
// ============================================

function setupFullscreen() {
  // O botão de fullscreen do tour será gerenciado pelo Pano2VR.
  // Este é um fallback para a landing page, caso o usuário queira expandir a página.
  const btn = document.getElementById('fullscreen-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen não disponível:', err);
        announceToScreenReader('Não foi possível entrar em tela cheia.');
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const isFullscreen = !!document.fullscreenElement;
    btn.setAttribute('aria-label', isFullscreen ? 'Sair da tela cheia' : 'Entrar em tela cheia');
    btn.textContent = isFullscreen ? '⛶ Sair' : '⛶ Tela cheia';
  });
}

// ============================================
// DETECÇÃO DE SUPORTE E AVISOS
// ============================================

function checkWebXRSupport() {
  // Apenas log para desenvolvimento; o Pano2VR lida com WebXR nativamente.
  if ('xr' in navigator) {
    console.log('[Experiência 360] WebXR disponível. O Pano2VR pode usar recursos de VR.');
  } else {
    console.log('[Experiência 360] WebXR não detectado. O tour funcionará em 2D/360º.');
  }
}

// ============================================
// REDUÇÃO DE MOVIMENTO — Aviso acessível
// ============================================

function checkReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    const message = 'Redução de movimento ativada. As animações e transições do tour serão minimizadas.';
    console.log(`[Experiência 360] ${message}`);
    // Opcional: exibir um aviso discreto
  }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal360();
  setupFullscreen();
  checkWebXRSupport();
  checkReducedMotion();

  // Adiciona aria-label aos links do tour para melhor acessibilidade
  document.querySelectorAll('a[href*="./experiencia-360/tour/"]').forEach(link => {
    if (!link.getAttribute('aria-label')) {
      const text = link.textContent.trim() || 'Explorar ambiente em 360º';
      link.setAttribute('aria-label', text);
    }
  });

  console.log('[Experiência 360] Módulo carregado.');
});