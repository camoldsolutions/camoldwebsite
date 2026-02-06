import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { TARGET_CITIES } from '../src/data/cities.js';

const DOMAIN = 'https://camoldsolutions.com';
const PUBLIC_DIR = resolve('public');

const staticRoutes = [
    '',
    '/about',
    '/certifications',
    '/contact',
    '/google6dda8d96c610d515.html'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes.map(route => `
    <url>
        <loc>${DOMAIN}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}
    ${TARGET_CITIES.map(city => `
    <url>
        <loc>${DOMAIN}/locations/${city.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`).join('')}
</urlset>`;

    writeFileSync(resolve(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();
