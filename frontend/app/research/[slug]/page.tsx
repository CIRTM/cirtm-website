import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { researchAreas, getResearchArea } from "@/lib/content/research-areas";
import { projects } from "@/lib/content/projects";
import { getPeopleForArea, getPublicationsForArea } from "@/lib/content/relationships";
import { PublicationEntry } from "@/components/PublicationEntry";
import { FadeBanner } from "@/components/FadeBanner";
import AreaOutputsCard, { SidebarCard } from "@/components/AreaOutputsCard";
import AreaModelNetwork from "@/components/AreaModelNetwork";
import { people } from "@/lib/content/people";
import { explorerPapers } from "@/lib/content/publication-explorer";

export function generateStaticParams() {
  return researchAreas.map((a) => ({ slug: a.slug }));
}

export default async function ResearchAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getResearchArea(slug);
  if (!area) notFound();

  const relatedProjects = projects.filter((p) => p.researchAreaSlugs.includes(area.slug));
  const relatedPeopleUnsorted = getPeopleForArea(area.slug);
  const relatedPeople = area.academicSlugs
    ? [...relatedPeopleUnsorted].sort(
        (a, b) => (area.academicSlugs!.indexOf(a.slug) ?? 999) - (area.academicSlugs!.indexOf(b.slug) ?? 999)
      )
    : relatedPeopleUnsorted;
  const relatedPublications = getPublicationsForArea(area.slug).sort((a, b) => b.year - a.year);


  // Papers have no area tag of their own, so an area's outputs are the at-Brunel papers of members working in it.
  const areaMembers = new Set(
    people.filter((p) => !p.hidden && p.researchAreaSlugs?.includes(area.slug)).map((p) => p.slug)
  );
  const areaPapers = explorerPapers.filter((p) => p.cirtm && p.people.some((s) => areaMembers.has(s)));
  const memberNames = Object.fromEntries(
    people.filter((p) => !p.hidden).map((p) => [p.slug, p.name.replace(/^(Prof\.|Dr)\s+/, "")])
  );

  return (
    <>
      <FadeBanner image={area.heroImage ?? "/images/research-areas/research-area-hero.png"}>
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/research" className="text-teal text-sm hover:underline mb-6 block">← All Research Areas</Link>
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            {area.tag}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">{area.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{area.description}</p>
        </div>
      </FadeBanner>

      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="text-[#374151] text-base leading-relaxed space-y-4">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-semibold text-navy mt-6 mb-2">{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-sm text-gray-500 text-center font-normal italic -mt-2 mb-8">{children}</h4>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-navy">{children}</strong>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
                    ),
                    img: ({ src, alt }) => (
                      <figure className="my-4">
                        <img src={src ?? ""} alt={alt ?? ""} className="w-full h-auto rounded-lg" />
                      </figure>
                    ),
                  }}
                >
                  {area.body}
                </ReactMarkdown>
              </div>

              {area.slug === "inflammation" && (
                <div className="mt-10 pt-10 border-t border-gray-100">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-100">
                    <iframe
                      src="https://www.youtube.com/embed/_EAKsY-bgBE"
                      title="Reducing inflammation in the brain after stroke"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-navy">Reducing inflammation in the brain after stroke</p>
                  <p className="text-xs text-gray-500">Professor Felicity Gavins explains her stroke research in The Royal Society video.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {relatedPeople.length > 0 && (
                <SidebarCard eyebrow="Research academics">
                  <ul className="space-y-3.5">
                    {relatedPeople.map((person) => {
                      const isLinked = person.memberType !== "associate-member";
                      const name = (
                        <span className="block text-sm font-semibold leading-snug" style={{ color: "#0B1B3A" }}>{person.name}</span>
                      );
                      return (
                        <li key={person.slug}>
                          {isLinked ? (
                            <Link href={`/people/${person.slug}`} className="group flex items-center gap-3">
                              <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden bg-gray-100 ring-2 ring-transparent group-hover:ring-red-700 transition">
                                <Image src={person.photoUrl || "/images/placeholdersilhouette.webp"} alt="" fill className="object-cover object-top" unoptimized />
                              </div>
                              <div className="min-w-0 group-hover:[&>span]:text-red-700">
                                {name}
                                {person.role && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{person.role}</p>}
                              </div>
                            </Link>
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
                                <Image src={person.photoUrl || "/images/placeholdersilhouette.webp"} alt="" fill className="object-cover object-top" unoptimized />
                              </div>
                              <div className="min-w-0">
                                {name}
                                {person.role && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{person.role}</p>}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </SidebarCard>
              )}

              <AreaOutputsCard papers={areaPapers} memberNames={memberNames} />

              {relatedProjects.length > 0 && (
                <SidebarCard eyebrow="Related projects">
                  <ul className="divide-y divide-gray-100 -my-3">
                    {[...relatedProjects]
                      .sort((a, b) => Number(b.status === "Ongoing") - Number(a.status === "Ongoing"))
                      .map((project) => (
                        <li key={project.slug}>
                          <Link href={`/projects/${project.slug}`} className="group flex items-center gap-3 py-3">
                            {project.imageUrl && (
                              <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                                <Image src={project.imageUrl} alt="" fill className="object-cover" unoptimized />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm leading-snug group-hover:text-red-700 transition-colors" style={{ color: "#0B1B3A" }}>
                                {project.title}
                              </p>
                              {project.status && (
                                <span className={`inline-block mt-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                                  project.status === "Ongoing" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"
                                }`}>
                                  {project.status}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link href="/projects" className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest hover:opacity-80" style={{ color: "#B91C1C" }}>
                    All projects →
                  </Link>
                </SidebarCard>
              )}
            </aside>

          </div>
        </div>
      </section>

      <AreaModelNetwork papers={areaPapers} areaTitle={area.title} />

      {relatedPublications.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "#F8F9FC" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-2">Related Publications</h2>
            <p className="text-gray-500 text-sm mb-8">
              {relatedPublications.length} publication{relatedPublications.length === 1 ? "" : "s"} associated with this research area.
            </p>
            <ol className="space-y-5 list-decimal list-outside ml-5 text-sm text-gray-600 leading-relaxed">
              {relatedPublications.map((pub) => (
                <li key={pub.slug}>
                  <PublicationEntry pub={pub} />
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
}
