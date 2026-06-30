import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { previews } from '../data/previews';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Articles are dated by month only, so we omit per-item pubDate rather than invent
// precise timestamps; the channel build date is set on each deploy.
const BUILD = new Date('2026-06-30T00:00:00Z').toUTCString();

export const GET: APIRoute = () => {
  const abs = (u: string) => new URL(u, SITE.url).href;
  const items = previews
    .map((p) => {
      const link = abs(`/previews/${p.slug}`);
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(p.dek)}</description>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Moonlight Peaks — Articles &amp; Guides</title>
    <link>${SITE.url}</link>
    <description>Moonlight Peaks news, guides, demo coverage and cozy-sim comparisons.</description>
    <language>en</language>
    <lastBuildDate>${BUILD}</lastBuildDate>
    <atom:link href="${abs('/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
