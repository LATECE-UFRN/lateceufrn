#!/usr/bin/env node
/**
 * test-a11y.js — Executa Pa11y nas páginas principais do Portal LATECE.
 * Servidor HTTP local é iniciado em porta efêmera e encerrado ao final.
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const pa11y = require('pa11y');

const ROOT = path.resolve(__dirname, '..');
const PORT = 0; // porta aleatória

const PAGES = [
  'index.html',
  'about.html',
  'team.html',
  'equipment.html',
  'publications.html',
  'news.html',
  'sugestoes.html',
  'termos-de-uso.html',
  'politica-de-privacidade.html',
  '404.html'
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(ROOT, urlPath);
    if (urlPath.endsWith('/')) filePath = path.join(ROOT, urlPath, 'index.html');
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404); res.end('Not found'); return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise(resolve => {
    server.listen(PORT, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

(async () => {
  console.log('\n▶ Iniciando servidor local…');
  const { server, port } = await startServer();
  const base = `http://127.0.0.1:${port}`;
  console.log(`  Servidor em ${base}`);

  const results = [];
  for (const page of PAGES) {
    const url = `${base}/${page}`;
    console.log(`\n▶ Testando ${page}`);
    try {
      const r = await pa11y(url, {
        standard: 'WCAG2AA',
        timeout: 30000,
        chromeLaunchConfig: { args: ['--no-sandbox'] }
      });
      results.push({ page, issues: r.issues.length, details: r.issues });
      console.log(`  ${r.issues.length} problemas`);
    } catch (e) {
      results.push({ page, error: e.message });
      console.log(`  ✗ Erro: ${e.message}`);
    }
  }

  server.close();

  const report = {
    generatedAt: new Date().toISOString(),
    totalIssues: results.reduce((s, r) => s + (r.issues || 0), 0),
    results
  };
  fs.writeFileSync(path.join(ROOT, 'pa11y-report.json'), JSON.stringify(report, null, 2));

  console.log('\n════════════════════════════════════════════');
  console.log(`  Total de problemas: ${report.totalIssues}`);
  console.log('  Relatório: pa11y-report.json');
  console.log('════════════════════════════════════════════\n');

  // A11y NÃO bloqueia por padrão (conforme política §27)
  process.exit(0);
})();