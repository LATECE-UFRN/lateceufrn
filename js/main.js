/**
 * main.js — Ponto de entrada do site público
 * Versão com correções de contadores e integração com Leitura Assistida
 */

import { createHeader, createFooter, createNewsCard, createCarousel, createTeamCard, createEquipmentCard, createEquipmentModal, createPublicationItem, createPublicationModal, createNewsDetail, createPagination } from './components.js';
import { initAccessibility, closeAccessibilityPanel } from './accessibility.js';
import { initI18n, t, getLocale, setLocale } from './i18n.js';
import { loadTeamData, loadEquipmentData, loadPublicationsData, loadNewsFallback, paginateData } from './data.js';
import { fetchNews, fetchNewsById, formatDate, getAvailableCategories } from './news.js';
import { initSpeech } from './speech.js'; // NOVO: importação do módulo de leitura assistida

// ============================================
// ESTADO GLOBAL
// ============================================
let isMobileMenuOpen = false;
let currentPage = '';

const paginationState = {
  news: { page: 1, filters: { search: '', category: '' }, totalPages: 1 },
  equipment: { page: 1, filters: { search: '', category: '' }, totalPages: 1 },
  publications: { page: 1, filters: { search: '', type: '', year: '' }, totalPages: 1 }
};

let allEquipment = [];
let allPublications = [];

// ============================================
// UTILITÁRIOS
// ============================================

function getPageFromPath() {
  const path = window.location.pathname;
  let cleanPath = path.replace(/^\/lateceufrn\//, '/');
  if (path === '/lateceufrn' || path === '/lateceufrn/') {
    cleanPath = '/';
  }
  if (cleanPath === '/' || cleanPath === '/index.html') return 'home';
  if (cleanPath.includes('/team')) return 'team';
  if (cleanPath.includes('/equipment')) return 'equipment';
  if (cleanPath.includes('/publications')) return 'publications';
  if (cleanPath.includes('/news-detail')) return 'news-detail';
  if (cleanPath.includes('/news')) return 'news';
  if (cleanPath.includes('/about')) return 'about';
  if (cleanPath.includes('/termos')) return 'terms';
  if (cleanPath.includes('/politica')) return 'privacy';
  if (cleanPath.includes('/creditos')) return 'credits';
  return 'unknown';
}

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function updateListURL(listType, page) {
  const state = paginationState[listType];
  if (!state) return;
  const params = new URLSearchParams();
  params.set('page', page);
  if (listType === 'news') {
    if (state.filters.search) params.set('search', state.filters.search);
    if (state.filters.category) params.set('category', state.filters.category);
  } else if (listType === 'equipment') {
    if (state.filters.search) params.set('search', state.filters.search);
    if (state.filters.category) params.set('category', state.filters.category);
  } else if (listType === 'publications') {
    if (state.filters.search) params.set('search', state.filters.search);
    if (state.filters.type) params.set('type', state.filters.type);
    if (state.filters.year) params.set('year', state.filters.year);
  }
  const basePath = window.resolvePath(`${listType}.html`);
  const queryString = params.toString() ? '?' + params.toString() : '';
  const newUrl = basePath + queryString;
  window.history.pushState({ page, listType, filters: state.filters }, '', newUrl);
}

// ============================================
// INDICADOR DE PÁGINA ATIVA
// ============================================

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const base = window.BASE_PATH || '';
  let pathWithoutBase = currentPath;
  if (base && currentPath.startsWith(base)) {
    pathWithoutBase = currentPath.substring(base.length) || '/';
  }
  const normalize = (p) => {
    let clean = p.replace(/^\/+/, '').replace(/\/+$/, '');
    if (!clean) return 'index.html';
    if (clean.endsWith('/')) clean += 'index.html';
    const parts = clean.split('/');
    return parts[parts.length - 1] || 'index.html';
  };
  const currentFile = normalize(pathWithoutBase);

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    let hrefFile = href;
    hrefFile = hrefFile.split('?')[0].split('#')[0];
    if (hrefFile === './' || hrefFile === '') hrefFile = 'index.html';
    if (!hrefFile.includes('.') && hrefFile !== 'index.html') hrefFile += '.html';
    const hrefParts = hrefFile.split('/');
    const hrefFileOnly = hrefParts[hrefParts.length - 1] || 'index.html';
    if (hrefFileOnly === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================
// HEADER SCROLL STATE
// ============================================

function syncHeaderScrollState() {
  const mainHeader = document.querySelector('.main-header');
  const topBar = document.querySelector('.top-bar');
  const shouldBeScrolled = window.scrollY > 8;
  const shouldHideTopBar = window.scrollY > 10;

  if (mainHeader) {
    mainHeader.classList.toggle('scrolled', shouldBeScrolled);
    const menuHeight = mainHeader.offsetHeight;
    document.documentElement.style.setProperty('--menu-height', menuHeight + 'px');
  }

  if (topBar) {
    const isVisible = window.getComputedStyle(topBar).display !== 'none';
    const topBarHeight = isVisible ? topBar.offsetHeight : 0;
    document.documentElement.style.setProperty('--topbar-height', topBarHeight + 'px');
    if (isVisible) {
      topBar.classList.toggle('hidden', shouldHideTopBar);
    }
  }
}

let headerScrollTicking = false;
function handleHeaderScroll() {
  if (headerScrollTicking) return;
  headerScrollTicking = true;
  window.requestAnimationFrame(() => {
    syncHeaderScrollState();
    headerScrollTicking = false;
  });
}

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================

function createBackToTop() {
  if (document.querySelector('.back-to-top')) return;
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Voltar ao topo');
  button.setAttribute('title', 'Voltar ao topo');
  button.innerHTML = `<span class="arrow">↑</span>`;
  document.body.appendChild(button);

  let isVisible = false;
  function toggleVisibility() {
    const scrollY = window.scrollY || window.pageYOffset;
    const shouldShow = scrollY > 300;
    if (shouldShow !== isVisible) {
      isVisible = shouldShow;
      button.classList.toggle('visible', shouldShow);
    }
  }
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
      setTimeout(() => main.removeAttribute('tabindex'), 100);
    }
  });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });
  toggleVisibility();
  window.addEventListener('load', toggleVisibility);
}

