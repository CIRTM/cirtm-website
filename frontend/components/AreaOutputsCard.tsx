import Link from "next/link";
import type { ExplorerPaper } from "@/lib/content/publication-explorer";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };

export function SidebarCard({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <span className="block w-6 h-px" style={{ backgroundColor: RED }} />
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>{eyebrow}</span>
      </div>
      {children}
    </div>
  );
}

/**
 * Publication summary for a research area (default) or a single member (`member` set): headline numbers,
 * papers per year and the latest papers with CIRTM author pills.
 */
export default function AreaOutputsCard({
  papers,
  memberNames,
  member,
  eyebrow = "Research outputs",
  footer,
}: {
  papers: ExplorerPaper[];
  memberNames: Record<string, string>;
  member?: string;
  eyebrow?: string;
  footer?: React.ReactNode;
}) {
  if (papers.length === 0) return null;

  const yearsAll = papers.map((p) => p.year);
  const oa = `${Math.round((100 * papers.filter((p) => p.oa).length) / papers.length)}%`;
  const cites = papers.reduce((n, p) => n + (p.cites ?? 0), 0);
  const topTen = papers.filter((p) => p.top).length;
  const sortedCites = papers.map((p) => p.cites ?? 0).sort((a, b) => b - a);
  const hIndex = sortedCites.filter((c, i) => c >= i + 1).length;
  const stats = member
    ? [
        { label: "Publications", value: papers.length.toLocaleString() },
        { label: "At Brunel", value: papers.filter((p) => p.cirtm).length.toLocaleString() },
        { label: "Citations", value: cites.toLocaleString() },
        { label: "h-index", value: hIndex },
        { label: "Open access", value: oa },
        { label: "Top 10% cited", value: topTen },
      ]
    : [
        { label: "Publications", value: papers.length.toLocaleString() },
        { label: "Members publishing", value: new Set(papers.flatMap((p) => p.people)).size },
        { label: "Citations", value: cites.toLocaleString() },
        { label: "Top 10% cited", value: topTen },
        { label: "Open access", value: oa },
        { label: "Since", value: Math.min(...yearsAll) },
      ];

  const by = new Map<number, number>();
  for (const p of papers) by.set(p.year, (by.get(p.year) ?? 0) + 1);
  const to = Math.max(...yearsAll);
  const from = Math.max(Math.min(...yearsAll), to - 14);
  const years: { y: number; n: number }[] = [];
  for (let y = from; y <= to; y++) years.push({ y, n: by.get(y) ?? 0 });
  const max = Math.max(1, ...years.map((d) => d.n));

  const recent = [...papers].sort((a, b) => b.year - a.year).slice(0, 4);

  return (
    <SidebarCard eyebrow={eyebrow}>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-5 mb-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="text-3xl" style={{ ...SERIF, color: NAVY }}>{s.value}</dd>
            <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mt-1">{s.label}</dt>
          </div>
        ))}
      </dl>
      <p className="-mt-3 mb-6 text-[10px] text-gray-400">Citations from OpenAlex; usually lower than Google Scholar.</p>

      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Papers per year</p>
      <div className="flex items-end gap-1 h-20" role="img" aria-label={`Papers per year, ${from} to ${to}`}>
        {years.map((d) => (
          <div key={d.y} className="group flex-1 h-full flex items-end" title={`${d.y}: ${d.n} paper${d.n === 1 ? "" : "s"}`}>
            <div
              className="w-full rounded-t-[3px] bg-[#0B1B3A]/20 group-hover:bg-red-700 transition-colors"
              style={{ height: `${d.n ? Math.max(4, (100 * d.n) / max) : 0}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1.5 mb-7">
        <span>{from}</span>
        <span>{to}</span>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1">Latest papers</p>
      <ul className="divide-y divide-gray-100">
        {recent.map((p) => {
          const coauthors = p.people.filter((s) => s !== member && memberNames[s]);
          return (
            <li key={p.id} className="py-3">
              <a
                href={p.doi ? `https://doi.org/${p.doi}` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <p className="text-sm leading-snug group-hover:text-red-700 transition-colors" style={{ color: NAVY }}>{p.title}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {p.journal ? <em>{p.journal}</em> : null}{p.journal ? ", " : ""}{p.year}
                  {p.cites > 0 && <span className="ml-2 text-gray-400">· Cited by {p.cites.toLocaleString()}</span>}
                </p>
              </a>
              {coauthors.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {coauthors.map((s) => (
                    <Link
                      key={s}
                      href={`/people/${s}`}
                      className="text-[11px] px-2.5 py-0.5 rounded-full text-white hover:opacity-85 transition-opacity"
                      style={{ backgroundColor: NAVY }}
                    >
                      {memberNames[s]}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {footer ?? (
        <Link
          href="/publications"
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-80"
          style={{ color: RED }}
        >
          Explore all publications →
        </Link>
      )}
    </SidebarCard>
  );
}
