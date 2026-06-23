// Moonlight Peaks character roster.
// IDENTITY facts (name, family, type, status, romanceable) use VERIFIED public info — do not invent.
//   status: 'confirmed' = named by the developers/official; 'reported' = from coverage/previews, verify at launch.
//   romanceable: true / false / null (unknown — shown as "TBC").
// TRAITS are PLACEHOLDER (illustrative personality bars, 0–100) until the game is out — replace at launch.
// IMAGE: square images live directly in /public (so the URL is /<id>.webp). Leave img:'' to show the SVG avatar.

export type CharType = 'vampire' | 'werewolf' | 'witch' | 'other';

export const typeLabels: Record<CharType, string> = {
  vampire: 'Vampire',
  werewolf: 'Werewolf',
  witch: 'Witch',
  other: 'Other',
};

export type Character = {
  id: string;
  name: string;
  family: string;
  type: CharType;
  status: 'confirmed' | 'reported';
  romanceable: boolean | null;
  img?: string;
  c1: string; c2: string;
  desc: string;
  traits: [string, number][];
  traitsPlaceholder?: boolean;
};

export const characters: Character[] = [
  {
    id: 'count-dracula', name: 'Count Dracula', family: 'Vampire', type: 'vampire',
    status: 'confirmed', romanceable: false, img: '/count-dracula.webp', c1: '#7a2f3f', c2: '#c0436a',
    desc: 'Your father and the town legend whose shadow you set out to step out of. Story-central — not a romance option.',
    traits: [['Presence', 95], ['Tradition', 90], ['Warmth', 25]], traitsPlaceholder: true,
  },
  {
    id: 'saga', name: 'Saga', family: 'Werewolf', type: 'werewolf',
    status: 'confirmed', romanceable: true, img: '/saga.webp', c1: '#5a4a2a', c2: '#caa24a',
    desc: 'A townsperson revealed by the developers; her energy shifts with the full moon.',
    traits: [['Energy', 85], ['Loyalty', 80], ['Calm', 40]], traitsPlaceholder: true,
  },
  {
    id: 'mina', name: 'Mina', family: '—', type: 'other',
    status: 'confirmed', romanceable: null, img: '/mina.webp', c1: '#3a4a6a', c2: '#7aa2d0',
    desc: 'A townsperson revealed by the developers. Family role and romance status to be verified at launch.',
    traits: [['Mystery', 70], ['Charm', 65]], traitsPlaceholder: true,
  },
  {
    id: 'luna', name: 'Luna', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: true, img: '/luna.webp', c1: '#4a2f6a', c2: '#a06ad0',
    desc: 'Reported as a farming witch — likely a source of early spells and gardening know-how.',
    traits: [['Magic', 88], ['Nurture', 75], ['Mischief', 45]], traitsPlaceholder: true,
  },
  {
    id: 'orlock', name: 'Orlock', family: 'Vampire', type: 'vampire',
    status: 'reported', romanceable: true, img: '/orlock.webp', c1: '#6a2f3f', c2: '#c0436a',
    desc: 'Reported as a head of a vampire family — a figure of old-world influence in town.',
    traits: [['Influence', 82], ['Tradition', 78]], traitsPlaceholder: true,
  },
  {
    id: 'logan', name: 'Logan', family: 'Werewolf', type: 'werewolf',
    status: 'reported', romanceable: true, img: '/logan.webp', c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'Reported werewolf resident with a distinctive house design.',
    traits: [['Strength', 80], ['Sociability', 60]], traitsPlaceholder: true,
  },
  {
    id: 'pumpkin-head', name: 'Pumpkin Head', family: '—', type: 'other',
    status: 'reported', romanceable: false, img: '/pumpkin-head.webp', c1: '#6a3f1a', c2: '#e08a3a',
    desc: 'Reported theatrical event host who livens up the town\u2019s gatherings.',
    traits: [['Showmanship', 90], ['Whimsy', 85]], traitsPlaceholder: true,
  },
  {
    id: 'the-warlock', name: 'The Warlock', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: null, img: '/the-warlock.webp', c1: '#3a2f6a', c2: '#9a7ad0',
    desc: 'Seen in a hands-on preview: a self-obsessed warlock about town. Real name to be confirmed.',
    traits: [['Magic', 70], ['Ego', 88]], traitsPlaceholder: true,
  },
];