// ============================================
// CONTADORES DINÂMICOS (CORRIGIDOS)
// ============================================

// Mapa para armazenar observers de contadores (evita duplicação)
const counterObservers = new WeakMap();

function animateCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function startCounter(element, target, isPlus) {
    let current = 0;
    const duration = 1500;
    const startTime = performance.now();
    function updateCounter(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);
      element.textContent = isPlus ? `+${current}` : current;
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = isPlus ? `+${target}` : String(target);
      }
    }
    requestAnimationFrame(updateCounter);
  }

  counters.forEach(counter => {
    if (counterObservers.has(counter)) return;

    const targetText = counter.getAttribute('data-target');
    const isPlus = targetText.startsWith('+');
    const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''), 10);
    if (isNaN(targetNumber)) return;
    if (prefersReducedMotion) {
      counter.textContent = targetText;
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(counter, targetNumber, isPlus);
          observer.unobserve(counter);
          counterObservers.delete(counter);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(counter);
    counterObservers.set(counter, observer);
  });
}

/**
 * Atualiza um contador específico e inicia a animação.
 * @param {string} elementId - ID do elemento span
 * @param {number} value - Valor final
 * @param {boolean} isPlus - Se deve exibir '+' antes do número
 */
function updateCounterElement(elementId, value, isPlus = false) {
  const el = document.getElementById(elementId);
  if (!el) return;
  // Se o elemento já tinha um observer, removê-lo para reiniciar
  if (counterObservers.has(el)) {
    const observer = counterObservers.get(el);
    observer.disconnect();
    counterObservers.delete(el);
  }
  const displayValue = isPlus ? `+${value}` : String(value);
  el.setAttribute('data-target', displayValue);
  el.textContent = '0';
  // Chamar animateCounters para configurar observer (se necessário)
  animateCounters();
}

// ============================================
// SCROLL REVEAL
// ============================================

function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.section-title, .hero-content, .hero-visual, ' +
    '.news-card, .team-card, .equipment-card, .publication-item, ' +
    '.quick-card, .mission-content, .about-intro-content, .card'
  );
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
// EXPANSÃO DE CARDS DA EQUIPE
// ============================================

