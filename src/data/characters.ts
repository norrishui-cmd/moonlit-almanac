// Moonlight Peaks character roster.
// status: 'confirmed' = named by devs/official; 'reported' = from coverage/previews;
// 'datamined' = name verified via pre-launch game-file datamines (cross-referenced with
// community wikis, primarily moonlightpeaks.wiki.gg) but role/family/relationships not yet
// developer-confirmed; 'unconfirmed' = name not sourced anywhere yet (verify at launch).
// romanceable: true / false / null (unknown -> "TBC"). TRAITS are illustrative placeholders; [] = none shown.
// knownInfo: real, sourced bullets shown on the character's profile page. Keep factual; leave empty for unconfirmed.
// IMAGE: square images in /public -> URL is /<id>.webp. img:'' falls back to the SVG letter avatar.
// Profile pages at /characters/<id> are generated ONLY for confirmed/reported characters (not unconfirmed).

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
  status: 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';
  romanceable: boolean | null;
  img?: string;
  c1: string; c2: string;
  desc: string;
  traits: [string, number][];
  traitsPlaceholder?: boolean;
  knownInfo?: string[];
};

const UNCONFIRMED_DESC = 'Portrait shown; not yet confirmed as a Moonlight Peaks character. Name, family, and details will be verified at launch.';

