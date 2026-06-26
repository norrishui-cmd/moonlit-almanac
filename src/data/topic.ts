// Shared shape for topic-cluster pages (Locations, Families, Activities).
// Each data file exports a `section` (hub meta) and an array of `TopicItem`.
// RULE: body/dek must be first-party-sourced or honestly labelled. status: confirmed | reported | expected.

export type TopicStatus = 'confirmed' | 'reported' | 'expected';
export type TopicLink = { label: string; href: string };
export type TopicFaq = { q: string; a: string };

export type TopicItem = {
  slug: string;
  title: string;
  tag: string;
  dek: string;
  image?: string;
  status?: TopicStatus;
  body: string[];
  related?: TopicLink[];
  faq?: TopicFaq[];
};

export type TopicSection = {
  base: string;        // '/locations'
  label: string;       // 'Locations'
  eyebrow: string;     // 'World'
  heading: string;     // H1 HTML, may contain <em>
  schemaType: string;  // 'Place' | 'Thing'
  title: string;       // <title>
  description: string; // meta description
  intro: string;       // hub intro paragraph
};
