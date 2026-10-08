/**
 * Fábrica de componentes reutilizáveis.
 * Retorna strings HTML para injeção no DOM.
 *
 * FASE 1 (P0): escaping centralizado via js/security.js.
 *  - Todos os campos textuais passam por escapeHtml().
 *  - URLs passam por safeUrl().
 *  - news.content NÃO é tratado aqui (o caller deve sanitizar via sanitizeHtml).
 */
import { devLog } from './dev-log.js';
import { t, getLocale, setLocale } from './i18n.js';
import { escapeHtml, safeUrl } from './security.js';

// ============================================================
// ÍCONES SVG (Simple Icons — CC0 / domínio público)
// viewBox 24×24, fill="currentColor" → herda a cor do contexto
// ============================================================
const ICONS = {
  shareTwitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  shareFacebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,
  shareLinkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  shareWhatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z"/></svg>`
};

// ============================================
// HEADER E FOOTER
// ============================================

export function createHeader(isAuthenticated = false) {
  const locale = getLocale();
  const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
  const languageNames = { pt: 'Português', en: 'English', es: 'Español' };

  const logoPath = window.resolvePath('assets/images/logos/logo.png');
  const instagramIcon = window.resolvePath('assets/images/icons/instagram.png');
  const youtubeIcon = window.resolvePath('assets/images/icons/youtube.png');

  return `
    <div class="top-bar" role="banner" aria-label="Barra superior">
      <div class="container top-bar-content">
        <div class="contact-info">
          <a href="mailto:latece@ufrn.br" class="info-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>latece@ufrn.br</span>
          </a>
          <a href="tel:+558432150000" class="info-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>(84) 3342-2270</span>
          </a>
          <a href="https://www.instagram.com/latece_ufrn/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram do LATECE">
            <img src="${instagramIcon}" alt="Instagram" class="social-icon" loading="lazy" onerror="this.style.display='none'">
          </a>
          <a href="https://www.youtube.com/channel/UCie5HHDcac4k2-7DaKWEuTQ" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube do LATECE">
            <img src="${youtubeIcon}" alt="YouTube" class="social-icon" loading="lazy" onerror="this.style.display='none'">
          </a>
        </div>
        <div class="top-bar-right">
          <div class="divider"></div>
          <div class="user-links">
            <div class="language-selector">
              <button class="language-button" id="locale-toggle" aria-expanded="false" aria-haspopup="true">
                <span class="flag">${flags[locale] || '🌐'}</span>
                <span class="language-name">${languageNames[locale] || locale}</span>
                <span class="dropdown-arrow">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header class="main-header" role="banner">
      <div class="container">
        <div class="header-content">
          <a href="./" class="logo" aria-label="Página inicial do LATECE">
            <div class="logo-icon">
              <img src="${logoPath}" alt="LATECE" loading="lazy" onerror="this.style.display='none'">
            </div>
          </a>

          <nav class="desktop-nav" aria-label="Navegação principal">
            <ul class="nav-list">
              <li><a href="./" class="nav-link" data-i18n="nav.home">Início</a></li>
              <li><a href="./about.html" class="nav-link" data-i18n="nav.about">Sobre</a></li>
              <li><a href="./team.html" class="nav-link" data-i18n="nav.team">Equipe</a></li>
              <li><a href="./equipment.html" class="nav-link" data-i18n="nav.equipment">Equipamentos</a></li>
              <li><a href="./publications.html" class="nav-link" data-i18n="nav.publications">Publicações</a></li>
              <li><a href="./news.html" class="nav-link" data-i18n="nav.news">Notícias</a></li>
              <li><a href="./sugestoes.html" class="nav-link" data-i18n="nav.suggestions">Sugestões</a></li>
            </ul>
          </nav>

          <div class="user-section">
            ${isAuthenticated ? `
              <div class="user-menu-container">
                <button class="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <div class="user-avatar"><span>AD</span></div>
                  <div class="user-info">
                    <div class="user-name">Administrador</div>
                    <div class="user-role" data-i18n="nav.administrator">Administrador</div>
                  </div>
                  <span class="dropdown-arrow">▼</span>
                </button>
              </div>
            ` : `
              <a href="./login.html" class="user-link" data-i18n="nav.login">Login</a>
            `}
          </div>

          <button class="mobile-menu-button" aria-label="Menu" aria-expanded="false">
            <span class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
        </div>
      </div>

      <div class="mobile-menu">
        <div class="container">
          <nav class="mobile-nav" aria-label="Menu mobile">
            <a href="./" class="mobile-nav-link" data-i18n="nav.home">Início</a>
            <a href="./about.html" class="mobile-nav-link" data-i18n="nav.about">Sobre</a>
            <a href="./team.html" class="mobile-nav-link" data-i18n="nav.team">Equipe</a>
            <a href="./equipment.html" class="mobile-nav-link" data-i18n="nav.equipment">Equipamentos</a>
            <a href="./publications.html" class="mobile-nav-link" data-i18n="nav.publications">Publicações</a>
            <a href="./news.html" class="mobile-nav-link" data-i18n="nav.news">Notícias</a>
            <a href="./sugestoes.html" class="mobile-nav-link" data-i18n="nav.suggestions">Sugestões</a>
            <button type="button"
                    class="mobile-nav-link mobile-nav-link--locale"
                    id="locale-toggle-mobile"
                    data-no-close
                    aria-expanded="false"
                    aria-controls="mobile-language-list">
              <span class="flag" id="mobile-locale-flag" aria-hidden="true">${flags[locale] || '🌐'}</span>
              <span data-i18n="nav.language">Idioma</span>
              <span class="dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <ul class="mobile-language-list" id="mobile-language-list" hidden>
              <li>
                <button type="button" class="mobile-language-option ${locale === 'pt' ? 'is-active' : ''}" data-locale="pt">
                  <span class="flag" aria-hidden="true">🇧🇷</span>
                  <span>Português</span>
                </button>
              </li>
              <li>
                <button type="button" class="mobile-language-option ${locale === 'en' ? 'is-active' : ''}" data-locale="en">
                  <span class="flag" aria-hidden="true">🇺🇸</span>
                  <span>English</span>
                </button>
              </li>
              <li>
                <button type="button" class="mobile-language-option ${locale === 'es' ? 'is-active' : ''}" data-locale="es">
                  <span class="flag" aria-hidden="true">🇪🇸</span>
                  <span>Español</span>
                </button>
              </li>
            </ul>

            <div class="mobile-nav-divider"></div>
            ${isAuthenticated ? `
              <a href="./admin/" class="mobile-nav-link" data-i18n="nav.admin">Administração</a>
              <button class="mobile-nav-link logout-btn" data-i18n="nav.logout">Sair</button>
            ` : `
              <a href="./login.html" class="mobile-nav-link" data-i18n="nav.login">Login</a>
            `}
          </nav>
        </div>
      </div>
    </header>
  `;
}

