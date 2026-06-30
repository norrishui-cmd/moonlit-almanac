import type { TopicSection } from './topic';

export const compareSection: TopicSection = {
  base: '/compare',
  label: 'Comparisons',
  eyebrow: 'Compare',
  heading: 'Moonlight Peaks <em>vs</em> other cozy sims',
  schemaType: 'Thing',
  title: 'Moonlight Peaks vs Other Cozy Sims — Witchbrook, Coral Island, Wylde Flowers & Stardew | Moonlight Peaks Wiki & Guide',
  description: 'How Moonlight Peaks compares to other cozy farming and witch life sims — Stardew Valley, Witchbrook, Coral Island and Wylde Flowers — across setting, magic, romance, combat, multiplayer and platforms.',
  intro: 'Trying to pick your next cozy life sim? Here is how Moonlight Peaks stacks up against the games people most often compare it to. Each breakdown uses publicly confirmed facts about both games; Moonlight Peaks itself launches July 7, 2026.',
};

export type CmpRow = { dim: string; mp: string; other: string };
export type Comparison = {
  slug: string;
  other: string;
  dek: string;
  otherStatus: string;
  rows: CmpRow[];
  verdict: string[];
  related: { label: string; href: string }[];
  faq?: { q: string; a: string }[];
};

const MP = {
  status: 'Releases July 7, 2026 (free demo out now)',
  setting: 'Cozy-gothic mountain town of seven supernatural families',
  play: 'A young vampire — Count Dracula\u2019s child',
  farming: 'Farm by night, back in the coffin by sunrise; enchanted crops and Draculamb livestock',
  magic: 'Wand-based spells, potion-brewing, and shapeshifting into a bat',
  romance: 'Around two dozen, gender-neutral; marriage yes, no children',
  combat: 'None — fully cozy',
  mp_multi: 'Single-player',
  platforms: 'Steam, Steam Deck, Switch, Switch 2, Android',
};

const row = (dim: string, other: string, mp: string): CmpRow => ({ dim, mp, other });