export const characters: Character[] = [
  {
    id: 'count-dracula', name: 'Count Dracula', family: 'Vampire', type: 'vampire',
    status: 'confirmed', romanceable: false, img: '/count-dracula.webp', c1: '#7a2f3f', c2: '#c0436a',
    desc: 'Your father and the town legend whose shadow you set out to step out of. Story-central — not a romance option.',
    traits: [['Presence', 95], ['Tradition', 90], ['Warmth', 25]], traitsPlaceholder: true,
    knownInfo: [
      'He is your father; the story frames your move to Moonlight Peaks as stepping out of his long shadow.',
      'A central story figure rather than a romance option.',
      'The setup has you proving that a kinder, gentler undead life is possible — something he is skeptical of.',
    ],
  },
  {
    id: 'saga', name: 'Saga', family: 'Werewolf', type: 'werewolf',
    status: 'confirmed', romanceable: true, img: '/saga.webp', c1: '#5a4a2a', c2: '#caa24a',
    desc: 'A townsperson revealed by the developers; her energy shifts with the full moon.',
    traits: [['Energy', 85], ['Loyalty', 80], ['Calm', 40]], traitsPlaceholder: true,
    knownInfo: [
      'A werewolf townsperson revealed by the developers.',
      'Her energy is described as shifting with the full moon.',
      'A Steam Next Fest write-up singled her out among the cast.',
    ],
  },
  {
    id: 'mina', name: 'Mina', family: '—', type: 'other',
    status: 'confirmed', romanceable: null, img: '/mina.webp', c1: '#3a4a6a', c2: '#7aa2d0',
    desc: 'A townsperson revealed by the developers. Family role and romance status to be verified at launch.',
    traits: [['Mystery', 70], ['Charm', 65]], traitsPlaceholder: true,
    knownInfo: [
      'A townsperson revealed by the developers.',
      'Family affiliation and romance status have not been detailed yet — to be verified at launch.',
    ],
  },
  {
    id: 'luna', name: 'Luna', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: true, img: '/luna.webp', c1: '#4a2f6a', c2: '#a06ad0',
    desc: 'Reported as a farming witch — likely a source of early spells and gardening know-how.',
    traits: [['Magic', 88], ['Nurture', 75], ['Mischief', 45]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as a farming witch in hands-on previews.',
      'Likely an early source of spells and gardening know-how.',
      'Details to be confirmed against the live game at launch.',
    ],
  },
  {
    id: 'orlock', name: 'Orlock', family: 'Vampire', type: 'vampire',
    status: 'reported', romanceable: true, img: '/orlock.webp', c1: '#6a2f3f', c2: '#c0436a',
    desc: 'Reported as a head of a vampire family — a figure of old-world influence in town.',
    traits: [['Influence', 82], ['Tradition', 78]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as the head of a vampire family.',
      'Written as a comedic figure in hands-on previews.',
      'An old-world presence among the town\u2019s vampires.',
    ],
  },
  {
    id: 'logan', name: 'Logan', family: 'Werewolf', type: 'werewolf',
    status: 'reported', romanceable: true, img: '/logan.webp', c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'Reported werewolf resident with a distinctive house design.',
    traits: [['Strength', 80], ['Sociability', 60]], traitsPlaceholder: true,
    knownInfo: [
      'A werewolf resident seen in gameplay footage.',
      'In dialogue he references an old church down the road on the edge of town.',
      'A Little Chicken 3D artist\u2019s own dev-diary post (via Steam Community) describes redesigning a werewolf-themed room for Logan\u2019s house, which independently corroborates his name.',
    ],
  },
  {
    id: 'pumpkin-head', name: 'Pumpkin Head', family: '—', type: 'other',
    status: 'reported', romanceable: false, img: '/pumpkin-head.webp', c1: '#6a3f1a', c2: '#e08a3a',
    desc: 'Reported theatrical event host who livens up the town\u2019s gatherings.',
    traits: [['Showmanship', 90], ['Whimsy', 85]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as a theatrical event host who appears at town gatherings.',
      'Role and details to be confirmed at launch.',
    ],
  },
  {
    id: 'the-warlock', name: 'The Warlock', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: null, img: '/the-warlock.webp', c1: '#3a2f6a', c2: '#9a7ad0',
    desc: 'Seen in a hands-on preview: a self-obsessed warlock about town. Real name to be confirmed.',
    traits: [['Magic', 70], ['Ego', 88]], traitsPlaceholder: true,
    knownInfo: [
      'A self-obsessed warlock seen in a hands-on preview.',
      'In that preview he flirts with the player through constant interruptions.',
      'His real in-game name has not been confirmed.',
    ],
  },

  // --- Portrait added; name NOT found in the wiki.gg datamine roster or any other source. No profile page until verified at launch. ---
  { id: 'kai',     name: 'Kai',     family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/kai.webp',     c1: '#3a4a6a', c2: '#7aa2d0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'celine',  name: 'Celine',  family: '—', type: 'other', status: 'unconfirmed', romanceable: null, img: '/celine.webp',  c1: '#5a3a5a', c2: '#c08ac0', desc: UNCONFIRMED_DESC, traits: [] },

  // --- Names verified via pre-launch game-file datamines (moonlightpeaks.wiki.gg), cross-referenced.
  // Role, family, and relationships are NOT developer-confirmed — do not treat as final. ---
  { id: 'ridge',   name: 'Ridge',   family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/ridge.webp',   c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'sabrina', name: 'Sabrina', family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/sabrina.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'noel',    name: 'Noel',    family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/noel.webp',    c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'Name verified via pre-launch datamined game files, which also list a "Noel\u2019s House" — role and family not yet confirmed.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg), which also reference a "Noel\u2019s House" as a named location.', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'jada',    name: 'Jada',    family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/jada.webp',    c1: '#5a4a3a', c2: '#c0a07a',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'brook',   name: 'Brook',   family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/brook.webp',   c1: '#4a3a2a', c2: '#a08a5a',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'elvira',  name: 'Elvira',  family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/elvira.webp',  c1: '#5a2f4a', c2: '#c06a9a',
    desc: 'Name verified via pre-launch datamined game files, which also list an "Elvira\u2019s House" — role and family not yet confirmed.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg), which also reference an "Elvira\u2019s House" as a named location.', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'jarvis',  name: 'Jarvis',  family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/jarvis.webp',  c1: '#2f4a5a', c2: '#6ab0c0',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'fiona',   name: 'Fiona',   family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/fiona.webp',   c1: '#4a2f5a', c2: '#a06ac0',
    desc: 'Name verified via pre-launch datamined game files, which also list a "Fiona\u2019s House" — role and family not yet confirmed.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg), which also reference a "Fiona\u2019s House" as a named location.', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'dragan',  name: 'Dragan',  family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/dragan.webp',  c1: '#2f5a4a', c2: '#6ac0a0',
    desc: 'Name verified via pre-launch datamined game files, which also list a "Dragan\u2019s House" — role and family not yet confirmed.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg), which also reference a "Dragan\u2019s House" as a named location.', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
  { id: 'evan',    name: 'Evan',    family: '—', type: 'other', status: 'datamined', romanceable: null, img: '/evan.webp',    c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced via moonlightpeaks.wiki.gg).', 'Family, species, and relationship status are not yet developer-confirmed — treat as unverified until launch.'] },
];
