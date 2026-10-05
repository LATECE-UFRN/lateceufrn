/**
 * 404-init.js — Inicialização da página 404
 * FASE 3: extraído do `<script>` inline em 404.html.
 */

(function () {
  function getHomeUrl() {
    if (window.BASE_PATH) return window.BASE_PATH + '/';
    const path = window.location.pathname;
    const match = path.match(/^(\/lateceufrn)/);
    if (match) return match[1] + '/';
    return '/';
  }

  const homeUrl = getHomeUrl();
  const backLink = document.getElementById('back-home-link');
  const footerLink = document.getElementById('footer-home-link');
  if (backLink) backLink.href = homeUrl;
  if (footerLink) footerLink.href = homeUrl;
})();