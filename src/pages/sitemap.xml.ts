import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { previews } from '../data/previews';

type Entry = { path: string; images?: string[] };

const homeImages = ['/card-release.webp', '/card-guide.webp', '/card-nokturna.webp', '/card-romance.webp', '/card-cheats.webp', '/card-crops.webp'];

const staticPaths = ['/release-date', '/demo', '/platforms', '/beginner-guide', '/farming', '/magic', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/about', '/privacy', '/previews'];

export const GET: APIRoute = () => {
  const entries: Entry[] = [
    { path: '/', images: homeImages },
    ...staticPaths.map((p) => ({ path: p })),
    ...previews.map((p) => ({ path: `/previews/${p.slug}`, images: [p.image] })),
  ];

  const abs = (u: string) => new URL(u, SITE.url).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `  <url>
    <loc>${abs(e.path)}</loc>${(e.images || []).map((img) => `
    <image:image><image:loc>${abs(img)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
