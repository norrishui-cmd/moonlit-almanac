// Moonlight Peaks character roster.
// status: 'confirmed' = named by devs/official; 'reported' = from coverage/previews; 'unconfirmed' = name not yet sourced (verify at launch).
// romanceable: true / false / null (unknown -> "TBC"). TRAITS are illustrative placeholders; [] = none shown.
// IMAGE: square images in /public -> URL is /<id>.webp. img:'' falls back to the SVG letter avatar.

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
  status: 'confirmed' | 'reported' | 'unconfirmed';
  romanceable: boolean | null;
  img?: string;
  c1: string; c2: string;
  desc: string;
  traits: [string, number][];
  traitsPlaceholder?: boolean;
};

const UNCONFIRMED_DESC = 'Portrait shown; not yet confirmed as a Moonlight Peaks character. Name, family, and details will be verified at launch.';

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

  // --- Portraits added; names NOT yet found in any source. Verify & flesh out at launch. ---
  { id: 'kai',     name: 'Kai',     family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/kai.webp',     c1: '#3a4a6a', c2: '#7aa2d0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'celine',  name: 'Celine',  family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/celine.webp',  c1: '#5a3a5a', c2: '#c08ac0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'ridge',   name: 'Ridge',   family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/ridge.webp',   c1: '#4a3a2a', c2: '#b08a4a', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'sabrina', name: 'Sabrina', family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/sabrina.webp', c1: '#3a3a4a', c2: '#8a8ab0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'noel',    name: 'Noel',    family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/noel.webp',    c1: '#4a3a3a', c2: '#b08a8a', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'jada',    name: 'Jada',    family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/jada.webp',    c1: '#5a4a3a', c2: '#c0a07a', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'brook',   name: 'Brook',   family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/brook.webp',   c1: '#4a3a2a', c2: '#a08a5a', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'elvira',  name: 'Elvira',  family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/elvira.webp',  c1: '#5a2f4a', c2: '#c06a9a', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'jarvis',  name: 'Jarvis',  family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/jarvis.webp',  c1: '#2f4a5a', c2: '#6ab0c0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'fiona',   name: 'Fiona',   family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/fiona.webp',   c1: '#4a2f5a', c2: '#a06ac0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'dragan',  name: 'Dragan',  family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/dragan.webp',  c1: '#2f5a4a', c2: '#6ac0a0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'evan',    name: 'Evan',    family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/evan.webp',    c1: '#3a3a4a', c2: '#8a8ab0', desc: UNCONFIRMED_DESC, traits: [] },
];
