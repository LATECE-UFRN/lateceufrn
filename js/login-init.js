/**
 * login-init.js — Inicialização da página de login
 * FASE 3: extraído do `<script type="module">` inline em login.html
 * para preparar o projeto para CSP restritiva (sem 'unsafe-inline').
 */

import { login, isAuthenticated } from './auth.js';

const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const loginError = document.getElementById('login-error');
const loginErrorText = document.getElementById('login-error-text');
const loadingOverlay = document.getElementById('loading-overlay');
const submitBtn = form.querySelector('button[type="submit"]');
const toggleBtn = document.getElementById('password-toggle');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? '🙈' : '👁️';
  toggleBtn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
});

if (isAuthenticated()) {
  window.location.href = './admin/';
}

usernameInput.addEventListener('input', () => {
  usernameError.style.display = 'none';
  loginError.style.display = 'none';
});
passwordInput.addEventListener('input', () => {
  passwordError.style.display = 'none';
  loginError.style.display = 'none';
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  usernameError.style.display = 'none';
  passwordError.style.display = 'none';
  loginError.style.display = 'none';

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  let isValid = true;
  if (!username || username.length < 3) {
    usernameError.textContent = 'Informe o usuário ou e-mail válido.';
    usernameError.style.display = 'block';
    isValid = false;
  }
  if (!password || password.length < 6) {
    passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    passwordError.style.display = 'block';
    isValid = false;
  }
  if (!isValid) return;

  form.style.display = 'none';
  loadingOverlay.style.display = 'block';
  submitBtn.disabled = true;

  try {
    const result = await login(username, password);
    if (result.success) {
      window.location.href = './admin/';
    } else {
      loginErrorText.textContent = result.error || 'Usuário ou senha inválidos.';
      loginError.style.display = 'block';
      form.style.display = 'block';
      loadingOverlay.style.display = 'none';
      submitBtn.disabled = false;
    }
  } catch (err) {
    loginErrorText.textContent = 'Erro ao conectar ao servidor. Tente novamente.';
    loginError.style.display = 'block';
    form.style.display = 'block';
    loadingOverlay.style.display = 'none';
    submitBtn.disabled = false;
    console.error('Login error:', err);
  }
});