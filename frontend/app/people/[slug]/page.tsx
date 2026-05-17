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
              <h2 className="text-2xl font-bold text-navy mt-10 mb-4 pb-2 border-b border-gray-100">
                Research grants and projects
              </h2>
              <h3 className="text-lg font-semibold text-navy mt-6 mb-4">Research Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {personProjects.map((project) => {
                  const areas = (project.researchAreaSlugs ?? [])
                    .map(getResearchArea)
                    .filter((a): a is NonNullable<ReturnType<typeof getResearchArea>> => Boolean(a));
                  return (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="card overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all flex flex-col"
                    >
                      <div className="relative w-full aspect-square bg-gray-50 flex-shrink-0">
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
                        <h4 className="font-semibold text-navy text-sm leading-snug flex-1">
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
  if (person.publications && person.publications.length > 0) {
    tabs.push({
      key: "publications",
      label: `Publications (${person.publications.length})`,
      content: <PublicationsList publications={person.publications} />,
    });
  }

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/people" className="text-teal text-sm hover:underline mb-6 block">← Centre Members</Link>
          {person.memberType === "pi" && (
            <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
              Principal Investigator
            </span>
          )}
          <h1 className="text-4xl font-bold text-white mb-2">{person.name}</h1>
          {person.role && <p className="text-gray-300 text-lg">{person.role}</p>}
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div className="relative w-64 rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={person.photoUrl || "/images/placeholdersilhouette.webp"}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">Contact</p>
              <hr className="border-gray-200 mb-2" />
              <ul className="text-sm text-gray-700 space-y-1">
                {person.email && (
                  <li>
                    <span className="font-semibold text-navy">Email:</span>{" "}
                    <a href={`mailto:${person.email}`} className="text-teal hover:underline">
                      {person.email}
                    </a>
                  </li>
                )}
                {person.tel && (
                  <li>
                    <span className="font-semibold text-navy">Tel:</span> {person.tel}
                  </li>
                )}
                {person.office && (
                  <li>
                    <span className="font-semibold text-navy">Office:</span> {person.office}
                  </li>
                )}
                {person.division && <li>{person.division}</li>}
                {person.department && (
                  <li>
                    <a href="http://www.brunel.ac.uk/chls/life-sciences" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {person.department}
                    </a>
                  </li>
                )}
                {person.college && (
                  <li>
                    <a href="http://www.brunel.ac.uk/chls" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {person.college}
                    </a>
                  </li>
                )}
              </ul>
              {person.externalLinks && person.externalLinks.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">Links</p>
                  <hr className="border-gray-200 mb-2" />
                  <ExternalLinks links={person.externalLinks} />
                </div>
              )}
              {areas.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">Research Areas</p>
                  <hr className="border-gray-200 mb-2" />
                  <div className="flex flex-wrap gap-2">
                    {areas.map((a) => (
                      <Link key={a!.slug} href={`/research/${a!.slug}`} className="tag text-xs hover:opacity-80">
                        {a!.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {tabs.length > 0 ? (
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PersonPageClient
              tabs={tabs}
              bio={person.bio}
              publications={person.publications}
            />
          </div>
        </section>
      ) : (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 italic">Profile coming soon.</p>
          </div>
        </section>
      )}
    </>
  );
}