export function createFooter(locale) {
  const logoPath = window.resolvePath('assets/images/logos/logo.png');
  const ufrnLogoPath = window.resolvePath('assets/images/logos/ufrn-logo-branca.png');
  const instagramIcon = window.resolvePath('assets/images/icons/instagram.png');
  const youtubeIcon = window.resolvePath('assets/images/icons/youtube.png');

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h3>LATECE</h3>
            <p>Laboratório de Tecnologia Assistiva do Centro de Educação</p>
            <p><small>UFRN — Universidade Federal do Rio Grande do Norte</small></p>
            <div class="footer-institutional-logos" style="display:flex;align-items:center;gap:1.5rem;margin-top:var(--space-4);">
              <img src="${logoPath}" alt="LATECE" class="footer-logo-img" loading="lazy">
              <img src="${ufrnLogoPath}" alt="UFRN" class="footer-logo-img" loading="lazy" onerror="this.style.display='none'">
            </div>
          </div>

          <div class="footer-section">
            <h4>Links Rápidos</h4>
            <ul class="footer-list">
              <li><a href="./about.html" class="footer-link">Sobre</a></li>
              <li><a href="./team.html" class="footer-link">Equipe</a></li>
              <li><a href="./equipment.html" class="footer-link">Equipamentos</a></li>
              <li><a href="./publications.html" class="footer-link">Publicações</a></li>
              <li><a href="./news.html" class="footer-link">Notícias</a></li>
              <li><a href="./sugestoes.html" class="footer-link">Sugestões</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contato</h4>
            <div class="contact-info-footer">
              <p>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:0.3rem;">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:latece@ufrn.br" class="footer-link">latece@ufrn.br</a>
              </p>
              <p>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:0.3rem;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+558432150000" class="footer-link">(84) 3342-2270</a>
              </p>
              <p>📍 UFRN — Campus Central, Natal/RN</p>
              <div class="footer-social-links" style="display:flex;align-items:center;gap:1rem;margin-top:var(--space-3);">
                <a href="https://www.instagram.com/latece_ufrn/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram do LATECE">
                  <img src="${instagramIcon}" alt="Instagram" class="social-icon" loading="lazy" onerror="this.style.display='none'">
                </a>
                <a href="https://www.youtube.com/channel/UCie5HHDcac4k2-7DaKWEuTQ" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube do LATECE">
                  <img src="${youtubeIcon}" alt="YouTube" class="social-icon" loading="lazy" onerror="this.style.display='none'">
                </a>
              </div>
            </div>
          </div>

          <div class="footer-section">
            <h4>Localização</h4>
            <div class="footer-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.96333122227526!2d-35.196772314257146!3d-5.838746034104346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff9fcdaa5513%3A0x345d0d58925d5142!2sCentro%20de%20Educa%C3%A7%C3%A3o%20-%20CE%20%2F%20UFRN!5e1!3m2!1spt-BR!2sbr!4v1787425996456!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style="border:0;display:block;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-popups"
            title="Mapa de localização do LATECE"
          ></iframe>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">&copy; 2026 LATECE — Todos os direitos reservados.</p>
          <div class="footer-bottom-links">
            <a href="./termos-de-uso.html" class="footer-link">Termos de Uso</a>
            <a href="./politica-de-privacidade.html" class="footer-link">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ============================================
// EQUIPE
// ============================================

export function createTeamCard(member, locale = 'pt') {
  const name = escapeHtml(member.name || '');
  const roleLabel = escapeHtml(member.roleLabel || member.role || '');
  const institution = escapeHtml(member.institution || '');

  const hasPhoto = member.showPhoto !== false && member.photoUrl && member.photoUrl.trim() !== '';
  const initials = escapeHtml(
    (member.name || '')
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  );

  let photoHtml = '';
  const noPhotoRoles = ['partner', 'collaborator', 'developer'];
  if (!noPhotoRoles.includes(member.role)) {
    if (hasPhoto) {
      const rawPath = String(member.photoUrl).replace(/^\//, '');
      const photoPath = safeUrl(window.resolvePath(rawPath), { allowDataImage: true });
      if (photoPath) {
        photoHtml = `<img src="${photoPath}" alt="${name}" class="team-photo" loading="lazy">`;
      }
    } else {
      photoHtml = `<div class="team-avatar-placeholder">${initials}</div>`;
    }
  }

  const lattesIconPath = window.resolvePath('assets/images/icons/lattes.png');
  const lattesHref = member.lattesUrl ? safeUrl(member.lattesUrl) : '';
  const lattesIconHtml = lattesHref
    ? `<a href="${lattesHref}" target="_blank" rel="noopener noreferrer" class="team-lattes-link" aria-label="Currículo Lattes de ${name}">
         <img src="${lattesIconPath}" alt="Lattes" class="team-lattes-icon">
       </a>`
    : `<img src="${lattesIconPath}" alt="Lattes" class="team-lattes-icon">`;

  return `
    <div class="team-card" data-id="${escapeHtml(member.id)}">
      ${photoHtml}
      <div class="team-info">
        <h3 class="team-name">${name}</h3>
        <p class="team-role">${roleLabel}</p>
        <hr class="team-divider">
        <p class="team-institution">${institution}</p>
        <div class="team-lattes-wrapper">
          ${lattesIconHtml}
        </div>
      </div>
    </div>
  `;
}

export function createTeamListItem(member) {
  const name = escapeHtml(member.name || '');
  const roleLabel = escapeHtml(member.roleLabel || member.role || '');
  const institution = escapeHtml(member.institution || '');
  const lattesIconPath = window.resolvePath('assets/images/icons/lattes.png');
  const lattesHref = member.lattesUrl ? safeUrl(member.lattesUrl) : '';
  const lattesIconHtml = lattesHref
    ? `<a href="${lattesHref}" target="_blank" rel="noopener noreferrer"
          class="team-list-lattes-link"
          aria-label="Currículo Lattes de ${name}">
         <img src="${lattesIconPath}" alt="Lattes" class="team-list-lattes-icon">
       </a>`
    : `<img src="${lattesIconPath}" alt="Lattes" class="team-list-lattes-icon">`;

  return `
    <li class="team-list-item">
      <div class="team-list-cell team-list-cell--name">
        <span class="team-list-name">${name}</span>
      </div>
      <div class="team-list-cell team-list-cell--role">
        <span class="team-list-role">${roleLabel}</span>
      </div>
      <div class="team-list-cell team-list-cell--institution">
        <span class="team-list-institution">${institution}</span>
      </div>
      <div class="team-list-cell team-list-cell--lattes">
        ${lattesIconHtml}
      </div>
    </li>
  `;
}

// ============================================
// EQUIPAMENTOS
// ============================================

const EQUIPMENT_CATEGORY_MAP = {
  'CAA': t('equipment.categories.CAA') || 'Comunicação Aumentativa e Alternativa',
  'VidaDiaria': t('equipment.categories.VidaDiaria') || 'Auxílio para Vida Diária',
  'AcessibilidadeComputador': t('equipment.categories.AcessibilidadeComputador') || 'Acessibilidade no Computador',
  'BaixaVisao': t('equipment.categories.BaixaVisao') || 'Baixa Visão',
  'LivrosJogos': t('equipment.categories.LivrosJogos') || 'Livros e Jogos Adaptados'
};

function getEquipmentCategoryLabel(cat) {
  return escapeHtml(EQUIPMENT_CATEGORY_MAP[cat] || cat || '');
}

export function createEquipmentCard(equipment) {
  const name = escapeHtml(equipment.name || '');
  const categoryLabel = getEquipmentCategoryLabel(equipment.category);
  const description = equipment.description ? escapeHtml(equipment.description) : '';

  let imagePath = String(equipment.imageUrl || '').replace(/^\//, '');
  const rawSrc = imagePath
    ? window.resolvePath(imagePath)
    : window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');
  const finalImage = safeUrl(rawSrc, { allowDataImage: true }) || window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');

  let downloadHtml = '';
  const d = equipment.download;
  if (d && d.url) {
    let fileUrl = String(d.url).replace(/^\//, '');
    const finalFileUrl = safeUrl(window.resolvePath(fileUrl)) || '#';
    const iconMap = { 'PDF': '📄', 'APK': '📱', 'EXE': '🖥️', 'ZIP': '📦', 'DOCX': '📝', 'PPTX': '📊', 'MP3': '🎵', 'MP4': '🎬' };
    const dType = String(d.type || '').toUpperCase();
    const icon = iconMap[dType] || '📎';
    const metaParts = [];
    if (d.size) metaParts.push(escapeHtml(d.size));
    if (d.version) metaParts.push('v' + escapeHtml(d.version));
    if (d.platform) metaParts.push(escapeHtml(d.platform));
    const metaText = metaParts.length ? ` (${metaParts.join(', ')})` : '';

    downloadHtml = `
      <div class="equipment-download" style="margin-top:var(--space-3); padding-top:var(--space-2); border-top:1px solid var(--color-border);">
        <a href="${finalFileUrl}" class="btn btn-primary btn-sm download-btn" download aria-label="Baixar ${escapeHtml(dType)} de ${name}" style="display:inline-flex; align-items:center; gap:var(--space-2);">
          <span>${icon}</span>
          <span>Baixar ${escapeHtml(dType)}${metaText}</span>
        </a>
        ${d.license ? `<span style="font-size:var(--font-size-caption); color:var(--color-text-muted); margin-left:var(--space-2);">${escapeHtml(d.license)}</span>` : ''}
      </div>
    `;
  }

  return `
    <div class="equipment-card" data-id="${escapeHtml(equipment.id)}" role="button" tabindex="0" aria-label="${name}">
      <div class="equipment-image">
        <img src="${finalImage}" alt="${name}" loading="lazy" onerror="this.onerror=null; this.src='${window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg')}';">
      </div>
      <div class="equipment-body">
        <h3 class="equipment-name">${name}</h3>
        <span class="equipment-category">${categoryLabel}</span>
        ${description ? `<p class="equipment-description">${description}</p>` : ''}
        ${downloadHtml}
        <button class="btn btn-sm btn-secondary view-details-btn" data-id="${escapeHtml(equipment.id)}" style="margin-top:var(--space-3);">
          Ver detalhes
        </button>
      </div>
    </div>
  `;
}

function getEquipmentImages(equipment) {
  const resolve = (p) => {
    let s = String(p).trim();
    if (s.startsWith('/')) s = s.substring(1);
    return safeUrl(window.resolvePath(s), { allowDataImage: true });
  };

  if (Array.isArray(equipment.images) && equipment.images.length > 0) {
    return equipment.images.filter(Boolean).map(resolve).filter(Boolean);
  }
  let imagePath = String(equipment.imageUrl || '').replace(/^\//, '');
  const fallback = imagePath
    ? window.resolvePath(imagePath)
    : window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');
  return [safeUrl(fallback, { allowDataImage: true }) || fallback];
}

export function createEquipmentModal(equipment) {
  const name = escapeHtml(equipment.name || '');
  const categoryLabel = getEquipmentCategoryLabel(equipment.category);
  const description = equipment.description ? escapeHtml(equipment.description) : '';
  const images = getEquipmentImages(equipment);
  const hasMultiple = images.length > 1;
  const placeholder = window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');

  const galleryHtml = `
    <div class="equipment-gallery" data-current-image="0" data-total-images="${images.length}">
      <div class="equipment-gallery-viewport">
        ${images.map((src, i) => `
          <img class="equipment-gallery-img ${i === 0 ? 'is-active' : ''}"
               src="${src}"
               alt="${name} — ${i + 1}"
               data-index="${i}"
               loading="${i === 0 ? 'eager' : 'lazy'}"
               onerror="this.onerror=null; this.src='${placeholder}';">
        `).join('')}
      </div>
      ${hasMultiple ? `
        <button type="button"
                class="equipment-gallery-arrow equipment-gallery-arrow--prev"
                aria-label="${t('equipment.modal.previousImage') || 'Imagem anterior'}">‹</button>
        <button type="button"
                class="equipment-gallery-arrow equipment-gallery-arrow--next"
                aria-label="${t('equipment.modal.nextImage') || 'Próxima imagem'}">›</button>
        <div class="equipment-gallery-indicator" aria-live="polite">
          <span class="equipment-gallery-current">1</span>
          <span aria-hidden="true">/</span>
          <span class="equipment-gallery-total">${images.length}</span>
        </div>
      ` : ''}
    </div>
  `;

  return `
    <div class="modal modal--equipment"
         role="dialog"
         aria-modal="true"
         aria-labelledby="modal-title-${escapeHtml(equipment.id)}">

      <button type="button"
              class="equipment-nav-btn equipment-nav-btn--prev"
              data-nav="prev"
              aria-label="${t('equipment.modal.previousItem') || 'Recurso anterior'}">
        <span class="equipment-nav-icon" aria-hidden="true">←</span>
        <span class="equipment-nav-text">${t('equipment.modal.previousItem') || 'Recurso anterior'}</span>
      </button>

      <div class="modal-content">
        <button class="close-button" aria-label="${t('common.close') || 'Fechar'}">×</button>
        ${galleryHtml}
        <div class="modal-body">
          <h2 id="modal-title-${escapeHtml(equipment.id)}">${name}</h2>
          <span class="equipment-category">${categoryLabel}</span>
          ${description ? `<p>${description}</p>` : ''}
        </div>
      </div>

      <button type="button"
              class="equipment-nav-btn equipment-nav-btn--next"
              data-nav="next"
              aria-label="${t('equipment.modal.nextItem') || 'Próximo recurso'}">
        <span class="equipment-nav-text">${t('equipment.modal.nextItem') || 'Próximo recurso'}</span>
        <span class="equipment-nav-icon" aria-hidden="true">→</span>
      </button>
    </div>
  `;
}

// ============================================
// PUBLICAÇÕES
// ============================================

const PUB_TYPE_MAP = {
  'article': t('publications.types.article') || 'Artigo',
  'tcc': t('publications.types.tcc') || 'TCC',
  'material': t('publications.types.material') || 'Material',
  'report': t('publications.types.report') || 'Relatório',
  'presentation': t('publications.types.presentation') || 'Apresentação',
  'dissertation': t('publications.types.dissertation') || 'Dissertação',
  'thesis': t('publications.types.thesis') || 'Tese',
  'chapter': t('publications.types.chapter') || 'Capítulo',
  'book': t('publications.types.book') || 'Livro'
};

export function createPublicationItem(pub, locale = 'pt') {
  const title = escapeHtml(pub.title || '');
  const authors = escapeHtml(pub.authors || '');
  const typeLabel = escapeHtml(PUB_TYPE_MAP[pub.type] || pub.type || '');
  const year = escapeHtml(pub.year || '');
  const statusText = pub.status ? escapeHtml(t(`publications.statusLabels.${pub.status}`, pub.status)) : '';
  const abstract = pub.abstract ? escapeHtml(pub.abstract.slice(0, 200)) + (pub.abstract.length > 200 ? '…' : '') : '';
  const fileUrl = pub.fileUrl ? safeUrl(pub.fileUrl) : '';
  const externalLink = pub.externalLink ? safeUrl(pub.externalLink) : '';

  return `
    <div class="publication-item" data-id="${escapeHtml(pub.id)}">
      <div class="pub-header">
        <h3 class="pub-title">${title}</h3>
        <span class="pub-type">${typeLabel}</span>
      </div>
      <p class="pub-authors">${authors}</p>
      <p class="pub-meta">${year} · ${statusText}</p>
      ${abstract ? `<p class="pub-abstract">${abstract}</p>` : ''}
      <div class="pub-actions">
        <button class="btn btn-sm btn-secondary view-details-btn" data-id="${escapeHtml(pub.id)}">${t('publications.viewDetails') || 'Ver detalhes'}</button>
        ${fileUrl ? `<a href="${fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary download-btn" data-id="${escapeHtml(pub.id)}">${t('publications.download') || 'Baixar'}</a>` : ''}
        ${externalLink ? `<a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">${t('publications.access') || 'Acessar'}</a>` : ''}
      </div>
    </div>
  `;
}

export function createPublicationModal(pub, locale = 'pt') {
  const title = escapeHtml(pub.title || '');
  const authors = escapeHtml(pub.authors || '');
  const typeLabel = escapeHtml(PUB_TYPE_MAP[pub.type] || pub.type || '');
  const year = escapeHtml(pub.year || '');
  const statusText = pub.status ? escapeHtml(t(`publications.statusLabels.${pub.status}`, pub.status)) : '';
  const abstract = pub.abstract ? escapeHtml(pub.abstract) : '';
  const keywords = Array.isArray(pub.keywords) ? pub.keywords.map(k => escapeHtml(k)).join(', ') : '';
  const fileUrl = pub.fileUrl ? safeUrl(pub.fileUrl) : '';
  const externalLink = pub.externalLink ? safeUrl(pub.externalLink) : '';
  const doi = pub.doi ? escapeHtml(pub.doi) : '';

  return `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-pub-title-${escapeHtml(pub.id)}">
      <div class="modal-content">
        <button class="close-button" aria-label="Fechar">×</button>
        <div class="modal-body">
          <h2 id="modal-pub-title-${escapeHtml(pub.id)}">${title}</h2>
          <div class="pub-detail-meta">
            <span><strong>${t('publications.modal.publicationType') || 'Tipo'}:</strong> ${typeLabel}</span>
            <span><strong>${t('publications.modal.year') || 'Ano'}:</strong> ${year}</span>
            <span><strong>${t('publications.modal.authors') || 'Autores'}:</strong> ${authors}</span>
            ${statusText ? `<span><strong>${t('publications.modal.status') || 'Status'}:</strong> ${statusText}</span>` : ''}
          </div>
          ${abstract ? `<div class="pub-abstract-full"><strong>${t('publications.modal.abstract') || 'Resumo'}:</strong><p>${abstract}</p></div>` : ''}
          ${keywords ? `<div><strong>${t('publications.modal.keywords') || 'Palavras-chave'}:</strong> ${keywords}</div>` : ''}
          <div class="pub-actions-modal">
            ${fileUrl ? `<a href="${fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary download-btn" data-id="${escapeHtml(pub.id)}">${t('publications.download') || 'Baixar'}</a>` : ''}
            ${externalLink ? `<a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${t('publications.access') || 'Acessar'}</a>` : ''}
            ${doi ? `<a href="https://doi.org/${encodeURIComponent(pub.doi)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">DOI</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// NOTÍCIAS
// ============================================

export function createNewsCard(news) {
  const title = escapeHtml(news.title || 'Sem título');
  const excerpt = news.excerpt ? escapeHtml(news.excerpt) : '';
  const category = news.category ? escapeHtml(news.category) : '';
  const id = escapeHtml(news.id);

  let imagePath = String(news.imageUrl || '').replace(/^\//, '');
  const rawSrc = imagePath
    ? window.resolvePath(imagePath)
    : window.resolvePath('assets/images/illustrations/placeholder-news.jpg');
  const imageUrl = safeUrl(rawSrc, { allowDataImage: true }) || '';

  const formattedDate = news.createdAt
    ? escapeHtml(new Date(news.createdAt).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }))
    : '';
  const isVideo = news.isVideo === true;

  return `
    <article class="news-card" data-id="${id}">
      <div class="card-image-wrapper">
        ${isVideo ? `
          <div class="video-placeholder">
            <div class="video-thumbnail">
              <img class="video-thumb-img" src="${getYouTubeThumbnail(news.videoUrl, imageUrl)}" alt="${title}" loading="lazy">
              <div class="play-button-overlay">
                <svg class="play-icon" width="52" height="52" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        ` : `
          <div class="card-image" style="background-image: url('${imageUrl}');"></div>
        `}
      </div>
      <div class="card-body">
        <div class="card-meta">
          ${category ? `<span class="card-category">${category}</span>` : ''}
          ${formattedDate ? `<span>${formattedDate}</span>` : ''}
        </div>
        <h3 class="card-title">${title}</h3>
        ${excerpt ? `<p class="card-excerpt">${excerpt}</p>` : ''}
        <div class="card-footer">
          <a href="./news-detail.html?id=${id}" class="btn btn-primary btn-sm">
            ${isVideo ? '▶ Assistir' : 'Leia Mais'}
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * IMPORTANTE: news.content deve chegar JÁ sanitizado (via sanitizeHtml() em main.js).
 * Este componente NÃO escapa o content — ele é HTML legítimo.
 */
export function createNewsDetail(news, locale = 'pt') {
  const title = escapeHtml(news.title || '');
  const excerpt = news.excerpt ? escapeHtml(news.excerpt) : '';
  const category = news.category ? escapeHtml(news.category) : '';
  const formattedDate = news.createdAt
    ? escapeHtml(new Date(news.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }))
    : '';
  const authorName = news.authorName ? escapeHtml(news.authorName) : '';

  let imagePath = String(news.imageUrl || '').replace(/^\//, '');
  const rawSrc = imagePath
    ? window.resolvePath(imagePath)
    : window.resolvePath('assets/images/illustrations/placeholder-news.jpg');
  const imageUrl = safeUrl(rawSrc, { allowDataImage: true }) || '';
  const isVideo = news.isVideo === true;

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(news.title || '');

  // content é HTML sanitizado externamente (via sanitizeHtml em main.js)
  const contentHtml = news.content || '<p>Conteúdo não disponível.</p>';

  const tags = Array.isArray(news.tags)
    ? news.tags.map(tag => `<span class="tag" style="background:var(--color-gray-50);border:1px solid var(--color-gray-200);padding:0.25rem 0.75rem;border-radius:4px;margin-right:0.5rem;font-size:0.875rem;">${escapeHtml(tag)}</span>`).join('')
    : '';

const linksHtml = Array.isArray(news.links) && news.links.length > 0
  ? news.links.map(link => {
      const href = safeUrl(link.url || '');
      const label = escapeHtml(link.label || link.url || '');
      if (!href) return '';
      return `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="related-link" style="display:flex;align-items:center;gap:0.5rem;padding:0.75rem 1rem;background:rgba(46,16,101,0.05);border:1px solid rgba(46,16,101,0.15);border-radius:var(--radius-md);text-decoration:none;color:var(--color-primary);font-weight:600;transition:all var(--transition-fast);">
          <span class="related-link-icon" aria-hidden="true">${ICONS.link}</span>
          <span>${label}</span>
        </a>
      `;
    }).join('')
  : '';

  return `
    <a href="./news.html" class="back-link" style="display:inline-flex;align-items:center;gap:0.5rem;color:var(--color-primary);text-decoration:none;font-weight:500;margin-bottom:var(--spacing-lg);">← ${t('news.backToNews') || 'Voltar para Notícias'}</a>

    <header class="article-header">
      ${category ? `<p class="category-tag" style="display:inline-block;background:var(--color-primary);color:var(--color-white);padding:0.25rem 0.75rem;border-radius:999px;font-size:0.875rem;font-weight:600;margin-bottom:var(--spacing-md);">${category}</p>` : ''}
      <h1 class="article-title" style="font-size:clamp(1.8rem, 3vw, 2.8rem);font-weight:800;color:var(--color-gray-900);line-height:1.2;">${title}</h1>
      ${excerpt ? `<p class="article-excerpt" style="font-size:1.2rem;color:var(--color-gray-500);margin-top:var(--spacing-md);">${excerpt}</p>` : ''}
      <div class="article-meta" style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--spacing-xl);color:var(--color-gray-500);font-size:0.9rem;">
        <div class="author-info" style="display:flex;align-items:center;gap:0.75rem;">
          <span>${formattedDate}</span>
          ${authorName ? `<span>• por ${authorName}</span>` : ''}
        </div>
      </div>
    </header>

    ${isVideo && news.videoUrl ? `
      <figure class="featured-video-container" style="margin:var(--spacing-xl) 0;">
        <div class="video-wrapper" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:var(--radius-md);background:#000;">
        <iframe
            src="${getEmbedUrl(news.videoUrl)}"
            width="100%"
            height="100%"
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox"
            title="${escapeHtml(news.title || 'Vídeo')}"
        ></iframe>
        </div>
      </figure>
    ` : imageUrl ? `
      <figure class="featured-image-container" style="margin:var(--spacing-xl) 0;border-radius:var(--radius-md);overflow:hidden;">
        <img src="${imageUrl}" alt="${title}" style="width:100%;height:auto;display:block;">
      </figure>
    ` : ''}

    <div class="article-content" style="line-height:1.8;font-size:1.1rem;color:var(--color-gray-800);">
      ${contentHtml}
    </div>

    <footer class="article-footer" style="margin-top:var(--spacing-2xl);padding-top:var(--spacing-xl);border-top:1px solid var(--color-gray-200);">
      ${tags ? `
        <div class="tags-section" style="margin-bottom:var(--spacing-lg);">
          <strong style="margin-right:var(--spacing-md);">${t('news.tags') || 'Tags'}:</strong>
          ${tags}
        </div>
      ` : ''}

  ${linksHtml ? `
  <div class="links-section" style="margin-bottom:var(--spacing-lg);">
    <strong class="links-section-title" style="display:flex;align-items:center;gap:0.4rem;margin-bottom:var(--spacing-sm);">
      <span class="links-section-icon" aria-hidden="true">${ICONS.pin}</span>
      <span>Links Relacionados</span>
    </strong>
    <div style="display:flex;flex-direction:column;gap:0.5rem;">
      ${linksHtml}
    </div>
  </div>
  ` : ''}

  <div class="share-section">
  <strong class="share-label">${t('news.share') || 'Compartilhar'}:</strong>
  <div class="share-links" role="list">
    <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}"
       target="_blank" rel="noopener noreferrer"
       class="share-link share-link--twitter"
       role="listitem"
       aria-label="Compartilhar no Twitter"
       title="Compartilhar no Twitter">
      ${ICONS.shareTwitter}
    </a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}"
       target="_blank" rel="noopener noreferrer"
       class="share-link share-link--facebook"
       role="listitem"
       aria-label="Compartilhar no Facebook"
       title="Compartilhar no Facebook">
      ${ICONS.shareFacebook}
    </a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}"
       target="_blank" rel="noopener noreferrer"
       class="share-link share-link--linkedin"
       role="listitem"
       aria-label="Compartilhar no LinkedIn"
       title="Compartilhar no LinkedIn">
      ${ICONS.shareLinkedin}
    </a>
    <a href="https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}"
       target="_blank" rel="noopener noreferrer"
       class="share-link share-link--whatsapp"
       role="listitem"
       aria-label="Compartilhar no WhatsApp"
       title="Compartilhar no WhatsApp">
      ${ICONS.shareWhatsapp}
    </a>
  </div>
  </div>
    </footer>
  `;
}

// ============================================
// PAGINAÇÃO
// ============================================

export function createPagination(currentPage, totalPages, baseUrl = '') {
  if (totalPages <= 1) return '';
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let i = start; i <= end; i++) pages.push(i);

  return `
    <nav class="pagination-nav" style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:var(--spacing-2xl);" aria-label="Paginação">
      <button class="pagination-btn" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>
      ${pages.map(p => `
        <button class="pagination-btn ${p === currentPage ? 'active' : ''}" data-page="${p}" aria-label="Ir para página ${p}" ${p === currentPage ? 'aria-current="page"' : ''}>${p}</button>
      `).join('')}
      <button class="pagination-btn" data-page="${currentPage + 1}" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Próxima página">›</button>
    </nav>
  `;
}

// ============================================
// CARROSSEL
// ============================================

export function createCarousel(newsItems) {
  if (!newsItems || newsItems.length === 0) return '';
  const cardsHTML = newsItems.map(item => createNewsCard(item)).join('');
  const doubledCards = cardsHTML + cardsHTML;
  return `
    <div class="carousel-wrapper">
      <div class="carousel-container">
        <div class="carousel-track">
          ${doubledCards}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// AUXILIARES
// ============================================

function getYouTubeThumbnail(videoUrl, fallbackImage) {
  if (!videoUrl) return fallbackImage || '';
  const match = String(videoUrl).match(/\/embed\/([A-Za-z0-9_-]+)/);
  if (!match) return fallbackImage || '';
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}

function getEmbedUrl(videoUrl) {
  if (!videoUrl) return '';
  const match = String(videoUrl).match(/\/embed\/([A-Za-z0-9_-]+)(?:\?[^"']*)?/);
  if (!match) return '';
  return `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1`;
}