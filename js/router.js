/**
 * router.js — Roteador SPA para o painel administrativo
 * Gerencia navegação entre views usando History API
 */

/**
 * Mapeamento de rotas para funções de renderização.
 * Cada rota deve ter uma função que retorna o HTML da view.
 */
const routes = {};

/**
 * Registra uma rota com sua função de renderização.
 * @param {string} path - Caminho da rota (ex: '/admin/news')
 * @param {Function} renderFn - Função que renderiza a view
 */
export function registerRoute(path, renderFn) {
  routes[path] = renderFn;
}

/**
 * Navega para uma rota, atualizando a URL e renderizando a view.
 * @param {string} path - Caminho da rota (ex: '/admin/news')
 * @param {object} params - Parâmetros adicionais (ex: { id: 5 })
 * @param {boolean} pushState - Se deve usar pushState (padrão true)
 */
export function navigateTo(path, params = {}, pushState = true) {
  // Construir URL com parâmetros
  const url = buildUrl(path, params);
  
  if (pushState) {
    window.history.pushState({ path, params }, '', url);
  } else {
    window.history.replaceState({ path, params }, '', url);
  }
  
  // Renderizar a view
  renderView(path, params);
}

/**
 * Renderiza a view correspondente à rota.
 * @param {string} path - Caminho da rota
 * @param {object} params - Parâmetros
 */
function renderView(path, params) {
  const renderFn = routes[path];
  if (renderFn) {
    renderFn(params);
  } else {
    // Rota não encontrada — renderizar 404 ou dashboard
    const dashboardFn = routes['/admin'] || routes['/admin/'];
    if (dashboardFn) {
      dashboardFn(params);
    } else {
      console.warn(`Rota não encontrada: ${path}`);
      const container = document.getElementById('admin-content');
      if (container) {
        container.innerHTML = `<div style="text-align:center;padding:3rem;"><h2>Página não encontrada</h2><p>A rota ${path} não existe.</p></div>`;
      }
    }
  }
}

/**
 * Constrói uma URL a partir de um caminho e parâmetros.
 * @param {string} path - Caminho base
 * @param {object} params - Parâmetros (ex: { id: 5, action: 'edit' })
 * @returns {string} URL completa
 */
function buildUrl(path, params) {
  const url = new URL(path, window.location.origin);
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.set(key, params[key]);
    }
  });
  return url.pathname + url.search;
}

/**
 * Inicializa o roteador.
 * Deve ser chamado após registrar as rotas.
 * Escuta eventos de popstate e renderiza a rota atual.
 * @param {string} defaultRoute - Rota padrão se nenhuma for encontrada
 */
export function initRouter(defaultRoute = '/admin') {
  // Escuta navegação do navegador (botão voltar/avançar)
  window.addEventListener('popstate', (event) => {
    const state = event.state || { path: window.location.pathname, params: {} };
    const path = state.path || window.location.pathname;
    const params = state.params || {};
    renderView(path, params);
  });

  // Renderiza a rota atual
  const currentPath = window.location.pathname;
  const params = getParamsFromURL();
  
  // Se a rota atual estiver registrada, renderiza
  if (routes[currentPath]) {
    renderView(currentPath, params);
  } else {
    // Fallback para a rota padrão
    const defaultPath = defaultRoute;
    if (routes[defaultPath]) {
      // Atualiza a URL sem adicionar ao histórico
      navigateTo(defaultPath, params, false);
    } else {
      console.warn('Nenhuma rota padrão definida.');
    }
  }
}

/**
 * Extrai parâmetros da URL atual.
 * @returns {object} Parâmetros (ex: { id: '5' })
 */
export function getParamsFromURL() {
  const params = {};
  const searchParams = new URLSearchParams(window.location.search);
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
}

/**
 * Obtém o caminho da rota atual (sem parâmetros).
 * @returns {string}
 */
export function getCurrentPath() {
  return window.location.pathname;
}