function toggleTeamCard(card) {
  const isExpanded = card.classList.toggle('expanded');
  const btn = card.querySelector('.team-expand-btn');
  if (btn) {
    btn.setAttribute('aria-expanded', String(isExpanded));
    const icon = btn.querySelector('.icon');
    const textSpan = btn.querySelector('.btn-text');
    if (icon) icon.textContent = isExpanded ? '▲' : '▼';
    if (textSpan) textSpan.textContent = isExpanded ? ' Recolher' : ' Explorar';
  }
  if (isExpanded) {
    const details = card.querySelector('.team-details');
    if (details) {
      const firstFocusable = details.querySelector('a, button');
      if (firstFocusable) setTimeout(() => firstFocusable.focus(), 200);
    }
  } else {
    const btn = card.querySelector('.team-expand-btn');
    if (btn) setTimeout(() => btn.focus(), 200);
  }
}

function setupTeamExpansion() {
  const cards = document.querySelectorAll('.team-card');
  cards.forEach((card) => {
    const btn = card.querySelector('.team-expand-btn');
    if (!btn) return;
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    const freshBtn = card.querySelector('.team-expand-btn');
    freshBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleTeamCard(card);
    });
    card.addEventListener('click', function(e) {
      if (e.target.closest('a') || e.target.closest('.team-expand-btn')) return;
      toggleTeamCard(card);
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTeamCard(card);
      }
    });
    freshBtn.setAttribute('aria-expanded', 'false');
  });
}

// ============================================
// MENU MOBILE
// ============================================

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  const menu = document.querySelector('.mobile-menu');
  const button = document.querySelector('.mobile-menu-button');
  const overlay = document.querySelector('.mobile-overlay');

  if (menu) {
    menu.classList.toggle('is-open', isMobileMenuOpen);
  }
  if (button) {
    button.classList.toggle('active', isMobileMenuOpen);
    button.setAttribute('aria-expanded', String(isMobileMenuOpen));
  }
  if (overlay) {
    overlay.classList.toggle('is-open', isMobileMenuOpen);
  }

  document.body.classList.toggle('menu-open', isMobileMenuOpen);
  document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  if (isMobileMenuOpen) {
    toggleMobileMenu();
  }
}

// ============================================
// PÁGINA: HOME (CARROSSEL)
// ============================================

