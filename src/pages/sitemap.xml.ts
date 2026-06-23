import type { APIRoute } from 'astro';
import { SITE } from '../consts';

const paths = ['/', '/release-date', '/demo', '/platforms', '/beginner-guide', '/farming', '/magic', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/about', '/privacy'];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${new URL(p, SITE.url).href}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
