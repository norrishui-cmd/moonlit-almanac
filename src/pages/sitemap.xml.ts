import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { previews } from '../data/previews';
import { characters } from '../data/characters';
import { faqs } from '../data/faq';
import { locations } from '../data/locations';
import { families } from '../data/families';
import { activities } from '../data/activities';
import { comparisons } from '../data/compare';
import { platforms } from '../data/platforms';
import { demo } from '../data/demo';
import { news } from '../data/news';
import { seoPages } from '../data/seoGraph';
import { itemCategories } from '../data/items';

// General LASTMOD covers sections without a per-item date (characters, locations, families,
// activities, platforms, items, compare, demo, faq, and all static pages). Bump this only when
// you push a meaningful content update to one of those sections (not every deploy / not daily),
// otherwise search engines learn to ignore it. previews/ and news/ don't use this — they derive
// their own lastmod from real data below, so they stay accurate without manual bumping.
const LASTMOD = '2026-07-02';

// previews.ts only stores a human label like 'July 2026' / 'June 2026'. Map that to a real ISO
// date so different batches of articles get different (accurate-enough) lastmod values instead
// of all sharing one frozen date.
const MONTHS: Record<string, string> = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};
const previewLastmod = (label: string): string => {
  const m = label.trim().toLowerCase().match(/^(\w+)\s+(\d{4})$/);
  return m && MONTHS[m[1]] ? `${m[2]}-${MONTHS[m[1]]}-01` : LASTMOD;
};

type Entry = { path: string; images?: string[]; lastmod?: string };

const homeImages = ['/card-release.webp', '/card-guide.webp', '/card-nokturna.webp', '/card-romance.webp', '/card-cheats.webp', '/card-crops.webp'];

const staticPaths = ['/release-date', '/demo', '/platforms', '/beginner-guide', '/guides', '/tools', '/tools/platform-picker', '/tools/romance-gift-finder', '/farming', '/magic', '/character-creator', '/shapeshifting', '/items', '/environment', '/behind-the-scenes', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/about', '/privacy', '/previews', '/faq', '/locations', '/families', '/compare'];

const topic = (base: string, items: { slug: string; image?: string }[]): Entry[] =>
  items.map((it) => ({ path: `${base}/${it.slug}`, images: it.image ? [it.image] : [] }));

export const GET: APIRoute = () => {
  const charEntries: Entry[] = characters
    .map((c) => ({ path: `/characters/${c.id}`, images: c.img ? [c.img] : [] }));

  const entries: Entry[] = [
    { path: '/', images: homeImages },
    ...staticPaths.map((p) => ({ path: p })),
    ...charEntries,
    ...topic('/locations', locations),
    ...topic('/families', families),
    ...topic('/activities', activities),
    ...topic('/platforms', platforms),
    ...topic('/items', itemCategories),
    ...topic('/compare', comparisons),
    ...topic('/demo', demo),
    ...news.map((n) => ({ path: `/news/${n.slug}`, lastmod: n.date })),
    ...previews.map((p) => ({ path: `/previews/${p.slug}`, images: [p.image], lastmod: previewLastmod(p.date) })),
    ...faqs.map((f) => ({ path: `/faq/${f.slug}` })),
    ...seoPages.map((p) => ({ path: p.path })),
  ];

  const abs = (u: string) => new URL(u, SITE.url).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `  <url>
    <loc>${abs(e.path)}</loc>
    <lastmod>${e.lastmod || LASTMOD}</lastmod>${(e.images || []).map((img) => `
    <image:image><image:loc>${abs(img)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
