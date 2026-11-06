import Image from "next/image";
import Link from "next/link";
import { people, type Person } from "@/lib/content/people";
import { partners } from "@/lib/content/partners";
import { getResearchArea } from "@/lib/content/research-areas";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };
const PLACEHOLDER = "/images/placeholdersilhouette.webp";

export default function PeoplePage() {
  const sorted = people.filter((p) => !p.hidden).sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
  const pis = sorted.filter((p) => p.memberType === "pi");
  const doctoral = sorted.filter((p) => p.memberType === "doctoral-researcher");
  const professionalServices = sorted.filter((p) => p.memberType === "professional-services");
  const alumni = sorted.filter((p) => p.memberType === "alumni");

  return (
    <>
      <FadeBanner image="/images/about/heinz-wolff-building.jpg" objectPosition="center bottom" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Our people</span>
          </div>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 leading-tight" style={SERIF}>
            Our <em>members</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            The members of CIRTM comprise Principal Investigators and their groups, Doctoral Researchers and Fellows,
            Collaborative Partners, and Professional Services Staff.
          </p>
        </div>
      </FadeBanner>

      {pis.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Research leaders" title={<>Principal <em>investigators</em></>} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pis.map((person) => <PersonCard key={person.slug} person={person} />)}
            </div>
          </div>
        </section>
      )}

      {doctoral.length > 0 && (
        <section className="py-20" style={{ backgroundColor: IVORY }}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="The next generation" title={<>Doctoral researchers <em>and fellows</em></>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {doctoral.map((person) => <CompactPersonCard key={person.slug} person={person} label="Doctoral researcher" />)}
            </div>
          </div>
        </section>
      )}

      {alumni.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Former members" title={<em>Alumni</em>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {alumni.map((person) => <CompactPersonCard key={person.slug} person={person} label="Alumni" />)}
            </div>
          </div>
        </section>
      )}

      {partners.length > 0 && (
        <section className="py-20" style={{ backgroundColor: IVORY }}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Working together" title={<>Collaborative <em>partners</em></>} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.slug}
                  className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col items-center justify-center text-center min-h-[110px] gap-2"
                >
                  {partner.logoUrl && (
                    <div className="relative w-full h-12">
                      <Image src={partner.logoUrl} alt={partner.name} fill className="object-contain" unoptimized />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold leading-snug" style={{ color: NAVY }}>{partner.name}</p>
                    {partner.location && <p className="text-xs text-gray-400 mt-0.5">{partner.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {professionalServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Supporting our research" title={<>Professional <em>services</em></>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalServices.map((person) => <CompactPersonCard key={person.slug} person={person} label={person.role} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-8 h-px" style={{ backgroundColor: RED }} />
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>{eyebrow}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl" style={{ ...SERIF, color: NAVY }}>{title}</h2>
    </div>
  );
}

const initials = (name: string) =>
  name
    .replace(/^(Prof\.|Dr)\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .filter((c) => /[A-Za-zÀ-ž]/.test(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();

function CompactPersonCard({ person, label }: { person: Person; label?: string }) {
  const hasPhoto = person.photoUrl && person.photoUrl !== PLACEHOLDER;
  return (
    <Link
      href={`/people/${person.slug}`}
      className="group flex items-stretch rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {hasPhoto ? (
        <div className="relative w-20 flex-shrink-0 bg-gray-100 min-h-[5rem]">
          <Image src={person.photoUrl!} alt="" fill className="object-cover object-top" unoptimized />
        </div>
      ) : (
        <div
          className="w-20 min-h-[5rem] flex-shrink-0 flex items-center justify-center text-base font-semibold text-white"
          style={{ backgroundColor: NAVY }}
          aria-hidden="true"
        >
          {initials(person.name)}
        </div>
      )}
      <div className="min-w-0 flex flex-col justify-center px-4 py-3">
        <h3 className="font-semibold leading-snug group-hover:text-red-700 transition-colors" style={{ color: NAVY }}>
          {person.name}
        </h3>
        {label && <p className="text-xs text-gray-500 mt-0.5">{label}</p>}
      </div>
    </Link>
  );
}

function PersonCard({ person }: { person: Person }) {
  const areas = (person.researchAreaSlugs ?? []).map(getResearchArea).filter(Boolean);
  return (
    <Link
      href={`/people/${person.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={person.photoUrl || PLACEHOLDER}
          alt={person.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg leading-snug group-hover:text-red-700 transition-colors" style={{ ...SERIF, color: NAVY }}>
          {person.name}
        </h3>
        {person.role && <p className="text-sm text-gray-500 mt-1">{person.role}</p>}
        {areas.length > 0 && (
          <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
            {areas.map((a) => (
              <span
                key={a!.slug}
                title={a!.title}
                className="text-[9px] font-semibold uppercase whitespace-nowrap px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(11,27,58,0.06)", color: NAVY }}
              >
                {a!.tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
