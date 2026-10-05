/**
 * sugestoes-init.js — Inicialização do formulário de sugestões
 * FASE 3: extraído do `<script type="module">` inline em sugestoes.html.
 */

const form = document.getElementById('suggestion-form');
const emailInput = document.getElementById('suggestion-email');
const titleInput = document.getElementById('suggestion-title');
const subjectInput = document.getElementById('form-subject');
const successMsg = document.getElementById('form-success');
const errorMsg = document.getElementById('form-error');
const emailError = document.getElementById('email-error');

titleInput.addEventListener('input', function () {
  const title = this.value.trim() || 'Nova sugestão - LATECE';
  subjectInput.value = title;
});

emailInput.addEventListener('input', function () {
  emailError.style.display = 'none';
});

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';
  emailError.style.display = 'none';

  let isValid = true;

  const category = document.getElementById('suggestion-category');
  if (!category.value) {
    document.getElementById('category-error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('category-error').style.display = 'none';
  }

  const title = titleInput.value.trim();
  if (title.length < 5) {
    document.getElementById('title-error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('title-error').style.display = 'none';
  }

  const description = document.getElementById('suggestion-description').value.trim();
  if (description.length < 20) {
    document.getElementById('description-error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('description-error').style.display = 'none';
  }

  const impact = document.getElementById('suggestion-impact');
  if (!impact.value) {
    document.getElementById('impact-error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('impact-error').style.display = 'none';
  }

  const email = emailInput.value.trim();
  if (!email || !email.includes('@') || !email.includes('.')) {
    emailError.textContent = 'Por favor, insira um e-mail válido.';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  if (!isValid) return;

  const submitBtn = form.querySelector('.btn-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  try {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    const response = await fetch('https://api.staticforms.dev/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.reset();
      subjectInput.value = 'Nova sugestão - LATECE';
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 8000);
    } else {
      errorMsg.style.display = 'block';
    }
  } catch (error) {
    console.error('Erro ao enviar:', error);
    errorMsg.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar sugestão';
  }
});

if (window.location.search.includes('success=true')) {
  successMsg.style.display = 'block';
  const newUrl = window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
}