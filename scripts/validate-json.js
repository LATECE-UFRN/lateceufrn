#!/usr/bin/env node
/**
 * validate-json.js — Validação estrutural dos JSONs do Portal LATECE.
 * Zero dependências externas. Apenas Node.js built-in.
 *
 * Executa: npm run validate:json
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

let totalErrors = 0;
let totalWarnings = 0;
let totalChecked = 0;

function log(level, msg) {
  const prefix = { ok: '  ✓', warn: '  ⚠', err: '  ✗', info: '  ·' }[level] || '  ·';
  console.log(`${prefix} ${msg}`);
}

function loadJSON(relPath) {
  const full = path.join(ROOT, relPath);
  totalChecked++;
  if (!fs.existsSync(full)) {
    log('err', `ARQUIVO AUSENTE: ${relPath}`);
    totalErrors++;
    return null;
  }
  const raw = fs.readFileSync(full, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    log('err', `JSON INVÁLIDO em ${relPath}: ${e.message}`);
    totalErrors++;
    return null;
  }
}

function expectArray(obj, key, relPath) {
  if (!obj || typeof obj !== 'object') {
    log('err', `${relPath}: raiz não é objeto`);
    totalErrors++;
    return false;
  }
  if (!Array.isArray(obj[key])) {
    log('err', `${relPath}: campo obrigatório "${key}" ausente ou não é array`);
    totalErrors++;
    return false;
  }
  return true;
}

function expectFields(item, required, relPath, idx) {
  for (const f of required) {
    if (!(f in item)) {
      log('warn', `${relPath}[${idx}]: campo "${f}" ausente`);
      totalWarnings++;
    }
  }
}

function validateUniqueIds(items, relPath) {
  const seen = new Set();
  items.forEach((it, i) => {
    if (it && it.id != null) {
      if (seen.has(it.id)) {
        log('err', `${relPath}[${i}]: id duplicado "${it.id}"`);
        totalErrors++;
      }
      seen.add(it.id);
    }
  });
}

// ---------------- VALIDAÇÕES ----------------

console.log('\n▶ data/team.json');
(() => {
  const j = loadJSON('data/team.json');
  if (!expectArray(j, 'members', 'data/team.json')) return;
  j.members.forEach((m, i) => {
    expectFields(m, ['id', 'name', 'role', 'roleLabel'], 'data/team.json', i);
  });
  validateUniqueIds(j.members, 'data/team.json');
  log('ok', `${j.members.length} membros`);
})();

console.log('\n▶ data/equipment.json');
(() => {
  const j = loadJSON('data/equipment.json');
  if (!expectArray(j, 'items', 'data/equipment.json')) return;
  j.items.forEach((it, i) => {
    expectFields(it, ['id', 'name', 'category'], 'data/equipment.json', i);
  });
  validateUniqueIds(j.items, 'data/equipment.json');
  log('ok', `${j.items.length} equipamentos`);
})();

console.log('\n▶ data/publications.json');
(() => {
  const j = loadJSON('data/publications.json');
  if (!expectArray(j, 'items', 'data/publications.json')) return;
  j.items.forEach((it, i) => {
    expectFields(it, ['id', 'title', 'authors', 'type', 'year'], 'data/publications.json', i);
  });
  validateUniqueIds(j.items, 'data/publications.json');
  log('ok', `${j.items.length} publicações`);
})();

console.log('\n▶ data/news-fallback.json');
(() => {
  const j = loadJSON('data/news-fallback.json');
  if (!expectArray(j, 'items', 'data/news-fallback.json')) return;
  j.items.forEach((it, i) => {
    expectFields(it, ['id', 'title', 'excerpt', 'content', 'category'], 'data/news-fallback.json', i);
  });
  validateUniqueIds(j.items, 'data/news-fallback.json');
  log('ok', `${j.items.length} notícias`);
})();

console.log('\n▶ data/agenda.json');
(() => {
  const j = loadJSON('data/agenda.json');
  if (!expectArray(j, 'events', 'data/agenda.json')) return;
  j.events.forEach((it, i) => {
    expectFields(it, ['id', 'date', 'title'], 'data/agenda.json', i);
  });
  validateUniqueIds(j.events, 'data/agenda.json');
  log('ok', `${j.events.length} eventos`);
})();

console.log('\n▶ locales/pt.json');
(() => {
  const j = loadJSON('locales/pt.json');
  if (j) log('ok', 'estrutura válida');
})();

console.log('\n▶ locales/en.json');
(() => {
  const j = loadJSON('locales/en.json');
  if (j) log('ok', 'estrutura válida');
})();

console.log('\n▶ locales/es.json');
(() => {
  const j = loadJSON('locales/es.json');
  if (j) log('ok', 'estrutura válida');
})();

console.log('\n▶ manifest.json');
(() => {
  const j = loadJSON('manifest.json');
  if (j && j.name) log('ok', 'manifest válido');
})();

// ---------------- RESULTADO ----------------

console.log('\n════════════════════════════════════════════');
console.log(`  Arquivos verificados: ${totalChecked}`);
console.log(`  Erros:                ${totalErrors}`);
console.log(`  Avisos:               ${totalWarnings}`);
console.log('════════════════════════════════════════════\n');

if (totalErrors > 0) {
  console.error('❌ Validação FALHOU.');
  process.exit(1);
}
console.log('✅ Validação concluída com sucesso.');
process.exit(0);