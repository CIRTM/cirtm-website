import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { projects, getProject, type Investigator } from "@/lib/content/projects";
import { getResearchArea } from "@/lib/content/research-areas";
import { people } from "@/lib/content/people";
import { getPublicationsForProject } from "@/lib/content/relationships";
import { PublicationEntry } from "@/components/PublicationEntry";

const FUNDER_LOGOS: { match: string; logo: string; alt: string }[] = [
  { match: "Brunel University London", logo: "/images/research-projects/funding-bodies/Brunel-UoL.webp", alt: "Brunel University London" },
  { match: "The Royal Society", logo: "/images/research-projects/funding-bodies/1588-royal-society.jpg", alt: "The Royal Society" },
  { match: "Wolfson Foundation", logo: "/images/research-projects/funding-bodies/WolfsonFoundation…logo—wide—EN—rgb.webp", alt: "The Wolfson Foundation" },
  { match: "Engineering and Physical Sciences Research Council", logo: "/images/research-projects/funding-bodies/EPSRC.jpg", alt: "EPSRC" },
  { match: "Little Princess Trust", logo: "/images/research-projects/funding-bodies/littleprincess-logo.png", alt: "Little Princess Trust" },
  { match: "CCLG", logo: "/images/research-projects/funding-bodies/cclg.png", alt: "Children's Cancer and Leukaemia Group" },
  { match: "Medical Research Council", logo: "/images/research-projects/funding-bodies/UK_Medical_Research_Council_Logo.jpg", alt: "Medical Research Council" },
  { match: "GCRF", logo: "/images/research-projects/funding-bodies/gcrf_logo.jpg", alt: "Global Challenges Research Fund" },
  { match: "VALIDATE", logo: "/images/research-projects/funding-bodies/gcrf_logo.jpg", alt: "Global Challenges Research Fund" },
  { match: "Kidscan", logo: "/images/research-projects/funding-bodies/kidscan_logo.jpg", alt: "Kidscan Children's Cancer Research" },
  { match: "National Institute of Allergy and Infectious Diseases", logo: "/images/research-projects/funding-bodies/National_Institute_of_Allergy_and_Infectious_Diseases_logo.svg.png", alt: "National Institute of Allergy and Infectious Diseases" },
  { match: "National Institutes of Health", logo: "/images/research-projects/funding-bodies/NIH_2013_logo_vertical.svg.png", alt: "National Institutes of Health" },
  { match: "Adenoid Cystic Carcinoma Research Foundation", logo: "/images/research-projects/funding-bodies/ACCRF.png", alt: "Adenoid Cystic Carcinoma Research Foundation" },
  { match: "ACCRF", logo: "/images/research-projects/funding-bodies/ACCRF.png", alt: "Adenoid Cystic Carcinoma Research Foundation" },
  { match: "Oracle", logo: "/images/research-projects/funding-bodies/oracle_head_neck_cancer.webp", alt: "Oracle Head and Neck Cancer UK" },
];

