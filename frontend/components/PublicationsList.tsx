"use client";
import { useMemo, useState } from "react";
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
          className="px-2 py-1 text-xs font-medium text-teal hover:underline"
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

function PublicationEntry({ pub }: { pub: PersonPublication }) {
  const [showCite, setShowCite] = useState(false);
  const authors = pub.authors.join(", ");
  return (
    <li className="py-4 border-b border-gray-100">
      <p className="text-sm text-gray-700 leading-relaxed">
        {pub.doiUrl ? (
          <a
            href={pub.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal font-medium hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          <span className="text-navy font-medium">{pub.title}</span>
        )}{" "}
        <span className="text-gray-500">({pub.year})</span>{" "}
        {authors && <span>{authors}.</span>}
        {pub.journal && (
          <>
            . <em className="text-gray-600">{pub.journal}</em>
          </>
        )}
        {(pub.volume || pub.issue) && (
          <>
            , {pub.volume}
            {pub.issue ? ` (${pub.issue})` : ""}
          </>
        )}
        {pub.pages && <>, pp. {pub.pages}</>}
        {pub.issn && <span className="text-gray-500"> ISSN: {pub.issn}</span>}
      </p>
      <div className="mt-1 text-xs text-gray-500 flex flex-wrap items-center gap-x-3 gap-y-1">
        {pub.typeLabel && <span>{pub.typeLabel}</span>}
        {pub.openAccessUrl && (
          <a
            href={pub.openAccessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            Open Access Link
          </a>
        )}
        <button
          type="button"
          onClick={() => setShowCite((v) => !v)}
          className="text-teal hover:underline"
        >
          {showCite ? "Hide citation" : "Cite"}
        </button>
      </div>
      {showCite && <CitePopover pub={pub} />}
    </li>
  );
}

export function PublicationsList({ publications }: { publications: PersonPublication[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return publications;
    return publications.filter((p) => {
      const haystack = [
        p.title,
        p.journal ?? "",
        String(p.year ?? ""),
        ...p.authors,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [publications, query]);

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="pub-search" className="sr-only">
          Search publications
        </label>
        <input
          id="pub-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, journal, year..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
        />
        <p className="mt-2 text-xs text-gray-500">
          Showing {filtered.length} of {publications.length} publication{publications.length === 1 ? "" : "s"}.
        </p>
      </div>
      {filtered.length === 0 ? (
        <p className="text-gray-500 italic text-sm">No publications match your search.</p>
      ) : (
        <ol className="list-none p-0">
          {filtered.map((p) => (
            <PublicationEntry key={p.slug} pub={p} />
          ))}
        </ol>
      )}
    </div>
  );
}
