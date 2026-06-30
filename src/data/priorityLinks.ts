export type PriorityLink = {
  label: string;
  href: string;
  note: string;
};

// All hrefs below point to real, existing pages only. The programmatic SEO layer
// is dormant (see SEO_PROGRAM_ENABLED in seoGraph.ts), so these intentionally do
// NOT link into generated /quests, /crafting, /romance/<x>/<y>, etc. paths.

export const homepagePriorityLinks: PriorityLink[] = [
  { label: 'Moonlight Peaks release date', href: '/release-date', note: 'Launch date, platforms, price, and demo status.' },
  { label: 'Moonlight Peaks demo guide', href: '/demo', note: 'Download, what is inside, and demo FAQ.' },
  { label: 'Moonlight Peaks platforms', href: '/platforms', note: 'Switch, Switch 2, Steam, Steam Deck, and Android.' },
  { label: 'Moonlight Peaks characters', href: '/characters', note: 'Known residents, families, profiles, and romance status.' },
  { label: 'Moonlight Peaks romance guide', href: '/romance', note: 'Marriage, dating, and the seven families.' },
  { label: 'Beginner guide', href: '/beginner-guide', note: 'What to know before starting the cozy vampire life sim.' },
  { label: 'Guides hub', href: '/guides', note: 'Beginner, farming, magic, romance, and more.' },
  { label: 'FAQ hub', href: '/faq', note: 'Fast answers for searchers and long-tail Moonlight Peaks questions.' },
  { label: 'Compare with Stardew Valley', href: '/moonlight-peaks-vs-stardew-valley', note: 'Romance, farming, story, and cozy-sim differences.' },
];

export const releasePriorityLinks: PriorityLink[] = [
  { label: 'Nintendo Switch', href: '/platforms/switch', note: 'Original Switch launch, price, and the demo.' },
  { label: 'Nintendo Switch 2', href: '/platforms/switch-2', note: 'Native Switch 2 edition, price, and upgrade notes.' },
  { label: 'Steam Deck', href: '/platforms/steam-deck', note: 'Portable PC play and verification status.' },
  { label: 'Android', href: '/platforms/android', note: 'Day-one mobile release via Google Play.' },
  { label: 'All platforms & price', href: '/platforms', note: 'Every platform and the price in one place.' },
  { label: 'Demo download', href: '/demo/how-to-download-the-demo', note: 'Where to get the free demo before launch.' },
];

export const platformPriorityLinks: PriorityLink[] = [
  { label: 'Nintendo Switch', href: '/platforms/switch', note: 'The highest-traffic platform question, answered.' },
  { label: 'Nintendo Switch 2', href: '/platforms/switch-2', note: 'Switch 2 edition pricing and upgrade notes.' },
  { label: 'Steam Deck', href: '/platforms/steam-deck', note: 'Deck play and verification expectations.' },
  { label: 'Android', href: '/platforms/android', note: 'Mobile release via Google Play; no iOS announced.' },
  { label: 'Release date & price', href: '/release-date', note: 'Date, price tiers, and the demo.' },
  { label: 'Is it on PS5 or Xbox?', href: '/faq/is-moonlight-peaks-on-ps5-or-xbox', note: 'Console status, including Game Pass.' },
];

export const characterPriorityLinks: PriorityLink[] = [
  { label: 'Saga', href: '/characters/saga', note: 'The confirmed romanceable werewolf.' },
  { label: 'Luna', href: '/characters/luna', note: 'Reported witch resident profile.' },
  { label: 'Orlock', href: '/characters/orlock', note: 'Reported vampire resident profile.' },
  { label: 'Mina', href: '/characters/mina', note: 'Confirmed resident profile.' },
  { label: 'Romance & marriage', href: '/romance', note: 'Dating, marriage, and the no-children answer.' },
  { label: 'The seven families', href: '/families', note: 'Vampires, werewolves, witches, mermaids, and normies.' },
];

