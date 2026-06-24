// Moonlight Peaks articles (previews + guides). Data-driven: add an item here and it appears
// on /previews, the homepage list, and the sitemap automatically.
// These are written in our own words from public info, player feedback, and press previews — NOT first-hand reviews.
//
// category: 'preview' = demo impression roundups | 'guide' = evergreen how-to/reference | 'daily' = short daily updates.
// To add a DAILY post: copy a block, set category:'daily', give it a unique slug + date, and it shows in the homepage "Daily updates" area.
// image: hero lives in /public as /hero-<slug>.webp (original art, safe to use). alt is auto-built from the title.

export type Block = { type: 'h2' | 'p' | 'ul' | 'callout'; text?: string; items?: string[] };
export type Source = { label: string; url: string };
export type Category = 'preview' | 'guide' | 'daily';
export type Preview = {
  slug: string;
  category: Category;
  title: string;
  dek: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
  body: Block[];
  sources: Source[];
};

export const previews: Preview[] = [
  // ───────────────────────── PREVIEWS (demo impressions) ─────────────────────────
  {
    slug: 'demo-impressions-roundup', category: 'preview',
    title: 'Moonlight Peaks Demo: What Players & Press Are Saying',
    dek: 'A roundup of public impressions of the free demo — the praise, the gripes, and the overall mood ahead of the July 7 launch.',
    date: 'June 2026', readTime: '5 min', tag: 'Roundup', image: '/hero-demo-impressions-roundup.webp',
    body: [
      { type: 'p', text: "The demo has appeared in a few forms now, and plenty of people have shared their thoughts on Steam's forums, on Reddit, and in press hands-on previews. Here is the overall picture, summarized in our own words." },
      { type: 'h2', text: 'The praise' },
      { type: 'p', text: 'The most consistent compliment is visual. Players repeatedly call the art adorable and the character portraits gorgeous, and the relaxing soundtrack and cozy night-time atmosphere get singled out too. The gothic spin on farm-sim staples lands well — three-eyed pets, oddly named crops, and a generally charming world.' },
      { type: 'p', text: 'People who played the bigger build also liked the writing, describing it as funny and sharp, and enjoyed small touches like turning into a cat to dash around. More than a few said the demo was what convinced them to wishlist the full game.' },
      { type: 'h2', text: 'The common gripes' },
      { type: 'ul', items: [
        'Onboarding: a lot of players could not work out how to plant at first (you dig the soil with the shovel), and found seeds buried deep in the vendor menu.',
        'Pacing: the early quests can feel slow — one widely shared complaint is that the opening wine task takes a full in-game week.',
        'The older farm-only demo kept players on the farm with no town access, which several found repetitive.',
        'Small stuff: catching bugs and blobs has a fiddly hitbox, and there were requests for in-game audio settings.',
      ] },
      { type: 'h2', text: 'The overall mood' },
      { type: 'p', text: 'Sentiment skews positive, especially on art, tone, and concept, with most criticism aimed at onboarding and the limited scope of the demo rather than the game itself. A large share of posts essentially amount to: this convinced me to wishlist it.' },
      { type: 'callout', text: 'This is a summary of public feedback from players and press, written in our own words — not a first-hand review. Sources are listed below.' },
    ],
    sources: [
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Steam — Moonlight Peaks community discussions', url: 'https://steamcommunity.com/app/2209900/discussions/' },
      { label: 'Bonus Action — Steam Next Fest demo roundup', url: 'https://bonus-action.com/guides/best-10-steam-next-fest-demos-that-wouldnt-let-me-go/' },
    ],
  },
  {
    slug: 'demo-versions-explained', category: 'preview',
    title: 'The Moonlight Peaks Demo Has Had Two Versions — Here Is the Difference',
    dek: 'Some of the negative demo feedback online is about an older build. Here is how the early farm-only demo differs from the bigger, newer one.',
    date: 'June 2026', readTime: '4 min', tag: 'Explainer', image: '/hero-demo-versions-explained.webp',
    body: [
      { type: 'p', text: 'If you read demo impressions, you will notice they do not all describe the same thing. That is because the demo has changed over time.' },
      { type: 'h2', text: 'The early farm-only demo' },
      { type: 'p', text: 'An earlier build dropped you onto a partly furnished farm and kept you there. You could clear weeds, plant, craft, and brew potions, but you could not enter the town — your only merchant was a toad. A recurring complaint was that it grew repetitive: one main quest type, a slow opening, and no town access even after the quests were done.' },
      { type: 'h2', text: 'The bigger, newer demo' },
      { type: 'p', text: 'A later build, shown around Wholesome Direct and Steam Next Fest, added a lot. According to the developers it includes the character creator that players had asked for, new interactions with some of the townsfolk, and the relaxing mini-games — fishing, flower arranging, and embroidery — plus more crafting and materials to gather.' },
      { type: 'p', text: 'Press who played extended builds described meeting named residents and seeing story beats, so the newer demo is much closer to the real experience than the farm-only one.' },
      { type: 'h2', text: 'Why it matters' },
      { type: 'p', text: 'If you tried an older demo and bounced off the farm-locked loop, the newer build is worth another look. And when you read criticism online, check which version it is describing before you let it shape your expectations.' },
      { type: 'callout', text: 'A roundup of public info and feedback, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks hub & developer posts', url: 'https://steamcommunity.com/app/2209900' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
    ],
  },
  {
    slug: 'demo-complaints-rough-edges', category: 'preview',
    title: 'Moonlight Peaks Demo: Common Complaints & Rough Edges',
    dek: 'The recurring nitpicks from demo players — and which ones are just demo-scope limits rather than problems with the full game.',
    date: 'June 2026', readTime: '5 min', tag: 'Analysis', image: '/hero-demo-complaints-rough-edges.webp',
    body: [
      { type: 'p', text: 'No demo is perfect. Here are the issues players brought up most often, along with our read on which ones actually matter.' },
      { type: 'h2', text: 'Onboarding is unclear at first' },
      { type: 'p', text: 'The single most common confusion is how to plant. Several players spent days unsure before learning you dig the soil with the shovel, and many could not find seeds because they sit low in the flower vendor list behind easy-to-miss tabs. This is a clarity issue the team could smooth out, not a sign of shallow design.' },
      { type: 'h2', text: 'Pacing in the opening' },
      { type: 'p', text: 'Some found the first stretch slow — the early wine quest takes about an in-game week, and a few players felt the back-to-back tasks lacked payoff. Worth remembering the demo is a thin slice, so early pacing may not reflect the full game.' },
      { type: 'h2', text: 'The farm-only build felt limited' },
      { type: 'p', text: 'In the older demo, being stuck on the farm with no town access wore thin for some. The newer demo and the full game open the town up, so this is largely a demo-scope issue. (See our piece on the two demo versions.)' },
      { type: 'h2', text: 'Small rough edges' },
      { type: 'ul', items: [
        'Catching bugs and blobs has a small hitbox that can feel imprecise.',
        'Requests for in-game audio options rather than relying on system settings.',
        'At least one player noted a witch looked paler in-game than in her portrait art.',
      ] },
      { type: 'h2', text: 'How seriously to take these' },
      { type: 'p', text: 'Most complaints are about onboarding clarity and the demo deliberately narrow scope, not core design. If those are smoothed out by launch, the underlying life sim seems to land well with the players who tried it.' },
      { type: 'callout', text: 'A summary of public feedback, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks community discussions', url: 'https://steamcommunity.com/app/2209900/discussions/' },
    ],
  },
  {
    slug: 'press-hands-on-impressions', category: 'preview',
    title: 'What a 6-Hour Hands-On Revealed About Moonlight Peaks',
    dek: 'Press who played extended builds got further than the public demo. Here is what their previews suggest about tone, cast, and how it plays — paraphrased.',
    date: 'June 2026', readTime: '5 min', tag: 'Press', image: '/hero-press-hands-on-impressions.webp',
    body: [
      { type: 'p', text: 'A few outlets played longer, story-enabled builds. We are summarizing their impressions in our own words; links are below.' },
      { type: 'h2', text: 'The tone is comedy-drama, not pure cozy calm' },
      { type: 'p', text: "PC Gamer's hands-on described a town of feuding supernatural families who can barely get through a chat without an argument, likening the vibe to a sitcom version of a reality show. The first few minutes reportedly include a hungover vampire patriarch passed out by your house, the werewolf mayor bickering with his brother over a bench, and a self-obsessed warlock flirting through constant interruptions." },
      { type: 'h2', text: 'The cast' },
      { type: 'p', text: 'Names that came up include Luna, a farming witch, and Orlock, a vampire family head written as a comedic, hard-drinking figure (which the reviewer felt was a slightly dated trope). A family of seers and a rogue love demon also featured, and the broader cast was described as endearingly flawed. A separate Next Fest write-up singled out Saga as a standout.' },
      { type: 'h2', text: 'How it plays' },
      { type: 'p', text: 'Reviewers confirmed there is no combat, even in the mines, so it stays cozy. A gamepad is recommended, though keyboard and mouse are supported. There is a small spellcasting mini-game for watering, energy-saving spells you unlock, and a shapeshift ability to cross town and reach hidden areas. The farm-sim fundamentals were called competent, with the verdict coming down to taste in art style and tone.' },
      { type: 'callout', text: 'Paraphrased from press hands-on previews — not our own first-hand review. Sources below.' },
    ],
    sources: [
      { label: 'PC Gamer — I played 6 hours of Moonlight Peaks', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Bonus Action — Steam Next Fest demos', url: 'https://bonus-action.com/guides/best-10-steam-next-fest-demos-that-wouldnt-let-me-go/' },
    ],
  },
  {
    slug: 'is-the-demo-worth-it', category: 'preview',
    title: 'Is the Moonlight Peaks Demo Worth Playing?',
    dek: 'Who will love the demo, who might bounce off it, a few tips before you start, and what the full game adds on July 7.',
    date: 'June 2026', readTime: '4 min', tag: 'Verdict', image: '/hero-is-the-demo-worth-it.webp',
    body: [
      { type: 'p', text: 'Short version: if the art style and a cozy-with-an-edge tone appeal to you, the demo is an easy yes — it is free on Steam and Switch. Here is the nuance.' },
      { type: 'h2', text: 'You will probably love it if…' },
      { type: 'ul', items: [
        'You are here for aesthetics and atmosphere — the art and music are the most-praised parts.',
        'You enjoy decorating and slow hobby loops like fishing, flower arranging, and embroidery.',
        'You like character-driven, slightly chaotic comedy and romance.',
      ] },
      { type: 'h2', text: 'You might bounce off it if…' },
      { type: 'ul', items: [
        'You want fast, immediately rewarding progression — the opening pace is gentle and a little grindy.',
        'You tried the older farm-only demo and disliked being unable to explore — try the newer build instead.',
        'You want action; there is no combat by design.',
      ] },
      { type: 'h2', text: 'Tips before you start' },
      { type: 'ul', items: [
        'To plant, dig the soil with your shovel — this trips up a lot of newcomers.',
        'Seeds sit lower in the vendor list; look for the menu tabs.',
        'Use your watering spell to speed up crops, and manage your magic energy across the night.',
      ] },
      { type: 'h2', text: 'What the full game adds (July 7)' },
      { type: 'p', text: 'The demo is a slice. The full release opens up the town and its seven families, the romance system with around two dozen candidates, the Nokturna card game, more crops and potions, and the main story about reconciling the feuding families. Demo saves do not carry over.' },
      { type: 'callout', text: 'A decision guide based on public feedback and info, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks store page', url: 'https://store.steampowered.com/app/2209900/' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
    ],
  },

  // ───────────────────────── GUIDES (evergreen) ─────────────────────────
  {
    slug: 'things-to-know-before-playing', category: 'guide',
    title: 'Moonlight Peaks: 10 Things to Know Before You Play',
    dek: 'A quick primer for new players — the setting, the night-farming twist, romance, magic, and what to expect at the July 7 launch.',
    date: 'June 2026', readTime: '6 min', tag: 'Guide', image: '/hero-things-to-know-before-playing.webp',
    body: [
      { type: 'p', text: 'New to Moonlight Peaks? Here are the essentials, drawn from official info and previews, so you know what you are walking into.' },
      { type: 'ul', items: [
        'You play a vampire — Count Dracula\u2019s child — who leaves the family castle to restore an abandoned homestead and prove a kinder undead life is possible.',
        'It is a cozy life sim in the Stardew lineage: farming, crafting, relationships, and town life, with no combat anywhere.',
        'You farm at night. Tend crops and animals after dark and be back in your coffin by sunrise — a neat twist on the usual daytime loop.',
        'Crops and livestock are gothic: blood grapes, cruelcumbers, pumpkins, nightshade and a void radish, plus creatures like the Draculamb and a three-eyed Hellkitten pet.',
        'Magic matters. You learn spells from town witches — including a watering mini-game and energy-saving spells — and brew potions such as the Alter Ego Elixir that changes your look.',
        'You can shapeshift (for example into a bat) to cross town quickly and reach hidden areas.',
        'Romance is a core pillar: around two dozen dateable residents, gender-neutral dating, and marriage — but no children.',
        'The town has seven supernatural families — vampires, werewolves, witches, mermaids, and more — who famously bicker, which drives much of the comedy.',
        'There is a collectible in-game card game, Nokturna, plus fishing, foraging, embroidery, flower arranging, and seasonal festivals.',
        'It launches July 7, 2026 on Steam (PC/Mac), Steam Deck, Switch, Switch 2, and Android, at $34.99 ($39.99 on Switch 2), single-player, with a free demo available now.',
      ] },
      { type: 'callout', text: 'Compiled from official info and previews, in our own words. Specifics like exact prices and gift tables are confirmed at launch.' },
    ],
    sources: [
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
      { label: 'Steam — store page', url: 'https://store.steampowered.com/app/2209900/' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
    ],
  },
  {
    slug: 'night-farming-basics', category: 'guide',
    title: 'Night Farming Basics: Crops, Magic & the Daily Loop',
    dek: 'How farming works in Moonlight Peaks — the night-time loop, enchanted crops and livestock, and how magic speeds up the work.',
    date: 'June 2026', readTime: '5 min', tag: 'Guide', image: '/hero-night-farming-basics.webp',
    body: [
      { type: 'p', text: 'Farming is the heart of Moonlight Peaks, with a vampire twist. Here is how the loop works based on the demo and previews.' },
      { type: 'h2', text: 'The night-time loop' },
      { type: 'p', text: 'As a creature of the night you do your growing after dark, then return to your coffin by sunrise. It is the familiar plant–tend–harvest rhythm of a cozy farm sim, shifted to the night and wrapped in gothic style.' },
      { type: 'h2', text: 'Enchanted crops & livestock' },
      { type: 'p', text: 'Expect glowing, cursed produce rather than ordinary veg — names spotted so far include blood grapes, cruelcumbers, pumpkins, nightshade, and a void radish. On the animal side there is the Draculamb, and a three-eyed Hellkitten you can keep as a pet around the homestead.' },
      { type: 'h2', text: 'Magic does the heavy lifting' },
      { type: 'p', text: 'You can water with telekinetic watering cans and learn spells from the town witches, including a small watering mini-game and energy-saving spells that cut down the busywork. Managing your magic energy across the night is part of the rhythm.' },
      { type: 'h2', text: 'A common early stumble' },
      { type: 'p', text: 'Demo players often got stuck on how to plant: you dig the soil with the shovel first, and seeds sit lower in the vendor list behind menu tabs. Once that clicks, the loop opens up.' },
      { type: 'callout', text: 'Based on the demo, official info, and previews. Full crop prices, seasons, and growth times are documented at launch.' },
    ],
    sources: [
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
      { label: 'Steam — community discussions', url: 'https://steamcommunity.com/app/2209900/discussions/' },
    ],
  },
  {
    slug: 'families-and-residents', category: 'guide',
    title: 'The Seven Families & Residents You Will Meet',
    dek: 'What we know before launch about the seven supernatural families and the named residents — clearly marked confirmed vs reported.',
    date: 'June 2026', readTime: '5 min', tag: 'Guide', image: '/hero-families-and-residents.webp',
    body: [
      { type: 'p', text: 'The town is built around seven supernatural families, and getting to know them is central to the game. Here is the pre-launch picture, with names marked by how solid the source is.' },
      { type: 'h2', text: 'The seven families' },
      { type: 'p', text: 'The confirmed make-up spans vampires, werewolves, witches, mermaids, and ghosts, alongside stranger folk and even ordinary normies. Not every family has been named publicly yet; the full roster is expected to be confirmed around launch. Your standing with a family is expected to shape festivals, gifts, and which doors open to you.' },
      { type: 'h2', text: 'Named residents so far' },
      { type: 'ul', items: [
        'Count Dracula — your father and a story-central figure; not a romance option.',
        'Saga — a werewolf townsperson revealed by the developers; her energy shifts with the full moon.',
        'Mina — a townsperson revealed by the developers; role to be verified.',
        'Luna — reported as a farming witch, a likely early source of spells.',
        'Orlock — reported as a vampire family head, written as a comedic figure in previews.',
        'Logan — a werewolf resident seen in footage, associated with an old church on the edge of town.',
        'Pumpkin Head — reported as a theatrical event host around town.',
        'The Warlock — a self-obsessed warlock seen in a hands-on preview; real name to be confirmed.',
      ] },
      { type: 'h2', text: 'Romance basics' },
      { type: 'p', text: 'There are around two dozen romanceable residents, dating is gender-neutral, and you can marry — though there are no children. Vampires and werewolves famously bicker, so dating across that divide is part of the fun.' },
      { type: 'callout', text: 'Confirmed = named by the developers/official; reported = from coverage/previews and verified at launch. See our characters page for portraits.' },
    ],
    sources: [
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
    ],
  },
  {
    slug: 'vs-other-cozy-sims', category: 'guide',
    title: 'Moonlight Peaks vs Other Cozy Farming Sims',
    dek: 'How Moonlight Peaks compares to Stardew Valley, Sun Haven, and other cozy farm sims — what is similar and what sets it apart.',
    date: 'June 2026', readTime: '6 min', tag: 'Compare', image: '/hero-vs-other-cozy-sims.webp',
    body: [
      { type: 'p', text: 'Moonlight Peaks sits in a crowded cozy-farming genre. Here is how it lines up against some popular touchstones, so you can tell what makes it different.' },
      { type: 'h2', text: 'What it shares with the genre' },
      { type: 'p', text: 'Like Stardew Valley and friends, it is built on the comforting loop of planting and tending crops, fishing and foraging, decorating your home, and slowly befriending — and romancing — the locals. If you love that rhythm, you will feel at home.' },
      { type: 'h2', text: 'vs Stardew Valley' },
      { type: 'p', text: 'Stardew is a cheaper, 2D pixel classic with co-op multiplayer and years of content. Moonlight Peaks is newer, 3D, single-player, pricier, and leans into a gothic theme with night farming, magic, and a heavier story and romance focus.' },
      { type: 'h2', text: 'vs Sun Haven and combat-leaning farm RPGs' },
      { type: 'p', text: 'Games like Sun Haven blend farming with combat, RPG leveling, and multiplayer. Moonlight Peaks deliberately has no combat anywhere — even the mines are peaceful — so it is a gentler, more relationship-driven experience.' },
      { type: 'h2', text: 'What sets Moonlight Peaks apart' },
      { type: 'ul', items: [
        'You play a vampire, and farming happens at night.',
        'Magic and potions (like the Alter Ego Elixir) replace some of the usual grind.',
        'Shapeshifting to get around and reach hidden areas.',
        'A supernatural cast across seven feuding families, with sharp comedic writing.',
        'A built-in collectible card game, Nokturna.',
      ] },
      { type: 'h2', text: 'Which should you play?' },
      { type: 'p', text: 'They are not either/or. For a cheap, proven, co-op classic, Stardew is hard to beat; for action and RPG systems, Sun Haven scratches that itch. For a gothic, romance-forward, single-player twist on the formula, Moonlight Peaks is built for you — and many cozy fans will happily play several.' },
      { type: 'callout', text: 'Comparisons are high-level and based on public info; details for Moonlight Peaks are confirmed at launch.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks store page', url: 'https://store.steampowered.com/app/2209900/' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
    ],
  },
  {
    slug: 'price-platforms-faq', category: 'guide',
    title: 'Moonlight Peaks Price, Platforms, Demo & Release FAQ',
    dek: 'Quick answers to the most-asked questions: when it launches, how much it costs, where to play, and whether the demo is free.',
    date: 'June 2026', readTime: '3 min', tag: 'FAQ', image: '/hero-price-platforms-faq.webp',
    body: [
      { type: 'p', text: 'The fast facts people search for most. For the full breakdown, see our release date & platforms page.' },
      { type: 'h2', text: 'When does Moonlight Peaks release?' },
      { type: 'p', text: 'July 7, 2026.' },
      { type: 'h2', text: 'How much does it cost?' },
      { type: 'p', text: 'It is $34.99 on Steam (PC/Mac), Switch, and Android, and $39.99 on Switch 2, with a launch discount in the first week.' },
      { type: 'h2', text: 'What platforms is it on?' },
      { type: 'p', text: 'Steam (Windows and Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.' },
      { type: 'h2', text: 'Is there a free demo?' },
      { type: 'p', text: 'Yes — a free demo is available on Steam and the Nintendo eShop (also playable on Switch 2). It includes character creation and cozy activities like fishing, flower arranging, and embroidery.' },
      { type: 'h2', text: 'Is it multiplayer?' },
      { type: 'p', text: 'No. Moonlight Peaks is a single-player cozy life sim.' },
      { type: 'h2', text: 'Does demo progress carry over?' },
      { type: 'p', text: 'No — treat the demo as a taster; the full game starts fresh.' },
      { type: 'callout', text: 'Quick reference compiled from official and store listings. See the release page for full details.' },
    ],
    sources: [
      { label: 'Steam — store page', url: 'https://store.steampowered.com/app/2209900/' },
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
    ],
  },
];
