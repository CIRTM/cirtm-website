import Image from "next/image";
import Link from "next/link";
import { researchAreas } from "@/lib/content/research-areas";
import {
  CpuChipIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src="/images/about/heinz-wolff-building2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            About
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            The CIRTM is an internationally acknowledged centre of excellence that drives forward scientific innovation
            and discovery to transform diagnosis, treatment, and management of people with cardiovascular diseases,
            inflammation, infection, microbial resistance, and cancer.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <div className="float-right ml-8 mb-4 w-72 relative aspect-[3/4] rounded-xl overflow-hidden clear-right">
                <Image
                  src="/images/about/lab-image.webp"
                  alt="Researchers in the lab"
                  fill
                  className="object-cover object-right"
                  unoptimized
                />
              </div>
              <p>
                The Centre of Inflammation Research and Translational Medicine (CIRTM) was established late 2019 with
                the objective of bringing together a critical mass of internationally outstanding basic and clinical
                researchers tackling today&apos;s global health challenges including: cardiovascular and cerebrovascular
                diseases, inflammation, infection, microbial resistance, mental health conditions (such as depression)
                and cancer.
              </p>
              <p>The Centre&apos;s mission is to promote interdisciplinary research and to provide an outstanding environment for research training in the field.</p>
              <p>
                The centre provides an inclusive research structure and a venue for multidisciplinary research
                (including in-vivo models and patient-centred research) with a collective aim of enhancing our
                understanding of the physiology, pharmacology, and pathophysiology of human disease. This bench to
                bedside (and back again) approach aligns itself with Brunel&apos;s 2030 vision to perform world-leading
                research that addresses society&apos;s most pressing needs. To do this, we are working with local,
                national and international partners and funders to develop solutions to our research challenges with
                regional and global impact.
              </p>
              <p>
                CIRTM provides a research hub for honorary and visiting staff from academic and clinical partner
                organisations and national patient organisations, along with visiting researchers from within the BUL
                Academic Centre for Health Sciences partner organisations. This will strengthen essential partnerships
                underpinning the Medical School and new initiatives in clinical education. In addition to the Medical
                School, the research in the Centre feeds into other teaching activities, such as the BSc in Life
                Sciences and the new MSc in Disease Mechanisms and Therapeutics.
              </p>
            </div>
          </div>

          {/* What we do */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-1">What we do in the CIRTM</h2>
                <p className="text-gray-600">We tackle global health problems that affect billions of people worldwide including:</p>
              </div>
              <Link href="/research" className="btn-outline flex-shrink-0 text-sm">View all areas →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-4 flex-1 flex items-center">
                    <h3 className="font-semibold text-navy text-sm group-hover:text-teal transition-colors leading-snug">
                      {area.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-2">
              We work across all biological dimensions to obtain an integrated understanding of health and disease
            </h2>
            <h3 className="text-lg font-semibold text-navy mb-4">How do we tackle these grand challenges?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                {[
                  "Clinical investigations",
                  "Genome Wide Association Analysis (GWAS)",
                  "In vivo disease modelling",
                  "Crispr/Cas9-powered genetic engineering",
                  "Intravital microscopy",
                  "Flow cytometry",
                  "Multi-omics",
                  "In vitro & in vivo drug testing",
                  "Microbiome analysis",
                  "Gene synthesis",
                  "Robotic high throughput screening",
                  "Big data analysis and bioinformatics",
                  "Network pharmacology",
                  "Adverse Outcome Pathways modelling",
                ].map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <div className="relative w-full min-h-[200px]">
                <Image src="/images/about/bio-hierarchy.png" alt="Biological hierarchy" fill className="object-contain object-top" unoptimized />
              </div>
            </div>
          </div>

          {/* NC3Rs / experimental approaches */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">How do we tackle these grand challenges?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              CIRTM addresses complex global health challenges through interdisciplinary and translational research
              spanning multiple biological systems, from patient-centred clinical studies and mammalian models to
              emerging alternative organisms and microbial platforms. Aligned with the principles of the NC3Rs
              (Replacement, Reduction and Refinement), this integrated approach enables researchers to balance
              physiological relevance with experimental scalability, accelerating discovery while promoting innovative
              and responsible research practices.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/about/bio-complex-exp-control.png"
                alt="Biological complexity and experimental control diagram"
                width={1000}
                height={714}
                className="object-contain rounded-lg"
                unoptimized
              />
            </div>
          </div>

          {/* Interdisciplinary research */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Inter-disciplinary research</h2>
            <p className="text-gray-600 mb-8">
              Within CIRTM we undertake both inter-disciplinary and multi-disciplinary approaches to answer our research questions.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex items-center justify-center h-full">
                <Image src="/CIRTM.png" alt="CIRTM" width={160} height={160} className="object-contain" />
              </div>
              <div className="space-y-4">
                {[
                  { field: "Computer Sciences", example: "Big data analysis & AI", Icon: CpuChipIcon, color: "bg-blue-50 text-blue-600" },
                  { field: "Engineering", example: "Microfluidics systems for drug testing", Icon: WrenchScrewdriverIcon, color: "bg-orange-50 text-orange-600" },
                  { field: "Social Sciences", example: "Social dynamics, inflammation, & behaviour", Icon: UserGroupIcon, color: "bg-purple-50 text-purple-600" },
                  { field: "Medical Sciences", example: "Translational and clinical studies; Real-world evidence", Icon: BeakerIcon, color: "bg-teal-50 text-teal" },
                ].map(({ field, example, Icon, color }) => (
                  <div key={field} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{field}</p>
                      <p className="text-sm text-gray-500 mt-0.5">e.g. {example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Location</h2>
            <p className="text-gray-600 mb-6">
              The CIRTM resides within the Division of Biosciences at Brunel University London, with members taking
              full advantage of recent research infrastructure investments to support cutting edge research including:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 mb-10">
              <li>
                <Link href="https://www.brunel.ac.uk/about/administration/governance-and-university-committees/Animal-Research-at-Brunel" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  The Pash Centre
                </Link>
                {" "}(our new state-of-the-art animal facility)
              </li>
              <li>The Microscopy Suite</li>
              <li>
                <Link href="https://www.brunel.ac.uk/research/Networks-and-Labs/ETC" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  The Experimental Techniques Centre
                </Link>
                : SEM, TEM, CLEM
              </li>
              <li>Sequencing Centre: MiSeq, HiSeq and Oxford Nanopore</li>
              <li>
                <Link href="https://www.brunel.ac.uk/research/Groups/Bioprocess-and-Biopharmaceutical-Engineering/About-us" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  Advanced Bioprocessing Centre
                </Link>
                : HPLC with both PDA and ELSD detectors, Large Scale Evaporators and centrifuges
              </li>
            </ul>
            <div className="space-y-6">
              {[
                { src: "/images/about/campus-aerial.jpg", caption: "Campus aerial view (Heinz Wolff building indicated by the arrow)" },
                { src: "/images/about/heinz-wolff-building.jpg", caption: "Heinz Wolff building" },
                { src: "/images/about/campus-at-night.jpg", caption: "Campus at night" },
              ].map((img) => (
                <div key={img.src}>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                    <Image src={img.src} alt={img.caption} fill className="object-cover" unoptimized />
                  </div>
                  <p className="text-xs text-gray-500 text-center">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual tours */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Take a virtual tour of some of our facilities</h2>
            <ul className="space-y-2">
              {[
                { label: "Heinz Wolff Building — Microscope Suite", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=33&frompin=9" },
                { label: "Heinz Wolff Building — Biosciences Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=34&frompin=9" },
                { label: "Heinz Wolff Building — Tissue Culture Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=35&frompin=9" },
                { label: "Heinz Wolff Building — Molecular Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=36&frompin=9" },
                { label: "BRAGG — state-of-the-art microscopy, spectroscopy and X-ray suites", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=1012&tour=2010&frompin=1003" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline text-sm"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
