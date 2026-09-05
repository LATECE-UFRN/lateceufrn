/**
 * path.js — Resolução centralizada de caminhos para GitHub Pages
 * Define BASE_PATH e resolvePath para uso em todo o projeto.
 */

(function() {
  // Detecta se estamos em produção no subdiretório /lateceufrn/
  const pathname = window.location.pathname;
  let base = '';

  // Se o caminho começar com /lateceufrn/ (ou /lateceufrn sem barra), define como base
  if (pathname.startsWith('/lateceufrn/') || pathname === '/lateceufrn') {
    base = '/lateceufrn';
  } else if (pathname.includes('/lateceufrn')) {
    // Caso estejamos em um subdiretório mais profundo, ex: /lateceufrn/admin/
    const match = pathname.match(/^(\/lateceufrn)/);
    if (match) base = match[1];
  }
  // Em desenvolvimento local (ex: localhost), base permanece vazio

  window.BASE_PATH = base;

  /**
   * Resolve um caminho relativo para o ambiente correto.
   * Se o caminho for uma URL externa (http, https, mailto, tel), retorna inalterado.
   * Caso contrário, prefixa com BASE_PATH (se houver) e garante que não haja dupla barra.
   */
  window.resolvePath = function(path) {
    if (!path) return '';
    // URLs externas ou âncoras são retornadas como estão
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(path)) return path;
    // Remove barras iniciais duplicadas e espaços
    let clean = path.replace(/^\/+/, '').trim();
    if (!clean) return '';
    // Se BASE_PATH estiver definido, junta com uma barra
    if (window.BASE_PATH) {
      // Garante que BASE_PATH não termine com barra e clean não comece com barra
      const base = window.BASE_PATH.replace(/\/+$/, '');
      return base + '/' + clean;
    }
    // Se não houver BASE_PATH, retorna o caminho com './' para ser relativo à raiz
    return './' + clean;
  };

  // Também disponibiliza como módulo (caso seja importado por outro módulo)
  if (typeof exports !== 'undefined') {
    exports.BASE_PATH = window.BASE_PATH;
    exports.resolvePath = window.resolvePath;
  }
})();