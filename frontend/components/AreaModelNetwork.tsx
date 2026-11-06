"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ExplorerPaper } from "@/lib/content/publication-explorer";
import { ORGANISMS, SYSTEMS } from "@/components/PublicationsExplorer";

const NAVY = "#0B1B3A";
const RED = "#F87171";
const GOLD = "#FBBF24";
const SERIF = { fontFamily: "Georgia, serif" };

const W = 720;
const H = 400;

type Node = { key: string; label: string; kind: "organism" | "system"; n: number; x: number; y: number; r: number };

export default function AreaModelNetwork({ papers, areaTitle }: { papers: ExplorerPaper[]; areaTitle: string }) {
  const [hover, setHover] = useState<string | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);

  const { nodes, edges, maxEdge } = useMemo(() => {
    const count = new Map<string, number>();
    const pair = new Map<string, number>();
    for (const p of papers) {
      const orgs = p.organisms.filter((o) => o in ORGANISMS);
      const sys = p.systems.filter((s) => s in SYSTEMS && s !== "review");
      for (const k of [...orgs, ...sys]) count.set(k, (count.get(k) ?? 0) + 1);
      for (const o of orgs) for (const s of sys) pair.set(`${o}|${s}`, (pair.get(`${o}|${s}`) ?? 0) + 1);
    }
    const orgKeys = Object.keys(ORGANISMS).filter((k) => count.has(k)).sort((a, b) => count.get(b)! - count.get(a)!);
    const sysKeys = Object.keys(SYSTEMS).filter((k) => k !== "review" && count.has(k)).sort((a, b) => count.get(b)! - count.get(a)!);
    const maxN = Math.max(1, ...count.values());
    const radius = (n: number) => 8 + 18 * Math.sqrt(n / maxN);
    const column = (keys: string[], x: number, kind: Node["kind"], labels: Record<string, string>): Node[] =>
      keys.map((key, i) => ({
        key,
        label: labels[key],
        kind,
        n: count.get(key)!,
        x,
        y: keys.length === 1 ? H / 2 : 45 + (i * (H - 90)) / (keys.length - 1),
        r: radius(count.get(key)!),
      }));
    const nodes = [...column(orgKeys, 200, "organism", ORGANISMS), ...column(sysKeys, W - 200, "system", SYSTEMS)];
    const byKey = Object.fromEntries(nodes.map((n) => [n.key, n]));
    const edges = [...pair.entries()]
      .map(([k, n]) => {
        const [a, b] = k.split("|");
        return { a: byKey[a], b: byKey[b], n };
      })
      .filter((e) => e.a && e.b);
    return { nodes, edges, maxEdge: Math.max(1, ...edges.map((e) => e.n)) };
  }, [papers]);

  if (nodes.length === 0) return null;

  const linked = (key: string) => edges.some((e) => (e.a.key === hover && e.b.key === key) || (e.b.key === hover && e.a.key === key));

  return (
    <section className="py-16" style={{ backgroundColor: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Models &amp; approaches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white mb-4" style={SERIF}>
            What we study, <em>and how</em>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The organisms and approaches behind our {areaTitle} publications. Lines show how often they appear in the same
            paper; select any one to see those papers.
          </p>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border-2" style={{ borderColor: RED }} /> Organism</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border-2" style={{ borderColor: GOLD }} /> Approach</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Organisms and approaches used in ${areaTitle} publications`}>
            {edges.map((e) => {
              const on = !hover || e.a.key === hover || e.b.key === hover;
              const mx = (e.a.x + e.b.x) / 2;
              return (
                <path
                  key={`${e.a.key}-${e.b.key}`}
                  d={`M${e.a.x},${e.a.y} C${mx},${e.a.y} ${mx},${e.b.y} ${e.b.x},${e.b.y}`}
                  fill="none"
                  stroke={hover && on ? GOLD : "#FFFFFF"}
                  strokeOpacity={hover ? (on ? 0.7 : 0.04) : 0.12 + 0.35 * (e.n / maxEdge)}
                  strokeWidth={1 + 7 * (e.n / maxEdge)}
                  style={{ transition: "stroke-opacity 0.2s" }}
                />
              );
            })}
            {nodes.map((n) => {
              const dim = hover && hover !== n.key && !linked(n.key);
              const color = n.kind === "organism" ? RED : GOLD;
              const left = n.kind === "organism";
              return (
                <Link key={n.key} href={`/publications?model=${n.key}`} aria-label={`${n.label}: ${n.n} papers`}>
                  <g
                    onMouseEnter={() => { setHover(n.key); setTip({ x: n.x, y: n.y - n.r - 10, text: `${n.label} · ${n.n} paper${n.n === 1 ? "" : "s"}` }); }}
                    onMouseLeave={() => { setHover(null); setTip(null); }}
                    style={{ cursor: "pointer", opacity: dim ? 0.25 : 1, transition: "opacity 0.2s" }}
                  >
                    <circle cx={n.x} cy={n.y} r={n.r + 10} fill="transparent" />
                    <circle cx={n.x} cy={n.y} r={n.r} fill={NAVY} stroke={color} strokeWidth={2.5} />
                    <text x={left ? n.x - n.r - 10 : n.x + n.r + 10} y={n.y + 5} textAnchor={left ? "end" : "start"} fill="#E5E7EB" fontSize={15}>
                      {n.label}
                    </text>
                  </g>
                </Link>
              );
            })}
            {tip && (
              <g pointerEvents="none">
                <rect x={tip.x - 85} y={tip.y - 24} width={170} height={28} rx={6} fill="#FFFFFF" />
                <text x={tip.x} y={tip.y - 5} textAnchor="middle" fill={NAVY} fontSize={13} fontWeight={600}>{tip.text}</text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}
