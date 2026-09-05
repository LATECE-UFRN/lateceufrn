/**
 * auth.js — Gerenciamento de autenticação JWT
 * Com fallback para credenciais fixas em ambiente sem backend.
 */

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

// Credenciais fixas para fallback (apenas demonstração)
const FALLBACK_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
  user: {
    id: 1,
    username: 'admin',
    fullName: 'Administrador',
    role: 'admin'
  }
};

/**
 * Verifica se a API de autenticação está disponível.
 * @returns {Promise<boolean>}
 */
export async function isApiAvailable() {
  try {
    const response = await fetch('/api/health', { method: 'HEAD', timeout: 2000 });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Realiza login do usuário.
 * Tenta a API primeiro; se falhar, usa credenciais fixas.
 */
export async function login(username, password) {
  // Primeiro, verifica se a API está disponível
  const apiAvailable = await isApiAvailable();
  
  if (apiAvailable) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok && data.token && data.user) {
        setToken(data.token);
        setUser(data.user);
        return { success: true, user: data.user };
      }
      return { success: false, error: data.message || 'Credenciais inválidas' };
    } catch (error) {
      console.error('Login API error:', error);
      // Fallback para credenciais fixas
      return fallbackLogin(username, password);
    }
  } else {
    // API indisponível: usar fallback
    return fallbackLogin(username, password);
  }
}

/**
 * Login com credenciais fixas (fallback)
 */
function fallbackLogin(username, password) {
  if (username === FALLBACK_CREDENTIALS.username && password === FALLBACK_CREDENTIALS.password) {
    // Gerar um token fictício
    const fakeToken = btoa(JSON.stringify({ 
      user: FALLBACK_CREDENTIALS.user,
      exp: Date.now() + 3600000 
    }));
    setToken(fakeToken);
    setUser(FALLBACK_CREDENTIALS.user);
    return { success: true, user: FALLBACK_CREDENTIALS.user };
  }
  return { success: false, error: 'Usuário ou senha inválidos. (fallback: admin/admin123)' };
}

/**
 * Logout
 */
export function logout(redirect = true) {
  removeToken();
  removeUser();
  if (redirect) {
    window.location.href = '/login.html';
  }
}

/**
 * Verifica se o usuário está autenticado
 */
export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    if (exp && Date.now() >= exp * 1000) {
      removeToken();
      removeUser();
      return false;
    }
    return true;
  } catch {
    removeToken();
    removeUser();
    return false;
  }
}

/**
 * Obtém o token armazenado
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export function isAdmin() {
  const user = getUser();
  return user && user.role === 'admin';
}

export function isEditor() {
  const user = getUser();
  return user && (user.role === 'admin' || user.role === 'editor');
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

export async function verifyToken() {
  const token = getToken();
  if (!token) return { valid: false };
  // Se a API estiver disponível, valida com ela
  const apiAvailable = await isApiAvailable();
  if (apiAvailable) {
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
      if (data.user) {
        setUser(data.user);
        return { valid: true, user: data.user };
      }
      return { valid: false };
    } catch {
      // Se falhar, considera o token válido se existir (fallback)
      return { valid: true };
    }
  }
  // API indisponível: token é válido se existir
  return { valid: true };
}

export async function initAuth(protectedPath = '/admin/', redirectTo = '/login.html') {
  const currentPath = window.location.pathname;
  if (!currentPath.startsWith(protectedPath) && currentPath !== '/admin' && currentPath !== '/admin/') {
    return true;
  }

  const token = getToken();
  if (!token) {
    window.location.href = redirectTo;
    return false;
  }

  const result = await verifyToken();
  if (!result.valid) {
    window.location.href = redirectTo;
    return false;
  }
  return true;
}