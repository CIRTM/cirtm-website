import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/lib/content/people";
import { getResearchArea } from "@/lib/content/research-areas";
import { getProjectsForPerson } from "@/lib/content/relationships";
import { type PersonTab } from "@/components/PersonTabs";
import { PublicationsList } from "@/components/PublicationsList";
import { Markdown } from "@/components/Markdown";
import { ExternalLinks } from "@/components/ExternalLinks";
import { PersonPageClient } from "@/components/PersonPageClient";
import { GrantsList } from "@/components/GrantsList";
import { getMemberPublications } from "@/lib/content/member-publications";
import { explorerPapers } from "@/lib/content/publication-explorer";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };
const MEMBER_TYPE_LABEL: Record<string, string> = {
  pi: "Principal investigator",
  "doctoral-researcher": "Doctoral researcher",
  alumni: "Alumni",
  "professional-services": "Professional services",
};

export function generateStaticParams() {
  return people
    .filter((p) => p.memberType !== "associate-member")
    .map((p) => ({ slug: p.slug }));
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const areas = (person.researchAreaSlugs ?? []).map(getResearchArea).filter(Boolean);
  const personProjects = getProjectsForPerson(person.slug);
  // Publications come from the master list (same as the Publications page); departed members keep their old lists.
  const masterPubs = getMemberPublications(person.slug);
  const publications = masterPubs.length > 0 ? masterPubs : person.publications ?? [];
  const memberPapers = explorerPapers.filter((p) => p.people.includes(person.slug));
  const memberNames = Object.fromEntries(
    people.filter((p) => !p.hidden).map((p) => [p.slug, p.name.replace(/^(Prof\.|Dr)\s+/, "")])
  );

  const tabs: PersonTab[] = [];
  if (person.bio) tabs.push({ key: "intro", label: "Introduction", content: person.bio });
  if (person.sections?.research || person.sections?.researchGrants || personProjects.length > 0) {
    tabs.push({
      key: "research",
      label: "Research",
      content: (
        <>
          {person.sections?.research && <Markdown>{person.sections.research}</Markdown>}
          {personProjects.length > 0 && (
            <section>
              <h2 className="text-3xl mt-12 mb-6" style={{ ...SERIF, color: NAVY }}>
                Research <em>projects</em>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {personProjects.map((project) => {
                  const areas = (project.researchAreaSlugs ?? [])
                    .map(getResearchArea)
                    .filter((a): a is NonNullable<ReturnType<typeof getResearchArea>> => Boolean(a));
                  return (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="relative w-full aspect-video bg-gray-50 flex-shrink-0">
                        {project.imageUrl && (
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        )}
                      </div>
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <div className="flex flex-wrap gap-1">
                          {areas.map((a) => (
                            <span key={a.slug} className="text-[10px] font-medium rounded-full px-2 py-0.5 bg-teal/10 text-teal">
                              {a.tag}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-semibold text-sm leading-snug flex-1 group-hover:text-red-700 transition-colors" style={{ color: NAVY }}>
                          {project.title}
                        </h4>
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
            </section>
          )}
          {person.sections?.researchGrants && <GrantsList markdown={person.sections.researchGrants} />}
        </>
      ),
    });
  }
  if (person.sections?.teaching) tabs.push({ key: "teaching", label: "Teaching", content: person.sections.teaching });
  if (person.sections?.impact) tabs.push({ key: "impact", label: "Impact", content: person.sections.impact });
  if (person.sections?.phdTopics) tabs.push({ key: "phd-topics", label: "PhD Topics", content: person.sections.phdTopics });
  if (publications.length > 0) {
    tabs.push({
      key: "publications",
      label: `Publications (${publications.length})`,
      content: <PublicationsList publications={publications} self={person.slug} memberNames={memberNames} />,
    });
  }

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link href="/people" className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white mb-8">
            ← Our members
          </Link>
          {MEMBER_TYPE_LABEL[person.memberType] && (
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">{MEMBER_TYPE_LABEL[person.memberType]}</span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl text-white leading-tight mb-3" style={SERIF}>{person.name}</h1>
          {person.role && <p className="text-lg text-gray-300 max-w-2xl">{person.role}</p>}
        </div>
      </section>

      {/* Photo with details beside */}
      <section className="py-12 border-b border-gray-100" style={{ backgroundColor: "#F8F7F5" }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0">
            {person.photoUrl && person.photoUrl !== "/images/placeholdersilhouette.webp" ? (
              <div className="relative w-56 sm:w-64 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "3/4" }}>
                <Image src={person.photoUrl} alt={person.name} fill className="object-cover object-top" unoptimized />
              </div>
            ) : (
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center text-5xl text-white"
                style={{ ...SERIF, backgroundColor: NAVY }}
                aria-hidden="true"
              >
                {person.name.replace(/^(Prof\.|Dr)\s+/, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(person.email || person.tel || person.office || person.department) && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: RED }}>Contact</p>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  {person.email && (
                    <li>
                      <a href={`mailto:${person.email}`} className="font-medium hover:text-red-700" style={{ color: NAVY }}>{person.email}</a>
                    </li>
                  )}
                  {person.tel && <li>Tel: {person.tel}</li>}
                  {person.office && <li>Office: {person.office}</li>}
                  {(person.division || person.department || person.college) && (
                    <li className="text-gray-500">{[person.division, person.department, person.college].filter(Boolean).join(" · ")}</li>
                  )}
                </ul>
              </div>
            )}
            {areas.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: RED }}>Research areas</p>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <Link
                      key={a!.slug}
                      href={`/research/${a!.slug}`}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: "rgba(11,27,58,0.07)", color: NAVY }}
                    >
                      {a!.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {person.externalLinks && person.externalLinks.length > 0 && (
              <div className="lg:col-span-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: RED }}>Links</p>
                <ExternalLinks links={person.externalLinks} />
              </div>
            )}
          </div>
        </div>
      </section>

      {tabs.length > 0 ? (
        <section className="py-14 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <PersonPageClient tabs={tabs} bio={person.bio} slug={person.slug} papers={memberPapers} memberNames={memberNames} />
          </div>
        </section>
      ) : (
        <section className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 italic">Profile coming soon.</p>
          </div>
        </section>
      )}
    </>
  );
}
