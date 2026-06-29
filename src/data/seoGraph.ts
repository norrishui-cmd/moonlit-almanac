import { activities } from './activities';
import { characters } from './characters';
import { comparisons } from './compare';
import { demo } from './demo';
import { faqs } from './faq';
import { families } from './families';
import { locations } from './locations';
import { platforms } from './platforms';
import { previews } from './previews';

export type SeoKind = 'hub' | 'guide' | 'faq' | 'profile' | 'list' | 'comparison';

export type SeoLink = {
  label: string;
  href: string;
};

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoPage = {
  path: string;
  hub: string;
  hubPath: string;
  kind: SeoKind;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: SeoFaq[];
  related: SeoLink[];
  image?: string;
};

type Topic = {
  slug: string;
  label: string;
  kind?: SeoKind;
  intro?: string;
};

type Hub = {
  slug: string;
  label: string;
  title: string;
  description: string;
  topics: Topic[];
  modifiers: Topic[];
  entities?: Topic[];
};

const unique = <T>(items: T[], key: (item: T) => string): T[] => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = key(item);
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const titleCase = (slug: string): string =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const topicsFrom = (labels: string[], kind?: SeoKind): Topic[] =>
  labels.map((label) => ({ slug: slugify(label), label: kind ? titleCase(slugify(label)) : label, ...(kind ? { kind } : {}) }));

const knownPaths = new Set<string>([
  '/',
  '/about',
  '/activities',
  '/beginner-guide',
  '/characters',
  '/cheats',
  '/compare',
  '/demo',
  '/faq',
  '/families',
  '/farming',
  '/guides',
  '/locations',
  '/magic',
  '/map',
  '/moonlight-peaks-vs-stardew-valley',
  '/nokturna',
  '/platforms',
  '/previews',
  '/privacy',
  '/release-date',
  '/romance',
  ...characters.filter((item) => item.status !== 'unconfirmed').map((item) => `/characters/${item.id}`),
  ...locations.map((item) => `/locations/${item.slug}`),
  ...families.map((item) => `/families/${item.slug}`),
  ...activities.map((item) => `/activities/${item.slug}`),
  ...platforms.map((item) => `/platforms/${item.slug}`),
  ...demo.map((item) => `/demo/${item.slug}`),
  ...comparisons.map((item) => `/compare/${item.slug}`),
  ...faqs.map((item) => `/faq/${item.slug}`),
  ...previews.map((item) => `/previews/${item.slug}`),
]);

const npcEntities: Topic[] = characters
  .filter((item) => item.status !== 'unconfirmed')
  .map((item) => ({ slug: item.id, label: item.name, kind: 'profile' }));

const locationEntities: Topic[] = locations.map((item) => ({ slug: item.slug, label: item.title, kind: 'profile' }));

