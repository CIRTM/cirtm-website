"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { PersonPublication } from "@/lib/content/publications-felicity-gavins";

const BIBTEX_TYPE: Record<PersonPublication["type"], string> = {
  journal: "article",
  conference: "inproceedings",
  "book-chapter": "incollection",
  book: "book",
  thesis: "phdthesis",
  other: "misc",
};

const RIS_TYPE: Record<PersonPublication["type"], string> = {
  journal: "JOUR",
  conference: "CONF",
  "book-chapter": "CHAP",
  book: "BOOK",
  thesis: "THES",
  other: "GEN",
};

function citeKey(p: PersonPublication): string {
  const surname = (p.authors[0]?.split(",")[0] ?? "anon").toLowerCase().replace(/[^a-z]/g, "");
  const firstWord = p.title.split(/\s+/)[0]?.toLowerCase().replace(/[^a-z]/g, "") ?? "untitled";
  return `${surname}${p.year}${firstWord}`;
}

function splitPages(pages?: string): { start?: string; end?: string } {
  if (!pages) return {};
  const m = pages.match(/^\s*([0-9A-Za-z]+)\s*[-–—]\s*([0-9A-Za-z]+)\s*$/);
  if (m) return { start: m[1], end: m[2] };
  return { start: pages.trim() };
}

function toBibtex(p: PersonPublication): string {
  const type = BIBTEX_TYPE[p.type];
  const fields: [string, string | undefined][] = [
    ["title", p.title],
    ["author", p.authors.map((a) => a.replace(/,\s*/, ", ")).join(" and ")],
    [p.type === "journal" ? "journal" : "booktitle", p.journal],
    ["volume", p.volume],
    ["number", p.issue],
    ["pages", p.pages?.replace(/\s*[-–—]\s*/, "--")],
    ["year", String(p.year)],
    ["doi", p.doi],
    ["issn", p.issn],
    ["url", p.doiUrl],
  ];
  const body = fields
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(",\n");
  return `@${type}{${citeKey(p)},\n${body}\n}`;
}

function toRis(p: PersonPublication): string {
  const { start, end } = splitPages(p.pages);
  const lines = [`TY  - ${RIS_TYPE[p.type]}`];
  for (const a of p.authors) lines.push(`AU  - ${a}`);
  lines.push(`TI  - ${p.title}`);
  if (p.journal) lines.push(`JO  - ${p.journal}`);
  if (p.volume) lines.push(`VL  - ${p.volume}`);
  if (p.issue) lines.push(`IS  - ${p.issue}`);
  if (start) lines.push(`SP  - ${start}`);
  if (end) lines.push(`EP  - ${end}`);
  if (p.year) lines.push(`PY  - ${p.year}`);
  if (p.doi) lines.push(`DO  - ${p.doi}`);
  if (p.issn) lines.push(`SN  - ${p.issn}`);
  if (p.doiUrl) lines.push(`UR  - ${p.doiUrl}`);
  lines.push("ER  - ");
  return lines.join("\n");
}

