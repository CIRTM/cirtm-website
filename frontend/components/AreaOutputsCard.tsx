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

export default function AreaOutputsCard({
  papers,
  memberNames,
}: {
  papers: ExplorerPaper[];
  memberNames: Record<string, string>;
}) {
  if (papers.length === 0) return null;

  const yearsAll = papers.map((p) => p.year);
  const stats = [
    { label: "Publications", value: papers.length.toLocaleString() },
    { label: "Members publishing", value: new Set(papers.flatMap((p) => p.people)).size },
    { label: "Open access", value: `${Math.round((100 * papers.filter((p) => p.oa).length) / papers.length)}%` },
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
    <SidebarCard eyebrow="Research outputs">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-5 mb-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="text-3xl" style={{ ...SERIF, color: NAVY }}>{s.value}</dd>
            <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mt-1">{s.label}</dt>
          </div>
        ))}
      </dl>

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
        {recent.map((p) => (
          <li key={p.id} className="py-3">
            <a
              href={p.doi ? `https://doi.org/${p.doi}` : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="text-sm leading-snug group-hover:text-red-700 transition-colors" style={{ color: NAVY }}>{p.title}</p>
              <p className="text-xs text-gray-500 mt-1">{p.journal ? <em>{p.journal}</em> : null}{p.journal ? ", " : ""}{p.year}</p>
            </a>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {p.people.filter((s) => memberNames[s]).map((s) => (
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
          </li>
        ))}
      </ul>

      <Link
        href="/publications"
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-80"
        style={{ color: RED }}
      >
        Explore all publications →
      </Link>
    </SidebarCard>
  );
}