const recipeEntities = [
  'blood jam',
  'moon tea',
  'night berry tart',
  'pumpkin soup',
  'shadow tonic',
  'sunblock elixir',
  'alter ego elixir',
  'bat wing stew',
  'graveyard pie',
  'moon milk pudding',
  'witch spice cookies',
  'crimson cordial',
  'glow flower salad',
  'midnight latte',
  'spectral broth',
  'haunted honey cake',
  'draculamb stew',
  'starlit soda',
  'foggy mushroom roast',
  'black rose tea',
  'moon sugar candy',
  'nightshade syrup',
  'forest herb paste',
  'lakeweed sushi',
  'vampire cocoa',
  'ember pepper jam',
  'mist melon juice',
  'ghost pepper curry',
  'silverleaf soup',
  'candleberry pudding',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const collectibleEntities = [
  'moon carp',
  'silver eel',
  'ghost koi',
  'mist trout',
  'grave minnow',
  'lake lantern fish',
  'blood rose',
  'glow lily',
  'night orchid',
  'witch hazel',
  'moon pumpkin',
  'fang corn',
  'shadow tomato',
  'mist melon',
  'bone carrot',
  'silverleaf',
  'black crystal',
  'moonstone',
  'bat fossil',
  'ancient fang',
  'spectral moth',
  'lantern beetle',
  'grave cricket',
  'fog butterfly',
  'haunted mushroom',
  'candleberry',
  'nightberry',
  'ember pepper',
  'lakeweed',
  'starlit shell',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const questEntities = [
  'restore the homestead',
  'repair the wand',
  'first night on the farm',
  'meet the seven families',
  'town square welcome',
  'fishing lesson',
  'flower arranging class',
  'embroidery practice',
  'first nokturna match',
  'unlock bat form',
  'find the hidden path',
  'prepare for the autumn festival',
  'help the witches circle',
  'lake mystery',
  'forest foraging request',
  'mine entrance errand',
  'decorate the cottage',
  'first date invitation',
  'community board delivery',
  'midnight market order',
  'graveyard clean up',
  'draculamb care',
  'moonlit harvest',
  'lost family keepsake',
  'official launch checklist',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const hubs: Hub[] = [
  {
    slug: 'platforms',
    label: 'Platform Hub',
    title: 'Moonlight Peaks platform guides',
    description: 'Platform pages for Moonlight Peaks covering release date, price, performance, controls, saves, demo access, issues, and FAQs.',
    topics: topicsFrom(['steam', 'switch', 'switch-2', 'xbox', 'playstation', 'windows', 'mac', 'steam-deck'], 'guide'),
    modifiers: topicsFrom(['release date', 'price', 'performance', 'controls', 'save data', 'cloud save', 'cross save', 'system requirements', 'fps', 'graphics', 'demo', 'faq', 'guide', 'bugs', 'known issues', 'controller', 'keyboard', 'steam achievements', 'switch performance', 'switch demo', 'switch controls']),
  },
  {
    slug: 'demo',
    label: 'Demo Hub',
    title: 'Moonlight Peaks demo guides',
    description: 'Moonlight Peaks demo pages for downloads, features, save limits, endings, tips, hidden items, known issues, and update history.',
    topics: topicsFrom(['download', 'guide', 'faq', 'review', 'features', 'changes', 'save', 'length', 'endings', 'tips', 'secrets', 'hidden items', 'known issues', 'update history'], 'guide'),
    modifiers: topicsFrom(['steam', 'switch', 'switch 2', 'first hour', 'character creator', 'fishing', 'flower arranging', 'embroidery', 'progress carry over', 'what to do first', 'best settings', 'controls', 'bugs', 'performance', 'full game differences']),
  },
  {
    slug: 'romance',
    label: 'Romance Hub',
    title: 'Moonlight Peaks romance guides',
    description: 'Romance pages covering marriage, gifts, heart events, schedules, dialogue, dates, friendship, and long-tail romance questions.',
    topics: topicsFrom(['romance guide', 'romance characters', 'romance gifts', 'romance heart events', 'romance marriage', 'romance children', 'romance best partner', 'romance faq', 'romance events', 'romance locations', 'romance tips'], 'guide'),
    modifiers: topicsFrom(['gifts', 'schedule', 'events', 'dialogue', 'likes', 'dislikes', 'best gifts', 'date locations', 'marriage', 'friendship', 'heart events', 'romance quest', 'daily routine', 'birthday', 'confession', 'proposal']),
    entities: npcEntities.filter((item) => item.slug !== 'count-dracula'),
  },
  {
    slug: 'characters',
    label: 'Character Hub',
    title: 'Moonlight Peaks character guides',
    description: 'Character pages covering bios, schedules, favorite gifts, friendship, quests, heart events, locations, quotes, and relationships.',
    topics: topicsFrom(['villagers', 'npc', 'companions', 'merchants', 'mayor', 'shopkeepers'], 'list'),
    modifiers: topicsFrom(['bio', 'schedule', 'favorite gifts', 'friendship', 'quests', 'heart events', 'location', 'quotes', 'romance', 'likes', 'dislikes', 'appearance', 'voice', 'relationships', 'daily routine', 'birthday', 'best gifts', 'family', 'shop hours', 'dialogue']),
    entities: npcEntities,
  },
  {
    slug: 'quests',
    label: 'Quest Hub',
    title: 'Moonlight Peaks quest guides',
    description: 'Quest pages for main, side, daily, tutorial, seasonal, romance, and hidden quests with walkthroughs and rewards.',
    topics: topicsFrom(['main story', 'side quests', 'daily quests', 'tutorial quests', 'seasonal quests', 'romance quests', 'hidden quests'], 'list'),
    modifiers: topicsFrom(['walkthrough', 'requirements', 'rewards', 'tips', 'related items', 'related npcs', 'related locations', 'unlock', 'choices', 'best route', 'checklist', 'faq']),
    entities: questEntities,
  },
  {
    slug: 'crafting',
    label: 'Crafting Hub',
    title: 'Moonlight Peaks crafting guides',
    description: 'Crafting, recipes, potions, cooking, alchemy, tools, weapons, and decoration pages with ingredients and uses.',
    topics: topicsFrom(['recipes', 'potions', 'cooking', 'alchemy', 'tools', 'weapons', 'decorations'], 'list'),
    modifiers: topicsFrom(['ingredients', 'locations', 'sell price', 'craft time', 'usage', 'related recipes', 'unlock', 'best use', 'gift value', 'quest use', 'profit', 'faq']),
    entities: recipeEntities,
  },
  {
    slug: 'collectibles',
    label: 'Collectibles Hub',
    title: 'Moonlight Peaks collectible guides',
    description: 'Collectible pages for fish, bugs, flowers, trees, crops, minerals, gems, and artifacts with locations and uses.',
    topics: topicsFrom(['fish', 'bugs', 'flowers', 'trees', 'crops', 'minerals', 'gems', 'artifacts'], 'list'),
    modifiers: topicsFrom(['location', 'season', 'weather', 'rarity', 'price', 'uses', 'related items', 'best time', 'spawn rate', 'gift value', 'quest use', 'sell value', 'faq']),
    entities: collectibleEntities,
  },
  {
    slug: 'map',
    label: 'Map Hub',
    title: 'Moonlight Peaks map and location guides',
    description: 'Map pages for locations, regions, shops, houses, caves, forest, lake, beach, and mountain areas.',
    topics: topicsFrom(['locations', 'regions', 'shops', 'houses', 'caves', 'forest', 'lake', 'beach', 'mountain'], 'list'),
    modifiers: topicsFrom(['items', 'npcs', 'quests', 'events', 'resources', 'photos', 'tips', 'map route', 'hidden spots', 'fast travel', 'shop hours', 'seasonal changes', 'faq']),
    entities: locationEntities,
  },
  {
    slug: 'events',
    label: 'Event Hub',
    title: 'Moonlight Peaks event guides',
    description: 'Event pages for festivals, holidays, seasons, schedules, rewards, shops, exclusive items, NPC dialogue, and tips.',
    topics: topicsFrom(['festivals', 'holidays', 'halloween', 'harvest', 'spring', 'summer', 'autumn', 'winter'], 'list'),
    modifiers: topicsFrom(['schedule', 'rewards', 'shops', 'exclusive items', 'npc dialogue', 'tips', 'start time', 'end time', 'best gifts', 'festival quest', 'date options', 'faq']),
    entities: ['autumn festival', 'spring market', 'summer lake night', 'winter lanterns', 'halloween parade', 'harvest fair', 'moon dance', 'midnight market', 'witches gathering', 'werewolf moon night', 'mermaid concert', 'town welcome'].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const })),
  },
  {
    slug: 'customization',
    label: 'Customization Hub',
    title: 'Moonlight Peaks customization guides',
    description: 'Customization pages for character, cat, outfits, hairstyles, accessories, colors, house, furniture, wallpaper, flooring, garden, and fences.',
    topics: topicsFrom(['character customization', 'cat customization', 'outfits', 'hairstyles', 'accessories', 'colors', 'house customization', 'furniture', 'wallpaper', 'flooring', 'garden', 'fences'], 'list'),
    modifiers: topicsFrom(['unlock', 'all options', 'best combinations', 'colors', 'shops', 'cost', 'requirements', 'tips', 'faq', 'preview', 'style ideas', 'seasonal options']),
  },
  {
    slug: 'controls',
    label: 'Controls Hub',
    title: 'Moonlight Peaks controls and UI guides',
    description: 'Controls and UI pages for inventory, almanac, settings, keybindings, controller, keyboard, tutorials, HUD, and menus.',
    topics: topicsFrom(['inventory', 'almanac', 'ui', 'settings', 'keybindings', 'controller', 'keyboard', 'tutorial'], 'guide'),
    modifiers: topicsFrom(['how to open', 'how to track quests', 'how to use', 'how to change controls', 'how to save', 'how to fast travel', 'hud guide', 'menu guide', 'best settings', 'accessibility', 'steam deck', 'switch', 'faq']),
  },
  {
    slug: 'languages',
    label: 'Language Hub',
    title: 'Moonlight Peaks language support',
    description: 'Language support pages for Spanish, French, German, Italian, Japanese, Chinese, Portuguese, and Korean.',
    topics: topicsFrom(['spanish', 'french', 'german', 'italian', 'japanese', 'chinese', 'portuguese', 'korean'], 'guide'),
    modifiers: topicsFrom(['support', 'release', 'translation', 'faq', 'roadmap', 'subtitles', 'interface', 'updates', 'regional store', 'font support']),
  },
  {
    slug: 'compare',
    label: 'Comparison Hub',
    title: 'Moonlight Peaks comparison guides',
    description: 'Comparison pages for Moonlight Peaks versus other cozy games across graphics, romance, crafting, difficulty, performance, and story.',
    topics: topicsFrom(['fae farm', 'stardew valley', 'animal crossing', 'wylde flowers', 'coral island', 'witchbrook'], 'comparison'),
    modifiers: topicsFrom(['graphics', 'romance', 'combat', 'crafting', 'multiplayer', 'difficulty', 'performance', 'story', 'recommendation', 'pros and cons', 'farming', 'price', 'platforms', 'cozy score']),
  },
  {
    slug: 'faq',
    label: 'FAQ Hub',
    title: 'Moonlight Peaks FAQ pages',
    description: 'Long-tail Moonlight Peaks FAQ pages grouped by platform, gameplay, story, romance, items, events, and performance.',
    topics: topicsFrom(['platform', 'gameplay', 'story', 'romance', 'items', 'events', 'performance'], 'faq'),
    modifiers: topicsFrom(['how to start', 'where to go first', 'when does it unlock', 'can you miss it', 'is there a shortcut', 'why does it happen', 'what happens if you wait', 'how to fix it', 'where to find it', 'how long does it take', 'can you replay it', 'what is the best choice', 'faq']),
  },
  {
    slug: 'guides',
    label: 'Guides Hub',
    title: 'Moonlight Peaks guides',
    description: 'Moonlight Peaks beginner, advanced, money, farming, fishing, decorating, relationship, combat-free, and endgame guides.',
    topics: topicsFrom(['beginners guide', 'advanced guide', 'money guide', 'farming guide', 'fishing guide', 'combat guide', 'decorating guide', 'relationship guide', 'endgame guide'], 'guide'),
    modifiers: topicsFrom(['day one checklist', 'best first upgrades', 'common mistakes', 'what to unlock first', 'best route', 'tips', 'faq', 'settings', 'platform notes', 'demo notes', 'launch changes', 'roadmap']),
  },
  {
    slug: 'buying',
    label: 'Buying Hub',
    title: 'Moonlight Peaks buying guides',
    description: 'Buying pages for before you buy, reviews, pros and cons, best platform, Steam, Switch, and cozy game recommendations.',
    topics: topicsFrom(['before you buy', 'is it worth it', 'review', 'pros and cons', 'best platform', 'steam review', 'switch review', 'cozy game guide'], 'guide'),
    modifiers: topicsFrom(['price', 'demo first', 'best platform', 'steam deck', 'switch 2', 'performance', 'controls', 'launch discount', 'who should play', 'who should wait', 'faq']),
  },
  {
    slug: 'development',
    label: 'Development Hub',
    title: 'Moonlight Peaks development tracker',
    description: 'Development pages for history, updates, roadmap, Gamescom, demo history, official confirmations, and community FAQ.',
    topics: topicsFrom(['development history', 'game updates', 'roadmap', 'gamescom', 'demo history', 'official confirmations', 'community faq'], 'guide'),
    modifiers: topicsFrom(['timeline', 'confirmed facts', 'release window', 'publisher notes', 'developer notes', 'demo changes', 'patch notes', 'faq', 'sources', 'what changed']),
  },
  {
    slug: 'community',
    label: 'Community Hub',
    title: 'Moonlight Peaks community pages',
    description: 'Community pages for news, blog posts, patch notes, Reddit highlights, Discord, developer blogs, and interviews.',
    topics: topicsFrom(['news', 'blog', 'patch notes', 'community', 'reddit highlights', 'discord', 'dev blog', 'interviews'], 'list'),
    modifiers: topicsFrom(['latest', 'archive', 'highlights', 'questions', 'official posts', 'developer answers', 'roundup', 'faq', 'launch week', 'demo week']),
  },
];

