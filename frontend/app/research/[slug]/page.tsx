import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { researchAreas, getResearchArea } from "@/lib/content/research-areas";
import { projects } from "@/lib/content/projects";
import { getPeopleForArea, getPublicationsForArea } from "@/lib/content/relationships";
import { PublicationEntry } from "@/components/PublicationEntry";

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

  const hasSidebar = relatedProjects.length > 0 || relatedPeople.length > 0;

  return (
    <>
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src={area.heroImage ?? "/images/research-areas/research-area-hero.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/research" className="text-teal text-sm hover:underline mb-6 block">← All Research Areas</Link>
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            {area.tag}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">{area.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{area.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 gap-12 ${hasSidebar ? "lg:grid-cols-3" : ""}`}>

            {/* Main content */}
            <div className={hasSidebar ? "lg:col-span-2" : ""}>
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
            {hasSidebar && (
              <div className="space-y-5">

                {relatedPeople.length > 0 && (
                  <div className="card border border-gray-100 p-5">
                    <h2 className="text-sm font-bold text-[#29242b] mb-4">Research Academics</h2>
                    <ul className="space-y-3">
                      {relatedPeople.map((person) => {
                        const isLinked = person.memberType !== "associate-member";
                        return (
                          <li key={person.slug} className="flex items-center gap-3">
                            <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
                              <Image
                                src={person.photoUrl || "/images/placeholdersilhouette.webp"}
                                alt={person.name}
                                fill
                                className="object-cover object-top"
                                unoptimized
                              />
                            </div>
                            <div className="min-w-0">
                              {isLinked ? (
                                <Link href={`/people/${person.slug}`} className="text-teal hover:underline font-medium text-sm leading-snug block">
                                  {person.name}
                                </Link>
                              ) : (
                                <span className="font-medium text-sm text-navy leading-snug block">{person.name}</span>
                              )}
                              {person.role && <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-2">{person.role}</p>}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {relatedProjects.length > 0 && (
                  <div className="card border border-gray-100 p-5">
                    <h2 className="text-sm font-bold text-[#29242b] mb-4">Related Projects</h2>
                    <div className="space-y-2">
                      {relatedProjects.map((project) => {
                        const projectAreas = researchAreas.filter((a) => project.researchAreaSlugs.includes(a.slug));
                        return (
                          <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="block border border-gray-100 rounded-lg group hover:border-teal/30 hover:shadow-sm p-3 flex flex-col gap-1.5 transition-all"
                          >
                            <div className="flex flex-wrap gap-1">
                              {projectAreas.map((a) => (
                                <span key={a.slug} className="text-[10px] font-medium rounded-full px-2 py-0.5 bg-teal/10 text-teal">
                                  {a.tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="font-semibold text-navy text-xs leading-snug group-hover:text-teal transition-colors">
                              {project.title}
                            </h3>
                            {project.status && (
                              <span className={`self-start text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-sm ${
                                project.status === "Ongoing" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"
                              }`}>
                                {project.status}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      </section>

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
