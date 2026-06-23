// Moonlight Peaks interactive map data.
// PRE-LAUNCH: these are PLACEHOLDER markers so the tool is usable. The page shows a
// "placeholder" banner while `markersConfirmed` is false.
// AT LAUNCH: replace markers with verified locations (set x/y as % across the map),
// then set markersConfirmed = true to hide the banner.

export type MapCategory = 'fishing' | 'foraging' | 'shop' | 'npc' | 'farm';

export const categories: { id: MapCategory; label: string; color: string }[] = [
  { id: 'fishing', label: 'Fishing', color: '#5aa9e6' },
  { id: 'foraging', label: 'Foraging', color: '#8fb98a' },
  { id: 'shop', label: 'Shops', color: '#f3c969' },
  { id: 'npc', label: 'Residents', color: '#c0436a' },
  { id: 'farm', label: 'Farm', color: '#b98ad8' },
];

export type MapMarker = { id: string; name: string; category: MapCategory; x: number; y: number; note?: string };

export const markersConfirmed = false; // flip to true at launch

// x / y are percentages (0–100) across the map image.
export const markers: MapMarker[] = [
  { id: 'pond', name: 'Moonlit Pond', category: 'fishing', x: 24, y: 64, note: 'Placeholder — fishing spot.' },
  { id: 'river', name: 'River Bend', category: 'fishing', x: 60, y: 38, note: 'Placeholder — fishing spot.' },
  { id: 'forest', name: 'Whisper Woods', category: 'foraging', x: 78, y: 70, note: 'Placeholder — foraging area.' },
  { id: 'grove', name: 'Old Grove', category: 'foraging', x: 40, y: 80, note: 'Placeholder — foraging area.' },
  { id: 'gen-store', name: 'General Store', category: 'shop', x: 50, y: 50, note: 'Placeholder — shop.' },
  { id: 'seed-shop', name: 'Seed Shop', category: 'shop', x: 64, y: 56, note: 'Placeholder — buy seeds.' },
  { id: 'saga', name: 'Saga (Werewolf)', category: 'npc', x: 82, y: 44, note: 'Placeholder — resident home.' },
  { id: 'luna', name: 'Luna (Witch)', category: 'npc', x: 34, y: 40, note: 'Placeholder — resident home.' },
  { id: 'farm', name: 'Your Farm', category: 'farm', x: 22, y: 30, note: 'Placeholder — your homestead.' },
];
