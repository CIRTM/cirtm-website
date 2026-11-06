import { explorerPapers } from "./publication-explorer";
import { paperDetails } from "./publication-details";
import type { PersonPublication } from "./publications-felicity-gavins";

const TYPE: Record<string, PersonPublication["type"]> = {
  article: "journal",
  review: "journal",
  letter: "journal",
  editorial: "journal",
  journal: "journal",
  "book-chapter": "book-chapter",
  book: "book",
  dissertation: "thesis",
  preprint: "other",
};

/** A member's publications from the master list (the same data as the Publications page), newest first. */
export function getMemberPublications(slug: string): PersonPublication[] {
  return explorerPapers
    .filter((p) => p.people.includes(slug))
    .map((p) => {
      const d = paperDetails[p.id];
      const type = TYPE[d?.type ?? ""] ?? "other";
      return {
        slug: p.id,
        type,
        title: p.title,
        authors: d?.authors ?? [],
        year: p.year,
        journal: p.journal || undefined,
        volume: d?.volume || undefined,
        issue: d?.issue || undefined,
        pages: d?.pages || undefined,
        doi: p.doi || undefined,
        doiUrl: p.doi ? `https://doi.org/${p.doi}` : undefined,
        memberSlugs: p.people,
        atBrunel: p.cirtm,
        cites: p.cites,
        top: p.top,
      };
    })
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}
