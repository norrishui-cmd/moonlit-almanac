# Moonlight Peaks Wiki — Moonlight Peaks fan guide

Fast, SEO-first Astro site (static HTML). No Tailwind, no terminal needed — Vercel builds it.

## Strategy: launch BEFORE the game (July 7, 2026)

The whole point is to be indexed before launch. Deploy now, submit to Google Search
Console now, so the release/guide pages start ranking while the game is still in pre-launch.
Then fill the data pages within hours of launch.

## Deploy (mobile / GitHub Desktop, no command line)

1. New empty GitHub repo (e.g. `moonlit-almanac`).
2. GitHub Desktop: clone, drop these files in keeping the structure, commit, push.
3. vercel.com → Add New → Project → Import the repo. Vercel auto-detects Astro → Deploy.
4. Add your domain in Vercel → Settings → Domains.

## After buying a domain — change the URL

- `src/consts.ts` → `SITE.url`
- `astro.config.mjs` → `site`
- `public/robots.txt` → Sitemap line

## Launch-day checklist (July 7)

- [ ] Fill `/cheats` with the verified console commands
- [ ] Fill `/nokturna` with the card list + how to win
- [ ] Fill `/romance` with the full cast + gift tables
- [ ] Turn `/beginner-guide` into a real day-one walkthrough
- [ ] Add `/crops`, `/fishing`, and the interactive `/map`
- [ ] Bump `SITE.updated`
- [ ] Resubmit sitemap in Search Console

## Before turning on ads (AdSense)

- [ ] Privacy policy is live (`/privacy`) ✅ included
- [ ] 20–30 substantive pages published
- [ ] `ads.txt` added to `public/` (AdSense gives you the line)
- [ ] Cookie-consent banner if targeting EU/UK

## Edit content

| What | File |
|------|------|
| Brand / domain / updated date | `src/consts.ts` |
| Game facts (date, price, platforms) | `src/consts.ts` (GAME) |
| Page text & SEO | `src/pages/*.astro` |
| Colors, fonts, components | `src/styles/global.css` |
| Homepage cards / routing | `src/pages/index.astro` |

## Add a page

Copy any file in `src/pages/`, rename it (filename = URL), update the `<Base>` props, and
flip its card in `index.astro` to `live: true`.
