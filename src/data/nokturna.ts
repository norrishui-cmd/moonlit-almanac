// Nokturna — the in-game card game in Moonlight Peaks.
// PRE-LAUNCH: the real card list isn't public yet — keep `cards` empty until July 7, 2026.
// AT LAUNCH: add each VERIFIED card below and the browser on /nokturna fills automatically.
// Only add fields you can actually verify in-game; leave the rest out.

export type NokturnaCard = {
  id: string;          // unique slug, e.g. 'moon-bat'
  name: string;
  type?: string;       // category / suit, once known
  rarity?: string;     // e.g. Common / Rare / Legendary
  cost?: string;       // play cost, if any
  power?: string;      // attack / value, if any
  effect?: string;     // what the card does
  howToGet?: string;   // how to obtain it
};

// Keep empty until the game is out, then fill with verified cards.
export const cards: NokturnaCard[] = [];