async function loadHomePage() {
  const container = document.getElementById('news-container');
  if (!container) {
    console.warn('[Home] #news-container não encontrado.');
    return;
  }
  try {
    const result = await fetchNews(1, {});
    const news = result.news || [];
    if (news && news.length > 0) {
      container.innerHTML = createCarousel(news);
    } else {
      container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Nenhuma notícia disponível no momento.</p>`;
    }
  } catch (error) {
    console.error('[Home] Erro ao carregar notícias:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar notícias.</p>`;
  }
}

// ============================================
// PÁGINA: EQUIPE
// ============================================

async function loadTeamPage() {
  const container = document.getElementById('team-container');
  if (!container) {
    console.warn('[Team] #team-container não encontrado.');
    return;
  }
  try {
    const members = await loadTeamData();
    // Atualiza contador
    updateCounterElement('team-count', members.length);

    if (members && members.length > 0) {
      const sorted = [...members].sort((a, b) => (a.order || 999) - (b.order || 999));

      const groups = {
        coordinator: [],
        technician: [],
        student: [],
        partner: [],
        collaborator: [],
        developer: []
      };

      sorted.forEach(m => {
        const role = m.role || 'collaborator';
        if (groups[role]) groups[role].push(m);
        else groups.collaborator.push(m);
      });

      const locale = getLocale();
      let html = '';

      // Coordenação
      if (groups.coordinator.length > 0) {
        html += `<h2 class="section-title" data-i18n="team.coordinators">Coordenação</h2>`;
        html += `<div class="members-grid centered-grid">${groups.coordinator.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      // Equipe Técnica e de Pesquisa
      if (groups.technician.length > 0) {
        html += `<h2 class="section-title">Equipe Técnica e de Pesquisa</h2>`;
        html += `<div class="members-grid centered-grid">${groups.technician.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      // Bolsistas
      if (groups.student.length > 0) {
        html += `<h2 class="section-title">Bolsistas</h2>`;
        html += `<div class="members-grid centered-grid">${groups.student.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      // Pesquisadores Parceiros
      if (groups.partner.length > 0) {
        html += `<h2 class="section-title">Pesquisadores Parceiros</h2>`;
        html += `<p style="text-align:center;color:var(--text-secondary);margin-bottom:var(--space-4);">Pesquisadores que mantêm parcerias acadêmicas e científicas com o LATECE.</p>`;
        html += `<div class="members-grid centered-grid">${groups.partner.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      // Colaboradores
      if (groups.collaborator.length > 0) {
        html += `<h2 class="section-title">Colaboradores</h2>`;
        html += `<p style="text-align:center;color:var(--text-secondary);margin-bottom:var(--space-4);">Docentes e pesquisadores que colaboram com atividades de ensino, pesquisa, extensão e formação desenvolvidas pelo LATECE.</p>`;
        html += `<div class="members-grid centered-grid">${groups.collaborator.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      // Desenvolvedores
      if (groups.developer.length > 0) {
        html += `<h2 class="section-title">Desenvolvedores</h2>`;
        html += `<p style="text-align:center;color:var(--text-secondary);margin-bottom:var(--space-4);">Profissionais e pesquisadores que contribuem para o desenvolvimento de sistemas, recursos e soluções tecnológicas vinculadas aos projetos do LATECE.</p>`;
        html += `<div class="members-grid centered-grid">${groups.developer.map(m => createTeamCard(m, locale)).join('')}</div>`;
      }

      container.innerHTML = html;

    } else {
      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size:5rem;margin-bottom:1rem;">👥</div>
          <h3 data-i18n="team.noMembersTitle">Nenhum membro cadastrado</h3>
          <p data-i18n="team.noMembersSubtitle">A equipe será atualizada em breve</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('[Team] Erro:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar a equipe.</p>`;
  }
}

// ============================================
// PÁGINA: EQUIPAMENTOS
// ============================================

async function loadEquipmentPage() {
  const container = document.getElementById('equipment-container');
  const paginationContainer = document.getElementById('equipment-pagination');
  if (!container) {
    console.warn('[Equipment] #equipment-container não encontrado.');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page')) || 1;
  const search = params.get('search') || '';
  const category = params.get('category') || '';

  paginationState.equipment.page = page;
  paginationState.equipment.filters = { search, category };

  const searchInput = document.getElementById('equipment-search');
  const categoryFilter = document.getElementById('equipment-category-filter');
  if (searchInput) searchInput.value = search;
  if (categoryFilter) categoryFilter.value = category;

  try {
    if (allEquipment.length === 0) {
      allEquipment = await loadEquipmentData();
    }
    // Atualiza contador com total de equipamentos
    updateCounterElement('equipment-count', allEquipment.length);

    let filtered = allEquipment;
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }
    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    const perPage = 10;
    const { items, pagination } = paginateData(filtered, page, perPage);
    paginationState.equipment.totalPages = pagination.pages;

    if (items.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'grid-container';
      grid.innerHTML = items.map(item => createEquipmentCard(item)).join('');

      grid.querySelectorAll('.equipment-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = parseInt(card.dataset.id);
          const item = allEquipment.find(e => e.id === id);
          if (item) openEquipmentModal(item);
        });
      });

      container.innerHTML = '';
      container.appendChild(grid);
    } else {
      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size:5rem;margin-bottom:1rem;">🔍</div>
          <h3 data-i18n="equipment.noResults">Nenhum equipamento encontrado</h3>
          <p data-i18n="equipment.noResultsSubtitle">Tente ajustar os filtros de busca</p>
        </div>
      `;
    }

    if (paginationContainer) {
      if (pagination.pages > 1) {
        paginationContainer.innerHTML = createPagination(pagination.page, pagination.pages);
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const targetPage = parseInt(btn.dataset.page);
            if (targetPage && targetPage !== paginationState.equipment.page && targetPage >= 1 && targetPage <= paginationState.equipment.totalPages) {
              paginationState.equipment.page = targetPage;
              updateListURL('equipment', targetPage);
              loadEquipmentPage();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        });
      } else {
        paginationContainer.innerHTML = '';
      }
    }

    setupEquipmentFilters();

  } catch (error) {
    console.error('[Equipment] Erro:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar equipamentos.</p>`;
  }
}

function setupEquipmentFilters() {
  const searchInput = document.getElementById('equipment-search');
  const categoryFilter = document.getElementById('equipment-category-filter');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      const search = searchInput.value.trim();
      paginationState.equipment.filters.search = search;
      paginationState.equipment.page = 1;
      updateListURL('equipment', 1);
      loadEquipmentPage();
    }, 500));
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
      const category = categoryFilter.value;
      paginationState.equipment.filters.category = category;
      paginationState.equipment.page = 1;
      updateListURL('equipment', 1);
      loadEquipmentPage();
    });
  }

  const clearBtn = document.getElementById('equipment-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      if (categoryFilter) categoryFilter.value = '';
      paginationState.equipment.filters = { search: '', category: '' };
      paginationState.equipment.page = 1;
      updateListURL('equipment', 1);
      loadEquipmentPage();
    });
  }
}

