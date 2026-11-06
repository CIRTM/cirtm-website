"use client";
import { useState } from "react";
import { PersonTabs, type PersonTab } from "./PersonTabs";
import { IntroWithSidebar } from "./IntroWithSidebar";
import type { ExplorerPaper } from "@/lib/content/publication-explorer";

export function PersonPageClient({
  tabs,
  bio,
  slug,
  papers,
  memberNames,
}: {
  tabs: PersonTab[];
  bio: string | undefined;
  slug: string;
  papers: ExplorerPaper[];
  memberNames: Record<string, string>;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key ?? "");

  // The intro tab gets the publication record alongside the bio when the member has papers in the master list.
  const enrichedTabs: PersonTab[] = tabs.map((tab) => {
    if (tab.key === "intro" && bio && papers.length > 0) {
      return {
        ...tab,
        content: (
          <IntroWithSidebar
            bio={bio}
            slug={slug}
            papers={papers}
            memberNames={memberNames}
            onViewAllPublications={() => setActiveTab("publications")}
          />
        ),
      };
    }
    return tab;
  });

  return <PersonTabs tabs={enrichedTabs} activeKey={activeTab} onTabChange={setActiveTab} />;
}
