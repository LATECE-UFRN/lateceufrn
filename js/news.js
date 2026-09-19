/**
 * news.js — Lógica específica para as páginas de notícias
 * Agora usa apenas o JSON local (fallback) via resolvePath.
 */

import { t } from './i18n.js';
import { loadNewsFallback } from './data.js';

// Estado
let currentPage = 1;
let totalPages = 1;
let currentFilters = {
  search: '',
  category: ''
};
let allNews = [];

/**
 * Carrega a lista de notícias do fallback JSON com paginação e filtros locais.
 */
export async function fetchNews(page = 1, filters = {}) {
  currentPage = page;
  currentFilters = { ...currentFilters, ...filters };
  
  try {
    // Carrega todas as notícias do fallback
    const items = await loadNewsFallback();
    allNews = items;

    // Filtrar localmente
    let filtered = items;
    if (currentFilters.search) {
      const q = currentFilters.search.toLowerCase();
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(q) || 
        (n.excerpt && n.excerpt.toLowerCase().includes(q))
      );
    }
    if (currentFilters.category) {
      filtered = filtered.filter(n => n.category === currentFilters.category);
    }

    const limit = 10;
    totalPages = Math.max(1, Math.ceil(filtered.length / limit));
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);

    return {
      news: paginated,
      pagination: {
        page,
        limit,
        total: filtered.length,
        pages: totalPages
      }
    };
  } catch (error) {
    console.error('[news] Erro ao carregar notícias:', error);
    return { news: [], pagination: { page: 1, limit: 10, total: 0, pages: 1 } };
  }
}

/**
 * Busca uma notícia pelo ID a partir do fallback JSON.
 */
export async function fetchNewsById(id) {
  try {
    const items = await loadNewsFallback();
    const found = items.find(n => n.id === parseInt(id, 10));
    return found || null;
  } catch (error) {
    console.error('[news] Erro ao buscar notícia por ID:', error);
    return null;
  }
}

/**
 * Obtém a URL de thumbnail do YouTube ou fallback para imagem
 */
export function getYouTubeThumbnail(videoUrl, fallbackImage) {
  if (!videoUrl) return fallbackImage || '';
  const match = videoUrl.match(/\/embed\/([^?]+)/);
  if (!match) return fallbackImage || '';
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}

/**
 * Converte URL de embed para URL de watch (fallback quando embed é bloqueado)
 */
export function getYouTubeWatchUrl(embedUrl) {
  if (!embedUrl) return 'https://www.youtube.com';
  const match = embedUrl.match(/\/embed\/([^?]+)(?:\?(?:.*&)?start=(\d+))?/);
  if (!match) return embedUrl;
  const videoId = match[1];
  const start = match[2] ? `&t=${match[2]}` : '';
  return `https://www.youtube.com/watch?v=${videoId}${start}`;
}

/**
 * Converte URL de embed para usar youtube-nocookie.com (privacy mode)
 */
export function getEmbedUrl(videoUrl) {
  if (!videoUrl) return '';
  let url = videoUrl.replace('www.youtube.com', 'www.youtube-nocookie.com');
  const separator = url.includes('?') ? '&' : '?';
  url += `${separator}rel=0&modestbranding=1`;
  return url;
}

/**
 * Formata data para exibição
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

/**
 * Retorna as categorias disponíveis a partir das notícias
 */
export function getAvailableCategories(news) {
  if (!news || news.length === 0) return [];
  const categories = new Set();
  news.forEach(n => {
    if (n.category) categories.add(n.category);
  });
  return Array.from(categories);
}