function openEquipmentModal(item) {
  const container = document.getElementById('modal-container');
  if (!container) return;
  container.innerHTML = createEquipmentModal(item);
  const modal = container.querySelector('.modal');
  const closeBtn = modal.querySelector('.close-button');
  modal.addEventListener('click', (e) => { if (e.target === modal) closeEquipmentModal(); });
  closeBtn.addEventListener('click', closeEquipmentModal);
  const escHandler = (e) => {
    if (e.key === 'Escape') { closeEquipmentModal(); document.removeEventListener('keydown', escHandler); }
  };
  document.addEventListener('keydown', escHandler);
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length > 0) setTimeout(() => focusable[0].focus(), 100);
  document.body.style.overflow = 'hidden';
}

function closeEquipmentModal() {
  const container = document.getElementById('modal-container');
  if (container) container.innerHTML = '';
  document.body.style.overflow = '';
}

// ============================================
// PÁGINA: PUBLICAÇÕES
// ============================================

async function loadPublicationsPage() {
  const container = document.getElementById('publications-container');
  const paginationContainer = document.getElementById('publications-pagination');
  if (!container) {
    console.warn('[Publications] #publications-container não encontrado.');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page')) || 1;
  const search = params.get('search') || '';
  const type = params.get('type') || '';
  const year = params.get('year') || '';

  paginationState.publications.page = page;
  paginationState.publications.filters = { search, type, year };

  const searchInput = document.getElementById('publication-search');
  const typeFilter = document.getElementById('publication-type-filter');
  const yearFilter = document.getElementById('publication-year-filter');
  if (searchInput) searchInput.value = search;
  if (typeFilter) typeFilter.value = type;
  if (yearFilter) yearFilter.value = year;

  try {
    if (allPublications.length === 0) {
      allPublications = await loadPublicationsData();
    }
    // Atualiza contador com total de publicações
    updateCounterElement('pub-count', allPublications.length);

    let filtered = allPublications;
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.authors.toLowerCase().includes(q) ||
        (item.abstract && item.abstract.toLowerCase().includes(q))
      );
    }
    if (type) {
      filtered = filtered.filter(item => item.type === type);
    }
    if (year) {
      filtered = filtered.filter(item => item.year.toString() === year);
    }

    const perPage = 10;
    const { items, pagination } = paginateData(filtered, page, perPage);
    paginationState.publications.totalPages = pagination.pages;

    const locale = getLocale();
    if (items.length > 0) {
      const grid = document.createElement('div');
      grid.className = 'publications-grid';
      grid.innerHTML = items.map(item => createPublicationItem(item, locale)).join('');

      grid.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = parseInt(btn.dataset.id);
          const item = allPublications.find(p => p.id === id);
          if (item) openPublicationModal(item);
        });
      });

      grid.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = parseInt(btn.dataset.id);
          const item = allPublications.find(p => p.id === id);
          if (item && item.fileUrl) window.open(item.fileUrl, '_blank');
          else alert('Arquivo não disponível para download.');
        });
      });

      container.innerHTML = '';
      container.appendChild(grid);
    } else {
      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size:5rem;margin-bottom:1rem;">📚</div>
          <h3 data-i18n="publications.noResults">Nenhuma publicação encontrada</h3>
        </div>
      `;
    }

    if (paginationContainer) {
      if (pagination.pages > 1) {
        paginationContainer.innerHTML = createPagination(pagination.page, pagination.pages);
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const targetPage = parseInt(btn.dataset.page);
            if (targetPage && targetPage !== paginationState.publications.page && targetPage >= 1 && targetPage <= paginationState.publications.totalPages) {
              paginationState.publications.page = targetPage;
              updateListURL('publications', targetPage);
              loadPublicationsPage();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        });
      } else {
        paginationContainer.innerHTML = '';
      }
    }

    setupPublicationFilters();

  } catch (error) {
    console.error('[Publications] Erro:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar publicações.</p>`;
  }
}

