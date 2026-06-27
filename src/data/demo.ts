import type { TopicItem, TopicSection } from './topic';

export const demoSection: TopicSection = {
  base: '/demo',
  label: 'Demo',
  eyebrow: 'Demo',
  heading: 'The Moonlight Peaks <em>demo</em>',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Demo — Free on Steam & Switch, What\u2019s Inside & How to Download | Moonlight Peaks Wiki & Guide',
  description: 'Everything about the free Moonlight Peaks demo: what you can do in it, how to download it on Steam and Nintendo Switch, and how it differs from the full game.',
  intro: 'The free Moonlight Peaks demo is the best way to try the cozy vampire life sim before it launches on July 7, 2026. It is available on Steam and the Nintendo eShop (also on Switch 2). Here is what is in it, how to get it, and how it compares to the full game.',
};

export const demo: TopicItem[] = [
  {
    slug: 'whats-in-the-demo', title: 'What\u2019s in the Moonlight Peaks demo', tag: 'Demo', status: 'confirmed',
    dek: 'What you can actually do in the free demo.',
    body: [
      'The free demo lets you create your vampire and try a slice of cozy life — including fishing, flower arranging and embroidery, plus early interactions with the townsfolk.',
      'It is a taster of the full experience rather than the whole game; the full version launches July 7, 2026.',
    ],
    related: [{ label: 'Activities', href: '/activities' }, { label: 'Character creator', href: '/activities/character-creator' }, { label: 'Demo vs full game', href: '/demo/demo-vs-full-game' }],
    faq: [{ q: 'Is the Moonlight Peaks demo free?', a: 'Yes — it is free on Steam and the Nintendo eShop (also on Switch 2).' }],
  },
  {
    slug: 'how-to-download-the-demo', title: 'How to download the Moonlight Peaks demo', tag: 'Demo', status: 'confirmed',
    dek: 'Where to get the free demo on Steam and Switch.',
    body: [
      'On Steam, open the Moonlight Peaks store page and use the demo\u2019s download button; on Nintendo, find the demo on the eShop, where it is playable on both Switch and Switch 2.',
      'The demo is free on both platforms.',
    ],
    related: [{ label: 'Platforms', href: '/platforms' }, { label: 'On Steam Deck', href: '/platforms/steam-deck' }, { label: 'What\u2019s in the demo', href: '/demo/whats-in-the-demo' }],
    faq: [{ q: 'Is there a Moonlight Peaks demo on Switch?', a: 'Yes — the free demo is on the Nintendo eShop and is playable on both Switch and Switch 2.' }],
  },
  {
    slug: 'demo-vs-full-game', title: 'Moonlight Peaks demo vs full game', tag: 'Demo', status: 'confirmed',
    dek: 'What carries over, and what the full game adds.',
    body: [
      'Demo progress does not carry into the full game — the full release starts fresh.',
      'The full game expands well beyond the demo\u2019s slice, with the complete town, the seven families, farming, magic, romance and marriage. Full details arrive at launch on July 7, 2026.',
    ],
    related: [{ label: 'Does progress carry over?', href: '/faq/does-demo-progress-carry-over' }, { label: 'Romance & families', href: '/romance' }, { label: 'How to download', href: '/demo/how-to-download-the-demo' }],
    faq: [{ q: 'Does Moonlight Peaks demo progress carry over?', a: 'No — the full game starts fresh.' }],
  },
];
