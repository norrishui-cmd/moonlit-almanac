export type PriorityLink = {
  label: string;
  href: string;
  note: string;
};

export const homepagePriorityLinks: PriorityLink[] = [
  { label: 'Moonlight Peaks release date', href: '/release-date', note: 'Launch date, platforms, price, and demo status.' },
  { label: 'Moonlight Peaks demo guide', href: '/demo', note: 'Download, features, save limits, and demo FAQ.' },
  { label: 'Moonlight Peaks platforms', href: '/platforms', note: 'Steam, Switch, Switch 2, Steam Deck, PC, Mac, and Android.' },
  { label: 'Moonlight Peaks characters', href: '/characters', note: 'Known residents, families, profiles, and romance status.' },
  { label: 'Moonlight Peaks romance guide', href: '/romance', note: 'Marriage, gifts, heart events, and romance FAQs.' },
  { label: 'Beginner guide', href: '/beginner-guide', note: 'What to know before starting the cozy vampire life sim.' },
  { label: 'Guides hub', href: '/guides', note: 'Beginner, advanced, money, farming, fishing, and relationship guides.' },
  { label: 'FAQ hub', href: '/faq', note: 'Fast answers for searchers and long-tail Moonlight Peaks questions.' },
  { label: 'Compare with Stardew Valley', href: '/compare/stardew-valley', note: 'Romance, farming, story, and cozy-sim differences.' },
];

export const releasePriorityLinks: PriorityLink[] = [
  { label: 'Steam release date', href: '/platforms/steam/release-date', note: 'PC launch timing, price, demo, and store details.' },
  { label: 'Switch performance', href: '/platforms/switch/performance', note: 'Nintendo Switch launch expectations and known limits.' },
  { label: 'Switch 2 performance', href: '/platforms/switch-2/performance', note: 'Native Switch 2 edition, price, and upgrade notes.' },
  { label: 'Steam Deck guide', href: '/platforms/steam-deck', note: 'Portable play, controls, and verification status.' },
  { label: 'Demo download', href: '/demo/download', note: 'Where to get the free demo before launch.' },
  { label: 'Before you buy', href: '/buying/before-you-buy', note: 'Who should play, who should wait, and best platform notes.' },
];

export const platformPriorityLinks: PriorityLink[] = [
  { label: 'Steam release date', href: '/platforms/steam/release-date', note: 'Steam launch, price, demo, and PC details.' },
  { label: 'Steam Deck controls', href: '/platforms/steam-deck/controls', note: 'Deck controls and portable play expectations.' },
  { label: 'Switch performance', href: '/platforms/switch/performance', note: 'Switch frame rate, graphics, and demo guidance.' },
  { label: 'Switch 2 price', href: '/platforms/switch-2/price', note: 'Switch 2 edition pricing and upgrade notes.' },
  { label: 'Mac system requirements', href: '/platforms/mac/system-requirements', note: 'Mac support and requirements to verify at launch.' },
  { label: 'Xbox status', href: '/platforms/xbox/release-date', note: 'Whether an Xbox version has been announced.' },
];

export const characterPriorityLinks: PriorityLink[] = [
  { label: 'Saga gifts', href: '/romance/saga/gifts', note: 'Werewolf romance gift guide and launch verification notes.' },
  { label: 'Saga schedule', href: '/characters/saga/schedule', note: 'Daily route placeholder for launch data.' },
  { label: 'Luna gifts', href: '/romance/luna/gifts', note: 'Witch romance gifts, likes, and update notes.' },
  { label: 'Luna schedule', href: '/characters/luna/schedule', note: 'Where to find Luna once schedules are confirmed.' },
  { label: 'Orlock romance', href: '/characters/orlock/romance', note: 'Vampire romance status and related family links.' },
  { label: 'Character favorite gifts', href: '/characters/villagers/favorite-gifts', note: 'Long-tail gift index for confirmed residents.' },
];

export const romancePriorityLinks: PriorityLink[] = [
  { label: 'Romance gifts', href: '/romance/romance-gifts', note: 'Gift rules, loved gifts, and launch verification policy.' },
  { label: 'Romance heart events', href: '/romance/romance-heart-events', note: 'Event structure and unlock notes.' },
  { label: 'Marriage guide', href: '/romance/romance-marriage', note: 'Marriage, proposal, and no-children FAQ.' },
  { label: 'Saga gifts', href: '/romance/saga/gifts', note: 'A high-intent page for werewolf romance searches.' },
  { label: 'Luna gifts', href: '/romance/luna/gifts', note: 'A high-intent page for witch romance searches.' },
  { label: 'Best partner', href: '/romance/romance-best-partner', note: 'Comparison page for searchers choosing romance options.' },
];

