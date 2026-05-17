import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/lib/content/research-areas";

export default function ResearchPage() {
  return (
    <>
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src="/images/research-areas/research-area-hero.png"
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
          <h1 className="text-4xl font-bold text-white mb-4">Research Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Multidisciplinary research tackling the global health challenges that affect billions of people worldwide.
          </p>
        </div>
      </section>


      <section className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            Research forms the core of the CIRTM, around which all our other activities (e.g. training,
            teaching, clinical care and outreach) occur. Multidisciplinary research within the CIRTM is
            investigator led and focuses on one or more of the following research areas:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {researchAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/research/${area.slug}`}
                className={`card border ${area.color} hover:shadow-lg group overflow-hidden`}
              >
                {area.image?.url && (
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={area.image.url}
                      alt={area.title}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-semibold text-navy text-base mb-2 group-hover:text-teal transition-colors">
                    {area.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
