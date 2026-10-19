import { FadeBanner } from "@/components/FadeBanner";
import PublicationsExplorer, { type ExplorerMember } from "@/components/PublicationsExplorer";
import { people } from "@/lib/content/people";
import { explorerPapers } from "@/lib/content/publication-explorer";

const SERIF = { fontFamily: "Georgia, serif" };

export const metadata = { title: "Publications | CIRTM" };

const plainName = (name: string) => name.replace(/^(Prof\.|Dr)\s+/, "");

export default function PublicationsPage() {
  const publishing = new Set(explorerPapers.flatMap((p) => p.people));
  const members: ExplorerMember[] = people
    .filter((p) => !p.hidden && publishing.has(p.slug))
    .map((p) => {
      const name = plainName(p.name);
      return { slug: p.slug, name, short: name.split(" ").slice(-1)[0], area: p.researchAreaSlugs?.[0] ?? null };
    });

  return (
    <>
      <FadeBanner image="/images/facilities/tissue-culture.png" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Research outputs</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 leading-tight" style={SERIF}>
            Our <em>publications</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Explore the research published by CIRTM members: who works with which biological models and approaches,
            where our work overlaps, and every paper behind it.
          </p>
        </div>
      </FadeBanner>
      <PublicationsExplorer papers={explorerPapers} members={members} />
    </>
  );
}
