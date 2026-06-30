// Manually-maintained news/updates. Add newest at the top.
// date: 'YYYY-MM-DD' (shown formatted). Keep text in your own words; do not paste articles verbatim.
export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  body: string;
  details: string[];
  sourceLabel?: string;
  sourceUrl?: string;
};

export const news: NewsItem[] = [
  {
    slug: 'steam-final-launch-countdown',
    date: '2026-07-01',
    title: 'Steam page enters the final launch countdown',
    body: 'The Steam listing now shows Moonlight Peaks planned for July 7, 2026, with the demo still available and six supported interface/subtitle languages listed.',
    details: [
      'The Steam page remains the cleanest launch reference for PC and Mac players because it combines the current release timing, demo access, interface language list, and core feature framing in one place.',
      'For players comparing platforms, this is also a useful pre-launch checkpoint before deciding between Steam, Steam Deck, Switch, Switch 2, and Android.',
    ],
    sourceLabel: 'Steam',
    sourceUrl: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  },
  {
    slug: 'switch-2-release-coverage',
    date: '2026-06-29',
    title: 'Moonlight Peaks appears in Switch 2 release coverage',
    body: 'GamesRadar included Moonlight Peaks in its Switch 2 upcoming-games roundup, again pointing to the July 7 launch and the supernatural farming setup.',
    details: [
      'The listing helps keep Moonlight Peaks visible for players planning a Switch 2 library, especially those looking for cozy games beyond the usual farming-sim lineup.',
      'Switch 2 remains one of the most important platform angles to watch at launch because pricing, performance, and upgrade messaging can affect buying decisions.',
    ],
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-switch-2-games/',
  },
  {
    slug: 'original-switch-july-slate',
    date: '2026-06-17',
    title: 'Original Switch coverage keeps Moonlight Peaks on the July slate',
    body: 'GamesRadar also listed Moonlight Peaks in its upcoming Nintendo Switch games roundup, framing it as a supernatural cozy farming sim for the original Switch audience.',
    details: [
      'This matters because Moonlight Peaks is not only a Switch 2 story. Original Switch players are still part of the launch audience and will likely search for version differences.',
      'After launch, the most useful follow-up will be a side-by-side check of Switch and Switch 2 performance, load times, price, and save/upgrade details.',
    ],
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-nintendo-switch-games/',
  },
  {
    slug: 'expanded-demo-before-launch',
    date: '2026-06-06',
    title: 'Expanded demo arrives before launch',
    body: 'PC Gamer reported that the newer Steam demo is larger than earlier builds, adding more story context, character creation, and a broader slice of the game before July.',
    details: [
      'The expanded demo is important because older impressions can describe a much narrower farm-only slice. Players reading mixed feedback should check which demo version the comments refer to.',
      'The broader demo gives players a better sense of the tone, character creator, early town interactions, and cozy side activities before committing at launch.',
    ],
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/the-vampire-farm-sim-ive-been-anticipating-for-3-years-just-released-an-even-bigger-better-demo-for-everyone-to-try-before-it-launches-next-month/',
  },
  {
    slug: 'pc-gamer-hands-on-preview',
    date: '2026-05-12',
    title: 'Hands-on preview details tone, pacing, and romance',
    body: 'PC Gamer described the game after a six-hour preview as a more dramatic supernatural farm sim, highlighting family conflicts, Saga romance, no observed combat, and slower early quest pacing.',
    details: [
      'The preview is useful because it goes beyond store-page bullet points and gives a clearer read on tone: family drama, romance, village relationships, and a slower early-game rhythm.',
      'It also helps set expectations for players coming from Stardew Valley or other cozy sims: Moonlight Peaks appears to lean harder into supernatural identity and relationship tension.',
    ],
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/',
  },
  {
    slug: 'guide-and-tools-live-before-launch',
    date: '2026-06-23',
    title: 'Guide and tools live before launch',
    body: 'Our Nokturna card database, interactive town map, and release/platform pages are up ahead of the July 7 launch. Crop, fishing, gift, and cheat data fill in on launch day.',
    details: [
      'The pre-launch goal is to make the site useful without inventing unknown launch data. Confirmed release information, platform pages, demo notes, and tools can go live safely before full item tables are verified.',
      'After launch, the same pages can expand into detailed crop, fishing, gift, romance, and cheat references without changing their URLs.',
    ],
  },
  {
    slug: 'free-demo-available',
    date: '2026-06-06',
    title: 'Free demo available',
    body: 'A free demo is out on Steam for PC and Mac and on the Nintendo Switch eShop, also playable on Switch 2, featuring character creation, fishing, flower arranging, and embroidery.',
    details: [
      'The demo is the best way to test the tone before launch, especially for players deciding whether the vampire-farming premise fits their cozy-game taste.',
      'Because demo scope changed over time, players should expect some online impressions to describe different builds.',
    ],
  },
  {
    slug: 'release-date-set-july-7-2026',
    date: '2026-03-02',
    title: 'Release date set for July 7, 2026',
    body: 'XSEED Games confirmed Moonlight Peaks launches July 7, 2026 on Steam, Switch, Switch 2, and Android, at $34.99, with Switch 2 at $39.99 and a 15% launch discount.',
    details: [
      'The release date remains the anchor for all pre-launch planning, including platform choice, demo testing, and wishlist timing.',
      'The launch discount is especially relevant for players comparing Steam, Switch, Switch 2, and Android purchases during the first week.',
    ],
  },
];
