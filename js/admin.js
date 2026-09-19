/**
 * admin.js — Ponto de entrada do painel administrativo (SPA)
 * Gerencia autenticação, roteamento, header, sidebar e views
 */

import { isAuthenticated, getUser, logout, getToken, initAuth } from './auth.js';
import { registerRoute, navigateTo, initRouter, getParamsFromURL } from './router.js';
import { t } from './i18n.js';

// ============================================
// RENDERIZAÇÃO DE COMPONENTES DO ADMIN
// ============================================

/**
 * Renderiza o header do admin.
 */
function renderAdminHeader() {
  const header = document.getElementById('admin-header');
  if (!header) return;

  const user = getUser();
  const initials = user?.fullName
    ? user.fullName.split(' ').filter(Boolean).map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  header.innerHTML = `
    <div class="admin-logo">
      <div class="logo-icon">L</div>
      <div>
        <h1>LATECE Admin</h1>
        <span>Painel de Administração</span>
      </div>
    </div>
    <div class="admin-actions">
      <div class="user-info">
        <div class="user-avatar">${initials}</div>
        <div>
          <div class="user-name">${user?.fullName || 'Administrador'}</div>
          <div class="user-role">${user?.role || 'admin'}</div>
        </div>
      </div>
      <button class="logout-btn" id="admin-logout-btn">Sair</button>
    </div>
  `;

  // Evento de logout
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja sair?')) {
        logout(true);
      }
    });
  }
}

/**
 * Renderiza a sidebar do admin.
 * @param {string} activePath - Caminho ativo
 */
