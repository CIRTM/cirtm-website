/** compact: square or stacked logos, shown taller so they read at the same visual weight as wide wordmarks. */
export type IndustryPartner = { slug: string; name: string; compact?: boolean };

/** Companies CIRTM members have worked with (list from the client, Nov 2026). Logos in /images/industry-partners/<slug>.png */
export const industryPartners: IndustryPartner[] = [
  { slug: "amgen", name: "Amgen" },
  { slug: "aphios", name: "Aphios Corporation" },
  { slug: "astrazeneca", name: "AstraZeneca" },
  { slug: "bayer", name: "Bayer", compact: true },
  { slug: "boehringer-ingelheim", name: "Boehringer Ingelheim", compact: true },
  { slug: "bms", name: "Bristol Myers Squibb" },
  { slug: "corsalex", name: "Corsalex" },
  { slug: "csl-behring", name: "CSL Behring", compact: true },
  { slug: "eli-lilly", name: "Eli Lilly" },
  { slug: "gsk", name: "GSK" },
  { slug: "immunocore", name: "Immunocore" },
  { slug: "johnson-johnson", name: "Johnson & Johnson" },
  { slug: "msd", name: "MSD" },
  { slug: "novartis", name: "Novartis" },
  { slug: "novo-nordisk", name: "Novo Nordisk" },
  { slug: "pfizer", name: "Pfizer" },
  { slug: "phaim", name: "PHAIM", compact: true },
  { slug: "resother", name: "ResoTher Pharma" },
  { slug: "roche", name: "Roche", compact: true },
  { slug: "sanofi", name: "Sanofi" },
];
