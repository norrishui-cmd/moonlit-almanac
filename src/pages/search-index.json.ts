import type { APIRoute } from 'astro';
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
import { itemCategories } from '../data/items';

// A single flat, normalized search index built at build time. Every entry is
// { t: title, d: short description, u: url, k: kind label }. Because it's generated
// from the same data arrays the pages render from, it never drifts out of sync —
// add content anywhere and it shows up in search on the next build automatically.
type Doc = { t: string; d: string; u: string; k: string };

const clip = (s: string | undefined, n = 120): string => {
  if (!s) return '';
  const flat = s.replace(/\s+/g, ' ').trim();
  return flat.length > n ? flat.slice(0, n - 1) + '…' : flat;
};

// Evergreen static hub/guide pages (no per-item data file) — hand-listed so search
// covers them too. Keep roughly in sync if you add major new static pages.
const staticPages: Doc[] = [
  { t: 'Beginner guide', d: 'Everything known so far, shaped into a day-one head start.', u: '/beginner-guide', k: 'Guide' },
  { t: 'Farming', d: 'Enchanted crops, glowing flowers, magical livestock, night farming.', u: '/farming', k: 'Guide' },
  { t: 'Magic & potions', d: 'Spells, wands, mana, runes, and the Alter Ego Elixir.', u: '/magic', k: 'Guide' },
  { t: 'Character creator', d: 'Customization options in the demo’s vampire creator.', u: '/character-creator', k: 'Guide' },
  { t: 'Shapeshifting', d: 'Turning into a bat and other hinted forms.', u: '/shapeshifting', k: 'Guide' },
  { t: 'Romance & marriage', d: 'Gifts, friendship, marriage, and who you can date.', u: '/romance', k: 'Guide' },
  { t: 'Items', d: 'Tools, potions, decorations, and other item categories.', u: '/items', k: 'Guide' },
  { t: 'Environment', d: 'Weather, seasons, and festivals.', u: '/environment', k: 'Guide' },
  { t: 'Nokturna card game', d: 'How the in-game card game works, cards, and tips.', u: '/nokturna', k: 'Guide' },
  { t: 'Cheats & console', d: 'Console commands and money-cheat expectations.', u: '/cheats', k: 'Guide' },
  { t: 'Behind the scenes', d: 'What the dev team’s own diaries reveal about making the game.', u: '/behind-the-scenes', k: 'Guide' },
  { t: 'Moonlight Peaks vs Stardew Valley', d: 'How the two cozy sims compare.', u: '/moonlight-peaks-vs-stardew-valley', k: 'Compare' },
  { t: 'Release date & platforms', d: 'When, where, price, and the free demo.', u: '/release-date', k: 'Guide' },
  { t: 'Interactive map', d: 'The town, farm, forest, lake, mines and named spots.', u: '/map', k: 'Guide' },
  { t: 'Tools', d: 'Platform picker and romance gift finder.', u: '/tools', k: 'Tool' },
  { t: 'Export guides to PDF', d: 'Pick any guides and export them together as one PDF.', u: '/export', k: 'Tool' },
  { t: 'About', d: 'About this independent fan guide and its accuracy tiers.', u: '/about', k: 'Page' },
];

export const GET: APIRoute = () => {
  const docs: Doc[] = [];

  for (const p of previews) {
    docs.push({ t: p.title, d: clip(p.dek), u: `/previews/${p.slug}`, k: p.category === 'guide' ? 'Guide' : 'Article' });
  }
  for (const f of faqs) {
    docs.push({ t: f.q, d: clip(f.a), u: `/faq/${f.slug}`, k: 'FAQ' });
  }
  for (const c of characters) {
    if (c.status === 'unconfirmed') continue; // no profile page exists for these
    docs.push({ t: c.name, d: clip(c.desc), u: `/characters/${c.id}`, k: 'Character' });
  }
  for (const l of locations) {
    docs.push({ t: l.title, d: clip(l.dek), u: `/locations/${l.slug}`, k: 'Location' });
  }
  for (const f of families) {
    docs.push({ t: f.title, d: clip(f.dek), u: `/families/${f.slug}`, k: 'Family' });
  }
  for (const a of activities) {
    docs.push({ t: a.title, d: clip(a.dek), u: `/activities/${a.slug}`, k: 'Activity' });
  }
  for (const c of comparisons) {
    docs.push({ t: `Moonlight Peaks vs ${c.other}`, d: clip(c.dek), u: `/compare/${c.slug}`, k: 'Compare' });
  }
  for (const p of platforms) {
    docs.push({ t: p.title, d: clip(p.dek), u: `/platforms/${p.slug}`, k: 'Platform' });
  }
  for (const dm of demo) {
    docs.push({ t: dm.title, d: clip(dm.dek), u: `/demo/${dm.slug}`, k: 'Demo' });
  }
  for (const n of news) {
    docs.push({ t: n.title, d: clip(n.body), u: `/news/${n.slug}`, k: 'News' });
  }
  for (const it of itemCategories) {
    docs.push({ t: it.name, d: clip(it.dek), u: `/items/${it.slug}`, k: 'Item' });
  }

  docs.push(...staticPages);

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