function setupPublicationFilters() {
  const searchInput = document.getElementById('publication-search');
  const typeFilter = document.getElementById('publication-type-filter');
  const yearFilter = document.getElementById('publication-year-filter');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      const search = searchInput.value.trim();
      paginationState.publications.filters.search = search;
      paginationState.publications.page = 1;
      updateListURL('publications', 1);
      loadPublicationsPage();
    }, 500));
  }

  if (typeFilter) {
    typeFilter.addEventListener('change', () => {
      const type = typeFilter.value;
      paginationState.publications.filters.type = type;
      paginationState.publications.page = 1;
      updateListURL('publications', 1);
      loadPublicationsPage();
    });
  }

  if (yearFilter) {
    yearFilter.addEventListener('change', () => {
      const year = yearFilter.value;
      paginationState.publications.filters.year = year;
      paginationState.publications.page = 1;
      updateListURL('publications', 1);
      loadPublicationsPage();
    });
  }

  const clearBtn = document.getElementById('publications-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      if (typeFilter) typeFilter.value = '';
      if (yearFilter) yearFilter.value = '';
      paginationState.publications.filters = { search: '', type: '', year: '' };
      paginationState.publications.page = 1;
      updateListURL('publications', 1);
      loadPublicationsPage();
    });
  }
}

function openPublicationModal(item) {
  const container = document.getElementById('modal-container');
  if (!container) return;
  const locale = getLocale();
  container.innerHTML = createPublicationModal(item, locale);
  const modal = container.querySelector('.modal');
  const closeBtn = modal.querySelector('.close-button');
  modal.addEventListener('click', (e) => { if (e.target === modal) closePublicationModal(); });
  closeBtn.addEventListener('click', closePublicationModal);
  const escHandler = (e) => {
    if (e.key === 'Escape') { closePublicationModal(); document.removeEventListener('keydown', escHandler); }
  };
  document.addEventListener('keydown', escHandler);
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length > 0) setTimeout(() => focusable[0].focus(), 100);
  modal.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (item.fileUrl) window.open(item.fileUrl, '_blank');
      else alert('Arquivo não disponível para download.');
    });
  });
  document.body.style.overflow = 'hidden';
}

function closePublicationModal() {
  const container = document.getElementById('modal-container');
  if (container) container.innerHTML = '';
  document.body.style.overflow = '';
}

// ============================================
// PÁGINA: NOTÍCIAS (LISTAGEM)
// ============================================

async function loadNewsPage() {
  const container = document.getElementById('news-container');
  const paginationContainer = document.getElementById('pagination-container');
  if (!container) {
    console.warn('[News] #news-container não encontrado.');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page')) || 1;
  const search = params.get('search') || '';
  const category = params.get('category') || '';

  paginationState.news.page = page;
  paginationState.news.filters = { search, category };

  const searchInput = document.getElementById('news-search');
  const categoryFilter = document.getElementById('news-category-filter');
  if (searchInput) searchInput.value = search;
  if (categoryFilter) categoryFilter.value = category;

  try {
    const result = await fetchNews(page, paginationState.news.filters);
    const news = result.news || [];
    paginationState.news.totalPages = result.pagination?.pages || 1;

    // Atualiza contador com total de notícias (independente da página)
    const totalNews = result.pagination?.total || news.length;
    updateCounterElement('news-count', totalNews);

    if (news.length > 0) {
      container.innerHTML = `<div class="news-grid">${news.map(item => createNewsCard(item)).join('')}</div>`;
    } else {
      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size:4rem;margin-bottom:1rem;">🔍</div>
          <h3 data-i18n="news.noNews">Nenhuma notícia encontrada</h3>
          <p data-i18n="news.emptySubtitle">Tente ajustar os termos da sua busca ou limpar os filtros</p>
        </div>
      `;
    }

    if (paginationContainer) {
      if (paginationState.news.totalPages > 1) {
        paginationContainer.innerHTML = createPagination(paginationState.news.page, paginationState.news.totalPages);
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const targetPage = parseInt(btn.dataset.page);
            if (targetPage && targetPage !== paginationState.news.page && targetPage >= 1 && targetPage <= paginationState.news.totalPages) {
              paginationState.news.page = targetPage;
              updateListURL('news', targetPage);
              loadNewsPage();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        });
      } else {
        paginationContainer.innerHTML = '';
      }
    }

    setupNewsFilters();

  } catch (error) {
    console.error('[News] Erro:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar notícias.</p>`;
  }
}

function setupNewsFilters() {
  const searchInput = document.getElementById('news-search');
  const categoryFilter = document.getElementById('news-category-filter');
  const clearBtn = document.getElementById('news-clear-filters');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      paginationState.news.filters.search = searchInput.value.trim();
      paginationState.news.page = 1;
      updateListURL('news', 1);
      loadNewsPage();
    }, 500));
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
      paginationState.news.filters.category = categoryFilter.value;
      paginationState.news.page = 1;
      updateListURL('news', 1);
      loadNewsPage();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categoryFilter) categoryFilter.value = '';
      paginationState.news.filters = { search: '', category: '' };
      paginationState.news.page = 1;
      updateListURL('news', 1);
      loadNewsPage();
    });
  }
}