const pageDescription = (hub: Hub, topic: Topic, modifier?: Topic): string => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return `Moonlight Peaks ${focus} guide in the ${hub.label.toLowerCase()}: clean facts, launch notes, related pages, FAQs, and update-safe placeholders for details not yet confirmed.`;
};

const relatedFor = (hub: Hub, topic: Topic, modifier?: Topic): SeoLink[] => {
  const baseLinks: SeoLink[] = [
    { label: hub.title, href: `/${hub.slug}` },
    { label: 'Release date', href: '/release-date' },
    { label: 'Demo guide', href: '/demo' },
    { label: 'FAQ', href: '/faq' },
  ];
  const topicLinks = hub.topics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4)
    .map((item) => ({ label: item.label, href: `/${hub.slug}/${item.slug}` }));
  const modifierLinks = modifier
    ? hub.modifiers
        .filter((item) => item.slug !== modifier.slug)
        .slice(0, 5)
        .map((item) => ({ label: `${topic.label} ${item.label}`, href: `/${hub.slug}/${topic.slug}/${item.slug}` }))
    : hub.modifiers.slice(0, 5).map((item) => ({ label: `${topic.label} ${item.label}`, href: `/${hub.slug}/${topic.slug}/${item.slug}` }));
  return unique([...baseLinks, ...topicLinks, ...modifierLinks], (item) => item.href).slice(0, 12);
};