function getFunderLogos(funder: string) {
  const seen = new Set<string>();
  return FUNDER_LOGOS.filter(({ match, logo }) => {
    if (funder.includes(match) && !seen.has(logo)) {
      seen.add(logo);
      return true;
    }
    return false;
  });
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const areas = project.researchAreaSlugs.map(getResearchArea).filter((a): a is NonNullable<typeof a> => Boolean(a));
  const primaryArea = areas[0];
  const principalLeads = project.investigators.filter((i) => i.role === "PI" || i.role === "External PI");
  const coInvestigators = project.investigators.filter((i) => i.role === "Co-investigator");
  const projectPublications = getPublicationsForProject(project.slug).sort((a, b) => b.year - a.year);
  const funderLogos = project.funder ? getFunderLogos(project.funder) : [];

  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="text-teal text-sm hover:underline mb-6 inline-block">← All Research Projects</Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {primaryArea && (
              <span className="tag" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
                {primaryArea.title}
              </span>
            )}
            {project.status && (
              <span
                className={`text-xs font-medium uppercase tracking-wide rounded-sm px-2.5 py-1 ${
                  project.status === "Ongoing"
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-4xl">{project.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column: description + publications */}
            <article className="lg:col-span-2 min-w-0">
              <div className="text-[#374151] text-base leading-relaxed space-y-4">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-navy mt-8 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-semibold text-navy mt-6 mb-2">{children}</h3>,
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
                    a: ({ href, children }) => <a href={href} className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                  }}
                >
                  {project.description}
                </ReactMarkdown>
              </div>

              {projectPublications.length > 0 && (
                <div className="mt-10 pt-10 border-t border-gray-100">
                  <h2 className="text-2xl font-bold text-navy mb-6">Publications</h2>
                  <div className="divide-y divide-gray-100 text-sm text-gray-600 leading-relaxed">
                    {projectPublications.map((pub) => (
                      <div key={pub.slug} className="py-4">
                        <PublicationEntry pub={pub} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {principalLeads.length > 0 && (
                  <SidebarBlock title={principalLeads.length > 1 ? "Principal Investigators" : "Principal Investigator"}>
                    <InvestigatorList investigators={principalLeads} />
                  </SidebarBlock>
                )}

                {coInvestigators.length > 0 && (
                  <SidebarBlock title="Co-investigators">
                    <InvestigatorList investigators={coInvestigators} />
                  </SidebarBlock>
                )}

                {project.funder && (
                  <SidebarBlock title="Funding Body">
                    <p className="text-sm text-gray-700 mb-3">{project.funder}</p>
                    {funderLogos.length > 0 && (
                      <div className="flex flex-wrap gap-4 items-center">
                        {funderLogos.map(({ logo, alt }) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={logo} src={logo} alt={alt} className="h-16 w-auto object-contain" />
                        ))}
                      </div>
                    )}
                  </SidebarBlock>
                )}

                {areas.length > 0 && (
                  <SidebarBlock title={areas.length > 1 ? "Research Areas" : "Research Area"}>
                    <ul className="space-y-1.5 text-sm">
                      {areas.map((a) => (
                        <li key={a.slug}>
                          <Link href={`/research/${a.slug}`} className="text-teal hover:underline">
                            {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SidebarBlock>
                )}

                {project.sdgs && project.sdgs.length > 0 && (
                  <SidebarBlock title="Sustainable Development Goals">
                    <div className="flex flex-wrap gap-2">
                      {project.sdgs.map((s) => {
                        const num = String(s.num).padStart(2, "0");
                        return (
                          <Image
                            key={s.num}
                            src={`/images/sdg-icons/E-WEB-Goal-${num}.png`}
                            alt={`SDG ${s.num}: ${s.label}`}
                            title={`SDG ${s.num}: ${s.label}`}
                            width={80}
                            height={80}
                            className="rounded"
                            unoptimized
                          />
                        );
                      })}
                    </div>
                  </SidebarBlock>
                )}

                {project.lastModified && (
                  <p className="text-xs text-gray-400 italic px-1">
                    Last updated{" "}
                    {new Date(project.lastModified).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}

const personBySlug = Object.fromEntries(people.map((p) => [p.slug, p]));

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card border border-gray-100 p-5">
      <h2 className="text-sm font-bold text-[#29242b] mb-3">{title}</h2>
      {children}
    </div>
  );
}

function InvestigatorList({ investigators }: { investigators: Investigator[] }) {
  return (
    <ul className="space-y-3">
      {investigators.map((i) => {
        const person = i.personSlug ? personBySlug[i.personSlug] : null;
        const photo = person?.photoUrl || "/images/placeholdersilhouette.webp";
        const isLinked = Boolean(person);
        return (
          <li key={i.name} className="flex items-center gap-3">
            <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
              <Image src={photo} alt={i.name} fill className="object-cover object-top" unoptimized />
            </div>
            <div className="min-w-0">
              {isLinked ? (
                <Link href={`/people/${i.personSlug}`} className="text-teal hover:underline font-medium text-sm leading-snug block">
                  {i.name}
                </Link>
              ) : (
                <span className="font-medium text-sm text-navy leading-snug block">{i.name}</span>
              )}
              {person?.role && <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-2">{person.role}</p>}
              {!person && i.role === "External PI" && (
                <span className="text-[10px] uppercase tracking-wide text-gray-400">External</span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
