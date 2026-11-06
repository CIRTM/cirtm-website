"use client";
import Link from "next/link";
import { Markdown } from "./Markdown";
import AreaOutputsCard from "./AreaOutputsCard";
import type { ExplorerPaper } from "@/lib/content/publication-explorer";

export function IntroWithSidebar({
  bio,
  slug,
  papers,
  memberNames,
  onViewAllPublications,
}: {
  bio: string;
  slug: string;
  papers: ExplorerPaper[];
  memberNames: Record<string, string>;
  onViewAllPublications: () => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-2">
        <Markdown>{bio}</Markdown>
      </div>
      <div className="lg:col-span-1">
        <AreaOutputsCard
          papers={papers}
          memberNames={memberNames}
          member={slug}
          eyebrow="Publication record"
          footer={
            <div className="mt-5 flex flex-col items-start gap-2">
              <button
                type="button"
                onClick={onViewAllPublications}
                className="text-xs font-semibold uppercase tracking-widest text-red-700 hover:opacity-80"
              >
                View all {papers.length} publications →
              </button>
              <Link
                href={`/publications?member=${slug}`}
                className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-red-700"
              >
                Explore in the publications map →
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}
