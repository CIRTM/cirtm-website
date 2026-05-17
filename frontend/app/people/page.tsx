import Image from "next/image";
import Link from "next/link";
import { people, type Person } from "@/lib/content/people";
import { partners } from "@/lib/content/partners";
import { getResearchArea } from "@/lib/content/research-areas";

export default function PeoplePage() {
  const sorted = [...people].sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
  const pis = sorted.filter((p) => p.memberType === "pi");
  const doctoral = sorted.filter((p) => p.memberType === "doctoral-researcher");
  const associateMembers = sorted.filter((p) => p.memberType === "associate-member");
  const professionalServices = sorted.filter((p) => p.memberType === "professional-services");

  return (
    <>
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src="/images/about/heinz-wolff-building.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Team
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Centre Members</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            The members of CIRTM comprise Principal Investigators and their groups, Doctoral Researchers and Fellows,
            Collaborative Partners, and Professional Services Staff.
          </p>
        </div>
      </section>

      {pis.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">Principal Investigators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {pis.map((person) => <PersonCard key={person.slug} person={person} />)}
            </div>
          </div>
        </section>
      )}

      {doctoral.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "#F8F9FC" }}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">Doctoral Researchers and Fellows</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {doctoral.map((person) => <CompactPersonCard key={person.slug} person={person} />)}
            </div>
          </div>
        </section>
      )}


      {partners.length > 0 && (
        <section className="py-16 bg-white" style={{ borderTop: "1px solid #F0F2F7" }}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">Collaborative Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.slug}
                  className="card border border-gray-100 p-4 flex flex-col items-center justify-center text-center min-h-[100px] gap-2"
                >
                  {partner.logoUrl && (
                    <div className="relative w-full h-12">
                      <Image src={partner.logoUrl} alt={partner.name} fill className="object-contain" unoptimized />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-navy leading-snug">{partner.name}</p>
                    {partner.location && <p className="text-xs text-gray-400 mt-0.5">{partner.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {professionalServices.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "#F8F9FC" }}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">Professional Services Staff</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {professionalServices.map((person) => <CompactPersonCard key={person.slug} person={person} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function CompactPersonCard({ person }: { person: Person }) {
  return (
    <Link
      href={`/people/${person.slug}`}
      className="card overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all block"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={person.photoUrl || "/images/placeholdersilhouette.webp"}
          alt={person.name}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-navy text-xs leading-snug">{person.name}</h3>
      </div>
    </Link>
  );
}

function PersonCard({ person }: { person: Person }) {
  const areas = (person.researchAreaSlugs ?? []).map(getResearchArea).filter(Boolean);
  return (
    <Link
      href={`/people/${person.slug}`}
      className="card overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all block"
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={person.photoUrl || "/images/placeholdersilhouette.webp"}
          alt={person.name}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-navy text-sm">{person.name}</h3>
        {person.role && <p className="text-xs text-gray-500 mt-1">{person.role}</p>}
        {areas.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {areas.map((a) => <span key={a!.slug} className="tag text-[10px]">{a!.title}</span>)}
          </div>
        )}
      </div>
    </Link>
  );
}