const faqsFor = (hub: Hub, topic: Topic, modifier?: Topic): SeoFaq[] => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return [
    {
      q: `What is the Moonlight Peaks ${focus} page for?`,
      a: `It groups confirmed and reported information about ${focus} so players can find the right Moonlight Peaks guide without digging through unrelated pages.`,
    },
    {
      q: `Is every ${focus} detail confirmed?`,
      a: 'No. Confirmed facts are kept separate from expected launch details. Unknown exact values are marked for update instead of being invented.',
    },
    {
      q: `Where should I go next after this ${hub.label.toLowerCase()} page?`,
      a: `Use the related links on this page to move to sibling guides in the ${hub.label.toLowerCase()}, matching FAQs, character pages, items, locations, and launch news.`,
    },
  ];
};

const sectionsFor = (hub: Hub, topic: Topic, modifier?: Topic) => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return [
    {
      title: 'What this page covers',
      body: `This page is part of the ${hub.label.toLowerCase()} and focuses on Moonlight Peaks ${focus}. It is built from a reusable topic template so the wiki can expand as official details arrive.`,
    },
    {
      title: 'Current status',
      body: 'Moonlight Peaks launches on July 7, 2026. Exact late-game tables, schedules, prices, item stats, and quest outcomes are updated only when reliable information is available.',
    },
    {
      title: 'How it connects',
      body: `The page links back to its hub, sibling pages, related FAQs, and other Moonlight Peaks guide areas so crawlers and readers can move through the topic cluster naturally.`,
    },
  ];
};

