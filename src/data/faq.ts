// Moonlight Peaks FAQ — each entry becomes its own page at /faq/<slug> and is listed on the /faq hub.
// RULE: only entries with a real, sourced answer go live here. Do NOT invent gift tables, schedules,
// or data that the game has not revealed. Pending questions are kept as commented templates at the
// bottom — fill them (or I will) once the July 7, 2026 build confirms the answer.

export type FaqCat = 'platforms' | 'romance' | 'characters' | 'world' | 'general';

export const faqCatLabels: Record<FaqCat, string> = {
  platforms: 'Platforms, price & demo',
  romance: 'Romance & marriage',
  characters: 'Characters',
  world: 'World & gameplay',
  general: 'General',
};

export type Related = { label: string; href: string };
export type Faq = {
  slug: string;
  cat: FaqCat;
  q: string;
  a: string;
  more?: string[];
  related?: Related[];
};

export const faqs: Faq[] = [
  // ── Platforms, price & demo ──
  {
    slug: 'when-does-moonlight-peaks-release', cat: 'platforms',
    q: 'When does Moonlight Peaks release?',
    a: 'Moonlight Peaks launches on July 7, 2026.',
    more: ['It arrives the same day on Steam (PC and Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.'],
    related: [{ label: 'Release date & platforms', href: '/release-date' }, { label: 'Price & platforms FAQ', href: '/previews/price-platforms-faq' }],
  },
  {
    slug: 'how-much-does-moonlight-peaks-cost', cat: 'platforms',
    q: 'How much does Moonlight Peaks cost?',
    a: 'It is $34.99 on Steam (PC/Mac), Switch, and Android, and $39.99 on Switch 2.',
    more: ['There is a launch discount in the first week, and a Switch-to-Switch 2 upgrade has been mentioned.'],
    related: [{ label: 'Platforms & price', href: '/platforms' }, { label: 'Release date', href: '/release-date' }],
  },
  {
    slug: 'what-platforms-is-moonlight-peaks-on', cat: 'platforms',
    q: 'What platforms is Moonlight Peaks on?',
    a: 'Steam (Windows and Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.',
    related: [{ label: 'Platforms guide', href: '/platforms' }],
  },
  {
    slug: 'is-moonlight-peaks-on-ps5-or-xbox', cat: 'platforms',
    q: 'Is Moonlight Peaks on PS5 or Xbox?',
    a: 'No PlayStation or Xbox version has been announced. The confirmed platforms are Steam, Steam Deck, Switch, Switch 2, and Android.',
    more: ['If a PS5 or Xbox release is announced later, we will update this page.'],
    related: [{ label: 'Platforms guide', href: '/platforms' }],
  },
  {
    slug: 'is-there-a-moonlight-peaks-demo', cat: 'platforms',
    q: 'Is there a Moonlight Peaks demo?',
    a: 'Yes — a free demo is available on Steam and the Nintendo eShop (also playable on Switch 2).',
    more: ['It includes character creation and cozy activities like fishing, flower arranging, and embroidery, plus early interactions with townsfolk.'],
    related: [{ label: 'Demo guide', href: '/demo' }, { label: 'Is the demo worth it?', href: '/previews/is-the-demo-worth-it' }],
  },
  {
    slug: 'does-demo-progress-carry-over', cat: 'platforms',
    q: 'Does Moonlight Peaks demo progress carry over?',
    a: 'No — treat the demo as a taster. The full game starts fresh.',
    related: [{ label: 'Demo guide', href: '/demo' }],
  },

  // ── General ──
  {
    slug: 'what-is-moonlight-peaks-about', cat: 'general',
    q: 'What is Moonlight Peaks about?',
    a: 'It is a cozy vampire life sim. You play Count Dracula\u2019s child, leaving the city to restore an abandoned family homestead in a supernatural town of werewolves, witches, mermaids, and more.',
    more: ['You farm by night, learn magic and brew potions, and befriend or romance the locals across the town\u2019s seven families.'],
    related: [{ label: 'Beginner guide', href: '/beginner-guide' }, { label: '10 things to know', href: '/previews/things-to-know-before-playing' }],
  },
  {
    slug: 'who-makes-moonlight-peaks', cat: 'general',
    q: 'Who makes Moonlight Peaks?',
    a: 'It is developed by Little Chicken Game Company, with XSEED Games publishing in the Americas and Marvelous Europe in Europe.',
    related: [{ label: 'Release date', href: '/release-date' }],
  },
  {
    slug: 'is-moonlight-peaks-multiplayer', cat: 'general',
    q: 'Is Moonlight Peaks multiplayer?',
    a: 'No multiplayer or co-op has been announced — it is a single-player life sim (Steam lists it as Singleplayer).',
    more: ['If co-op is announced later, we will update this page.'],
    related: [{ label: 'Price & platforms FAQ', href: '/previews/price-platforms-faq' }],
  },

  // ── World & gameplay ──
  {
    slug: 'is-there-combat-in-moonlight-peaks', cat: 'world',
    q: 'Is there combat in Moonlight Peaks?',
    a: 'No. Previews confirm there is no combat anywhere — even the mines and catacombs stay peaceful, so it remains a cozy experience.',
    related: [{ label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'do-you-farm-at-night', cat: 'world',
    q: 'Do you farm at night in Moonlight Peaks?',
    a: 'Yes. As a vampire you do your growing and tending after dark, then return to your coffin by sunrise — a twist on the usual daytime farming loop.',
    related: [{ label: 'Farming guide', href: '/farming' }],
  },
  {
    slug: 'how-does-magic-work-in-moonlight-peaks', cat: 'world',
    q: 'How does magic work in Moonlight Peaks?',
    a: 'Magic is wand-based: you repair a broken wand, draw spell runes to cast, and manage mana (which you refill by eating).',
    more: ['There is a small watering mini-game, and you unlock energy-saving spells that cut down farm busywork. You also brew potions such as the Alter Ego Elixir that changes your appearance.'],
    related: [{ label: 'Magic guide', href: '/magic' }],
  },
  {
    slug: 'can-you-shapeshift-in-moonlight-peaks', cat: 'world',
    q: 'Can you shapeshift in Moonlight Peaks?',
    a: 'Yes. You can shapeshift — for example into a bat — to cross town quickly and reach hidden areas.',
    related: [{ label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'what-is-nokturna', cat: 'world',
    q: 'What is Nokturna in Moonlight Peaks?',
    a: 'Nokturna is the town\u2019s collectible card game. You collect cards and challenge residents to matches.',
    more: ['Full rules and the card list are confirmed at launch — we will not invent cards.'],
    related: [{ label: 'Nokturna guide', href: '/nokturna' }],
  },
  {
    slug: 'what-pets-and-livestock-are-there', cat: 'world',
    q: 'What pets and livestock are in Moonlight Peaks?',
    a: 'You can keep a three-eyed Hellkitten as a pet, and raise magical livestock such as the Draculamb.',
    related: [{ label: 'Farming guide', href: '/farming' }],
  },

  // ── Romance & marriage ──
  {
    slug: 'can-you-get-married-in-moonlight-peaks', cat: 'romance',
    q: 'Can you get married in Moonlight Peaks?',
    a: 'Yes, you can marry a romance partner. There are no children in the game.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-have-children-in-moonlight-peaks', cat: 'romance',
    q: 'Can you have children in Moonlight Peaks?',
    a: 'No. You can date and marry residents, but raising children is not a feature.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'how-many-romance-options-are-there', cat: 'romance',
    q: 'How many romance options are in Moonlight Peaks?',
    a: 'The Steam page describes around two dozen (roughly 24) romanceable residents. Earlier coverage cited 15, so the roster grew during development.',
    more: ['Dating is gender-neutral, and the full named list is confirmed closer to launch.'],
    related: [{ label: 'Romance & families', href: '/romance' }, { label: 'Families explained', href: '/previews/families-and-residents' }],
  },
  {
    slug: 'is-dating-gender-locked-in-moonlight-peaks', cat: 'romance',
    q: 'Is dating gender-locked in Moonlight Peaks?',
    a: 'No. Character models are deliberately gender-neutral, so you can romance any eligible resident regardless of how you build your own vampire.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-romance-a-werewolf', cat: 'romance',
    q: 'Can you romance a werewolf in Moonlight Peaks?',
    a: 'Yes. Saga, a werewolf, is a confirmed romance option. Since vampires and werewolves famously bicker, dating across that divide is part of the charm.',
    related: [{ label: 'Saga', href: '/characters/saga' }, { label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-date-multiple-characters', cat: 'romance',
    q: 'Can you date multiple characters at once in Moonlight Peaks?',
    a: 'This has not been confirmed before launch — exclusivity and polyamory rules have not been revealed.',
    more: ['We will update this answer once the live build shows how dating multiple residents works.'],
    related: [{ label: 'Romance & families', href: '/romance' }],
  },

  // ── Characters ──
  {
    slug: 'who-is-saga', cat: 'characters',
    q: 'Who is Saga in Moonlight Peaks?',
    a: 'Saga is a werewolf townsperson revealed by the developers, and a confirmed romance option. Her energy is said to shift with the full moon.',
    related: [{ label: 'Saga profile', href: '/characters/saga' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-luna', cat: 'characters',
    q: 'Who is Luna in Moonlight Peaks?',
    a: 'Luna is reported to be a farming witch — likely an early source of spells and gardening know-how. Details are confirmed at launch.',
    related: [{ label: 'Luna profile', href: '/characters/luna' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-orlock', cat: 'characters',
    q: 'Who is Orlock in Moonlight Peaks?',
    a: 'Orlock is reported to be the head of a vampire family, written as a comedic figure in hands-on previews.',
    related: [{ label: 'Orlock profile', href: '/characters/orlock' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-count-dracula', cat: 'characters',
    q: 'Who is Count Dracula in Moonlight Peaks?',
    a: 'Count Dracula is your father and a story-central figure. He is not a romance option; the story has you stepping out of his shadow to prove a kinder undead life is possible.',
    related: [{ label: 'Count Dracula profile', href: '/characters/count-dracula' }, { label: 'All characters', href: '/characters' }],
  },
];

// ───────────────────────── PENDING (no confirmed answer yet — fill at launch, then move up) ─────────────────────────
// Do NOT publish these until the live game confirms the answer. Suggested slugs:
//   romance:  best-romance-character, luna-gifts, saga-gifts, how-to-increase-friendship, can-you-divorce, how-to-get-married (mechanics)
//   farming:  best-crop-for-money, do-crops-die, full-crops-list, how-to-water-crops (exact), best-season-crops
//   world:    full-spell-list, all-potions, how-to-fast-travel (confirm Witches' Circle), festival-dates, all-fish-list
//   cheats:   does-moonlight-peaks-have-cheats, money-cheat (only if a real console exists)
// Template:
// { slug: 'luna-gifts', cat: 'romance', q: 'What gifts does Luna like in Moonlight Peaks?',
//   a: 'Confirmed gift preferences will be added once the live game reveals them — we will not guess.',
//   related: [{ label: 'Luna profile', href: '/characters/luna' }] },
