/**
 * agenda.js — Agenda do LATECE na seção "Nossa Missão"
 * Módulo ES isolado. Sem dependências externas.
 *
 * Uso:
 *   import { initAgenda } from './agenda.js';
 *   await initAgenda();
 *
 * Responsabilidades:
 *  - Carregar data/agenda.json via resolvePath()
 *  - Renderizar calendário compacto
 *  - Navegar entre meses
 *  - Destacar dias com atividades (cor + marcador textual)
 *  - Exibir atividades do dia selecionado
 *  - Suporte a teclado, temas, i18n e prefers-reduced-motion
 */

import { t, getLocale } from './i18n.js';

// ============================================================
// ESTADO INTERNO
// ============================================================

const state = {
  events: [],
  currentMonth: null,
  selectedDate: null,
  initialized: false
};

let agendaContainer = null;

// ============================================================
// CARREGAMENTO DE DADOS
// ============================================================

async function loadAgendaEvents() {
  try {
    const path = window.resolvePath('data/agenda.json');
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data || !Array.isArray(data.events)) return [];
    // Filtro de segurança: cada evento deve ter data e título
    return data.events.filter(ev => ev && typeof ev.date === 'string' && ev.title);
  } catch (error) {
    console.warn('[agenda] Não foi possível carregar agenda:', error.message);
    return [];
  }
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

export async function initAgenda() {
  if (state.initialized) return;

  agendaContainer = document.getElementById('agenda-container');
  if (!agendaContainer) {
    console.warn('[agenda] #agenda-container não encontrado em index.html.');
    return;
  }

  const events = await loadAgendaEvents();
  state.events = events;
  state.currentMonth = new Date();
  state.currentMonth.setDate(1);
  state.selectedDate = null;
  state.initialized = true;

  renderAgenda();
}

// ============================================================
// UTILITÁRIOS
// ============================================================

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getEventsForDate(dateKey) {
  return state.events.filter(ev => ev.date === dateKey);
}

function getEventsForMonth(year, month) {
  const prefix = `${year}-${String(month + 1).padStart(2, '0')}-`;
  return state.events.filter(ev => ev.date.startsWith(prefix));
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getLocaleCode() {
  const locale = getLocale() || 'pt';
  const map = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
  return map[locale] || 'pt-BR';
}

function getMonthLabel(date) {
  return date.toLocaleDateString(getLocaleCode(), {
    month: 'long',
    year: 'numeric'
  });
}

function getWeekdayLabels() {
  // Base: 2024-01-07 é domingo
  const base = new Date(2024, 0, 7);
  const labels = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const label = d.toLocaleDateString(getLocaleCode(), { weekday: 'short' });
    labels.push(label.replace('.', '').slice(0, 3));
  }
  return labels;
}

