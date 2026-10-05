/**
 * dev-log.js — Logging condicional por ambiente
 * FASE 3: elimina ruído de debug em produção sem perder diagnóstico local.
 *
 * Uso:
 *   import { devLog, devWarn, isDev } from './dev-log.js';
 *   devLog('[data] carregando...', payload);
 *
 * Regra:
 *   - console.log / console.warn → condicionados a ambiente local.
 *   - console.error             → NÃO condicionado (erros reais devem ser visíveis).
 */

export const isDev = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.endsWith('.local') ||
  window.location.protocol === 'file:'
);

export function devLog(...args) {
  if (isDev) console.log(...args);
}

export function devWarn(...args) {
  if (isDev) console.warn(...args);
}