function renderAdminSidebar(activePath = '/admin') {
  const sidebar = document.getElementById('admin-sidebar');
  if (!sidebar) return;

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/news', label: 'Notícias', icon: '📰' },
    { path: '/admin/news/create', label: 'Nova Notícia', icon: '➕' },
    // { path: '/admin/equipment', label: 'Equipamentos', icon: '🛠️' },
    // { path: '/admin/publications', label: 'Publicações', icon: '📚' },
    // { path: '/admin/team', label: 'Equipe', icon: '👥' },
    // { path: '/admin/settings', label: 'Configurações', icon: '⚙️' },
  ];

  // Adicionar opção de criar usuário (apenas admin)
  const user = getUser();
  if (user?.role === 'admin') {
    navItems.push({ path: '/admin/secret-register', label: 'Criar Usuário', icon: '🔐' });
  }

  sidebar.innerHTML = `
    <div class="sidebar-inner">
      <nav class="admin-nav">
        ${navItems.map(item => `
          <button class="admin-nav-item ${item.path === activePath ? 'active' : ''}" data-path="${item.path}">
            ${item.icon} ${item.label}
          </button>
        `).join('')}
        <div class="admin-nav-divider"></div>
        <a href="/" class="admin-nav-item" style="color:var(--color-gray-400);">🏠 Ver Site</a>
      </nav>
    </div>
  `;

  // Eventos de navegação
  sidebar.querySelectorAll('.admin-nav-item[data-path]').forEach(btn => {
    btn.addEventListener('click', () => {
      const path = btn.getAttribute('data-path');
      if (path) {
        navigateTo(path);
        // Atualizar estado ativo
        sidebar.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}

// ============================================
// VIEWS (DASHBOARD, NOTÍCIAS, CRIAR, EDITAR)
// ============================================

/**
 * View: Dashboard
 */
function renderDashboard(params) {
  const container = document.getElementById('admin-content');
  if (!container) return;

  // Estatísticas mock
  const stats = [
    { label: 'Total de Notícias', value: 0, icon: '📰', color: 'blue' },
    { label: 'Rascunhos', value: 0, icon: '📝', color: 'orange' },
    { label: 'Publicados', value: 0, icon: '✅', color: 'green' },
    { label: 'Usuários', value: 1, icon: '👤', color: 'purple' },
  ];

  // Carregar notícias para contar
  fetch('/api/news?limit=1')
    .then(res => res.json())
    .then(data => {
      const news = data.news || data.data || [];
      const total = news.length;
      const published = news.filter(n => n.status === 'published').length;
      const drafts = news.filter(n => n.status === 'draft').length;
      stats[0].value = total;
      stats[1].value = drafts;
      stats[2].value = published;
      // Atualizar o DOM
      const statElements = container.querySelectorAll('.stat-number');
      if (statElements.length >= 4) {
        statElements[0].textContent = total;
        statElements[1].textContent = drafts;
        statElements[2].textContent = published;
      }
    })
    .catch(() => {
      // Mantém valores padrão
    });

  container.innerHTML = `
    <div style="margin-bottom:var(--spacing-xl);">
      <h2 style="font-size:1.5rem;font-weight:700;color:var(--color-gray-900);">Dashboard</h2>
      <p style="color:var(--color-gray-500);">Bem-vindo ao painel administrativo do LATECE.</p>
    </div>
    <div class="dashboard-stats">
      ${stats.map(stat => `
        <div class="stat-card">
          <div class="stat-icon ${stat.color}">${stat.icon}</div>
          <div class="stat-content">
            <div class="stat-number">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="background:var(--color-white);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:var(--spacing-xl);margin-top:var(--spacing-xl);">
      <h3 style="font-size:1.125rem;font-weight:600;color:var(--color-gray-900);margin-bottom:var(--spacing-md);">Atividade Recente</h3>
      <p style="color:var(--color-gray-500);">Nenhuma atividade recente.</p>
    </div>
  `;
}

/**
 * View: Listagem de Notícias
 */
async function renderNewsList(params) {
  const container = document.getElementById('admin-content');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--spacing-md);margin-bottom:var(--spacing-xl);">
      <div>
        <h2 style="font-size:1.5rem;font-weight:700;color:var(--color-gray-900);">Gerenciar Notícias</h2>
        <p style="color:var(--color-gray-500);">Gerencie as notícias e eventos do portal</p>
      </div>
      <button class="btn btn-primary" id="create-news-btn">➕ Nova Notícia</button>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:var(--spacing-md);margin-bottom:var(--spacing-lg);">
      <input type="text" id="admin-news-search" class="form-control" placeholder="Pesquisar notícias..." style="max-width:300px;padding:0.5rem 1rem;">
      <select id="admin-news-status-filter" class="form-control" style="max-width:180px;padding:0.5rem 1rem;">
        <option value="">Todos os Status</option>
        <option value="published">Publicado</option>
        <option value="draft">Rascunho</option>
      </select>
      <select id="admin-news-category-filter" class="form-control" style="max-width:180px;padding:0.5rem 1rem;">
        <option value="">Todas as Categorias</option>
        <option value="Evento">Evento</option>
        <option value="Notícia">Notícia</option>
        <option value="Aviso">Aviso</option>
        <option value="Workshop">Workshop</option>
        <option value="Palestra">Palestra</option>
        <option value="Pesquisa">Pesquisa</option>
      </select>
    </div>
    <div id="admin-news-table-wrapper" class="admin-table-wrapper">
      <div class="loading-container" style="padding:2rem 0;">
        <div class="loading-spinner"></div>
        <p>Carregando notícias...</p>
      </div>
    </div>
  `;

  // Evento: criar nova notícia
  document.getElementById('create-news-btn')?.addEventListener('click', () => {
    navigateTo('/admin/news/create');
  });

  // Carregar notícias
  await loadAdminNews();

  // Configurar filtros
  const searchInput = document.getElementById('admin-news-search');
  const statusFilter = document.getElementById('admin-news-status-filter');
  const categoryFilter = document.getElementById('admin-news-category-filter');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(loadAdminNews, 500));
  }
  if (statusFilter) {
    statusFilter.addEventListener('change', loadAdminNews);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener('change', loadAdminNews);
  }
}

/**
 * Carrega e renderiza a tabela de notícias com filtros.
 */
async function loadAdminNews() {
  const wrapper = document.getElementById('admin-news-table-wrapper');
  if (!wrapper) return;

  const search = document.getElementById('admin-news-search')?.value || '';
  const status = document.getElementById('admin-news-status-filter')?.value || '';
  const category = document.getElementById('admin-news-category-filter')?.value || '';

  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (status) params.set('status', status);
  if (category) params.set('category', category);
  params.set('limit', '50');

  try {
    const response = await fetch(`/api/news?${params.toString()}`);
    if (!response.ok) throw new Error('Erro ao carregar notícias');
    const data = await response.json();
    const news = data.news || data.data || [];

    if (news.length === 0) {
      wrapper.innerHTML = `
        <div style="text-align:center;padding:3rem 1rem;">
          <p style="color:var(--color-gray-500);">Nenhuma notícia encontrada.</p>
        </div>
      `;
      return;
    }

    wrapper.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Categoria</th>
            <th>Atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          ${news.map(item => `
            <tr>
              <td>
                <div style="display:flex;align-items:center;gap:var(--spacing-sm);">
                  ${item.imageUrl ? `<img src="${item.imageUrl}" style="width:40px;height:40px;object-fit:cover;border-radius:var(--radius-sm);" alt="">` : ''}
                  <div>
                    <div style="font-weight:500;color:var(--color-gray-900);">${item.title || 'Sem título'}</div>
                    ${item.excerpt ? `<div style="font-size:0.75rem;color:var(--color-gray-500);">${item.excerpt.slice(0, 60)}${item.excerpt.length > 60 ? '...' : ''}</div>` : ''}
                  </div>
                </div>
              </td>
              <td><span class="status-badge ${item.status || 'draft'}">${item.status === 'published' ? 'Publicado' : 'Rascunho'}</span></td>
              <td>${item.category || '-'}</td>
              <td>${item.updatedAt ? new Date(item.updatedAt).toLocaleDateString('pt-BR') : '-'}</td>
              <td>
                <div class="action-buttons">
                  <button class="action-btn" title="Visualizar" data-id="${item.id}" data-action="view">👁️</button>
                  <button class="action-btn" title="Editar" data-id="${item.id}" data-action="edit">✏️</button>
                  ${item.status === 'draft' ? `<button class="action-btn" title="Publicar" data-id="${item.id}" data-action="publish">📤</button>` : ''}
                  <button class="action-btn danger" title="Excluir" data-id="${item.id}" data-action="delete">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Eventos das ações
    wrapper.querySelectorAll('.action-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const action = btn.dataset.action;

        switch (action) {
          case 'view':
            window.open(`/news-detail.html?id=${id}`, '_blank');
            break;
          case 'edit':
            navigateTo(`/admin/news/edit`, { id });
            break;
          case 'publish':
            if (confirm('Tem certeza que deseja publicar esta notícia?')) {
              await updateNewsStatus(id, 'published');
              loadAdminNews(); // Recarregar
            }
            break;
          case 'delete':
            if (confirm('Tem certeza que deseja excluir esta notícia?')) {
              await deleteNews(id);
              loadAdminNews(); // Recarregar
            }
            break;
        }
      });
    });

  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
    wrapper.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--color-terracotta);">Erro ao carregar notícias.</p>`;
  }
}

/**
 * Atualiza o status de uma notícia.
 */
async function updateNewsStatus(id, status) {
  try {
    const token = getToken();
    const response = await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Erro ao atualizar status');
    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    alert('Erro ao publicar notícia.');
  }
}

/**
 * Exclui uma notícia.
 */
async function deleteNews(id) {
  try {
    const token = getToken();
    const response = await fetch(`/api/news/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Erro ao excluir');
    return true;
  } catch (error) {
    console.error('Erro ao excluir:', error);
    alert('Erro ao excluir notícia.');
  }
}

/**
 * View: Criar/Editar Notícia
 */
function renderNewsForm(params) {
  const container = document.getElementById('admin-content');
  if (!container) return;

  const id = params.id ? parseInt(params.id) : null;
  const isEdit = !!id;

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--spacing-md);margin-bottom:var(--spacing-xl);">
      <div>
        <h2 style="font-size:1.5rem;font-weight:700;color:var(--color-gray-900);">${isEdit ? 'Editar Notícia' : 'Criar Nova Notícia'}</h2>
        <p style="color:var(--color-gray-500);">${isEdit ? 'Atualize os campos da notícia.' : 'Preencha os campos abaixo para adicionar uma notícia.'}</p>
      </div>
      <button class="btn btn-secondary" id="back-to-news-btn">← Voltar</button>
    </div>
    <div class="admin-form-container">
      <form id="news-form" novalidate>
        <div class="form-group">
          <label for="news-title" class="form-label">Título *</label>
          <input type="text" id="news-title" class="form-control" placeholder="Título da notícia" required>
          <div class="error-message" id="news-title-error" style="display:none;"></div>
        </div>
        <div class="form-group">
          <label for="news-content" class="form-label">Conteúdo</label>
          <textarea id="news-content" class="form-control" rows="10" placeholder="Escreva o conteúdo da notícia aqui..."></textarea>
        </div>
        <div class="form-group">
          <label for="news-excerpt" class="form-label">Resumo (Opcional)</label>
          <textarea id="news-excerpt" class="form-control" rows="3" placeholder="Um resumo curto que aparecerá na listagem."></textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-md);">
          <div class="form-group">
            <label for="news-category" class="form-label">Categoria</label>
            <select id="news-category" class="form-control">
              <option value="">Selecione...</option>
              <option value="Evento">Evento</option>
              <option value="Notícia">Notícia</option>
              <option value="Aviso">Aviso</option>
              <option value="Workshop">Workshop</option>
              <option value="Palestra">Palestra</option>
              <option value="Pesquisa">Pesquisa</option>
            </select>
          </div>
          <div class="form-group">
            <label for="news-status" class="form-label">Status</label>
            <select id="news-status" class="form-control">
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Tags</label>
          <div class="tags-input-wrapper">
            <input type="text" id="news-tags-input" class="form-control" placeholder="Adicione tags (separadas por vírgula)">
            <button type="button" class="btn btn-secondary" id="add-tag-btn">Adicionar</button>
          </div>
          <div id="news-tags-list" class="tags-list"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Imagem de Destaque</label>
          <div class="upload-area" id="image-upload-area">
            <div class="upload-icon">🖼️</div>
            <p>Arraste uma imagem ou clique para selecionar</p>
            <input type="file" id="news-image-input" accept="image/*" style="display:none;">
            <div id="image-preview-container"></div>
          </div>
          <div id="image-preview" style="display:none;">
            <img id="image-preview-img" src="" alt="Pré-visualização">
            <button type="button" class="btn btn-sm btn-secondary" id="remove-image-btn" style="margin-top:var(--spacing-sm);">Remover</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Vídeo (YouTube)</label>
          <div style="display:flex;gap:var(--spacing-md);flex-wrap:wrap;">
            <label style="display:flex;align-items:center;gap:var(--spacing-sm);">
              <input type="checkbox" id="news-is-video"> Esta notícia é um vídeo
            </label>
            <input type="text" id="news-video-url" class="form-control" placeholder="URL do vídeo (ex: https://www.youtube.com/embed/ID)" style="flex:1;min-width:200px;">
          </div>
        </div>
        <div class="form-group" id="links-section">
          <label class="form-label">Links Relacionados</label>
          <div id="links-list">
            <!-- Links serão adicionados aqui -->
          </div>
          <div style="display:flex;gap:var(--spacing-sm);flex-wrap:wrap;margin-top:var(--spacing-sm);">
            <input type="text" id="link-label" class="form-control" placeholder="Texto do link" style="flex:1;min-width:120px;">
            <input type="url" id="link-url" class="form-control" placeholder="URL" style="flex:2;min-width:200px;">
            <button type="button" class="btn btn-secondary" id="add-link-btn">Adicionar Link</button>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary" id="submit-news-btn">${isEdit ? 'Atualizar' : 'Publicar Notícia'}</button>
          <button type="button" class="btn btn-secondary" id="save-draft-btn">Salvar Rascunho</button>
          <button type="button" class="btn btn-outline" id="cancel-news-btn">Cancelar</button>
        </div>
      </form>
    </div>
  `;

  // Carregar dados se for edição
  let tags = [];
  let links = [];
  let imageFile = null;
  let currentImageUrl = null;

  if (isEdit) {
    loadNewsForEdit(id);
  }

  // Eventos
  document.getElementById('back-to-news-btn')?.addEventListener('click', () => {
    navigateTo('/admin/news');
  });

  document.getElementById('cancel-news-btn')?.addEventListener('click', () => {
    navigateTo('/admin/news');
  });

  // Tags
  const tagsInput = document.getElementById('news-tags-input');
  const addTagBtn = document.getElementById('add-tag-btn');
  const tagsList = document.getElementById('news-tags-list');

  function renderTags() {
    tagsList.innerHTML = tags.map(tag => `
      <span class="tag-item">
        ${tag}
        <button type="button" class="remove-tag" data-tag="${tag}">×</button>
      </span>
    `).join('');
    tagsList.querySelectorAll('.remove-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        tags = tags.filter(t => t !== tag);
        renderTags();
      });
    });
  }

  addTagBtn?.addEventListener('click', () => {
    const val = tagsInput.value.trim();
    if (val && !tags.includes(val)) {
      tags.push(val);
      tagsInput.value = '';
      renderTags();
    }
  });

  tagsInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTagBtn?.click();
    }
  });

  // Links
  const linkLabel = document.getElementById('link-label');
  const linkUrl = document.getElementById('link-url');
  const addLinkBtn = document.getElementById('add-link-btn');
  const linksList = document.getElementById('links-list');

  function renderLinks() {
    linksList.innerHTML = links.map((link, index) => `
      <div style="display:flex;align-items:center;gap:var(--spacing-sm);padding:var(--spacing-xs) var(--spacing-sm);background:var(--color-gray-50);border-radius:var(--radius-sm);margin-bottom:var(--spacing-xs);">
        <span style="flex:1;">🔗 <strong>${link.label}</strong> — ${link.url}</span>
        <button type="button" class="remove-link-btn" data-index="${index}" style="background:none;border:none;color:var(--color-terracotta);cursor:pointer;">×</button>
      </div>
    `).join('');
    linksList.querySelectorAll('.remove-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        links.splice(index, 1);
        renderLinks();
      });
    });
  }

  addLinkBtn?.addEventListener('click', () => {
    const label = linkLabel.value.trim();
    const url = linkUrl.value.trim();
    if (label && url) {
      links.push({ label, url });
      linkLabel.value = '';
      linkUrl.value = '';
      renderLinks();
    }
  });

  // Upload de imagem
  const uploadArea = document.getElementById('image-upload-area');
  const imageInput = document.getElementById('news-image-input');
  const previewContainer = document.getElementById('image-preview-container');
  const previewImg = document.getElementById('image-preview-img');
  const removeImageBtn = document.getElementById('remove-image-btn');

  uploadArea?.addEventListener('click', () => imageInput?.click());
  uploadArea?.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea?.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
  });
  uploadArea?.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleImageFile(file);
  });

  imageInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImageFile(file);
  });

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }
    imageFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      previewContainer.innerHTML = `<div style="margin-top:var(--spacing-sm);"><img src="${e.target.result}" style="max-width:200px;max-height:150px;border-radius:var(--radius-sm);"></div>`;
      document.getElementById('image-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
  }

  removeImageBtn?.addEventListener('click', () => {
    imageFile = null;
    currentImageUrl = null;
    previewContainer.innerHTML = '';
    document.getElementById('image-preview').style.display = 'none';
    if (imageInput) imageInput.value = '';
  });

  // Submit
  const form = document.getElementById('news-form');
  const submitBtn = document.getElementById('submit-news-btn');
  const saveDraftBtn = document.getElementById('save-draft-btn');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await submitNews('published');
  });

  saveDraftBtn?.addEventListener('click', async () => {
    await submitNews('draft');
  });

  async function submitNews(status) {
    const title = document.getElementById('news-title').value.trim();
    const content = document.getElementById('news-content').value.trim();
    const excerpt = document.getElementById('news-excerpt').value.trim();
    const category = document.getElementById('news-category').value;
    const videoUrl = document.getElementById('news-video-url').value.trim();
    const isVideo = document.getElementById('news-is-video').checked;

    if (!title) {
      document.getElementById('news-title-error').textContent = 'Título é obrigatório.';
      document.getElementById('news-title-error').style.display = 'block';
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    if (content) formData.append('content', content);
    if (excerpt) formData.append('excerpt', excerpt);
    formData.append('status', status);
    if (category) formData.append('category', category);
    if (tags.length) formData.append('tags', JSON.stringify(tags));
    if (imageFile) formData.append('image', imageFile);
    formData.append('isVideo', String(isVideo));
    if (videoUrl) formData.append('videoUrl', videoUrl);
    if (links.length) formData.append('links', JSON.stringify(links));

    // Se estiver editando, usa PUT
    const method = isEdit ? 'PUT' : 'POST';
    const url = isEdit ? `/api/news/${id}` : '/api/news';

    try {
      submitBtn.disabled = true;
      saveDraftBtn.disabled = true;
      const token = getToken();
      const response = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      if (!response.ok) throw new Error('Erro ao salvar notícia');
      const result = await response.json();
      alert(isEdit ? 'Notícia atualizada com sucesso!' : 'Notícia criada com sucesso!');
      navigateTo('/admin/news');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar notícia. Tente novamente.');
    } finally {
      submitBtn.disabled = false;
      saveDraftBtn.disabled = false;
    }
  }

  async function loadNewsForEdit(id) {
    try {
      const response = await fetch(`/api/news/${id}`);
      if (!response.ok) throw new Error('Notícia não encontrada');
      const news = await response.json();
      
      document.getElementById('news-title').value = news.title || '';
      document.getElementById('news-content').value = news.content || '';
      document.getElementById('news-excerpt').value = news.excerpt || '';
      if (news.category) document.getElementById('news-category').value = news.category;
      if (news.status) document.getElementById('news-status').value = news.status;
      
      tags = news.tags || [];
      renderTags();
      
      links = news.links || [];
      renderLinks();
      
      if (news.imageUrl) {
        currentImageUrl = news.imageUrl;
        previewContainer.innerHTML = `<div style="margin-top:var(--spacing-sm);"><img src="${news.imageUrl}" style="max-width:200px;max-height:150px;border-radius:var(--radius-sm);"></div>`;
        document.getElementById('image-preview').style.display = 'block';
      }
      
      if (news.isVideo) {
        document.getElementById('news-is-video').checked = true;
      }
      if (news.videoUrl) {
        document.getElementById('news-video-url').value = news.videoUrl;
      }
      
    } catch (error) {
      console.error('Erro ao carregar notícia para edição:', error);
      alert('Erro ao carregar dados da notícia.');
    }
  }
}