// ============================================
// PÁGINA: NOTÍCIAS (DETALHE)
// ============================================

async function loadNewsDetailPage() {
  const container = document.getElementById('news-detail-container');
  if (!container) {
    console.warn('[NewsDetail] #news-detail-container não encontrado.');
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    container.innerHTML = `
      <div style="text-align:center;padding:4rem 1rem;">
        <h2 data-i18n="news.notFoundTitle">Notícia não encontrada</h2>
        <p data-i18n="news.notFoundText">A notícia que você está procurando não existe ou foi removida.</p>
        <a href="/public/news.html" class="btn btn-primary" data-i18n="news.backToNews">Voltar para Notícias</a>
      </div>
    `;
    return;
  }
  try {
    const news = await fetchNewsById(parseInt(id, 10));
    if (news) {
      container.innerHTML = createNewsDetail(news, getLocale());
      const titleEl = document.getElementById('news-detail-title');
      const dateEl = document.getElementById('news-detail-date');
      if (titleEl) titleEl.textContent = news.title;
      if (dateEl && news.createdAt) {
        dateEl.textContent = new Date(news.createdAt).toLocaleDateString('pt-BR', {
          year: 'numeric', month: 'long', day: 'numeric'
        });
      }
      document.title = `${news.title} — LATECE`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = news.excerpt || news.title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogTitle) ogTitle.content = news.title;
      if (ogDesc) ogDesc.content = news.excerpt || news.title;
      if (ogImage && news.imageUrl) ogImage.content = news.imageUrl;
      injectNewsStructuredData(news);
    } else {
      container.innerHTML = `
        <div style="text-align:center;padding:4rem 1rem;">
          <h2 data-i18n="news.notFoundTitle">Notícia não encontrada</h2>
          <p data-i18n="news.notFoundText">A notícia que você está procurando não existe ou foi removida.</p>
          <a href="/public/news.html" class="btn btn-primary" data-i18n="news.backToNews">Voltar para Notícias</a>
        </div>
      `;
    }
  } catch (error) {
    console.error('[NewsDetail] Erro:', error);
    container.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-gray-500);">Erro ao carregar notícia.</p>`;
  }
}

