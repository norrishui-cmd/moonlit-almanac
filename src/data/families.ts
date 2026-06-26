import type { TopicItem, TopicSection } from './topic';

export const familiesSection: TopicSection = {
  base: '/families',
  label: 'Families',
  eyebrow: 'World',
  heading: 'The <em>seven families</em>',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Families — Vampires, Werewolves, Witches, Mermaids & Normies | Moonlight Peaks Wiki & Guide',
  description: 'The seven families of Moonlight Peaks: vampires, werewolves, witches, mermaids and the ordinary-human normies. What each family is, who belongs to it, and what is still unrevealed.',
  intro: 'Moonlight Peaks is built around seven families, each with a supernatural inclination — except the normies. Here is what the developers have confirmed about each, with links to the residents who belong to them. Two families\u2019 inclinations are still under wraps; we add them as they\u2019re revealed.',
};

export const families: TopicItem[] = [
  {
    slug: 'vampires', title: 'Vampires', tag: 'Family', status: 'confirmed', image: '/hero-fam-vampires.webp',
    dek: 'The old-world night dwellers — your own family line in Moonlight Peaks.',
    body: [
      'You play a young vampire, the child of Count Dracula, so vampires are the family you\u2019re born into. They\u2019re tied to night-time life and old-world tradition.',
      'Count Dracula is a story-central figure, and Orlock is reported as the head of a vampire family about town.',
    ],
    related: [{ label: 'Count Dracula', href: '/characters/count-dracula' }, { label: 'Orlock', href: '/characters/orlock' }, { label: 'Romance', href: '/romance' }],
    faq: [{ q: 'Are you a vampire in Moonlight Peaks?', a: 'Yes — you play a young vampire, the child of Count Dracula.' }],
  },
  {
    slug: 'werewolves', title: 'Werewolves', tag: 'Family', status: 'confirmed', image: '/hero-fam-werewolves.webp',
    dek: 'Wilder under the full moon — including confirmed sweetheart Saga.',
    body: [
      'Werewolves are one of the seven families. Saga, a confirmed romance option, is a werewolf whose energy shifts with the full moon.',
      'Logan is another reported werewolf resident around town.',
    ],
    related: [{ label: 'Saga', href: '/characters/saga' }, { label: 'Logan', href: '/characters/logan' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'witches', title: 'Witches', tag: 'Family', status: 'confirmed', image: '/hero-fam-witches.webp',
    dek: 'Keepers of wand and potion in the magical town.',
    body: [
      'Witches are one of the seven families, tied to the game\u2019s wand-based magic and potion-brewing.',
      'Luna is reported as a farming witch, and a self-obsessed warlock also appears about town.',
    ],
    related: [{ label: 'Luna', href: '/characters/luna' }, { label: 'The Warlock', href: '/characters/the-warlock' }, { label: 'Magic', href: '/magic' }],
  },
  {
    slug: 'mermaids', title: 'Mermaids', tag: 'Family', status: 'confirmed', image: '/hero-fam-mermaids.webp',
    dek: 'Of the lake and tides — one of the town\u2019s seven families.',
    body: [
      'Mermaids are confirmed as one of the seven families, tied to the town\u2019s water areas.',
      'Named mermaid residents are confirmed closer to launch.',
    ],
    related: [{ label: 'The lake', href: '/locations/lake' }, { label: 'Fishing', href: '/activities/fishing' }],
  },
  {
    slug: 'normies', title: 'Normies', tag: 'Family', status: 'confirmed', image: '/hero-fam-normies.webp',
    dek: 'The one ordinary-human family among the supernatural seven.',
    body: [
      'The developers describe seven families, each with a supernatural inclination \u201Cexcept for the normies\u201D — the one ordinary-human family in a town full of the supernatural.',
      'Two of the seven families\u2019 inclinations haven\u2019t been revealed yet; we\u2019ll add them here as they\u2019re confirmed.',
    ],
    related: [{ label: 'All families', href: '/families' }, { label: 'Characters', href: '/characters' }, { label: 'The town', href: '/locations/town' }],
  },
];
