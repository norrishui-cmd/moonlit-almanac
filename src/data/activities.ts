import type { TopicItem, TopicSection } from './topic';

export const activitiesSection: TopicSection = {
  base: '/activities',
  label: 'Activities',
  eyebrow: 'Gameplay',
  heading: 'Things to <em>do</em>',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Activities — Fishing, Foraging & More',
  description: 'Everything you can do in Moonlight Peaks beyond farming: fishing, foraging, potion-brewing, embroidery, flower arranging, decorating, the character creator, shapeshifting and seasonal events.',
  intro: 'Moonlight Peaks is a cozy life sim with no combat — the fun is in its everyday activities. Here is what you can do, from the crafts featured in the free demo to the magic that sets it apart, with links to the guides for each.',
};

export const activities: TopicItem[] = [
  {
    slug: 'fishing', title: 'Fishing', tag: 'Activity', status: 'confirmed', image: '/hero-loc-lake.webp',
    dek: 'Cast a line in the town\u2019s waters — one of the activities featured in the free demo.',
    body: [
      'Fishing is a confirmed activity and is playable in the free demo. You fish the town\u2019s waters, where the mermaid family also lives.',
      'The full fish list and any special catches are confirmed at launch.',
    ],
    related: [{ label: 'The lake', href: '/locations/lake' }, { label: 'Foraging', href: '/activities/foraging' }],
  },
  {
    slug: 'foraging', title: 'Foraging', tag: 'Activity', status: 'confirmed', image: '/hero-loc-forest.webp',
    dek: 'Gather forageables in the woods after dark.',
    body: [
      'Foraging is one of the confirmed activities — you collect finds out in the woods around town.',
      'Exact forageables and seasons are confirmed at launch.',
    ],
    related: [{ label: 'The forest', href: '/locations/forest' }, { label: 'Fishing', href: '/activities/fishing' }],
  },
  {
    slug: 'flower-arranging', title: 'Flower Arranging', tag: 'Craft', status: 'confirmed', image: '/hero-loc-your-cottage.webp',
    dek: 'A relaxing creative craft included in the demo.',
    body: [
      'Flower arranging is one of the cozy crafts confirmed for the game and shown in the free demo.',
      'How arrangements are used and displayed is confirmed at launch.',
    ],
    related: [{ label: 'Embroidery', href: '/activities/embroidery' }, { label: 'Your cottage', href: '/locations/your-cottage' }],
  },
  {
    slug: 'embroidery', title: 'Embroidery', tag: 'Craft', status: 'confirmed', image: '/hero-loc-your-cottage.webp',
    dek: 'Stitch designs — one of the demo\u2019s relaxing crafts.',
    body: [
      'Embroidery is a confirmed craft and appears in the free demo alongside the other cozy activities.',
      'Patterns and rewards are confirmed at launch.',
    ],
    related: [{ label: 'Flower arranging', href: '/activities/flower-arranging' }, { label: 'Decorating', href: '/activities/decorating' }],
  },
  {
    slug: 'potion-brewing', title: 'Potion Brewing', tag: 'Magic', status: 'confirmed', image: '/hero-fam-witches.webp',
    dek: 'Brew potions — including the Alter Ego Elixir that changes your appearance.',
    body: [
      'Potion-crafting is a confirmed activity. One named example is the Alter Ego Elixir, a potion that changes your appearance.',
      'The full recipe and ingredient list is confirmed at launch — we won\u2019t invent recipes.',
    ],
    related: [{ label: 'Magic', href: '/magic' }, { label: 'Witches', href: '/families/witches' }],
  },
  {
    slug: 'decorating', title: 'Decorating', tag: 'Activity', status: 'confirmed', image: '/hero-loc-your-cottage.webp',
    dek: 'Place and arrange furniture and decor to customize your gothic cottage.',
    body: [
      'Decorating your home is a core cozy activity — you place and arrange furniture and decor to make the cottage your own.',
      'The full catalogue of furniture and decor is confirmed at launch.',
    ],
    related: [{ label: 'Your cottage', href: '/locations/your-cottage' }, { label: 'Character creator', href: '/activities/character-creator' }],
  },
  {
    slug: 'character-creator', title: 'Character Creator', tag: 'Activity', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'Build your own vampire — the character creator is playable in the demo.',
    body: [
      'You create your own vampire in the character creator, which is part of the free demo. Character models are deliberately gender-neutral, and dating is not gender-locked.',
      'You also name your farm and your Hellkitten pet. The full list of customization options is confirmed at launch.',
    ],
    related: [{ label: 'Romance', href: '/romance' }, { label: 'Is dating gender-locked?', href: '/faq/is-dating-gender-locked-in-moonlight-peaks' }],
  },
  {
    slug: 'shapeshifting', title: 'Shapeshifting', tag: 'Magic', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'Turn into a bat to roam town after dark and reach hidden spots.',
    body: [
      'As a vampire you can shapeshift — into a bat, for example — to get around town quickly and reach places you couldn\u2019t on foot.',
      'Any additional forms are confirmed at launch.',
    ],
    related: [{ label: 'Can you shapeshift?', href: '/faq/can-you-shapeshift-in-moonlight-peaks' }, { label: 'Magic', href: '/magic' }],
  },
  {
    slug: 'seasonal-events', title: 'Seasonal Events', tag: 'Events', status: 'reported', image: '/hero-loc-town-square.webp',
    dek: 'Town celebrations hosted across the year.',
    body: [
      'Seasonal celebrations are part of town life, and a theatrical event host (Pumpkin Head) has been shown livening up gatherings.',
      'The full event calendar and dates are confirmed at launch.',
    ],
    related: [{ label: 'Pumpkin Head', href: '/characters/pumpkin-head' }, { label: 'Town square', href: '/locations/town-square' }],
  },
];