function injectNewsStructuredData(news) {
  const oldScript = document.querySelector('script[type="application/ld+json"]');
  if (oldScript) oldScript.remove();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "description": news.excerpt || news.title,
    "image": news.imageUrl || '',
    "datePublished": news.createdAt || new Date().toISOString(),
    "dateModified": news.updatedAt || news.createdAt || new Date().toISOString(),
    "author": { "@type": "Organization", "name": "LATECE — UFRN" },
    "publisher": {
      "@type": "Organization",
      "name": "LATECE — UFRN",
      "logo": { "@type": "ImageObject", "url": "/assets/images/logos/logo.png" }
    }
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// ============================================
// SELETOR DE IDIOMA
// ============================================

function setupLanguageSelector() {
  const toggle = document.getElementById('locale-toggle');
  if (!toggle) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'language-dropdown';
  dropdown.id = 'locale-dropdown';
  dropdown.setAttribute('role', 'menu');
  dropdown.style.display = 'none';
  dropdown.style.position = 'fixed';
  dropdown.style.zIndex = '9999';
  dropdown.style.minWidth = '160px';
  dropdown.style.background = 'var(--color-white)';
  dropdown.style.borderRadius = 'var(--radius-md)';
  dropdown.style.boxShadow = 'var(--shadow-elevated)';
  dropdown.style.border = '1px solid var(--color-border)';
  dropdown.style.padding = '0.25rem 0';
  dropdown.style.overflow = 'hidden';
  document.body.appendChild(dropdown);

  function renderDropdown() {
    const currentLocale = getLocale();
    const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
    const names = { pt: 'Português', en: 'English', es: 'Español' };
    dropdown.innerHTML = `
      <ul class="language-list">
        <li>
          <button class="language-option ${currentLocale === 'pt' ? 'is-active' : ''}" data-locale="pt" role="menuitem">
            <span class="flag">🇧🇷</span>
            <span>Português</span>
          </button>
        </li>
        <li>
          <button class="language-option ${currentLocale === 'en' ? 'is-active' : ''}" data-locale="en" role="menuitem">
            <span class="flag">🇺🇸</span>
            <span>English</span>
          </button>
        </li>
        <li>
          <button class="language-option ${currentLocale === 'es' ? 'is-active' : ''}" data-locale="es" role="menuitem">
            <span class="flag">🇪🇸</span>
            <span>Español</span>
          </button>
        </li>
      </ul>
    `;
    dropdown.querySelectorAll('.language-option').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const locale = btn.getAttribute('data-locale');
        if (locale && locale !== getLocale()) {
          await setLocale(locale);
          toggle.querySelector('.flag').textContent = flags[locale] || '🌐';
          toggle.querySelector('.language-name').textContent = names[locale] || locale;
          renderDropdown();
          const page = getPageFromPath();
          if (page === 'team') loadTeamPage();
          else if (page === 'equipment') loadEquipmentPage();
          else if (page === 'publications') loadPublicationsPage();
          else if (page === 'news') loadNewsPage();
          else if (page === 'news-detail') loadNewsDetailPage();
          closeDropdown();
        } else {
          closeDropdown();
        }
      });
    });
  }

  renderDropdown();

  let isOpen = false;
  function positionDropdown() {
    const rect = toggle.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom + 8}px`;
    dropdown.style.right = `${window.innerWidth - rect.right}px`;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.style.display = 'block';
    toggle.setAttribute('aria-expanded', 'true');
    positionDropdown();
    setTimeout(() => {
      const firstItem = dropdown.querySelector('.language-option');
      if (firstItem) firstItem.focus();
    }, 50);
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
  function toggleDropdown(e) {
    e.stopPropagation();
    if (isOpen) closeDropdown();
    else openDropdown();
  }

  toggle.addEventListener('click', toggleDropdown);

  document.addEventListener('click', (e) => {
    if (isOpen && !e.target.closest('.language-selector') && !e.target.closest('#locale-dropdown')) {
      closeDropdown();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeDropdown();
  });
  window.addEventListener('scroll', () => { if (isOpen) positionDropdown(); });
  window.addEventListener('resize', () => { if (isOpen) positionDropdown(); });

  const currentLocale = getLocale();
  const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
  const names = { pt: 'Português', en: 'English', es: 'Español' };
  toggle.querySelector('.flag').textContent = flags[currentLocale] || '🌐';
  toggle.querySelector('.language-name').textContent = names[currentLocale] || currentLocale;
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();

  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');
  if (header) {
    header.innerHTML = createHeader(false);
    setActiveNavLink();
    syncHeaderScrollState();
  }
  if (footer) footer.innerHTML = createFooter();

  const menuButton = document.querySelector('.mobile-menu-button');
  if (menuButton) menuButton.addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  const overlay = document.querySelector('.mobile-overlay');
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  // Fallback: fechar o menu ao clicar fora dele
  document.addEventListener('click', function(e) {
    if (isMobileMenuOpen) {
      const menu = document.querySelector('.mobile-menu');
      const button = document.querySelector('.mobile-menu-button');
      if (menu && !menu.contains(e.target) && button && !button.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  syncHeaderScrollState();

  window.addEventListener('resize', syncHeaderScrollState);
  window.addEventListener('load', syncHeaderScrollState);

  setupLanguageSelector();
  initAccessibility();

  // NOVO: Inicializa o módulo de leitura assistida
  initSpeech();

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeAccessibilityPanel());
  });

  const page = getPageFromPath();
  currentPage = page;

  switch (page) {
    case 'home':
      await loadHomePage();
      break;
    case 'team':
      await loadTeamPage();
      break;
    case 'equipment':
      await loadEquipmentPage();
      break;
    case 'publications':
      await loadPublicationsPage();
      break;
    case 'news':
      await loadNewsPage();
      break;
    case 'news-detail':
      await loadNewsDetailPage();
      break;
    case 'about':
    case 'terms':
    case 'privacy':
    case 'credits':
      break;
    default:
      console.log('Página desconhecida:', page);
  }

  initScrollReveal();
  createBackToTop();
  animateCounters();

  window.syncHeaderScrollState = syncHeaderScrollState;
  console.log('Portal LATECE — carregado. Página:', page);
});