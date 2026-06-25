const http = require('node:http');
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

// Load local environment variables from .env (do NOT commit .env to source control)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not installed — fine in environments that provide env vars
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const port = Number(process.env.PORT || 5173);
const root = path.join(__dirname, 'dist');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  const requestedPath = decodeURIComponent(url.pathname);
  // Handle API route for contact form
  if (requestedPath === '/api/contact' && request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    response.end();
    return;
  }

  if (requestedPath === '/api/contact' && request.method === 'POST') {
    let body = '';
    request.on('data', (chunk) => { body += chunk; });
    request.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const name = payload.name || 'Anonymous';
        const email = payload.email || 'no-reply@example.com';
        const message = payload.message || '';

        const jsonHeaders = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

        // Save messages locally for testing instead of sending via Resend.
        const dataDir = path.join(__dirname, 'data');
        try { fs.mkdirSync(dataDir, { recursive: true }); } catch (e) {}
        const entry = {
          timestamp: new Date().toISOString(),
          name,
          email,
          message
        };
        const file = path.join(dataDir, 'messages.jsonl');
        fs.appendFile(file, JSON.stringify(entry) + '\n', (err) => {
          if (err) {
            response.writeHead(500, jsonHeaders);
            response.end(JSON.stringify({ error: 'Failed to save message', details: String(err) }));
            return;
          }
          response.writeHead(200, jsonHeaders);
          response.end(JSON.stringify({ ok: true, saved: true }));
        });

      } catch (err) {
        response.writeHead(400, jsonHeaders);
        response.end(JSON.stringify({ error: 'Invalid request body' }));
      }
    });
    return;
  }
  const filePath = requestedPath === '/'
    ? path.join(root, 'index.html')
    : path.join(root, requestedPath);
  const normalizedPath = path.normalize(filePath);

  if (!normalizedPath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.readFile(normalizedPath, (error, content) => {
    if (error) {
      fs.readFile(path.join(root, 'index.html'), (fallbackError, fallbackContent) => {
        if (fallbackError) {
          response.writeHead(404);
          response.end('Not found');
          return;
        }

        response.writeHead(200, { 'Content-Type': types['.html'] });
        response.end(fallbackContent);
      });
      return;
    }

    response.writeHead(200, { 'Content-Type': types[path.extname(normalizedPath)] || 'application/octet-stream' });
    response.end(content);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio running at http://127.0.0.1:${port}`);
});
