/**
 * data.js — Carregamento de dados (apenas fallback local, sem API)
 * Utiliza resolvePath para garantir caminhos corretos em qualquer subdiretório.
 * Versão com logs de depuração para diagnóstico do carrossel.
 */

/**
 * Carrega dados de um arquivo JSON local.
 * @param {string} file - Caminho do arquivo JSON (relativo à raiz do projeto)
 * @param {string} dataKey - Chave para extrair os dados (opcional)
 * @returns {Promise<Array>} Array de dados
 */
async function loadLocalJSON(file, dataKey = null) {
  try {
    // 1. Resolve o caminho usando BASE_PATH
    const resolvedPath = window.resolvePath(file);
    console.log(`[data] Tentando carregar: ${file} → resolvido para: ${resolvedPath}`);

    // 2. Faz o fetch
    const response = await fetch(resolvedPath);
    console.log(`[data] Status da resposta: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    // 3. Parse do JSON
    const data = await response.json();
    console.log(`[data] Dados brutos carregados:`, data);

    // 4. Extrai o array conforme a chave ou detecta automaticamente
    if (dataKey && data[dataKey]) {
      console.log(`[data] Usando chave "${dataKey}" → ${data[dataKey].length} itens`);
      return data[dataKey];
    }

    if (Array.isArray(data)) {
      console.log(`[data] Dados são um array direto → ${data.length} itens`);
      return data;
    }

    // Tenta identificar automaticamente a chave que contém o array
    const possibleKeys = ['items', 'members', 'news', 'publications', 'data', 'results'];
    for (const key of possibleKeys) {
      if (data[key] && Array.isArray(data[key])) {
        console.log(`[data] Detectada chave "${key}" com ${data[key].length} itens`);
        return data[key];
      }
    }

    // Se não encontrar, retorna array vazio com aviso
    console.warn(`[data] Nenhum array encontrado no arquivo ${file}. Estrutura:`, Object.keys(data));
    return [];
  } catch (error) {
    console.error(`[data] ❌ Erro ao carregar ${file}:`, error.message);
    // Em caso de erro, retorna array vazio para não quebrar a UI
    return [];
  }
}

/**
 * Carrega dados de membros da equipe.
 */
export async function loadTeamData() {
  console.log('[data] Carregando equipe...');
  const result = await loadLocalJSON('data/team.json', 'members');
  console.log(`[data] Equipe carregada: ${result.length} membros`);
  return result;
}

/**
 * Carrega dados de equipamentos.
 */
export async function loadEquipmentData() {
  console.log('[data] Carregando equipamentos...');
  const result = await loadLocalJSON('data/equipment.json', 'items');
  console.log(`[data] Equipamentos carregados: ${result.length} itens`);
  return result;
}

/**
 * Carrega dados de publicações.
 */
export async function loadPublicationsData() {
  console.log('[data] Carregando publicações...');
  const result = await loadLocalJSON('data/publications.json', 'items');
  console.log(`[data] Publicações carregadas: ${result.length} itens`);
  return result;
}

/**
 * Carrega notícias de fallback (usado pelo news.js e pelo carrossel da home).
 */
export async function loadNewsFallback() {
  console.log('[data] Carregando notícias (fallback)...');
  const result = await loadLocalJSON('data/news-fallback.json', 'items');
  console.log(`[data] Notícias carregadas: ${result.length} itens`);
  return result;
}

/**
 * Função genérica de paginação.
 * @param {Array} items - Array completo de itens.
 * @param {number} page - Número da página (começa em 1).
 * @param {number} perPage - Itens por página (padrão 10).
 * @returns {Object} { items: Array, pagination: { page, perPage, total, pages } }
 */
export function paginateData(items, page, perPage = 10) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.max(1, Math.min(page, pages));
  const start = (currentPage - 1) * perPage;
  const end = Math.min(start + perPage, total);
  const paginatedItems = items.slice(start, end);

  return {
    items: paginatedItems,
    pagination: {
      page: currentPage,
      perPage,
      total,
      pages
    }
  };
}

// Para testes: expõe a função no console global
if (typeof window !== 'undefined') {
  window.__data = {
    loadTeamData,
    loadEquipmentData,
    loadPublicationsData,
    loadNewsFallback,
    paginateData
  };
  console.log('[data] Funções exportadas disponíveis em window.__data para depuração.');
}