function CitePopover({ pub }: { pub: PersonPublication }) {
  const [fmt, setFmt] = useState<"bibtex" | "ris">("bibtex");
  const [copied, setCopied] = useState(false);
  const text = fmt === "bibtex" ? toBibtex(pub) : toRis(pub);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* silent — clipboard may be unavailable */
    }
  };

  return (
    <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="flex gap-1">
          {(["bibtex", "ris"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFmt(f)}
              className={`px-2 py-1 text-xs font-medium rounded ${
                fmt === f ? "bg-navy text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {f === "bibtex" ? "BibTeX" : "RIS"}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="px-2 py-1 text-xs font-medium text-red-700 hover:underline"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono bg-white p-2 rounded border border-gray-200 overflow-x-auto">
        {text}
      </pre>
    </div>
  );
}

const NAVY = "#0B1B3A";

function PublicationEntry({
  pub,
  self,
  memberNames,
  showYear = false,
}: {
  pub: PersonPublication;
  self?: string;
  memberNames?: Record<string, string>;
  showYear?: boolean;
}) {
  const [showCite, setShowCite] = useState(false);
  const authors = pub.authors.join(", ");
  const coauthors = (pub.memberSlugs ?? []).filter((s) => s !== self && memberNames?.[s]);
  return (
    <li className="py-5 border-b border-gray-100">
      {pub.doiUrl ? (
        <a
          href={pub.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base leading-snug hover:text-red-700 transition-colors"
          style={{ fontFamily: "Georgia, serif", color: NAVY }}
        >
          {pub.title}
        </a>
      ) : (
        <span className="text-base leading-snug" style={{ fontFamily: "Georgia, serif", color: NAVY }}>{pub.title}</span>
      )}
      {authors && <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{authors}</p>}
      <p className="text-sm text-gray-500 mt-0.5">
        {showYear && <span className="font-semibold text-gray-700">{pub.year} · </span>}
        {pub.journal && <em>{pub.journal}</em>}
        {(pub.volume || pub.issue) && (
          <>
            , {pub.volume}
            {pub.issue ? ` (${pub.issue})` : ""}
          </>
        )}
        {pub.pages && <>, {pub.pages}</>}
      </p>
      <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
        {coauthors.map((s) => (
          <Link
            key={s}
            href={`/people/${s}`}
            className="text-[11px] px-2.5 py-0.5 rounded-full text-white hover:opacity-85 transition-opacity"
            style={{ backgroundColor: NAVY }}
          >
            {memberNames![s]}
          </Link>
        ))}
        {(pub.cites ?? 0) > 0 && (
          <span className="text-xs text-gray-500">Cited by {pub.cites!.toLocaleString()}</span>
        )}
        {pub.top ? (
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
            Top {pub.top}% cited
          </span>
        ) : null}
        {pub.openAccessUrl && (
          <a href={pub.openAccessUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-700 hover:underline">
            Open access
          </a>
        )}
        <button
          type="button"
          onClick={() => setShowCite((v) => !v)}
          className="text-xs font-semibold uppercase tracking-widest text-red-700 hover:opacity-80"
        >
          {showCite ? "Hide citation" : "Cite"}
        </button>
      </div>
      {showCite && <CitePopover pub={pub} />}
    </li>
  );
}

export function PublicationsList({
  publications,
  self,
  memberNames,
}: {
  publications: PersonPublication[];
  self?: string;
  memberNames?: Record<string, string>;
}) {
  const [query, setQuery] = useState("");
  const [brunelOnly, setBrunelOnly] = useState(false);
  const [byCites, setByCites] = useState(false);
  const hasCites = publications.some((p) => (p.cites ?? 0) > 0);
  const hasScope = publications.some((p) => p.atBrunel !== undefined);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      if (brunelOnly && !p.atBrunel) return false;
      if (!q) return true;
      return [p.title, p.journal ?? "", String(p.year ?? ""), ...p.authors].join(" ").toLowerCase().includes(q);
    });
  }, [publications, query, brunelOnly]);

  const ranked = useMemo(() => [...filtered].sort((a, b) => (b.cites ?? 0) - (a.cites ?? 0)), [filtered]);

  const groups = useMemo(() => {
    const m = new Map<number, PersonPublication[]>();
    for (const p of filtered) m.set(p.year, [...(m.get(p.year) ?? []), p]);
    return [...m.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <label htmlFor="pub-search" className="sr-only">Search publications</label>
        <input
          id="pub-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, journal, year..."
          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-700/20"
        />
        {hasCites && (
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-gray-50 self-start">
            {[
              { v: false, label: "Newest" },
              { v: true, label: "Most cited" },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => setByCites(o.v)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={byCites === o.v ? { backgroundColor: NAVY, color: "#fff" } : { color: NAVY }}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
        {hasScope && (
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-gray-50 self-start">
            {[
              { v: false, label: "All" },
              { v: true, label: "At Brunel" },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => setBrunelOnly(o.v)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={brunelOnly === o.v ? { backgroundColor: NAVY, color: "#fff" } : { color: NAVY }}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="-mt-5 mb-6 text-xs text-gray-500">
        Showing {filtered.length} of {publications.length} publication{publications.length === 1 ? "" : "s"}.
      </p>
      {filtered.length === 0 ? (
        <p className="text-gray-500 italic text-sm">No publications match your search.</p>
      ) : byCites ? (
        <ol className="list-none p-0">
          {ranked.map((p) => (
            <PublicationEntry key={p.slug} pub={p} self={self} memberNames={memberNames} showYear />
          ))}
        </ol>
      ) : (
        <div className="space-y-8">
          {groups.map(([year, pubs]) => (
            <section key={year} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-x-6">
              <h3 className="text-2xl md:pt-4" style={{ fontFamily: "Georgia, serif", color: NAVY }}>{year}</h3>
              <ol className="list-none p-0">
                {pubs.map((p) => (
                  <PublicationEntry key={p.slug} pub={p} self={self} memberNames={memberNames} />
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
