import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/lib/content/research-areas";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };

export default function ResearchPage() {
  return (
    <>
      <FadeBanner image="/images/our-approach/main-header.jpg" className="py-24" objectPosition="right">
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span className="inline-block w-8 h-px bg-amber-400" />
            Research
          </p>
          <h1 className="text-5xl sm:text-6xl text-white mb-6" style={SERIF}>Research Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Multidisciplinary research tackling the global health challenges that affect millions worldwide.
          </p>
        </div>
      </FadeBanner>

      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-14">
            Research is the core of CIRTM, around which all our other activities, training, teaching and outreach,
            are built. Our work is investigator-led and interdisciplinary, spanning four connected research areas
            united by a shared focus on inflammation and immunity in health and disease.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12">
            {researchAreas.map((area) => (
              <Link key={area.slug} href={`/research/${area.slug}`} className="group flex flex-col">
                {area.image?.url && (
                  <div className="relative w-full aspect-[16/10] rounded-lg bg-gray-100 overflow-hidden mb-5">
                    <Image
                      src={area.image.url}
                      alt={area.title}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h2 className="text-xl mb-3" style={{ ...SERIF, color: NAVY }}>{area.title}</h2>
                <p className="text-sm leading-relaxed text-gray-600 mb-5">{area.description}</p>
                <span
                  className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: RED }}
                >
                  Explore research
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
