"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { ExplorerPaper } from "@/lib/content/publication-explorer";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const GOLD = "#FBBF24";
const SERIF = { fontFamily: "Georgia, serif" };

export type ExplorerMember = { slug: string; name: string; short: string; area: string | null; doctoral?: boolean };

const AREAS: Record<string, { label: string; hex: string }> = {
  "inflammation-immunity-infection": { label: "Inflammation, Immunity & Infection", hex: "#2563EB" },
  "vascular-cardiovascular-sciences": { label: "Vascular & Cardiovascular Sciences", hex: "#DC2626" },
  "cancer-biology": { label: "Cancer Biology", hex: "#9333EA" },
  "translational-medicine-novel-therapeutics": { label: "Translational Medicine & Novel Therapeutics", hex: "#0D9488" },
};
const NO_AREA = "#9CA3AF";

export const ORGANISMS: Record<string, string> = {
  humans: "Humans",
  mice: "Mice",
  rats: "Rats",
  zebrafish: "Zebrafish",
  invertebrates: "Invertebrates",
  microbes: "Microbes",
  "other-vertebrates": "Other vertebrates",
};
export const SYSTEMS: Record<string, string> = {
  "in-vivo": "In vivo",
  "cell-culture": "Cell culture",
  "organoid-3d": "Organoids & 3D",
  "human-studies": "Human studies",
  "in-silico": "In silico",
  review: "Reviews",
};
export const MODEL_KEYS = [...Object.keys(ORGANISMS), ...Object.keys(SYSTEMS).filter((k) => k !== "review")];
const modelLabel = (k: string) => ORGANISMS[k] ?? SYSTEMS[k] ?? k;
const isOrganism = (k: string) => k in ORGANISMS;
const tagsOf = (p: ExplorerPaper) => [...p.organisms, ...p.systems];
const DIRECTOR = "felicity-gavins";
const directorFirst = (a: ExplorerMember, b: ExplorerMember) => Number(b.slug === DIRECTOR) - Number(a.slug === DIRECTOR);

type Filters = { member: string; model: string; query: string; oa: boolean };
const EMPTY: Filters = { member: "", model: "", query: "", oa: false };

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? GOLD : RED;
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px" style={{ backgroundColor: color }} />
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{children}</span>
    </div>
  );
}

export default function PublicationsExplorer({ papers, members }: { papers: ExplorerPaper[]; members: ExplorerMember[] }) {
  const [fullCareers, setFullCareers] = useState(false);
  const [showDoctoral, setShowDoctoral] = useState(false);
  const networkMembers = useMemo(() => (showDoctoral ? members : members.filter((m) => !m.doctoral)), [members, showDoctoral]);
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [shown, setShown] = useState(20);
  const listRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const [networkFocus, setNetworkFocus] = useState<string | null>(null);

  const memberBySlug = useMemo(() => Object.fromEntries(members.map((m) => [m.slug, m])), [members]);
  const scoped = useMemo(() => (fullCareers ? papers : papers.filter((p) => p.cirtm)), [papers, fullCareers]);

  // Links from other pages (e.g. a research area's model network) arrive as ?model=…&member=…
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const model = q.get("model") ?? "";
    const member = q.get("member") ?? "";
    const focus = q.get("focus") ?? "";
    if (focus) {
      // From a member's profile: select their node and land on the network; the list below is pre-filtered.
      setNetworkFocus(focus);
      setFilters({ ...EMPTY, member: focus });
      setTimeout(() => networkRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
      return;
    }
    if (!model && !member) return;
    setFilters({ ...EMPTY, model: MODEL_KEYS.includes(model) ? model : "", member });
    setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
  }, []);

  const applyFilters = (next: Partial<Filters>) => {
    setFilters({ ...EMPTY, ...next });
    setShown(20);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SharedGround papers={scoped} members={networkMembers} showDoctoral={showDoctoral} setShowDoctoral={setShowDoctoral} hasDoctoral={members.some((m) => m.doctoral)} onShow={applyFilters} focusSlug={networkFocus} sectionRef={networkRef} scopeLabel={fullCareers ? "Full careers" : "At Brunel"} fullCareers={fullCareers} setFullCareers={(v) => { setFullCareers(v); setShown(20); }} />

      <ModelFinder papers={scoped} members={members} onShow={applyFilters} />

      <PaperList
        listRef={listRef}
        papers={scoped}
        members={members}
        memberBySlug={memberBySlug}
        filters={filters}
        setFilters={(f) => { setFilters(f); setShown(20); }}
        shown={shown}
        setShown={setShown}
      />
    </>
  );
}

