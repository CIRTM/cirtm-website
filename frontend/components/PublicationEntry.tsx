import { type Publication } from "@/lib/content/publications";

export function PublicationEntry({ pub }: { pub: Publication }) {
  const href = pub.url ?? (pub.doi ? `https://doi.org/${pub.doi}` : undefined);

  return (
    <div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal hover:underline"
        >
          {pub.title}
        </a>
      ) : (
        <span className="font-medium text-navy">{pub.title}</span>
      )}
      <span className="text-gray-500"> ({pub.year}). </span>
      <span className="text-gray-700">{pub.authors.join(", ")}</span>
      {pub.journal && (
        <span className="text-gray-700">
          . <em>{pub.journal}</em>
          {pub.volume && (
            <>
              , {pub.volume}
              {pub.issue && <span>({pub.issue})</span>}
            </>
          )}
          {pub.pages && <span>, {pub.pages}</span>}
        </span>
      )}
      <span className="text-gray-700">.</span>
    </div>
  );
}