export const demoPriorityLinks: PriorityLink[] = [
  { label: 'Demo download', href: '/demo/download', note: 'Where to get the free demo on Steam and Nintendo Switch.' },
  { label: 'Demo guide', href: '/demo/guide', note: 'What to do first and what the demo is meant to show.' },
  { label: 'Demo FAQ', href: '/demo/faq', note: 'Carryover, length, platform access, and known limits.' },
  { label: 'Demo save carryover', href: '/demo/save', note: 'Whether demo progress transfers into the full release.' },
  { label: 'Demo length', href: '/demo/length', note: 'How much time to expect before you have seen the core loop.' },
  { label: 'Demo known issues', href: '/demo/known-issues', note: 'Bugs and rough edges to verify as patches arrive.' },
];

export const faqPriorityLinks: PriorityLink[] = [
  { label: 'Release date FAQ', href: '/faq/when-does-moonlight-peaks-release', note: 'The date and launch platforms in one answer.' },
  { label: 'Platform FAQ', href: '/faq/what-platforms-is-moonlight-peaks-on', note: 'Confirmed platforms and unannounced console status.' },
  { label: 'Demo FAQ', href: '/faq/is-there-a-moonlight-peaks-demo', note: 'Where the free demo is available.' },
  { label: 'Marriage FAQ', href: '/faq/can-you-get-married-in-moonlight-peaks', note: 'Romance, marriage, and children status.' },
  { label: 'Combat FAQ', href: '/faq/is-there-combat-in-moonlight-peaks', note: 'Why the mines still remain cozy.' },
  { label: 'Multiplayer FAQ', href: '/faq/is-moonlight-peaks-multiplayer', note: 'Current single-player status.' },
];

export const beginnerPriorityLinks: PriorityLink[] = [
  { label: 'Release date', href: '/release-date', note: 'Start with date, price, demo, and platforms.' },
  { label: 'Demo guide', href: '/demo/guide', note: 'Try the character creator and early activities first.' },
  { label: 'Night farming basics', href: '/previews/night-farming-basics', note: 'Understand the core vampire farming loop.' },
  { label: 'Fishing guide', href: '/guides/fishing-guide', note: 'Fishing searches can split into guide and collectible pages.' },
  { label: 'Relationship guide', href: '/guides/relationship-guide', note: 'Friendship, romance, gifts, and marriage links.' },
  { label: 'Nokturna guide', href: '/nokturna', note: 'The in-game card game and future card list hub.' },
];

export const guideHubPriorityLinks: PriorityLink[] = [
  { label: 'Beginner guide', href: '/beginner-guide', note: 'Best first page for new players.' },
  { label: 'Advanced guide', href: '/guides/advanced-guide', note: 'Progression, unlocks, and launch-week routing.' },
  { label: 'Money guide', href: '/guides/money-guide', note: 'Profit routes to fill once live data confirms values.' },
  { label: 'Farming guide', href: '/farming', note: 'Night farming, crops, livestock, and magic.' },
  { label: 'Fishing guide', href: '/guides/fishing-guide', note: 'Fish locations, seasons, and weather pages.' },
  { label: 'Relationship guide', href: '/guides/relationship-guide', note: 'Gifts, friendship, marriage, and character pages.' },
  { label: 'Decorating guide', href: '/guides/decorating-guide', note: 'House, furniture, garden, wallpaper, and flooring.' },
  { label: 'Endgame guide', href: '/guides/endgame-guide', note: 'Post-launch page for late-game goals and completion.' },
];

export const comparisonPriorityLinks: PriorityLink[] = [
  { label: 'Moonlight Peaks vs Stardew romance', href: '/compare/stardew-valley/romance', note: 'Romance systems and marriage expectations.' },
  { label: 'Moonlight Peaks vs Stardew farming', href: '/compare/stardew-valley/farming', note: 'Night farming, crops, tools, and magic.' },
  { label: 'Moonlight Peaks vs Stardew combat', href: '/compare/stardew-valley/combat', note: 'Combat-free cozy design versus mine combat.' },
  { label: 'Moonlight Peaks vs Fae Farm', href: '/compare/fae-farm', note: 'Cozy-sim comparison for platform and genre searches.' },
  { label: 'Moonlight Peaks vs Coral Island', href: '/compare/coral-island', note: 'Romance, farming, story, and island-life comparison.' },
  { label: 'Cozy game guide', href: '/buying/cozy-game-guide', note: 'Buying-intent page for players comparing options.' },
];
