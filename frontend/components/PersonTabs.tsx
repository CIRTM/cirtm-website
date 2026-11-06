"use client";
import { useState, type ReactNode } from "react";
import { Markdown } from "./Markdown";

export type PersonTab = {
  key: string;
  label: string;
  content: string | ReactNode;
};

export function PersonTabs({
  tabs,
  activeKey,
  onTabChange,
}: {
  tabs: PersonTab[];
  activeKey?: string;
  onTabChange?: (key: string) => void;
}) {
  const [internalActive, setInternalActive] = useState(tabs[0]?.key ?? "");
  if (tabs.length === 0) return null;

  const active = activeKey ?? internalActive;
  const setActive = (key: string) => {
    setInternalActive(key);
    onTabChange?.(key);
  };

  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div role="tablist" className="border-b border-gray-200 flex flex-wrap gap-x-6 gap-y-1">
        {tabs.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.key)}
              className={`-mb-px py-3 text-xs font-semibold uppercase tracking-widest border-b-2 transition-colors ${
                isActive
                  ? "border-red-700 text-[#0B1B3A]"
                  : "border-transparent text-gray-500 hover:text-[#0B1B3A]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="pt-10 max-w-none">
        {typeof activeTab.content === "string" ? (
          <Markdown>{activeTab.content}</Markdown>
        ) : (
          activeTab.content
        )}
      </div>
    </div>
  );
}