/* ---------- Stats for any set of papers ---------- */

type PaperStats = {
  n: number;
  cites: number;
  h: number;
  top: number;
  oa: number;
  people: number;
  byYear: { y: number; n: number }[];
  best: ExplorerPaper | null;
};

function paperStats(list: ExplorerPaper[]): PaperStats {
  const sorted = list.map((p) => p.cites ?? 0).sort((a, b) => b - a);
  const by = new Map<number, number>();
  for (const p of list) by.set(p.year, (by.get(p.year) ?? 0) + 1);
  const to = list.length ? Math.max(...by.keys()) : 0;
  const from = list.length ? Math.max(Math.min(...by.keys()), to - 14) : 0;
  const byYear = [];
  for (let y = from; y <= to && list.length; y++) byYear.push({ y, n: by.get(y) ?? 0 });
  return {
    n: list.length,
    cites: sorted.reduce((a, b) => a + b, 0),
    h: sorted.filter((c, i) => c >= i + 1).length,
    top: list.filter((p) => p.top).length,
    oa: list.length ? Math.round((100 * list.filter((p) => p.oa).length) / list.length) : 0,
    people: new Set(list.flatMap((p) => p.people)).size,
    byYear,
    best: list.reduce<ExplorerPaper | null>((b, p) => ((p.cites ?? 0) > (b?.cites ?? -1) ? p : b), null),
  };
}

