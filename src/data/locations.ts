import type { TopicItem, TopicSection } from './topic';

export const locationsSection: TopicSection = {
  base: '/locations',
  label: 'Locations',
  eyebrow: 'World',
  heading: 'Moonlight Peaks <em>locations</em>',
  schemaType: 'Place',
  title: 'Moonlight Peaks Locations —Town, Farm, Forest & More',
  description: 'A guide to the places in Moonlight Peaks: the magical mountain town, your farm and cottage, the forest, the lake, the mines and more —what is confirmed and what we expect at launch.',
  intro: 'The places that make up Moonlight Peaks —the magical mountain town, your homestead, and the wild spots around it. We mark what is developer-confirmed versus reported, datamined (from pre-launch game files, cross-referenced against pre-launch references), or expected, and fill in detail as the July 7, 2026 launch lands.',
};

export const locations: TopicItem[] = [
  {
    slug: 'town', title: 'The Town', tag: 'Town', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'The magical mountain town of seven supernatural families, where you start your new life as a vampire.',
    body: [
      'Moonlight Peaks is set in a small, magical mountain town that has been home to seven families for centuries. You arrive as a young vampire leaving the big city behind.',
      'The town blends cozy village life with the supernatural —your neighbours are werewolves, witches, mermaids and more, and getting to know them is a big part of the game.',
    ],
    related: [{ label: 'The seven families', href: '/families' }, { label: 'Characters', href: '/characters' }, { label: 'Your farm', href: '/locations/your-farm' }],
    faq: [{ q: 'Where is Moonlight Peaks set?', a: 'In a small magical mountain town that is home to seven supernatural families.' }],
  },
  {
    slug: 'town-square', title: 'Town Square', tag: 'Town', status: 'expected', image: '/hero-loc-town-square.webp',
    dek: 'The communal heart of town, where residents gather and seasonal events take place.',
    body: [
      'Like most cozy-sim towns, Moonlight Peaks centres on communal spaces where residents cross paths day to day.',
      'Seasonal celebrations are part of town life —a theatrical event host has been shown livening up gatherings. The exact layout and which events happen here are confirmed at launch.',
    ],
    related: [{ label: 'Pumpkin Head', href: '/characters/pumpkin-head' }, { label: 'Seasonal events', href: '/activities/seasonal-events' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'your-farm', title: 'Your Farm', tag: 'Homestead', status: 'confirmed', image: '/hero-loc-your-farm.webp',
    dek: 'The abandoned family homestead you move into and restore into a moonlit farm.',
    body: [
      'Your starting point is an abandoned family homestead, and restoring it into a working farm is the backbone of the game.',
      'You grow enchanted crops and glowing flowers and raise magical livestock like the Draculamb —all tended by night, since you head back to your coffin by sunrise.',
      'Pre-launch datamined game files (cross-referenced against pre-launch references) refer to this starting farmland internally as "the Plot" —not developer-confirmed as the in-game name players will see.',
    ],
    related: [{ label: 'Farming guide', href: '/farming' }, { label: 'Your cottage', href: '/locations/your-cottage' }, { label: 'Magic', href: '/magic' }],
    faq: [{ q: 'Do you farm during the day in Moonlight Peaks?', a: 'No —you farm by night and return to your coffin by sunrise.' }],
  },
  {
    slug: 'your-cottage', title: 'Your Cottage', tag: 'Home', status: 'confirmed', image: '/hero-loc-your-cottage.webp',
    dek: 'Your customizable gothic home, which you decorate and furnish to taste.',
    body: [
      'You live in a gothic cottage that you can make your own. Decorating —placing and arranging furniture and decor —is one of the core cozy activities.',
      'Exactly which rooms, furniture sets and customization options are available is confirmed when the full game launches.',
    ],
    related: [{ label: 'Decorating', href: '/activities/decorating' }, { label: 'Character creator', href: '/activities/character-creator' }, { label: 'Your farm', href: '/locations/your-farm' }],
  },
  {
    slug: 'forest', title: 'The Forest', tag: 'Wilds', status: 'reported', image: '/hero-loc-forest.webp',
    dek: 'The woods around town, where you forage after dark.',
    body: [
      'Foraging in the woods is one of the game\u2019s confirmed activities, so expect seasonal finds among the trees on the edge of town.',
      'The exact forageables and any forest landmarks are confirmed once the full game is out.',
    ],
    related: [{ label: 'Foraging', href: '/activities/foraging' }, { label: 'Werewolves', href: '/families/werewolves' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'lake', title: 'The Lake', tag: 'Water', status: 'reported', image: '/hero-loc-lake.webp',
    dek: 'The town\u2019s waters, home to fishing and to the mermaid family.',
    body: [
      'Water areas support fishing, one of the demo\u2019s featured activities. The town\u2019s mermaids —one of the seven families —are tied to the water.',
      'Pre-launch datamined game files (cross-referenced against pre-launch references) list a "Silverveil Lake" —likely this location\u2019s proper in-game name, though not yet developer-confirmed.',
      'Named fish and specific spots are confirmed at launch.',
    ],
    related: [{ label: 'Fishing', href: '/activities/fishing' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'The pier', href: '/locations/pier' }],
  },
  {
    slug: 'pier', title: 'The Pier', tag: 'Water', status: 'expected', image: '/hero-loc-pier.webp',
    dek: 'A spot out over the water for fishing and quiet moments.',
    body: [
      'Fishing waters in cozy sims usually include a pier or dock to cast from.',
      'Whether Moonlight Peaks names a specific pier is confirmed at launch —for now, treat this as part of the lakeside fishing area.',
    ],
    related: [{ label: 'Fishing', href: '/activities/fishing' }, { label: 'The lake', href: '/locations/lake' }],
  },
  {
    slug: 'mines', title: 'The Mines', tag: 'Underground', status: 'reported', image: '/hero-loc-mines.webp',
    dek: 'Underground areas you can explore —with no combat.',
    body: [
      'Hands-on press coverage describes a mines area you can explore, and confirms there is no combat anywhere in the game, so heading underground stays peaceful.',
      'Pre-launch datamined game files (cross-referenced against pre-launch references) reference several named underground areas —Cave of Echoes, Crystal Cave, Twilight Catacombs, and Lost Moon Alcove —suggesting the mines are split into distinct zones rather than one single cave. Not developer-confirmed.',
      'What you gather below, and how deep it goes, are confirmed at launch.',
    ],
    related: [{ label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'The town', href: '/locations/town' }],
    faq: [{ q: 'Is there combat in the mines?', a: 'No —previews confirm there is no combat anywhere in Moonlight Peaks, including the mines.' }],
  },
  {
    slug: 'graveyard', title: 'The Graveyard', tag: 'Wilds', status: 'datamined', image: '/hero-loc-graveyard.webp',
    dek: 'A quiet, moonlit corner —pre-launch datamined files name it Ambrosia Graveyard.',
    body: [
      'A graveyard suits the cozy-gothic setting, and the game leans into gentle spooky-season charm rather than horror.',
      'Pre-launch datamined game files (cross-referenced against pre-launch references) name this location "Ambrosia Graveyard," paired with a matching "Ambrosia Mansion" —likely the vampire family\u2019s ancestral estate. Not developer-confirmed; what you can actually do here is confirmed at launch.',
    ],
    related: [{ label: 'The town', href: '/locations/town' }, { label: 'Vampires', href: '/families/vampires' }],
  },
  {
    slug: 'shops', title: 'Town Shops', tag: 'Town', status: 'datamined',
    dek: 'The named shops around town, per pre-launch datamined game files —not yet developer-confirmed.',
    body: [
      'Beyond the general sense that Moonlight Peaks\u2019 town has shops to browse and buy from, pre-launch datamined game files (cross-referenced against pre-launch references) name several specific storefronts: Howling Hammer, The Broken Lamp, Coffee & Coffins, Third Eye Threads, Webb of Wonders, Midnight Market, and Bloom Boutique.',
      'We don\u2019t yet know what each shop sells, who runs it, or its opening hours —those details, and whether all seven make it into the final game unchanged, are confirmed at launch. Treat this as a name-only reference for now.',
    ],
    related: [{ label: 'The town', href: '/locations/town' }, { label: 'Landmarks', href: '/locations/landmarks' }, { label: 'Characters', href: '/characters' }],
  },
  {
    slug: 'landmarks', title: 'Landmarks & Notable Places', tag: 'Wilds', status: 'datamined',
    dek: 'Named places beyond the core areas, per pre-launch datamined game files —not yet developer-confirmed.',
    body: [
      'Alongside the town, farm, forest, lake, mines, and graveyard, pre-launch datamined game files (cross-referenced against pre-launch references) name several other spots: the Crypt, Moonlit Pines, Howling Marshes, Misty Shores, Moonlight Tower, Luna Bay, and Pink Grove.',
      'We don\u2019t know what happens at each of these yet —whether they\u2019re explorable areas, backdrops for events, or tied to specific characters and quests. This page exists so the names are documented somewhere honest rather than guessed at; full descriptions are confirmed at launch.',
    ],
    related: [{ label: 'The forest', href: '/locations/forest' }, { label: 'The mines', href: '/locations/mines' }, { label: 'Shops', href: '/locations/shops' }],
  },
];