const makePage = (hub: Hub, topic: Topic, modifier?: Topic): SeoPage => {
  const path = modifier ? `/${hub.slug}/${topic.slug}/${modifier.slug}` : `/${hub.slug}/${topic.slug}`;
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  const kind = modifier?.kind || topic.kind || 'guide';
  return {
    path,
    hub: hub.label,
    hubPath: `/${hub.slug}`,
    kind,
    title: `Moonlight Peaks ${focus} | ${hub.label} | Moonlight Peaks Wiki`,
    description: pageDescription(hub, topic, modifier),
    h1: `Moonlight Peaks ${focus}`,
    intro: `A focused Moonlight Peaks ${focus} page with metadata, FAQs, breadcrumbs, and related guides generated from the ${hub.label.toLowerCase()}.`,
    sections: sectionsFor(hub, topic, modifier),
    faqs: faqsFor(hub, topic, modifier),
    related: relatedFor(hub, topic, modifier),
  };
};

const makeHubPage = (hub: Hub): SeoPage => ({
  path: `/${hub.slug}`,
  hub: hub.label,
  hubPath: `/${hub.slug}`,
  kind: 'hub',
  title: `${hub.title} | Moonlight Peaks Wiki`,
  description: hub.description,
  h1: hub.title,
  intro: hub.description,
  sections: [
    {
      title: 'Topic cluster',
      body: `This hub organizes ${hub.topics.length} primary Moonlight Peaks topics and ${hub.modifiers.length} reusable page angles into a crawlable internal-linking cluster.`,
    },
    {
      title: 'Expansion model',
      body: 'Each generated URL receives unique metadata, breadcrumb data, FAQ schema, related links, and a stable canonical path.',
    },
  ],
  faqs: [
    {
      q: `What belongs in the ${hub.label}?`,
      a: hub.description,
    },
    {
      q: 'How are these pages updated?',
      a: 'The pages are generated from reusable data. When official launch details are confirmed, the source data can be expanded without changing every URL by hand.',
    },
  ],
  related: [
    { label: 'Release date', href: '/release-date' },
    { label: 'Demo guide', href: '/demo' },
    { label: 'Platforms', href: '/platforms' },
    { label: 'FAQ', href: '/faq' },
    ...hub.topics.slice(0, 8).map((topic) => ({ label: topic.label, href: `/${hub.slug}/${topic.slug}` })),
  ],
});