export const comparisons: Comparison[] = [
  {
    slug: 'witchbrook', other: 'Witchbrook',
    dek: 'Two magic-flavoured life sims — but a vampire farm versus a witch college, and very different release timing.',
    otherStatus: 'Witchbrook (Chucklefish) is in development with a 2026 window and no firm date yet.',
    rows: [
      row('Status', 'In development, 2026 window (no firm date)', MP.status),
      row('Setting', 'Seaside city of Mossport, built around a magic college', MP.setting),
      row('You play as', 'A student witch at Witchbrook College', MP.play),
      row('Farming', 'Farming and foraging woven into college life; pixel-art world', MP.farming),
      row('Magic', 'Magic classes — potion brewing, broom riding, divination', MP.magic),
      row('Romance & marriage', 'Dateable cast; romance yes; no marriage', MP.romance),
      row('Combat', 'Unconfirmed — magic-based encounters hinted', MP.combat),
      row('Multiplayer', 'Up to 4-player online co-op', MP.mp_multi),
      row('Platforms', 'Steam, Switch, Switch 2, Xbox Series & Xbox One (day-one Game Pass)', MP.platforms),
    ],
    verdict: [
      'Pick Witchbrook if you want pixel-art magic-school life with friends — it has up to four-player co-op and lands day one on Game Pass and Xbox, neither of which Moonlight Peaks offers.',
      'Pick Moonlight Peaks if you want a 3D gothic vampire farm you can actually play soon: it has a firm July 7, 2026 date and a free demo out now, lets you marry, and centres on night-time farming rather than classes. Witchbrook still has no confirmed release date.',
    ],
    related: [{ label: 'Release date', href: '/release-date' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks the same as Witchbrook?', a: 'No. They are different games from different studios — Moonlight Peaks is a 3D vampire farming sim launching July 7, 2026, while Witchbrook is a pixel-art witch-college life sim still in development for 2026.' },
      { q: 'Which releases first, Moonlight Peaks or Witchbrook?', a: 'Moonlight Peaks has a firm date of July 7, 2026. Witchbrook only has a 2026 window with no confirmed date, so Moonlight Peaks is expected first.' },
    ],
  },
  {
    slug: 'coral-island', other: 'Coral Island',
    dek: 'A sunny tropical farm with co-op and combat, versus a solo gothic vampire farm with neither.',
    otherStatus: 'Coral Island (Stairway Games) is out now — it hit 1.0 in 2023 and added co-op in 2025.',
    rows: [
      row('Status', 'Out now (1.0 in 2023; co-op added 2025)', MP.status),
      row('Setting', 'Sunny tropical island with coral-reef restoration', MP.setting),
      row('You play as', 'A customizable human farmer', MP.play),
      row('Farming', 'Tropical farming plus an underwater coral farm', MP.farming),
      row('Magic', 'No witchcraft — the fantasy comes from the Merfolk Kingdom', MP.magic),
      row('Romance & marriage', '25 romanceable, gender-neutral; marriage and children', MP.romance),
      row('Combat', 'Yes — monsters in the caves and mines', MP.combat),
      row('Multiplayer', 'Up to 4-player co-op with crossplay', MP.mp_multi),
      row('Platforms', 'Steam (Deck-playable), PS5, Xbox Series', MP.platforms),
    ],
    verdict: [
      'Pick Coral Island if you want a content-packed farm you can play today, with four-player co-op, light combat in the caves, marriage and children, and a bright tropical mood.',
      'Pick Moonlight Peaks for the opposite vibe: a single-player, combat-free, cozy-gothic farm where you play a vampire and tend crops by moonlight. It launches July 7, 2026 and skips children, but leans harder into atmosphere, magic and shapeshifting.',
    ],
    related: [{ label: 'Romance & families', href: '/romance' }, { label: 'Is there multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Coral Island?', a: 'They share the farm-sim core, but Coral Island is a sunny tropical game with co-op, combat and children, while Moonlight Peaks is a solo, combat-free gothic vampire farm with wand magic.' },
      { q: 'Does Moonlight Peaks have multiplayer like Coral Island?', a: 'No. Coral Island has up to four-player co-op; Moonlight Peaks is single-player with no announced multiplayer.' },
    ],
  },
  {
    slug: 'wylde-flowers', other: 'Wylde Flowers',
    dek: 'The closest cousin in tone — witch by night, no combat — but a fixed heroine versus your own custom vampire.',
    otherStatus: 'Wylde Flowers (Studio Drydock) is out now — released in 2022 with its story fully complete.',
    rows: [
      row('Status', 'Out now (2022; story complete)', MP.status),
      row('Setting', 'Cottagecore island of Fairhaven with a hidden coven', MP.setting),
      row('You play as', 'Tara, a fixed witch protagonist (she/her)', MP.play),
      row('Farming', 'Farm by day, witch by night', MP.farming),
      row('Magic', 'Broom, potions, weather and season control, transform into a cat', MP.magic),
      row('Romance & marriage', 'Seven romanceable, all genders; marriage yes, no children', MP.romance),
      row('Combat', 'None — fully cozy', MP.combat),
      row('Multiplayer', 'Single-player', MP.mp_multi),
      row('Platforms', 'Steam, Switch, PS5, Xbox, Apple Arcade', MP.platforms),
    ],
    verdict: [
      'Pick Wylde Flowers if you want a finished, story-rich witch sim with 18+ hours of full voice acting and a fixed heroine, Tara, whose tale you can complete today.',
      'Pick Moonlight Peaks if you would rather build your own vampire, romance a much larger cast, and explore a gothic night-farming world. Tonally they are very close — both are cozy, witch-adjacent and combat-free — but Moonlight Peaks is new (July 7, 2026), customizable and darker in flavour.',
    ],
    related: [{ label: 'Character creator', href: '/activities/character-creator' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Wylde Flowers?', a: 'Tonally yes — both are cozy, combat-free witch-adjacent farm sims with day/night magic. The big differences: Wylde Flowers stars a fixed heroine and is fully voiced and complete, while Moonlight Peaks lets you create your own vampire and launches July 7, 2026.' },
    ],
  },
  {
    slug: 'fae-farm', other: 'Fae Farm',
    dek: 'Two magic farm sims — but a bright fairy island with co-op versus a solo gothic vampire farm.',
    otherStatus: 'Fae Farm (Phoenix Labs, now Gambit Digital) is out now — it launched in 2023 on PC and Switch, with consoles in 2024.',
    rows: [
      row('Status', 'Out now (PC & Switch 2023; consoles 2024)', MP.status),
      row('Setting', 'Enchanted fairy island of Azoria', MP.setting),
      row('You play as', 'A customizable human islander', MP.play),
      row('Farming', 'Magic-infused farming, crafting and potion-making', MP.farming),
      row('Magic', 'Fairy magic and spells to explore and restore the island', MP.magic),
      row('Romance & marriage', 'Romance and marriage (at Town Hall)', MP.romance),
      row('Combat', 'Yes — battling \u201Cjumbles\u201D in the caves', MP.combat),
      row('Multiplayer', 'Up to 4-player co-op (online or local)', MP.mp_multi),
      row('Platforms', 'Steam, Switch, PS4/PS5, Xbox', MP.platforms),
    ],
    verdict: [
      'Pick Fae Farm if you want bright fairy-tale magic with friends — it has up to four-player co-op, light combat in the caves, marriage, and is out now on every major platform.',
      'Pick Moonlight Peaks for a darker, solo take: a single-player, combat-free gothic vampire farm with night-time farming and shapeshifting. Both are magic-cozy sims, but Fae Farm is brighter and multiplayer while Moonlight Peaks is calmer, gothic and arriving July 7, 2026.',
    ],
    related: [{ label: 'Is there multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Fae Farm?', a: 'Both are cozy magic farm sims, but Fae Farm is a brighter fairy island with co-op, light combat and marriage, while Moonlight Peaks is a darker, solo, combat-free vampire farm.' },
      { q: 'Does Moonlight Peaks have co-op like Fae Farm?', a: 'No. Fae Farm has up to four-player co-op; Moonlight Peaks is single-player.' },
    ],
  },
  {
    slug: 'harvest-moon', other: 'Harvest Moon',
    dek: 'The genre\u2019s wholesome originator versus a modern gothic-vampire twist on the same farm-life formula.',
    otherStatus: 'Harvest Moon is the long-running farming-sim series that started the genre in 1996. Note: since 2014 the \u201CHarvest Moon\u201D name is owned by Natsume, while the original team\u2019s games now run as Story of Seasons.',
    rows: [
      row('Status', 'Long-running series since 1996 (now published by Natsume)', MP.status),
      row('Setting', 'Wholesome rural farming towns (varies by entry)', MP.setting),
      row('You play as', 'A farmer (varies by game)', MP.play),
      row('Farming', 'The classic farm-sim loop that started the genre', MP.farming),
      row('Magic', 'Generally none — grounded farm life', MP.magic),
      row('Romance & marriage', 'Marriage and children, a series staple', MP.romance),
      row('Combat', 'Generally none (varies by entry)', MP.combat),
      row('Multiplayer', 'Mostly single-player', MP.mp_multi),
      row('Platforms', 'Mainly Nintendo platforms (Switch), some mobile/console', MP.platforms),
    ],
    verdict: [
      'Pick Harvest Moon if you want the genre\u2019s wholesome originator: grounded farm life with marriage and children across many entries, mostly on Nintendo hardware. Just note the Harvest Moon / Story of Seasons split when you shop.',
      'Pick Moonlight Peaks for a modern, single-fantasy twist on that formula — a gothic vampire life sim with wand magic, shapeshifting and night farming, launching July 7, 2026. It trades children and franchise nostalgia for atmosphere and a fresh setting.',
    ],
    related: [{ label: 'Release date', href: '/release-date' }, { label: 'Farming', href: '/farming' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Harvest Moon?', a: 'It shares the farm-life-with-romance core that Harvest Moon created, but Moonlight Peaks adds a gothic vampire setting, wand magic and shapeshifting, and is a single, self-contained game rather than a long franchise.' },
      { q: 'Is Harvest Moon the same as Story of Seasons?', a: 'Not anymore. They split in 2014: the \u201CHarvest Moon\u201D name is now used by Natsume, while the original series continues as Story of Seasons. Moonlight Peaks is unrelated to both.' },
    ],
  },
  {
    slug: 'grave-seasons', other: 'Grave Seasons',
    dek: 'The closest gothic neighbour — but a murder-mystery with horror stakes versus a cozy, low-stakes vampire life.',
    otherStatus: 'Grave Seasons (Perfect Garbage) is in early development with no release date yet, though it has a Steam page you can wishlist.',
    rows: [
      row('Status', 'In early development — no release date yet', MP.status),
      row('Setting', 'The eerie town of Ashenridge, plagued by supernatural murders', MP.setting),
      row('You play as', 'A newcomer with a mysterious past', MP.play),
      row('Farming', 'Farm, fish and mine while a murder mystery unfolds', MP.farming),
      row('Magic', 'Supernatural horror — a werebeast killer stalks the town', MP.magic),
      row('Romance & marriage', 'Romance the secretive townsfolk (details TBC)', MP.romance),
      row('Combat', 'Unconfirmed — survival-horror stakes', MP.combat),
      row('Multiplayer', 'Unconfirmed', MP.mp_multi),
      row('Platforms', 'Steam (wishlist available)', MP.platforms),
    ],
    verdict: [
      'Pick Grave Seasons if you want the gothic mood pushed into thriller territory — it is pitched as \u201CStardew Valley meets Twin Peaks,\u201D a cozy-horror farm sim where you must stop supernatural murders. The catch: it is early in development with no date.',
      'Pick Moonlight Peaks if you want the gothic atmosphere without the danger — a cozy, combat-free vampire life sim you can actually play from July 7, 2026. Both are supernatural farm sims, but Moonlight Peaks is low-stakes comfort while Grave Seasons leans into murder-mystery tension.',
    ],
    related: [{ label: 'Activities', href: '/activities' }, { label: 'The families', href: '/families' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Grave Seasons?', a: 'They share a gothic, supernatural farm-sim vibe, but Moonlight Peaks is cozy and combat-free and launches July 7, 2026, while Grave Seasons is a darker murder-mystery still in early development with no release date.' },
    ],
  },
  {
    slug: 'fields-of-mistria', other: 'Fields of Mistria',
    dek: 'Two summer-2026 cozy farms — but a \u201990s-style pixel RPG with combat versus a 3D gothic vampire sim without it.',
    otherStatus: 'Fields of Mistria (NPC Studio) is in early access now and reaches full 1.0 on August 5, 2026.',
    rows: [
      row('Status', 'Early access now; full 1.0 on August 5, 2026', MP.status),
      row('Setting', 'Idyllic village of Mistria, rebuilt after an earthquake; \u201990s pixel art', MP.setting),
      row('You play as', 'A customizable human homesteader', MP.play),
      row('Farming', 'Classic farm-sim loop with magic-assisted farming', MP.farming),
      row('Magic', 'Unlockable spells that aid farming and adventuring', MP.magic),
      row('Romance & marriage', '12 marriage candidates; marriage and children (added at 1.0)', MP.romance),
      row('Combat', 'Yes — combat in the mines beneath town', MP.combat),
      row('Multiplayer', 'Single-player', MP.mp_multi),
      row('Platforms', 'Steam (Steam Deck) — PC only for now', MP.platforms),
    ],
    verdict: [
      'Pick Fields of Mistria if you love \u201990s-style pixel art, want light combat in the mines, and don\u2019t mind that its big 1.0 — with marriage and children — lands August 5, 2026, about a month after Moonlight Peaks. It is also far cheaper.',
      'Pick Moonlight Peaks for a 3D, combat-free, gothic vampire take with night farming and shapeshifting. The two launch within weeks of each other in summer 2026, so it largely comes down to pixel-RPG-with-combat versus cozy-3D-vampire.',
    ],
    related: [{ label: 'Release date', href: '/release-date' }, { label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Fields of Mistria?', a: 'They share the cozy-farm core, but Fields of Mistria is a \u201990s-style pixel RPG with combat and children, while Moonlight Peaks is a 3D, combat-free gothic vampire sim. They launch about a month apart in summer 2026.' },
      { q: 'Which comes out first, Moonlight Peaks or Fields of Mistria?', a: 'Moonlight Peaks launches July 7, 2026; Fields of Mistria reaches 1.0 on August 5, 2026, so Moonlight Peaks is first.' },
    ],
  },
  {
    slug: 'sun-haven', other: 'Sun Haven',
    dek: 'A feature-stuffed fantasy farm RPG with combat and eight-player co-op, versus a calm single-player vampire farm.',
    otherStatus: 'Sun Haven (Pixel Sprout Studios) is out now — it launched on PC in 2023 and Switch in 2024.',
    rows: [
      row('Status', 'Out now (PC 2023, Switch 2024)', MP.status),
      row('Setting', 'Fantasy world of four regions, from a medieval town to a monster city', MP.setting),
      row('You play as', 'A custom hero from one of seven races', MP.play),
      row('Farming', 'Three separate farms across regions; no stamina bar', MP.farming),
      row('Magic', 'Spells plus a deep RPG skill tree', MP.magic),
      row('Romance & marriage', '23 romanceable; marriage and one child (via magic)', MP.romance),
      row('Combat', 'Yes — swords, spells, dungeons and bosses', MP.combat),
      row('Multiplayer', 'Up to 8-player online co-op', MP.mp_multi),
      row('Platforms', 'Steam (Steam Deck), Nintendo Switch', MP.platforms),
    ],
    verdict: [
      'Pick Sun Haven if you want a feature-stuffed fantasy farm RPG with real combat, eight-player co-op, seven playable races and a huge skill tree — it is often called \u201CStardew on steroids\u201D and is out now.',
      'Pick Moonlight Peaks for the cozier, focused opposite: single-player, no combat, one clear fantasy (vampires), 3D art and night farming. Sun Haven is bigger and busier; Moonlight Peaks is calmer and more atmospheric.',
    ],
    related: [{ label: 'Is there multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Does Moonlight Peaks have combat or co-op like Sun Haven?', a: 'No. Sun Haven has real combat and up to eight-player co-op; Moonlight Peaks has neither — it is a single-player, combat-free cozy sim.' },
    ],
  },
  {
    slug: 'disney-dreamlight-valley', other: 'Disney Dreamlight Valley',
    dek: 'Familiar Disney faces and a no-pressure pace, versus an original gothic world with deeper farm and romance systems.',
    otherStatus: 'Disney Dreamlight Valley (Gameloft) is out now, having left early access with its full release in 2023.',
    rows: [
      row('Status', 'Out now (full release 2023)', MP.status),
      row('Setting', 'A valley of Disney and Pixar characters', MP.setting),
      row('You play as', 'A custom avatar living among Disney characters', MP.play),
      row('Farming', 'Farming, fishing, cooking and foraging at a gentle pace', MP.farming),
      row('Magic', 'Light \u201CDreamlight\u201D magic; story-driven, not spell-combat', MP.magic),
      row('Romance & marriage', 'Friendship-based; no marriage system', MP.romance),
      row('Combat', 'Minimal — largely a no-combat cozy sim', MP.combat),
      row('Multiplayer', 'Online Valley Visits (social), not full co-op', MP.mp_multi),
      row('Platforms', 'PC, PS5/PS4, Xbox Series/One, Switch, iOS', MP.platforms),
    ],
    verdict: [
      'Pick Disney Dreamlight Valley if you want familiar Disney and Pixar faces, story-driven quests, and a gentle no-combat pace across loads of platforms including mobile — it is the mass-market cozy entry point.',
      'Pick Moonlight Peaks for an original gothic world with farming, romance and marriage, wand magic and shapeshifting. Dreamlight Valley trades on nostalgia and breadth; Moonlight Peaks offers a single, characterful vampire fantasy with deeper farm and romance systems.',
    ],
    related: [{ label: 'Romance & families', href: '/romance' }, { label: 'Activities', href: '/activities' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Disney Dreamlight Valley?', a: 'Both are cozy and combat-light, but Dreamlight Valley is built around Disney and Pixar characters with friendship-based relationships, while Moonlight Peaks is an original vampire world with full romance, marriage and night farming.' },
    ],
  },
];
