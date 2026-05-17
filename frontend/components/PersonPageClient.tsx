"use client";
import { useState } from "react";
import { PersonTabs, type PersonTab } from "./PersonTabs";
import { IntroWithSidebar } from "./IntroWithSidebar";
import type { PersonPublication } from "@/lib/content/publications-felicity-gavins";

export function PersonPageClient({
  tabs,
  bio,
  publications,
}: {
  tabs: PersonTab[];
  bio: string | undefined;
  publications: PersonPublication[] | undefined;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key ?? "");

  // Replace the intro tab's content with the two-column layout when there are publications
  const enrichedTabs: PersonTab[] = tabs.map((tab) => {
    if (tab.key === "intro" && bio && publications && publications.length > 0) {
      return {
        ...tab,
        content: (
          <IntroWithSidebar
            bio={bio}
            publications={publications}
            onViewAllPublications={() => setActiveTab("publications")}
          />
        ),
      };
    }
    return tab;
  });

  return (
    <PersonTabs
      tabs={enrichedTabs}
      activeKey={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
