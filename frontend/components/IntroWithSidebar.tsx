"use client";
import { Markdown } from "./Markdown";
import type { PersonPublication } from "@/lib/content/publications-felicity-gavins";

const PREVIEW_COUNT = 5;

function RecentPublications({
  publications,
  onViewAll,
}: {
  publications: PersonPublication[];
  onViewAll: () => void;
}) {
  const visible = publications.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
        Recent Publications
      </h3>
      <ol className="space-y-4">
        {visible.map((pub) => {
          const href = pub.doiUrl ?? undefined;
          return (
            <li key={pub.slug} className="text-xs text-gray-700 leading-relaxed border-b border-gray-100 pb-4 last:border-0">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal hover:underline block mb-0.5"
                >
                  {pub.title}
                </a>
              ) : (
                <span className="font-medium text-navy block mb-0.5">{pub.title}</span>
              )}
              <span className="text-gray-500">
                {pub.year}
                {pub.journal && <> · <em>{pub.journal}</em></>}
              </span>
            </li>
          );
        })}
      </ol>

      <button
        type="button"
        onClick={onViewAll}
        className="mt-5 text-xs text-teal hover:underline"
      >
        View all {publications.length} publications →
      </button>
    </div>
  );
}

export function IntroWithSidebar({
  bio,
  publications,
  onViewAllPublications,
}: {
  bio: string;
  publications: PersonPublication[];
  onViewAllPublications: () => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-2">
        <Markdown>{bio}</Markdown>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-gray-50 rounded-xl p-5 sticky top-6">
          <RecentPublications
            publications={publications}
            onViewAll={onViewAllPublications}
          />
        </div>
      </div>
    </div>
  );
}