const generated = hubs.flatMap((hub) => {
  const entityPages = (hub.entities || []).flatMap((entity) => [
    makePage(hub, entity),
    ...hub.modifiers.map((modifier) => makePage(hub, entity, modifier)),
  ]);
  return [
    makeHubPage(hub),
    ...hub.topics.flatMap((topic) => [makePage(hub, topic), ...hub.modifiers.map((modifier) => makePage(hub, topic, modifier))]),
    ...entityPages,
  ];
});

const SEO_PAGE_LIMIT = 300;

const priorityHubs = new Map<string, number>([
  ['platforms', 0],
  ['guides', 1],
  ['demo', 2],
  ['romance', 3],
  ['characters', 4],
  ['buying', 5],
  ['faq', 6],
  ['quests', 7],
  ['crafting', 8],
  ['collectibles', 9],
]);

const priorityTerms = ['release-date', 'guide', 'faq', 'gifts', 'schedule', 'best-gifts', 'steam', 'switch', 'demo', 'price'];

const scorePage = (page: SeoPage): number => {
  const parts = page.path.split('/').filter(Boolean);
  const hubScore = priorityHubs.get(parts[0] || '') ?? 50;
  const depthScore = parts.length * 5;
  const termScore = priorityTerms.some((term) => page.path.includes(term)) ? -3 : 0;
  return hubScore * 100 + depthScore + termScore;
};

export const seoPages: SeoPage[] = unique(generated, (page) => page.path)
  .filter((page) => !knownPaths.has(page.path))
  .sort((a, b) => scorePage(a) - scorePage(b) || a.path.localeCompare(b.path))
  .slice(0, SEO_PAGE_LIMIT);

export const seoPageByPath = new Map(seoPages.map((page) => [page.path, page]));

export const seoStats = {
  hubs: hubs.length,
  urls: seoPages.length,
};
