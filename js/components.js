/**
 * Fábrica de componentes reutilizáveis.
 * Retorna strings HTML para injeção no DOM.
 * 
 * Versão 3.3 — Correção de caminhos de imagens usando resolvePath.
 */

import { t, getLocale, setLocale } from './i18n.js';

// ============================================
// HEADER E FOOTER
// ============================================

export function createHeader(isAuthenticated = false) {
  const locale = getLocale();
  const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
  const languageNames = { pt: 'Português', en: 'English', es: 'Español' };
  
  return `
    <!-- TOP BAR — VISÍVEL EM DESKTOP -->
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
            <img src="./assets/images/icons/instagram.png" alt="Instagram" class="social-icon" loading="lazy" onerror="this.style.display='none'">
          </a>
          <a href="https://www.youtube.com/channel/UCie5HHDcac4k2-7DaKWEuTQ" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube do LATECE">
            <img src="./assets/images/icons/youtube.png" alt="YouTube" class="social-icon" loading="lazy" onerror="this.style.display='none'">
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

    <!-- MAIN HEADER (BARRA DE MENU) — FIXA -->
    <header class="main-header" role="banner">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <a href="./" class="logo" aria-label="Página inicial do LATECE">
            <div class="logo-icon">
              <img src="./assets/images/logos/logo.png" alt="LATECE" loading="lazy" onerror="this.style.display='none'">
            </div>
          </a>

          <!-- Desktop Navigation -->
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

          <!-- User Section -->
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

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-button" aria-label="Menu" aria-expanded="false">
            <span class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
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
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <!-- Coluna 1: LATECE + LOGOS INSTITUCIONAIS -->
          <div class="footer-section">
            <h3>LATECE</h3>
            <p>Laboratório de Tecnologia Assistiva do Centro de Educação</p>
            <p><small>UFRN — Universidade Federal do Rio Grande do Norte</small></p>
            <div class="footer-institutional-logos" style="display:flex;align-items:center;gap:1.5rem;margin-top:var(--space-4);">
              <img src="./assets/images/logos/logo.png" alt="LATECE" class="footer-logo-img" loading="lazy">
              <img src="./assets/images/logos/ufrn-logo-branca.png" alt="UFRN" class="footer-logo-img" loading="lazy" onerror="this.style.display='none'">
            </div>
          </div>

          <!-- Coluna 2: Links Rápidos -->
          <div class="footer-section">
            <h4>Links Rápidos</h4>
            <ul class="footer-list">
              <li><a href="./about.html" class="footer-link">Sobre</a></li>
              <li><a href="./team.html" class="footer-link">Equipe</a></li>
              <li><a href="./equipment.html" class="footer-link">Equipamentos</a></li>
              <li><a href="./publications.html" class="footer-link">Publicações</a></li>
              <li><a href="./news.html" class="footer-link">Notícias</a></li>
            </ul>
          </div>

          <!-- Coluna 3: Contato -->
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
                  <img src="./assets/images/icons/instagram.png" alt="Instagram" class="social-icon" loading="lazy" onerror="this.style.display='none'">
                </a>
                <a href="https://www.youtube.com/channel/UCie5HHDcac4k2-7DaKWEuTQ" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube do LATECE">
                  <img src="./assets/images/icons/youtube.png" alt="YouTube" class="social-icon" loading="lazy" onerror="this.style.display='none'">
                </a>
              </div>
            </div>
          </div>

          <!-- Coluna 4: Localização -->
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
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa de localização do LATECE"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Rodapé inferior -->
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
// CARDS
// ============================================

export function createTeamCard(member, locale = 'pt') {
  const hasPhoto = member.showPhoto !== false && member.photoUrl && member.photoUrl.trim() !== '';
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Foto ou placeholder
  let photoHtml = '';
  if (hasPhoto) {
    photoHtml = `<img src="./${member.photoUrl.replace(/^\//, '')}" alt="${member.name}" class="team-photo" loading="lazy">`;
  } else {
    photoHtml = `
      <div class="team-avatar-placeholder">
        ${initials}
      </div>
    `;
  }

  // Ícone Lattes (sempre visível, com link se houver URL)
  const lattesIconHtml = member.lattesUrl
    ? `<a href="${member.lattesUrl}" target="_blank" rel="noopener noreferrer" class="team-lattes-link" aria-label="Currículo Lattes de ${member.name}">
         <img src="./assets/images/icons/lattes.png" alt="Lattes" class="team-lattes-icon">
       </a>`
    : `<img src="./assets/images/icons/lattes.png" alt="Lattes" class="team-lattes-icon">`;

  return `
    <div class="team-card" data-id="${member.id}">
      ${photoHtml}
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.roleLabel || member.role}</p>
        <hr class="team-divider">
        <p class="team-institution">${member.institution || ''}</p>
        <div class="team-lattes-wrapper">
          ${lattesIconHtml}
        </div>
      </div>
    </div>
  `;
}
/**
 * Cria um card de equipamento com suporte a download (quando disponível).
 * Estrutura esperada: { id, name, category, imageUrl, description, download: { type, url, size, version, platform, license } }
 * 
 * CORREÇÃO: Agora utiliza window.resolvePath para garantir caminhos absolutos das imagens.
 */
export function createEquipmentCard(equipment) {
  console.log('[components] Criando card para:', equipment.name, 'imageUrl:', equipment.imageUrl);
  
  // -------------------------------------------------------------
  // 1. TRATAMENTO DA IMAGEM com resolvePath
  // -------------------------------------------------------------
  let imagePath = equipment.imageUrl || '';
  // Remove barras iniciais
  if (imagePath.startsWith('/')) {
    imagePath = imagePath.substring(1);
  }
  
  let finalImage;
  if (imagePath) {
    // Usa resolvePath para construir caminho absoluto
    finalImage = window.resolvePath(imagePath);
  } else {
    // Fallback: placeholder
    finalImage = window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');
  }
  
  console.log('[components] Caminho final da imagem:', finalImage);

  // -------------------------------------------------------------
  // 2. CATEGORIA (traduzida)
  // -------------------------------------------------------------
  const categoryMap = {
    'CAA': t('equipment.categories.CAA') || 'Comunicação Aumentativa e Alternativa',
    'VidaDiaria': t('equipment.categories.VidaDiaria') || 'Auxílio para Vida Diária',
    'AcessibilidadeComputador': t('equipment.categories.AcessibilidadeComputador') || 'Acessibilidade no Computador',
    'BaixaVisao': t('equipment.categories.BaixaVisao') || 'Baixa Visão',
    'LivrosJogos': t('equipment.categories.LivrosJogos') || 'Livros e Jogos Adaptados'
  };
  const categoryLabel = categoryMap[equipment.category] || equipment.category;

  // -------------------------------------------------------------
  // 3. DOWNLOAD (objeto único, conforme JSON real)
  // -------------------------------------------------------------
  let downloadHtml = '';
  const d = equipment.download;
  if (d && d.url) {
    let fileUrl = d.url || '';
    if (fileUrl.startsWith('/')) {
      fileUrl = fileUrl.substring(1);
    }
    const finalFileUrl = fileUrl ? window.resolvePath(fileUrl) : '#';

    const iconMap = {
      'PDF': '📄',
      'APK': '📱',
      'EXE': '🖥️',
      'ZIP': '📦',
      'DOCX': '📝',
      'PPTX': '📊',
      'MP3': '🎵',
      'MP4': '🎬'
    };
    const icon = iconMap[d.type] || '📎';

    const metaParts = [];
    if (d.size) metaParts.push(d.size);
    if (d.version) metaParts.push(`v${d.version}`);
    if (d.platform) metaParts.push(d.platform);
    const metaText = metaParts.length ? ` (${metaParts.join(', ')})` : '';

    downloadHtml = `
      <div class="equipment-download" style="margin-top:var(--space-3); padding-top:var(--space-2); border-top:1px solid var(--color-border);">
        <a href="${finalFileUrl}" class="btn btn-primary btn-sm download-btn" download aria-label="Baixar ${d.type} de ${equipment.name}" style="display:inline-flex; align-items:center; gap:var(--space-2);">
          <span>${icon}</span>
          <span>Baixar ${d.type}${metaText}</span>
        </a>
        ${d.license ? `<span style="font-size:var(--font-size-caption); color:var(--color-text-muted); margin-left:var(--space-2);">${d.license}</span>` : ''}
      </div>
    `;
  }

  // -------------------------------------------------------------
  // 4. HTML DO CARD
  // -------------------------------------------------------------
  return `
    <div class="equipment-card" data-id="${equipment.id}" role="button" tabindex="0" aria-label="${equipment.name}">
      <div class="equipment-image">
        <img src="${finalImage}" alt="${equipment.name}" loading="lazy" onerror="this.onerror=null; this.src='${window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg')}';">
      </div>
      <div class="equipment-body">
        <h3 class="equipment-name">${equipment.name}</h3>
        <span class="equipment-category">${categoryLabel}</span>
        ${equipment.description ? `<p class="equipment-description">${equipment.description}</p>` : ''}
        ${downloadHtml}
        <button class="btn btn-sm btn-secondary view-details-btn" data-id="${equipment.id}" style="margin-top:var(--space-3);">
          Ver detalhes
        </button>
      </div>
    </div>
  `;
}

/**
 * Cria modal de equipamento com imagem usando resolvePath.
 */
export function createEquipmentModal(equipment) {
  let imagePath = equipment.imageUrl || '';
  if (imagePath.startsWith('/')) {
    imagePath = imagePath.substring(1);
  }
  const image = imagePath ? window.resolvePath(imagePath) : window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg');

  const categoryMap = {
    'CAA': t('equipment.categories.CAA') || 'Comunicação Aumentativa e Alternativa',
    'VidaDiaria': t('equipment.categories.VidaDiaria') || 'Auxílio para Vida Diária',
    'AcessibilidadeComputador': t('equipment.categories.AcessibilidadeComputador') || 'Acessibilidade no Computador',
    'BaixaVisao': t('equipment.categories.BaixaVisao') || 'Baixa Visão',
    'LivrosJogos': t('equipment.categories.LivrosJogos') || 'Livros e Jogos Adaptados'
  };
  const categoryLabel = categoryMap[equipment.category] || equipment.category;

  return `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-${equipment.id}">
      <div class="modal-content">
        <button class="close-button" aria-label="Fechar">×</button>
        <div class="modal-image">
          <img src="${image}" alt="${equipment.name}" loading="lazy" onerror="this.onerror=null; this.src='${window.resolvePath('assets/images/illustrations/placeholder-equipment.jpg')}';">
        </div>
        <div class="modal-body">
          <h2 id="modal-title-${equipment.id}">${equipment.name}</h2>
          <span class="equipment-category">${categoryLabel}</span>
          ${equipment.description ? `<p>${equipment.description}</p>` : ''}
        </div>
      </div>
    </div>
  `;
}

export function createPublicationItem(pub, locale = 'pt') {
  const typeMap = {
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
  const typeLabel = typeMap[pub.type] || pub.type;

  return `
    <div class="publication-item" data-id="${pub.id}">
      <div class="pub-header">
        <h3 class="pub-title">${pub.title}</h3>
        <span class="pub-type">${typeLabel}</span>
      </div>
      <p class="pub-authors">${pub.authors}</p>
      <p class="pub-meta">${pub.year} · ${pub.status ? t(`publications.statusLabels.${pub.status}`, pub.status) : ''}</p>
      ${pub.abstract ? `<p class="pub-abstract">${pub.abstract.slice(0, 200)}${pub.abstract.length > 200 ? '…' : ''}</p>` : ''}
      <div class="pub-actions">
        <button class="btn btn-sm btn-secondary view-details-btn" data-id="${pub.id}">${t('publications.viewDetails') || 'Ver detalhes'}</button>
        ${pub.fileUrl ? `<a href="${pub.fileUrl}" target="_blank" class="btn btn-sm btn-primary download-btn" data-id="${pub.id}">${t('publications.download') || 'Baixar'}</a>` : ''}
        ${pub.externalLink ? `<a href="${pub.externalLink}" target="_blank" class="btn btn-sm btn-outline">${t('publications.access') || 'Acessar'}</a>` : ''}
      </div>
    </div>
  `;
}

export function createPublicationModal(pub, locale = 'pt') {
  const typeMap = {
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
  const typeLabel = typeMap[pub.type] || pub.type;

  return `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-pub-title-${pub.id}">
      <div class="modal-content">
        <button class="close-button" aria-label="Fechar">×</button>
        <div class="modal-body">
          <h2 id="modal-pub-title-${pub.id}">${pub.title}</h2>
          <div class="pub-detail-meta">
            <span><strong>${t('publications.modal.publicationType') || 'Tipo'}:</strong> ${typeLabel}</span>
            <span><strong>${t('publications.modal.year') || 'Ano'}:</strong> ${pub.year}</span>
            <span><strong>${t('publications.modal.authors') || 'Autores'}:</strong> ${pub.authors}</span>
            ${pub.status ? `<span><strong>${t('publications.modal.status') || 'Status'}:</strong> ${t(`publications.statusLabels.${pub.status}`, pub.status)}</span>` : ''}
          </div>
          ${pub.abstract ? `<div class="pub-abstract-full"><strong>${t('publications.modal.abstract') || 'Resumo'}:</strong><p>${pub.abstract}</p></div>` : ''}
          ${pub.keywords && pub.keywords.length ? `<div><strong>${t('publications.modal.keywords') || 'Palavras-chave'}:</strong> ${pub.keywords.join(', ')}</div>` : ''}
          <div class="pub-actions-modal">
            ${pub.fileUrl ? `<a href="${pub.fileUrl}" target="_blank" class="btn btn-primary download-btn" data-id="${pub.id}">${t('publications.download') || 'Baixar'}</a>` : ''}
            ${pub.externalLink ? `<a href="${pub.externalLink}" target="_blank" class="btn btn-secondary">${t('publications.access') || 'Acessar'}</a>` : ''}
            ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" class="btn btn-outline">DOI</a>` : ''}
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
  let imagePath = news.imageUrl || '';
  if (imagePath.startsWith('/')) {
    imagePath = imagePath.substring(1);
  }
  const imageUrl = imagePath ? window.resolvePath(imagePath) : window.resolvePath('assets/images/illustrations/placeholder-news.jpg');
  const formattedDate = news.createdAt
    ? new Date(news.createdAt).toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : '';
  const isVideo = news.isVideo === true;
  
  return `
    <article class="news-card" data-id="${news.id}">
      <div class="card-image-wrapper">
        ${isVideo ? `
          <div class="video-placeholder">
            <div class="video-thumbnail">
              <img class="video-thumb-img" src="${getYouTubeThumbnail(news.videoUrl, imageUrl)}" alt="${news.title}" loading="lazy">
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
          ${news.category ? `<span class="card-category">${news.category}</span>` : ''}
          ${formattedDate ? `<span>${formattedDate}</span>` : ''}
        </div>
        <h3 class="card-title">${news.title || 'Sem título'}</h3>
        ${news.excerpt ? `<p class="card-excerpt">${news.excerpt}</p>` : ''}
        <div class="card-footer">
          <a href="./news-detail.html?id=${news.id}" class="btn btn-primary btn-sm">
            ${isVideo ? '▶ Assistir' : 'Leia Mais'}
          </a>
        </div>
      </div>
    </article>
  `;
}

export function createNewsDetail(news, locale = 'pt') {
  const formattedDate = news.createdAt
    ? new Date(news.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric'
      })
    : '';

  let imagePath = news.imageUrl || '';
  if (imagePath.startsWith('/')) {
    imagePath = imagePath.substring(1);
  }
  const imageUrl = imagePath ? window.resolvePath(imagePath) : window.resolvePath('assets/images/illustrations/placeholder-news.jpg');
  const isVideo = news.isVideo === true;

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(news.title || '');

  return `
    <a href="./news.html" class="back-link" style="display:inline-flex;align-items:center;gap:0.5rem;color:var(--color-primary);text-decoration:none;font-weight:500;margin-bottom:var(--spacing-lg);">← ${t('news.backToNews') || 'Voltar para Notícias'}</a>

    <header class="article-header">
      <p class="category-tag" style="display:inline-block;background:var(--color-primary);color:var(--color-white);padding:0.25rem 0.75rem;border-radius:999px;font-size:0.875rem;font-weight:600;margin-bottom:var(--spacing-md);">${news.category || ''}</p>
      <h1 class="article-title" style="font-size:clamp(1.8rem, 3vw, 2.8rem);font-weight:800;color:var(--color-gray-900);line-height:1.2;">${news.title}</h1>
      ${news.excerpt ? `<p class="article-excerpt" style="font-size:1.2rem;color:var(--color-gray-500);margin-top:var(--spacing-md);">${news.excerpt}</p>` : ''}
      <div class="article-meta" style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--spacing-xl);color:var(--color-gray-500);font-size:0.9rem;">
        <div class="author-info" style="display:flex;align-items:center;gap:0.75rem;">
          <span>${formattedDate}</span>
          ${news.authorName ? `<span>• por ${news.authorName}</span>` : ''}
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </figure>
    ` : news.imageUrl ? `
      <figure class="featured-image-container" style="margin:var(--spacing-xl) 0;border-radius:var(--radius-md);overflow:hidden;">
        <img src="${imageUrl}" alt="${news.title}" style="width:100%;height:auto;display:block;">
      </figure>
    ` : ''}

    <div class="article-content" style="line-height:1.8;font-size:1.1rem;color:var(--color-gray-800);">
      ${news.content || '<p>Conteúdo não disponível.</p>'}
    </div>

    <footer class="article-footer" style="margin-top:var(--spacing-2xl);padding-top:var(--spacing-xl);border-top:1px solid var(--color-gray-200);">
      ${news.tags && news.tags.length > 0 ? `
        <div class="tags-section" style="margin-bottom:var(--spacing-lg);">
          <strong style="margin-right:var(--spacing-md);">${t('news.tags') || 'Tags'}:</strong>
          ${news.tags.map(tag => `<span class="tag" style="background:var(--color-gray-50);border:1px solid var(--color-gray-200);padding:0.25rem 0.75rem;border-radius:4px;margin-right:0.5rem;font-size:0.875rem;">${tag}</span>`).join('')}
        </div>
      ` : ''}

      ${news.links && news.links.length > 0 ? `
        <div class="links-section" style="margin-bottom:var(--spacing-lg);">
          <strong style="display:block;margin-bottom:var(--spacing-sm);">📌 Links Relacionados</strong>
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${news.links.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.5rem;padding:0.75rem 1rem;background:rgba(46,16,101,0.05);border:1px solid rgba(46,16,101,0.15);border-radius:var(--radius-md);text-decoration:none;color:var(--color-primary);font-weight:600;transition:all var(--transition-fast);">
                <span>🔗</span>
                <span>${link.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="share-section">
        <strong style="margin-right:var(--spacing-md);">${t('news.share') || 'Compartilhar'}:</strong>
        <div class="share-links" style="display:inline-flex;gap:var(--spacing-md);">
          <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}" target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Twitter" style="color:var(--color-gray-500);font-size:1.5rem;transition:color var(--transition-fast);">🐦</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook" style="color:var(--color-gray-500);font-size:1.5rem;transition:color var(--transition-fast);">📘</a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}" target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no LinkedIn" style="color:var(--color-gray-500);font-size:1.5rem;transition:color var(--transition-fast);">🔗</a>
          <a href="https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}" target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp" style="color:var(--color-gray-500);font-size:1.5rem;transition:color var(--transition-fast);">💬</a>
        </div>
      </div>
    </footer>
  `;
}

// ============================================
// PAGINAÇÃO (universal)
// ============================================

export function createPagination(currentPage, totalPages, baseUrl = '') {
  if (totalPages <= 1) return '';
  
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return `
    <nav class="pagination-nav" style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:var(--spacing-2xl);" aria-label="Paginação">
      <button class="pagination-btn" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Página anterior">
        ‹
      </button>
      ${pages.map(p => `
        <button class="pagination-btn ${p === currentPage ? 'active' : ''}" data-page="${p}" aria-label="Ir para página ${p}" ${p === currentPage ? 'aria-current="page"' : ''}>
          ${p}
        </button>
      `).join('')}
      <button class="pagination-btn" data-page="${currentPage + 1}" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Próxima página">
        ›
      </button>
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
// FUNÇÕES AUXILIARES
// ============================================

function getYouTubeThumbnail(videoUrl, fallbackImage) {
  if (!videoUrl) return fallbackImage || '';
  const match = videoUrl.match(/\/embed\/([^?]+)/);
  if (!match) return fallbackImage || '';
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}

function getEmbedUrl(videoUrl) {
  if (!videoUrl) return '';
  let url = videoUrl.replace('www.youtube.com', 'www.youtube-nocookie.com');
  const separator = url.includes('?') ? '&' : '?';
  url += `${separator}rel=0&modestbranding=1`;
  return url;
}