function StatGrid({ stats, member = false }: { stats: PaperStats; member?: boolean }) {
  const items = [
    { label: "Publications", value: stats.n.toLocaleString() },
    { label: "Citations", value: stats.cites.toLocaleString() },
    { label: "h-index", value: stats.h },
    { label: "Top 10% cited", value: stats.top },
    { label: "Open access", value: `${stats.oa}%` },
    member ? null : { label: "Members", value: stats.people },
  ].filter(Boolean) as { label: string; value: string | number }[];
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6">
      {items.map((s) => (
        <div key={s.label}>
          <dd className="text-2xl" style={{ ...SERIF, color: NAVY }}>{s.value}</dd>
          <dt className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mt-0.5">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

function MiniYears({ byYear }: { byYear: { y: number; n: number }[] }) {
  if (byYear.length < 2) return null;
  const max = Math.max(1, ...byYear.map((d) => d.n));
  return (
    <div className="mb-6">
      <div className="flex items-end gap-0.5 h-12" aria-hidden>
        {byYear.map((d) => (
          <div key={d.y} className="flex-1 h-full flex items-end" title={`${d.y}: ${d.n}`}>
            <div className="w-full rounded-t-[2px]" style={{ height: `${d.n ? Math.max(6, (100 * d.n) / max) : 0}%`, backgroundColor: NAVY, opacity: 0.25 }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        <span>{byYear[0].y}</span>
        <span>Papers per year</span>
        <span>{byYear[byYear.length - 1].y}</span>
      </div>
    </div>
  );
}

/* ---------- Shared ground network ---------- */

const W = 1000;
const C = W / 2;
const R_OUT = 400;
const R_IN = 225;
const PAD = 110;

function SharedGround({
  papers,
  members,
  onShow,
  focusSlug,
  sectionRef,
  scopeLabel,
  fullCareers,
  setFullCareers,
  showDoctoral,
  setShowDoctoral,
  hasDoctoral,
}: {
  papers: ExplorerPaper[];
  members: ExplorerMember[];
  onShow: (f: Partial<Filters>) => void;
  focusSlug?: string | null;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
  scopeLabel: string;
  fullCareers: boolean;
  setFullCareers: (v: boolean) => void;
  showDoctoral: boolean;
  setShowDoctoral: (v: boolean) => void;
  hasDoctoral: boolean;
}) {
  const [hover, setHover] = useState<string | null>(null);
  // undefined = untouched: fall back to the member passed in from a profile link (if they're on the network).
  const [picked, setSelected] = useState<string | null | undefined>(undefined);


  const graph = useMemo(() => {
    const edgeCount = new Map<string, number>();
    const memberCount = new Map<string, number>();
    const modelCount = new Map<string, number>();
    for (const p of papers) {
      const tags = tagsOf(p).filter((t) => MODEL_KEYS.includes(t));
      for (const t of tags) modelCount.set(t, (modelCount.get(t) ?? 0) + 1);
      for (const m of p.people) {
        memberCount.set(m, (memberCount.get(m) ?? 0) + 1);
        for (const t of tags) edgeCount.set(`${m}|${t}`, (edgeCount.get(`${m}|${t}`) ?? 0) + 1);
      }
    }
    const areaOrder = [...Object.keys(AREAS), null];
    const ms = members
      .filter((m) => memberCount.has(m.slug))
      .sort((a, b) => directorFirst(a, b) || areaOrder.indexOf(a.area) - areaOrder.indexOf(b.area) || a.short.localeCompare(b.short));
    const models = MODEL_KEYS.filter((k) => modelCount.has(k));

    const pos = new Map<string, { x: number; y: number; angle: number }>();
    ms.forEach((m, i) => {
      const angle = (i / ms.length) * 2 * Math.PI - Math.PI / 2;
      pos.set(m.slug, { x: C + R_OUT * Math.cos(angle), y: C + R_OUT * Math.sin(angle), angle });
    });
    // Organisms across the top of the inner ring, systems across the bottom.
    const orgs = models.filter(isOrganism);
    const syss = models.filter((k) => !isOrganism(k));
    const place = (keys: string[], from: number, to: number) =>
      keys.forEach((k, i) => {
        const angle = from + ((i + 0.5) / keys.length) * (to - from);
        pos.set(k, { x: C + R_IN * Math.cos(angle), y: C + R_IN * Math.sin(angle), angle });
      });
    place(orgs, Math.PI * 1.05, Math.PI * 1.95);
    place(syss, Math.PI * 0.05, Math.PI * 0.95);

    const edges = [...edgeCount.entries()]
      .map(([k, n]) => {
        const [m, t] = k.split("|");
        return { m, t, n };
      })
      .filter((e) => pos.has(e.m) && pos.has(e.t));
    const maxEdge = Math.max(1, ...edges.map((e) => e.n));
    const maxModel = Math.max(1, ...modelCount.values());
    const maxMember = Math.max(1, ...memberCount.values());
    return { ms, models, pos, edges, maxEdge, memberCount, modelCount, maxModel, maxMember, edgeCount };
  }, [papers, members]);


  const selected = picked !== undefined ? picked : focusSlug && graph.memberCount.has(focusSlug) ? focusSlug : null;
  const focus = hover ?? selected;

  const neighbours = useMemo(() => {
    if (!focus) return null;
    const set = new Set<string>([focus]);
    for (const e of graph.edges) {
      if (e.m === focus) set.add(e.t);
      if (e.t === focus) set.add(e.m);
    }
    return set;
  }, [focus, graph.edges]);

  const detail = useMemo(() => {
    if (!selected) return null;
    const isMember = graph.memberCount.has(selected);
    const links = graph.edges
      .filter((e) => (isMember ? e.m === selected : e.t === selected))
      .map((e) => ({ key: isMember ? e.t : e.m, n: e.n }))
      .sort((a, b) => b.n - a.n);
    const member = graph.ms.find((m) => m.slug === selected);
    const subset = papers.filter((p) => (isMember ? p.people.includes(selected) : tagsOf(p).includes(selected)));
    return {
      isMember,
      title: member ? member.name : modelLabel(selected),
      links,
      stats: paperStats(subset),
    };
  }, [selected, graph, papers]);

  const overall = useMemo(() => paperStats(papers), [papers]);

  const dim = (id: string) => (neighbours && !neighbours.has(id) ? 0.15 : 1);

  return (
    <section ref={sectionRef} className="py-20 scroll-mt-20" style={{ backgroundColor: IVORY, color: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>Shared ground</Eyebrow>
        <h2 className="text-4xl sm:text-5xl mb-4" style={SERIF}>
          How our research <em>connects</em>
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Members on the outer ring, the biological models and approaches they publish with in the centre. Shared
            models are where collaborations start. Hover to trace connections, click to explore.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start lg:self-auto flex-shrink-0">
          {hasDoctoral && (
            <button
              type="button"
              role="switch"
              aria-checked={showDoctoral}
              onClick={() => setShowDoctoral(!showDoctoral)}
              className="inline-flex items-center gap-2.5 text-sm font-medium"
              style={{ color: NAVY }}
            >
              <span
                className="relative inline-block w-9 h-5 rounded-full transition-colors"
                style={{ backgroundColor: showDoctoral ? NAVY : "#D1D5DB" }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform"
                  style={{ transform: showDoctoral ? "translateX(16px)" : "none" }}
                />
              </span>
              Doctoral researchers
            </button>
          )}
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-white">
            {[
              { full: false, label: "At Brunel" },
              { full: true, label: "Full careers" },
            ].map((o) => (
              <button
                key={o.label}
                onClick={() => setFullCareers(o.full)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={fullCareers === o.full ? { backgroundColor: NAVY, color: "#fff" } : { color: NAVY }}
              >
                {o.label}
              </button>
            ))}
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-8 items-start">
          <div>
            <svg
              viewBox={`${-PAD} ${-PAD / 2} ${W + 2 * PAD} ${W + PAD}`}
              className="w-full block select-none"
              role="img"
              aria-label="Network of CIRTM members and the biological models they publish with"
              onClick={() => setSelected(null)}
            >
              <circle cx={C} cy={C} r={R_IN} fill="none" stroke="rgba(11,27,58,0.10)" />
              <circle cx={C} cy={C} r={R_OUT} fill="none" stroke="rgba(11,27,58,0.08)" />
              <text x={C} y={C - R_IN - 26} textAnchor="middle" fill="rgba(11,27,58,0.4)" fontSize="13" letterSpacing="3">
                ORGANISMS
              </text>
              <text x={C} y={C + R_IN + 36} textAnchor="middle" fill="rgba(11,27,58,0.4)" fontSize="13" letterSpacing="3">
                APPROACHES
              </text>

              {graph.edges.map((e) => {
                const a = graph.pos.get(e.m)!;
                const b = graph.pos.get(e.t)!;
                const on = focus && (e.m === focus || e.t === focus);
                const member = graph.ms.find((m) => m.slug === e.m)!;
                const hex = member.area ? AREAS[member.area].hex : NO_AREA;
                const cx = C + ((a.x + b.x) / 2 - C) * 0.35;
                const cy = C + ((a.y + b.y) / 2 - C) * 0.35;
                return (
                  <path
                    key={`${e.m}|${e.t}`}
                    d={`M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`}
                    fill="none"
                    stroke={hex}
                    strokeWidth={0.6 + 7 * Math.sqrt(e.n / graph.maxEdge)}
                    strokeOpacity={focus ? (on ? 0.9 : 0.04) : 0.3}
                    style={{ transition: "stroke-opacity 0.25s" }}
                  />
                );
              })}

              {graph.models.map((k) => {
                const p = graph.pos.get(k)!;
                const r = 9 + 16 * Math.sqrt(graph.modelCount.get(k)! / graph.maxModel);
                const org = isOrganism(k);
                const below = p.y > C;
                return (
                  <g
                    key={k}
                    className="cursor-pointer"
                    opacity={dim(k)}
                    style={{ transition: "opacity 0.25s" }}
                    onMouseEnter={() => setHover(k)}
                    onMouseLeave={() => setHover(null)}
                    onClick={(ev) => { ev.stopPropagation(); setSelected(k); }}
                  >
                    <circle cx={p.x} cy={p.y} r={r} fill={org ? NAVY : IVORY} stroke={NAVY} strokeWidth={org ? 0 : 3} />
                    <text
                      x={p.x}
                      y={below ? p.y - r - 10 : p.y + r + 22}
                      textAnchor="middle"
                      fill={NAVY}
                      fontSize="17"
                      style={{ paintOrder: "stroke", stroke: IVORY, strokeWidth: 5, ...SERIF }}
                    >
                      {modelLabel(k)}
                    </text>
                  </g>
                );
              })}

              {graph.ms.map((m) => {
                const p = graph.pos.get(m.slug)!;
                const r = 7 + 10 * Math.sqrt(graph.memberCount.get(m.slug)! / graph.maxMember);
                const hex = m.area ? AREAS[m.area].hex : NO_AREA;
                const cos = Math.cos(p.angle);
                const lx = C + (R_OUT + r + 12) * cos;
                const ly = C + (R_OUT + r + 12) * Math.sin(p.angle);
                return (
                  <g
                    key={m.slug}
                    className="cursor-pointer"
                    opacity={dim(m.slug)}
                    style={{ transition: "opacity 0.25s" }}
                    onMouseEnter={() => setHover(m.slug)}
                    onMouseLeave={() => setHover(null)}
                    onClick={(ev) => { ev.stopPropagation(); setSelected(m.slug); }}
                  >
                    <circle cx={p.x} cy={p.y} r={r} fill={hex} stroke={selected === m.slug ? NAVY : IVORY} strokeWidth={3} />
                    <text
                      x={lx}
                      y={ly + 5}
                      textAnchor={Math.abs(cos) < 0.2 ? "middle" : cos > 0 ? "start" : "end"}
                      fill={NAVY}
                      fontSize="17"
                    >
                      {m.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 min-h-[18rem]">
              {detail ? (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: RED }}>
                      {detail.isMember ? "Member" : isOrganism(selected!) ? "Organism" : "Approach"}
                    </p>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-gray-400 hover:text-red-700 -mt-1"
                      aria-label="Clear selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-2xl mb-5" style={{ ...SERIF, color: NAVY }}>{detail.title}</h3>
                  <p className="-mt-4 mb-5 text-xs text-gray-400">{scopeLabel}</p>
                  <StatGrid stats={detail.stats} member={detail.isMember} />
                  <MiniYears byYear={detail.stats.byYear} />
                  {detail.stats.best && (
                    <div className="mb-6">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">Most cited</p>
                      <a
                        href={detail.stats.best.doi ? `https://doi.org/${detail.stats.best.doi}` : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm leading-snug hover:text-red-700" style={{ color: NAVY }}
                      >
                        {detail.stats.best.title}
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        {detail.stats.best.year} · cited by {detail.stats.best.cites.toLocaleString()}
                      </p>
                    </div>
                  )}
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    {detail.isMember ? "Models & approaches" : "Members"}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {detail.links.slice(0, 6).map((l) => {
                      const label = detail.isMember ? modelLabel(l.key) : graph.ms.find((m) => m.slug === l.key)?.name ?? l.key;
                      return (
                        <li key={l.key}>
                          <button
                            onClick={() => setSelected(l.key)}
                            className="w-full text-left group"
                          >
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-700 group-hover:text-red-700">{label}</span>
                              <span className="text-gray-400">{l.n}</span>
                            </div>
                            <div className="h-1 rounded-full bg-gray-100">
                              <div className="h-1 rounded-full" style={{ width: `${(100 * l.n) / detail.links[0].n}%`, backgroundColor: RED }} />
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    onClick={() => onShow(detail.isMember ? { member: selected! } : { model: selected! })}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: RED }}
                  >
                    Show these publications →
                  </button>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: RED }}>Overview</p>
                  <h3 className="text-2xl mb-5" style={{ ...SERIF, color: NAVY }}>All publications</h3>
                  <p className="-mt-4 mb-5 text-xs text-gray-400">{scopeLabel} · citations from OpenAlex</p>
                  <StatGrid stats={overall} />
                  <MiniYears byYear={overall.byYear} />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Click a member to see their numbers and the models they work with, or click a model to see who uses it.
                  </p>
                </>
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              {Object.values(AREAS).map((a) => (
                <div key={a.label} className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: a.hex }} />
                  {a.label}
                </div>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: NAVY }} /> Organism
                <span className="w-3 h-3 rounded-full flex-shrink-0 ml-4 border-2" style={{ borderColor: NAVY }} /> Approach
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Model finder matrix ---------- */

function ModelFinder({
  papers,
  members,
  onShow,
}: {
  papers: ExplorerPaper[];
  members: ExplorerMember[];
  onShow: (f: Partial<Filters>) => void;
}) {
  const { rows, max } = useMemo(() => {
    const counts = new Map<string, Map<string, number>>();
    for (const p of papers)
      for (const m of p.people) {
        const row = counts.get(m) ?? new Map<string, number>();
        for (const t of tagsOf(p)) row.set(t, (row.get(t) ?? 0) + 1);
        counts.set(m, row);
      }
    const rows = members
      .filter((m) => MODEL_KEYS.some((k) => counts.get(m.slug)?.has(k)))
      .sort((a, b) => directorFirst(a, b) || a.short.localeCompare(b.short))
      .map((m) => ({ m, row: counts.get(m.slug)! }));
    const max = Math.max(1, ...rows.flatMap((r) => MODEL_KEYS.map((k) => r.row.get(k) ?? 0)));
    return { rows, max };
  }, [papers, members]);

  return (
    <section className="py-20" style={{ backgroundColor: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow light>Model finder</Eyebrow>
        <h2 className="text-4xl sm:text-5xl mb-4 text-white" style={SERIF}>
          Who works <em>with what</em>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
          Every member against the organisms and approaches in their publications. Click a cell to see the papers.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-white shadow-xl">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-white" />
                {MODEL_KEYS.map((k) => (
                  <th key={k} className="px-1 pt-5 pb-3 align-bottom font-normal">
                    <span
                      className="block text-xs font-semibold uppercase tracking-wider whitespace-nowrap mx-auto [writing-mode:vertical-rl] rotate-180"
                      style={{ color: isOrganism(k) ? RED : NAVY }}
                    >
                      {modelLabel(k)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ m, row }) => (
                <tr key={m.slug} className="border-t border-gray-100">
                  <th className="sticky left-0 bg-white text-left font-normal px-5 py-1.5 whitespace-nowrap">
                    <Link href={`/people/${m.slug}`} className="hover:underline" style={{ ...SERIF, color: NAVY }}>
                      {m.name}
                    </Link>
                  </th>
                  {MODEL_KEYS.map((k) => {
                    const n = row.get(k) ?? 0;
                    return (
                      <td key={k} className="p-1">
                        {n > 0 ? (
                          <button
                            onClick={() => onShow({ member: m.slug, model: k })}
                            title={`${m.name}: ${n} ${modelLabel(k).toLowerCase()} publications`}
                            className="w-10 h-8 rounded-md text-xs font-semibold transition-transform hover:scale-110 mx-auto block"
                            style={{
                              backgroundColor: `rgba(185,28,28,${0.08 + 0.85 * Math.sqrt(n / max)})`,
                              color: n / max > 0.25 ? "#fff" : RED,
                            }}
                          >
                            {n}
                          </button>
                        ) : (
                          <span className="w-10 h-8 block mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- Year chart + list ---------- */

function PaperList({
  listRef,
  papers,
  members,
  memberBySlug,
  filters,
  setFilters,
  shown,
  setShown,
}: {
  listRef: React.RefObject<HTMLDivElement | null>;
  papers: ExplorerPaper[];
  members: ExplorerMember[];
  memberBySlug: Record<string, ExplorerMember>;
  filters: Filters;
  setFilters: (f: Filters) => void;
  shown: number;
  setShown: (n: number) => void;
}) {
  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return papers.filter(
      (p) =>
        (!filters.member || p.people.includes(filters.member)) &&
        (!filters.model || tagsOf(p).includes(filters.model)) &&
        (!filters.oa || p.oa) &&
        (!q || p.title.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q))
    );
  }, [papers, filters]);

  const years = useMemo(() => {
    const all = new Map<number, number>();
    const hit = new Map<number, number>();
    for (const p of papers) all.set(p.year, (all.get(p.year) ?? 0) + 1);
    for (const p of filtered) hit.set(p.year, (hit.get(p.year) ?? 0) + 1);
    const ys = [...all.keys()];
    const from = Math.min(...ys);
    const to = Math.max(...ys);
    const list = [];
    for (let y = from; y <= to; y++) list.push({ y, all: all.get(y) ?? 0, hit: hit.get(y) ?? 0 });
    return { list, max: Math.max(1, ...all.values()) };
  }, [papers, filtered]);

  const [byCites, setByCites] = useState(false);
  const ordered = useMemo(
    () => (byCites ? [...filtered].sort((a, b) => (b.cites ?? 0) - (a.cites ?? 0)) : filtered),
    [filtered, byCites]
  );
  const active = filters.member || filters.model || filters.query || filters.oa;
  const select = "rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/20";

  return (
    <section className="py-20 bg-white scroll-mt-20" ref={listRef}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>All publications</Eyebrow>
        <h2 className="text-4xl sm:text-5xl mb-10" style={{ ...SERIF, color: NAVY }}>
          Browse <em>the research</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-3 mb-8">
          <label className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden />
            <input
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              placeholder="Search titles and journals"
              className={`${select} w-full pl-9`}
            />
          </label>
          <select value={filters.member} onChange={(e) => setFilters({ ...filters, member: e.target.value })} className={select}>
            <option value="">All members</option>
            {[...members].sort((a, b) => directorFirst(a, b) || a.short.localeCompare(b.short)).map((m) => (
              <option key={m.slug} value={m.slug}>{m.name}</option>
            ))}
          </select>
          <select value={filters.model} onChange={(e) => setFilters({ ...filters, model: e.target.value })} className={select}>
            <option value="">All models &amp; approaches</option>
            <optgroup label="Organisms">
              {Object.entries(ORGANISMS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </optgroup>
            <optgroup label="Approaches">
              {Object.entries(SYSTEMS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </optgroup>
          </select>
          <label className="inline-flex items-center gap-2 text-sm text-gray-700 px-2">
            <input type="checkbox" checked={filters.oa} onChange={(e) => setFilters({ ...filters, oa: e.target.checked })} className="accent-red-700" />
            Open access
          </label>
        </div>

        {/* Publications per year */}
        <div className="mb-3 flex items-end gap-px h-28" aria-hidden>
          {years.list.map((y) => (
            <div key={y.y} className="flex-1 relative h-full group" title={`${y.y}: ${y.hit} of ${y.all}`}>
              <div className="absolute bottom-0 inset-x-0 rounded-t-sm bg-gray-200" style={{ height: `${(100 * y.all) / years.max}%` }} />
              <div className="absolute bottom-0 inset-x-0 rounded-t-sm" style={{ height: `${(100 * y.hit) / years.max}%`, backgroundColor: RED }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mb-10">
          <span>{years.list[0]?.y}</span>
          <span>Publications per year</span>
          <span>{years.list[years.list.length - 1]?.y}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <p className="text-sm text-gray-500">
            {filtered.length.toLocaleString()} publication{filtered.length === 1 ? "" : "s"}
          </p>
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-gray-50 ml-auto">
            {[
              { v: false, label: "Newest" },
              { v: true, label: "Most cited" },
            ].map((o) => (
              <button
                key={o.label}
                onClick={() => setByCites(o.v)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={byCites === o.v ? { backgroundColor: NAVY, color: "#fff" } : { color: NAVY }}
              >
                {o.label}
              </button>
            ))}
          </div>
          {active && (
            <button
              onClick={() => setFilters(EMPTY)}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest"
              style={{ color: RED }}
            >
              <X className="w-3.5 h-3.5" aria-hidden /> Clear filters
            </button>
          )}
        </div>

        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {ordered.slice(0, shown).map((p) => (
            <li key={p.id} className="py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-sm font-semibold w-12 flex-shrink-0" style={{ color: RED }}>{p.year}</span>
                <div className="flex-1 min-w-0">
                  {p.doi ? (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-lg leading-snug hover:underline"
                      style={{ ...SERIF, color: NAVY }}
                    >
                      {p.title}
                      <ArrowUpRight className="inline w-4 h-4 ml-1 text-gray-400 group-hover:text-current" aria-hidden />
                    </a>
                  ) : (
                    <span className="text-lg leading-snug" style={{ ...SERIF, color: NAVY }}>{p.title}</span>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    {p.journal && <em>{p.journal}</em>}
                    {p.oa && <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">Open access</span>}
                    {p.cites > 0 && <span className="ml-2 text-xs text-gray-500">Cited by {p.cites.toLocaleString()}</span>}
                    {p.top ? (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        Top {p.top}% cited
                      </span>
                    ) : null}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.people.map((s) => (
                      <button
                        key={s}
                        onClick={() => setFilters({ ...EMPTY, member: s })}
                        className="text-xs px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: NAVY }}
                      >
                        {memberBySlug[s]?.name ?? s}
                      </button>
                    ))}
                    {tagsOf(p).map((t) => (
                      <button
                        key={t}
                        onClick={() => setFilters({ ...EMPTY, model: t })}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={isOrganism(t) ? { borderColor: RED, color: RED } : { borderColor: "#D1D5DB", color: "#4B5563" }}
                      >
                        {modelLabel(t)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {shown < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShown(shown + 20)}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: RED }}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