/**
 * View: Criar Usuário (Secret Register)
 */
function renderSecretRegister(params) {
  const container = document.getElementById('admin-content');
  if (!container) return;

  const user = getUser();
  if (user?.role !== 'admin') {
    container.innerHTML = `<p style="color:var(--color-terracotta);">Acesso negado. Apenas administradores podem criar usuários.</p>`;
    return;
  }

  container.innerHTML = `
    <div style="margin-bottom:var(--spacing-xl);">
      <h2 style="font-size:1.5rem;font-weight:700;color:var(--color-gray-900);">Criar Novo Usuário</h2>
      <p style="color:var(--color-gray-500);">Preencha os campos abaixo para cadastrar um novo usuário no sistema.</p>
    </div>
    <div class="admin-form-container">
      <form id="register-form" novalidate>
        <div class="form-group">
          <label for="reg-username" class="form-label">Nome de Usuário *</label>
          <input type="text" id="reg-username" class="form-control" placeholder="Nome de usuário" required>
        </div>
        <div class="form-group">
          <label for="reg-email" class="form-label">E-mail *</label>
          <input type="email" id="reg-email" class="form-control" placeholder="E-mail" required>
        </div>
        <div class="form-group">
          <label for="reg-password" class="form-label">Senha *</label>
          <input type="password" id="reg-password" class="form-control" placeholder="Senha (mínimo 8 caracteres)" required>
        </div>
        <div class="form-group">
          <label for="reg-fullname" class="form-label">Nome Completo</label>
          <input type="text" id="reg-fullname" class="form-control" placeholder="Nome completo">
        </div>
        <div class="form-group">
          <label for="reg-role" class="form-label">Função (Role)</label>
          <select id="reg-role" class="form-control">
            <option value="user">Usuário Comum</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <div class="form-group" style="border-left:4px solid var(--color-terracotta);padding-left:var(--spacing-md);background:#fef2f2;border-radius:var(--radius-md);">
          <label for="reg-admin-key" class="form-label">🔐 Senha Mestra (Autorização) *</label>
          <input type="password" id="reg-admin-key" class="form-control" placeholder="Digite a chave de administrador" required>
          <p style="font-size:0.75rem;color:var(--color-gray-500);">Esta chave é necessária para criar novos usuários. Ela é definida no backend.</p>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Cadastrar Usuário</button>
          <button type="button" class="btn btn-outline" id="cancel-register-btn">Cancelar</button>
        </div>
        <div id="register-message" style="margin-top:var(--spacing-md);"></div>
      </form>
    </div>
  `;

  document.getElementById('cancel-register-btn')?.addEventListener('click', () => {
    navigateTo('/admin');
  });

  const form = document.getElementById('register-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const fullName = document.getElementById('reg-fullname').value.trim();
    const role = document.getElementById('reg-role').value;
    const adminKey = document.getElementById('reg-admin-key').value.trim();

    const message = document.getElementById('register-message');

    try {
      const response = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, fullName, role, adminKey })
      });
      const data = await response.json();
      if (response.ok) {
        message.innerHTML = `<p style="color:var(--color-green);">✅ Usuário ${username} criado com sucesso!</p>`;
        form.reset();
      } else {
        message.innerHTML = `<p style="color:var(--color-terracotta);">❌ ${data.statusMessage || 'Erro ao criar usuário'}</p>`;
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      message.innerHTML = `<p style="color:var(--color-terracotta);">❌ Erro de conexão com o servidor.</p>`;
    }
  });
}

// ============================================
// INICIALIZAÇÃO DO ADMIN
// ============================================

async function initAdmin() {
  // 1. Verificar autenticação
  const authenticated = await initAuth('/admin/', '/login.html');
  if (!authenticated) return;

  // 2. Renderizar header e sidebar
  renderAdminHeader();
  renderAdminSidebar('/admin');

  // 3. Registrar rotas
  registerRoute('/admin', renderDashboard);
  registerRoute('/admin/', renderDashboard);
  registerRoute('/admin/news', renderNewsList);
  registerRoute('/admin/news/create', renderNewsForm);
  registerRoute('/admin/news/edit', renderNewsForm);
  registerRoute('/admin/secret-register', renderSecretRegister);

  // 4. Iniciar roteador
  initRouter('/admin');

  // 5. Atualizar sidebar ao navegar (evento)
  window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    renderAdminSidebar(currentPath);
  });

  // Sobrescrever navigateTo para atualizar sidebar também
  const originalNavigate = window.navigateTo;
  window.navigateTo = (path, params) => {
    if (originalNavigate) originalNavigate(path, params);
    renderAdminSidebar(path);
  };
}

// Inicializar
document.addEventListener('DOMContentLoaded', initAdmin);

// Função debounce
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}