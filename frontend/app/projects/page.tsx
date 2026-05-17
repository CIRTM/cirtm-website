"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/content/projects";
import { researchAreas } from "@/lib/content/research-areas";

const ongoing = projects.filter((p) => p.status === "Ongoing");
const completed = projects.filter((p) => p.status === "Completed");

export default function ProjectsPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const areaOptions = researchAreas.filter((a) =>
    projects.some((p) => p.researchAreaSlugs.includes(a.slug))
  );

  const memberOptions = useMemo(() => {
    const seen = new Map<string, string>();
    projects.forEach((p) => {
      p.investigators.forEach((inv) => {
        if (inv.personSlug && !seen.has(inv.personSlug)) {
          seen.set(inv.personSlug, inv.name);
        }
      });
    });
    return Array.from(seen.entries())
      .map(([slug, name]) => ({ slug, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filtered = projects.filter((p) => {
    if (selectedArea && !p.researchAreaSlugs.includes(selectedArea)) return false;
    if (selectedMember && !p.investigators.some((inv) => inv.personSlug === selectedMember)) return false;
    return true;
  });

  const sections = [
    { label: "Ongoing", projects: filtered.filter((p) => p.status === "Ongoing").sort((a, b) => a.title.localeCompare(b.title)) },
    { label: "Completed", projects: filtered.filter((p) => p.status === "Completed").sort((a, b) => a.title.localeCompare(b.title)) },
    { label: "Other", projects: filtered.filter((p) => !p.status).sort((a, b) => a.title.localeCompare(b.title)) },
  ].filter((s) => s.projects.length > 0);

  const pillBase = "text-xs px-3 py-1 rounded-full border transition-colors cursor-pointer";
  const pillActive = "bg-navy text-white border-navy";
  const pillInactive = "border-gray-200 text-gray-600 hover:border-gray-400";

  return (
    <>
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src="/images/research-projects/research-projects-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Research
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Research Projects</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Investigator-led projects at the frontiers of biomedical science.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-sm bg-purple-500/20 text-purple-300 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> {ongoing.length} ongoing
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 text-gray-300 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> {completed.length} completed
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Filters */}
          <div className="space-y-3 pb-6 border-b border-gray-100">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide w-28 flex-shrink-0">Research Area</span>
              <button className={`${pillBase} ${selectedArea === null ? pillActive : pillInactive}`} onClick={() => setSelectedArea(null)}>All</button>
              {areaOptions.map((a) => (
                <button
                  key={a.slug}
                  className={`${pillBase} ${selectedArea === a.slug ? pillActive : pillInactive}`}
                  onClick={() => setSelectedArea(selectedArea === a.slug ? null : a.slug)}
                >
                  {a.tag}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide w-28 flex-shrink-0">Centre Member</span>
              <button className={`${pillBase} ${selectedMember === null ? pillActive : pillInactive}`} onClick={() => setSelectedMember(null)}>All</button>
              {memberOptions.map((m) => (
                <button
                  key={m.slug}
                  className={`${pillBase} ${selectedMember === m.slug ? pillActive : pillInactive}`}
                  onClick={() => setSelectedMember(selectedMember === m.slug ? null : m.slug)}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {sections.length === 0 ? (
            <p className="text-gray-400 text-sm">No projects match the selected filters.</p>
          ) : (
            <div className="space-y-14">
              {sections.map((section) => (
                <div key={section.label}>
                  <h2 className="text-xl font-bold text-navy mb-5 pb-3 border-b border-gray-100">{section.label}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {section.projects.map((project) => {
                      const areas = researchAreas.filter((a) => project.researchAreaSlugs.includes(a.slug));
                      return (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="card overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all flex flex-col"
                        >
                          {project.imageUrl && (
                            <div className="relative w-full aspect-video bg-gray-50 flex-shrink-0">
                              <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          )}
                          <div className="p-3 flex flex-col gap-1.5 flex-1">
                            <div className="flex flex-wrap gap-1">
                              {areas.map((a) => (
                                <span key={a.slug} className="text-[10px] font-medium rounded-full px-2 py-0.5 bg-teal/10 text-teal">
                                  {a.tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="font-semibold text-navy text-sm leading-snug hover:text-teal transition-colors flex-1">
                              {project.title}
                            </h3>
                            {project.status && (
                              <span className={`self-start text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-sm mt-auto ${
                                project.status === "Ongoing"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-gray-100 text-gray-500"
                              }`}>
                                {project.status}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