export const romancePriorityLinks: PriorityLink[] = [
  { label: 'Can you get married?', href: '/faq/can-you-get-married-in-moonlight-peaks', note: 'Marriage and proposal status.' },
  { label: 'Can you have children?', href: '/faq/can-you-have-children-in-moonlight-peaks', note: 'The confirmed no-children answer.' },
  { label: 'How many romance options?', href: '/faq/how-many-romance-options-are-there', note: 'The size of the dating roster.' },
  { label: 'Can you romance a werewolf?', href: '/faq/can-you-romance-a-werewolf', note: 'Saga and werewolf romance.' },
  { label: 'All characters', href: '/characters', note: 'Every known resident and their status.' },
  { label: 'The seven families', href: '/families', note: 'How the families and romance connect.' },
];

export const demoPriorityLinks: PriorityLink[] = [
  { label: 'What is in the demo', href: '/demo/whats-in-the-demo', note: 'The activities and slice you can try now.' },
  { label: 'How to download the demo', href: '/demo/how-to-download-the-demo', note: 'Steam and Nintendo eShop steps.' },
  { label: 'Demo vs full game', href: '/demo/demo-vs-full-game', note: 'What carries over and what the full game adds.' },
  { label: 'Is there a demo?', href: '/faq/is-there-a-moonlight-peaks-demo', note: 'Where the free demo is available.' },
  { label: 'Does progress carry over?', href: '/faq/does-demo-progress-carry-over', note: 'Whether demo saves transfer.' },
  { label: 'All platforms', href: '/platforms', note: 'Where the demo and full game run.' },
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
  { label: 'Demo guide', href: '/demo', note: 'Try the character creator and early activities first.' },
  { label: 'Night farming basics', href: '/previews/night-farming-basics', note: 'Understand the core vampire farming loop.' },
  { label: 'Things to know first', href: '/previews/things-to-know-before-playing', note: 'Key facts before you start.' },
  { label: 'Romance & families', href: '/romance', note: 'Friendship, romance, marriage, and families.' },
  { label: 'Nokturna', href: '/nokturna', note: 'The in-game card game.' },
];

export const guideHubPriorityLinks: PriorityLink[] = [
  { label: 'Beginner guide', href: '/beginner-guide', note: 'Best first page for new players.' },
  { label: 'Farming', href: '/farming', note: 'Night farming, crops, livestock, and magic.' },
  { label: 'Magic', href: '/magic', note: 'Wands, runes, mana, potions, and shapeshifting.' },
  { label: 'Activities', href: '/activities', note: 'Fishing, foraging, crafts, and the character creator.' },
  { label: 'Romance', href: '/romance', note: 'Gifts, friendship, marriage, and characters.' },
  { label: 'Characters', href: '/characters', note: 'Every known resident and their status.' },
  { label: 'Compare with other sims', href: '/compare', note: 'How Moonlight Peaks differs from other cozy games.' },
  { label: 'Release date & platforms', href: '/release-date', note: 'Date, price, and where to play.' },
];

export const comparisonPriorityLinks: PriorityLink[] = [
  { label: 'All comparisons', href: '/compare', note: 'Every Moonlight Peaks versus page.' },
  { label: 'Moonlight Peaks vs Fae Farm', href: '/compare/fae-farm', note: 'Cozy magic farm with co-op versus a solo vampire farm.' },
  { label: 'Moonlight Peaks vs Coral Island', href: '/compare/coral-island', note: 'Tropical co-op farm versus a gothic solo farm.' },
  { label: 'Moonlight Peaks vs Witchbrook', href: '/compare/witchbrook', note: 'Witch college versus vampire town.' },
  { label: 'Moonlight Peaks vs Wylde Flowers', href: '/compare/wylde-flowers', note: 'The closest cozy-witch cousin.' },
  { label: 'Compare with Stardew Valley', href: '/moonlight-peaks-vs-stardew-valley', note: 'The genre benchmark, side by side.' },
];
