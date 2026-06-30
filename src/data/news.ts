// Manually-maintained news/updates. Add newest at the top.
// date: 'YYYY-MM-DD' (shown formatted). Keep text in your own words; do not paste articles verbatim.
export type NewsItem = {
  date: string;
  title: string;
  body: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-07-01',
    title: 'Steam page enters the final launch countdown',
    body: 'The Steam listing now shows Moonlight Peaks planned for July 7, 2026, with the demo still available and six supported interface/subtitle languages listed.',
    sourceLabel: 'Steam',
    sourceUrl: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  },
  {
    date: '2026-06-29',
    title: 'Moonlight Peaks appears in Switch 2 release coverage',
    body: 'GamesRadar included Moonlight Peaks in its Switch 2 upcoming-games roundup, again pointing to the July 7 launch and the supernatural farming setup.',
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-switch-2-games/',
  },
  {
    date: '2026-06-17',
    title: 'Original Switch coverage keeps Moonlight Peaks on the July slate',
    body: 'GamesRadar also listed Moonlight Peaks in its upcoming Nintendo Switch games roundup, framing it as a supernatural cozy farming sim for the original Switch audience.',
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-nintendo-switch-games/',
  },
  {
    date: '2026-06-06',
    title: 'Expanded demo arrives before launch',
    body: 'PC Gamer reported that the newer Steam demo is larger than earlier builds, adding more story context, character creation, and a broader slice of the game before July.',
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/the-vampire-farm-sim-ive-been-anticipating-for-3-years-just-released-an-even-bigger-better-demo-for-everyone-to-try-before-it-launches-next-month/',
  },
  {
    date: '2026-05-12',
    title: 'Hands-on preview details tone, pacing, and romance',
    body: 'PC Gamer described the game after a six-hour preview as a more dramatic supernatural farm sim, highlighting family conflicts, Saga romance, no observed combat, and slower early quest pacing.',
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/',
  },
  {
    date: '2026-06-23',
    title: 'Guide and tools live before launch',
    body: 'Our Nokturna card database, interactive town map, and release/platform pages are up ahead of the July 7 launch. Crop, fishing, gift, and cheat data fill in on launch day.',
  },
  {
    date: '2026-06-06',
    title: 'Free demo available',
    body: 'A free demo is out on Steam for PC and Mac and on the Nintendo Switch eShop, also playable on Switch 2, featuring character creation, fishing, flower arranging, and embroidery.',
  },
  {
    date: '2026-03-02',
    title: 'Release date set for July 7, 2026',
    body: 'XSEED Games confirmed Moonlight Peaks launches July 7, 2026 on Steam, Switch, Switch 2, and Android, at $34.99, with Switch 2 at $39.99 and a 15% launch discount.',
  },
];
