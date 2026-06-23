// Manually-maintained news/updates. Add newest at the TOP.
// date: 'YYYY-MM-DD' (shown formatted). Keep text in your own words — never paste articles verbatim.
export type NewsItem = { date: string; title: string; body: string };

export const news: NewsItem[] = [
  { date: '2026-06-23', title: 'Guide & tools live before launch', body: 'Our Nokturna card database, interactive town map, and release/platform pages are up ahead of the July 7 launch. Crop, fishing, gift, and cheat data fill in on launch day.' },
  { date: '2026-06-06', title: 'Free demo available', body: 'A free demo is out on Steam (PC/Mac) and the Nintendo Switch eShop (also playable on Switch 2), featuring character creation, fishing, flower arranging, and embroidery.' },
  { date: '2026-03-02', title: 'Release date set for July 7, 2026', body: 'XSEED Games confirmed Moonlight Peaks launches July 7, 2026 on Steam, Switch, Switch 2, and Android, at $34.99 ($39.99 on Switch 2) with a 15% launch discount.' },
];
