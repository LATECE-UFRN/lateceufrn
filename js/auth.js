/**
 * auth.js — Gerenciamento de autenticação do painel administrativo
 *
 * FASE 1 (P0): Autenticação real removida (não existe backend neste projeto).
 *  - FALLBACK_CREDENTIALS removido.
 *  - Geração de token falso via btoa() removida.
 *  - Nenhuma credencial hardcoded permanece.
 *  - O frontend NÃO simula mais autenticação.
 *
 * Comportamento atual (arquitetura estática, sem backend):
 *  - login() sempre retorna falha com mensagem clara.
 *  - isAuthenticated() sempre retorna false.
 *  - initAuth() redireciona para /login.html em qualquer rota /admin/.
 *  - logout() limpa qualquer storage residual e redireciona.
 *
 * Caso um backend institucional seja adicionado no futuro, esta é a camada
 * onde a integração deve ocorrer — NUNCA reintroduzindo credenciais client-side.
 */

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

/**
 * @returns {Promise<boolean>} true se a API de autenticação está disponível.
 */
export async function isApiAvailable() {
  try {
    const response = await fetch('/api/health', {
      method: 'HEAD',
      signal: AbortSignal.timeout ? AbortSignal.timeout(2000) : undefined
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Tenta autenticar via backend real (se disponível).
 * Sem backend, retorna falha explícita — sem fallback inseguro.
 */
export async function login(username, password) {
  const apiAvailable = await isApiAvailable();

  if (!apiAvailable) {
    return {
      success: false,
      error: 'Autenticação não disponível. Este site é estático e não possui backend de autenticação.'
    };
  }

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      let message = 'Credenciais inválidas.';
      try {
        const data = await response.json();
        message = data.message || data.statusMessage || message;
      } catch { /* ignore */ }
      return { success: false, error: message };
    }

    const data = await response.json();
    if (data && data.token && data.user) {
      setToken(data.token);
      setUser(data.user);
      return { success: true, user: data.user };
    }
    return { success: false, error: 'Resposta inválida do servidor.' };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Erro ao conectar ao servidor.' };
  }
}

/**
 * Logout: remove qualquer dado residual e (opcionalmente) redireciona.
 */
export function logout(redirect = true) {
  removeToken();
  removeUser();
  if (redirect) {
    window.location.href = './login.html';
  }
}

/**
 * Verifica se o usuário está autenticado.
 * Sem backend real, sempre retorna false — nunca aceita token falso.
 */
export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  // Nenhuma validação client-side é confiável.
  // Se um backend real existir, a validação deve ocorrer via /api/auth/verify.
  return false;
}

// ============================================================
// Storage — helpers (mantidos por compatibilidade estrutural)
// ============================================================

export function getToken() {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
}

export function setToken(token) {
  try { localStorage.setItem(TOKEN_KEY, token); } catch { /* ignore */ }
}

export function removeToken() {
  try { localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ }
}

export function getUser() {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch { return null; }
}

export function setUser(user) {
  try { localStorage.setItem(USER_KEY, JSON.stringify(user)); } catch { /* ignore */ }
}

export function removeUser() {
  try { localStorage.removeItem(USER_KEY); } catch { /* ignore */ }
}

export function isAdmin() {
  const user = getUser();
  return !!(user && user.role === 'admin');
}

export function isEditor() {
  const user = getUser();
  return !!(user && (user.role === 'admin' || user.role === 'editor'));
}

export function getUserInitials() {
  const user = getUser();
  if (!user || !user.fullName) return '?';
  return user.fullName
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Verifica token via backend. Sem backend, retorna inválido.
 */
export async function verifyToken() {
  const token = getToken();
  if (!token) return { valid: false };

  const apiAvailable = await isApiAvailable();
  if (!apiAvailable) {
    // Sem backend, um token nunca pode ser considerado válido.
    return { valid: false };
  }

  try {
    const response = await fetch('/api/auth/verify', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) {
      removeToken();
      removeUser();
      return { valid: false };
    }
    const data = await response.json();
    if (data && data.user) {
      setUser(data.user);
      return { valid: true, user: data.user };
    }
    return { valid: false };
  } catch {
    return { valid: false };
  }
}

/**
 * Protege rotas /admin/. Sem backend, sempre redireciona.
 */
export async function initAuth(protectedPath = '/admin/', redirectTo = './login.html') {
  const currentPath = window.location.pathname;
  const isProtected = currentPath.startsWith(protectedPath) ||
                      currentPath === '/admin' ||
                      currentPath === '/admin/';
  if (!isProtected) return true;

  const result = await verifyToken();
  if (!result.valid) {
    window.location.href = redirectTo;
    return false;
  }
  return true;
}