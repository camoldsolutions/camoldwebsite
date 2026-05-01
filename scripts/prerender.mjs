import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;
const HOST = '127.0.0.1';

const STATIC_ROUTES = ['/', '/about', '/certifications', '/contact'];

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
};

function startStaticServer() {
    const server = http.createServer((req, res) => {
        const urlPath = decodeURIComponent(req.url.split('?')[0]);
        const candidate = path.join(DIST_DIR, urlPath);
        let target = candidate;
        try {
            if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
                target = candidate;
            } else {
                target = path.join(DIST_DIR, 'index.html');
            }
            const data = fs.readFileSync(target);
            const ext = path.extname(target);
            res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
            res.end(data);
        } catch (err) {
            res.writeHead(500);
            res.end('Server error: ' + err.message);
        }
    });
    return new Promise((resolve) => server.listen(PORT, HOST, () => resolve(server)));
}

async function loadCitySlugs() {
    const citiesUrl = pathToFileURL(path.resolve(__dirname, '..', 'src', 'data', 'cities.js')).href;
    const mod = await import(citiesUrl);
    return mod.TARGET_CITIES.map((c) => `/locations/${c.slug}`);
}

async function renderRoute(browser, route) {
    const page = await browser.newPage();
    try {
        const url = `http://${HOST}:${PORT}${route}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        const html = await page.content();
        const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
        console.log(`  ✓ ${route}`);
    } finally {
        await page.close();
    }
}

async function main() {
    if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
        console.error('Error: dist/index.html not found. Run `vite build` first.');
        process.exit(1);
    }

    const cityRoutes = await loadCitySlugs();
    const routes = [...STATIC_ROUTES, ...cityRoutes];

    console.log(`Prerendering ${routes.length} routes...`);
    const server = await startStaticServer();
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

    try {
        for (const route of routes) {
            await renderRoute(browser, route);
        }
    } finally {
        await browser.close();
        server.close();
    }

    fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, '404.html'));
    console.log(`  ✓ /404.html (SPA fallback)`);
    console.log('Prerender complete.');
}

main().catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
});