function formatTimeRange(ev) {
  if (ev.time && ev.endTime) return `${ev.time}–${ev.endTime}`;
  if (ev.time) return ev.time;
  return '';
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================

function renderAgenda() {
  if (!agendaContainer) return;

  const year = state.currentMonth.getFullYear();
  const month = state.currentMonth.getMonth();
  const monthLabel = getMonthLabel(state.currentMonth);
  const weekdays = getWeekdayLabels();

  const monthEvents = getEventsForMonth(year, month);
  const daysWithEvents = new Set(monthEvents.map(ev => ev.date));

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay(); // 0=domingo
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayKey = formatDateKey(today);

  // Construção das linhas do calendário
  let rowCells = '';
  let cellCount = 0;
  let rowsHtml = '';

  // Células vazias iniciais (antes do dia 1)
  for (let i = 0; i < startWeekday; i++) {
    rowCells += '<td class="latece-agenda-day latece-agenda-day--empty" aria-hidden="true"></td>';
    cellCount++;
  }

  // Dias do mês
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const dateKey = formatDateKey(dateObj);
    const hasEvents = daysWithEvents.has(dateKey);
    const isToday = dateKey === todayKey;
    const isSelected = state.selectedDate === dateKey;

    const classes = ['latece-agenda-day'];
    if (hasEvents) classes.push('has-events');
    if (isToday) classes.push('is-today');
    if (isSelected) classes.push('is-selected');

    const ariaLabel = hasEvents
      ? t('agenda.dayWithEvents', { day: d })
      : t('agenda.dayNoEvents', { day: d });

    rowCells += `
      <td class="${classes.join(' ')}" data-date="${dateKey}">
        <button type="button" class="latece-agenda-day-btn"
                aria-label="${escapeHtml(ariaLabel)}"
                aria-pressed="${isSelected ? 'true' : 'false'}"
                ${hasEvents ? 'data-has-events="true"' : ''}>
          <span class="latece-agenda-day-number">${d}</span>
          ${hasEvents ? '<span class="latece-agenda-day-marker" aria-hidden="true">●</span>' : ''}
        </button>
      </td>
    `;
    cellCount++;
    if (cellCount === 7) {
      rowsHtml += `<tr>${rowCells}</tr>`;
      rowCells = '';
      cellCount = 0;
    }
  }

  // Preenchimento final da última linha
  if (cellCount > 0) {
    while (cellCount < 7) {
      rowCells += '<td class="latece-agenda-day latece-agenda-day--empty" aria-hidden="true"></td>';
      cellCount++;
    }
    rowsHtml += `<tr>${rowCells}</tr>`;
  }

  agendaContainer.innerHTML = `
    <div class="latece-agenda" role="region" aria-label="${escapeHtml(t('agenda.regionLabel'))}">
      <div class="latece-agenda-header">
        <button type="button"
                class="latece-agenda-nav latece-agenda-nav--prev"
                aria-label="${escapeHtml(t('agenda.prevMonth'))}">‹</button>
        <h3 class="latece-agenda-month" aria-live="polite">${escapeHtml(monthLabel)}</h3>
        <button type="button"
                class="latece-agenda-nav latece-agenda-nav--next"
                aria-label="${escapeHtml(t('agenda.nextMonth'))}">›</button>
      </div>

      <table class="latece-agenda-grid" role="grid"
             aria-label="${escapeHtml(t('agenda.gridLabel', { month: monthLabel }))}">
        <thead>
          <tr>
            ${weekdays.map(wd => `<th scope="col" class="latece-agenda-weekday">${escapeHtml(wd)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div class="latece-agenda-events" aria-live="polite" aria-atomic="true">
        ${renderEventsPanel()}
      </div>
    </div>
  `;

  attachHandlers();
}

function renderEventsPanel() {
  if (!state.selectedDate) {
    return `<p class="latece-agenda-empty">${escapeHtml(t('agenda.selectDayHint'))}</p>`;
  }

  const dayEvents = getEventsForDate(state.selectedDate);
  if (dayEvents.length === 0) {
    return `<p class="latece-agenda-empty">${escapeHtml(t('agenda.noEventsOnDay'))}</p>`;
  }

  const dateObj = new Date(state.selectedDate + 'T00:00:00');
  const dateLabel = dateObj.toLocaleDateString(getLocaleCode(), {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  });

  return `
    <h4 class="latece-agenda-events-title">${escapeHtml(dateLabel)}</h4>
    <ul class="latece-agenda-events-list">
      ${dayEvents.map(ev => `
        <li class="latece-agenda-event">
          <div class="latece-agenda-event-head">
            ${formatTimeRange(ev) ? `<span class="latece-agenda-event-time">${escapeHtml(formatTimeRange(ev))}</span>` : ''}
            <span class="latece-agenda-event-title">${escapeHtml(ev.title)}</span>
          </div>
          ${ev.description ? `<p class="latece-agenda-event-desc">${escapeHtml(ev.description)}</p>` : ''}
          ${ev.location ? `<p class="latece-agenda-event-loc">📍 ${escapeHtml(ev.location)}</p>` : ''}
          ${ev.link ? `<a class="latece-agenda-event-link" href="${escapeHtml(ev.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('agenda.moreInfo'))} →</a>` : ''}
        </li>
      `).join('')}
    </ul>
  `;
}

// ============================================================
// HANDLERS
// ============================================================

function attachHandlers() {
  if (!agendaContainer) return;

  const prevBtn = agendaContainer.querySelector('.latece-agenda-nav--prev');
  const nextBtn = agendaContainer.querySelector('.latece-agenda-nav--next');
  const dayButtons = Array.from(agendaContainer.querySelectorAll('.latece-agenda-day-btn'));

  prevBtn?.addEventListener('click', () => changeMonth(-1));
  nextBtn?.addEventListener('click', () => changeMonth(1));

  dayButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => selectDay(btn));

    btn.addEventListener('keydown', (e) => {
      let targetIdx = null;
      switch (e.key) {
        case 'ArrowLeft':  targetIdx = idx - 1; break;
        case 'ArrowRight': targetIdx = idx + 1; break;
        case 'ArrowUp':    targetIdx = idx - 7; break;
        case 'ArrowDown':  targetIdx = idx + 7; break;
        case 'Home':       targetIdx = 0; break;
        case 'End':        targetIdx = dayButtons.length - 1; break;
        default: return;
      }
      if (targetIdx >= 0 && targetIdx < dayButtons.length) {
        e.preventDefault();
        dayButtons[targetIdx].focus();
      }
    });
  });
}

function changeMonth(delta) {
  state.currentMonth = new Date(
    state.currentMonth.getFullYear(),
    state.currentMonth.getMonth() + delta,
    1
  );
  state.selectedDate = null;
  renderAgenda();
}

function selectDay(btn) {
  const cell = btn.closest('[data-date]');
  if (!cell) return;
  const dateKey = cell.getAttribute('data-date');
  state.selectedDate = (state.selectedDate === dateKey) ? null : dateKey;
  renderAgenda();

  if (state.selectedDate) {
    const newBtn = agendaContainer.querySelector(`[data-date="${state.selectedDate}"] .latece-agenda-day-btn`);
    if (newBtn) newBtn.focus();
  }
}