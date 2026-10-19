import Image from "next/image";
import Link from "next/link";
import { researchAreas } from "@/lib/content/research-areas";
import { BeakerIcon, ChartBarIcon, Cog6ToothIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import ScaleExplorer, { type Method } from "@/components/ScaleExplorer";
import "./about.css";

const NAVY = "#0B1B3A";
const IVORY = "#F8F7F5";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };

const PG_COURSES = "https://www.brunel.ac.uk/biomedical-sciences/postgraduate-courses";

const methods: Method[] = [
  {
    name: "Clinical investigations",
    description: "Studies with patients and volunteers that connect laboratory findings to real disease, from biomarker discovery to early-phase trials.",
    scales: ["population", "organs"],
  },
  {
    name: "Genome-Wide Association (GWAS)",
    description: "Scanning the genomes of thousands of people to find genetic variants linked to disease risk and treatment response.",
    scales: ["population", "genes"],
  },
  {
    name: "In vivo disease modelling",
    description: "Studying disease in living organisms to understand how it develops across whole-body systems, guided by the principles of the 3Rs.",
    scales: ["organs", "cells"],
  },
  {
    name: "CRISPR/Cas9 genetic engineering",
    description: "Precisely editing genes in cells and models to test what they do in health and disease.",
    scales: ["cells", "genes"],
  },
  {
    name: "Intravital microscopy",
    description: "Imaging cells inside living tissue in real time, to watch how immune cells move, interact and respond to injury and infection.",
    scales: ["organs", "cells"],
  },
  {
    name: "Flow cytometry",
    description: "Measuring thousands of individual cells per second to identify cell types, their activation state and how they respond to treatment.",
    scales: ["cells"],
  },
  {
    name: "Multi-omics",
    description: "Combining genomic, transcriptomic, proteomic and metabolomic data to build a complete picture of the biological changes behind disease.",
    scales: ["molecules", "genes"],
  },
  {
    name: "In vitro & in vivo drug testing",
    description: "Assessing the efficacy and safety of new and repurposed compounds, from cell-based assays through to disease models.",
    scales: ["organs", "cells", "molecules"],
  },
  {
    name: "Microbiome analysis",
    description: "Profiling the microbial communities that live in and on us, and how they shape inflammation, immunity and infection.",
    scales: ["organs", "cells", "genes"],
  },
  {
    name: "Gene synthesis",
    description: "Designing and building DNA sequences from scratch to produce the genes, proteins and molecular tools our research needs.",
    scales: ["molecules", "genes"],
  },
  {
    name: "Robotic high-throughput screening",
    description: "Automated testing of thousands of compounds or genetic changes to identify promising candidates quickly and reproducibly.",
    scales: ["cells", "molecules"],
  },
  {
    name: "Big data & bioinformatics",
    description: "Computational analysis of large biological and clinical datasets to uncover patterns, predict outcomes and generate new hypotheses.",
    scales: ["population", "molecules", "genes"],
  },
  {
    name: "Network pharmacology",
    description: "Mapping how drugs act on networks of genes and proteins rather than single targets, opening up new uses for existing medicines.",
    scales: ["molecules", "genes"],
  },
  {
    name: "Adverse Outcome Pathway modelling",
    description: "Tracing the chain of events from a molecular trigger to a harmful effect, supporting safer, more human-relevant toxicology.",
    scales: ["population", "organs", "cells", "molecules"],
  },
];

const models = [
  { name: "Humans", detail: "Patient-centred clinical studies", image: "humans" },
  { name: "Mice", detail: "Mammalian disease models", image: "mice" },
  { name: "Zebrafish", detail: "In vivo imaging & screening", image: "zebrafish" },
  { name: "Invertebrates", detail: "Tractable genetic systems", image: "invertebrates" },
  { name: "Microbes", detail: "Microbial & cell-based platforms", image: "microbes" },
];

const disciplines = [
  {
    title: "Biosciences & Medical Sciences",
    text: "Understanding mechanisms of health and disease, and translating biological discovery into experimental and clinical insight.",
    image: "/images/our-approach/main-header.jpg",
    Icon: BeakerIcon,
    color: "#0F9F8F",
  },
  {
    title: "Engineering & Human-Relevant Models",
    text: "Developing microfluidic systems, organ-on-chip platforms and experimental technologies to model disease-relevant processes.",
    image: "/images/facilities/organ-on-a-chip.webp",
    Icon: Cog6ToothIcon,
    color: "#9333EA",
  },
  {
    title: "Data Science & AI",
    text: "Applying computational methods, image analysis and artificial intelligence to extract insight from complex biological and clinical datasets.",
    image: "/images/expertise/researchers-in-a-bio-imaging-suite.jpg",
    Icon: ChartBarIcon,
    color: "#2563EB",
  },
  {
    title: "Social Sciences & Population Health",
    text: "Exploring behaviour, lived experience, health inequalities and real-world factors that shape disease prevention, treatment and impact.",
    image: "/images/about/campus-at-night.jpg",
    Icon: UserGroupIcon,
    color: "#E11D48",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? "#FBBF24" : RED;
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px" style={{ backgroundColor: color }} />
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{children}</span>
    </div>
  );
}

function SidePhoto({ src }: { src: string }) {
  return (
    <div className="hidden lg:block absolute top-0 right-0 w-2/5 h-[380px] pointer-events-none">
      <Image src={src} alt="" fill sizes="40vw" className="object-cover object-center" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to right, ${NAVY} 0%, rgba(11,27,58,0.75) 40%, rgba(11,27,58,0.35) 100%)` }}
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(11,27,58,0) 50%, ${NAVY} 100%)` }} />
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 hover:opacity-80" style={{ color: RED }}>
      {children}
    </Link>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* About CIRTM */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>About the centre</Eyebrow>
          <h1 className="text-5xl sm:text-6xl mb-10" style={{ ...SERIF, color: NAVY }}>About CIRTM</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong style={{ color: NAVY }}>Established in 2019</strong>, the Centre for Inflammation Research and
                Translational Medicine (CIRTM) brings together a critical mass of internationally outstanding basic and
                clinical researchers, united by a shared focus on the role of inflammation and immunity in health and
                disease.
              </p>
              <p>
                Our research spans the full arc from fundamental biology to clinical application, a{" "}
                <em style={{ ...SERIF, color: NAVY }} className="font-semibold">bench to bedside, and back again</em>{" "}
                approach that turns laboratory discovery into new understanding, diagnostics and therapies, and returns
                clinical insight to the lab. This ethos aligns with Brunel&apos;s 2030 vision for world-leading research
                that addresses society&apos;s most pressing needs, pursued with partners and funders across local,
                national and international networks.
              </p>
              <p>
                CIRTM also acts as a research hub, hosting honorary and visiting researchers from academic, clinical and
                patient partner organisations, and strengthening the partnerships that underpin Brunel&apos;s Medical
                School and clinical education. Our work feeds directly into{" "}
                <ExternalLink href={PG_COURSES}>Brunel&apos;s postgraduate teaching</ExternalLink>, including
                master&apos;s programmes in{" "}
                <ExternalLink href="https://www.brunel.ac.uk/study/courses/cancer-research-msc">Cancer Research</ExternalLink>,{" "}
                <ExternalLink href="https://www.brunel.ac.uk/study/courses/infection-and-immunity-mres">Infection &amp; Immunity</ExternalLink>,{" "}
                <ExternalLink href="https://www.brunel.ac.uk/study/courses/infection-and-antimicrobial-discovery-msc">Infection &amp; Antimicrobial Discovery</ExternalLink>{" "}
                and{" "}
                <ExternalLink href="https://www.brunel.ac.uk/study/courses/master-of-research-in-antimicrobial-resistance-mres">Antimicrobial Resistance</ExternalLink>,
                training the next generation of biomedical scientists in the fields our researchers lead.
              </p>
            </div>
            <figure>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/facilities/Arturo-Sala-in-the-lab-for-JustGiving-hero.webp"
                  alt="CIRTM researchers in the laboratory"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[72%_center]"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3">
                CIRTM researchers in the laboratory, Heinz Wolff Building, Brunel University of London.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Core research areas */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: NAVY }}>
        <SidePhoto src="/images/research-areas/microbiome-and-health-hero.png" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Research</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4 text-white" style={SERIF}>Core research areas</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-10">
            We tackle global health challenges shaped by inflammation and immunity, across four key areas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.slice(0, 4).map((area) => (
              <Link
                key={area.slug}
                href={`/research/${area.slug}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {area.image?.url && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={area.image.url}
                      alt={area.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="p-5 text-lg leading-snug" style={{ ...SERIF, color: NAVY }}>{area.title}</h3>
              </Link>
            ))}
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: RED }}
          >
            View all research areas →
          </Link>
        </div>
      </section>

      {/* Scale of biology */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="text-4xl sm:text-5xl leading-tight mb-6" style={{ ...SERIF, color: NAVY }}>
            We work across every<br />
            <em>scale of biology</em>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            From whole populations to single genes, CIRTM researchers study health and disease at every biological
            dimension, integrating insight across scales to understand how disease begins, progresses and can be treated.
          </p>
          <ScaleExplorer methods={methods} />
        </div>
      </section>

      {/* Choosing the right model */}
      <section className="py-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our approach</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 items-center mb-14">
            <div>
              <h2 className="text-4xl sm:text-5xl leading-tight mb-6" style={{ ...SERIF, color: NAVY }}>
                Choosing the right model <em>for the question</em>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                No single system can answer every question. CIRTM researchers work across a full spectrum of
                biological models,{" "}
                <strong style={{ color: NAVY }}>
                  from the physiological relevance of patient-centred clinical studies to the experimental control of
                  microbial systems
                </strong>
                , choosing the approach that best fits each scientific question, and supporting our commitment to
                responsible, human-relevant research.
              </p>
            </div>
            <Link
              href="https://nc3rs.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-self-start lg:justify-self-center"
            >
              <Image
                src="/images/about/nc3rs-logo-wide.jpg"
                alt="NC3Rs: National Centre for the Replacement, Refinement & Reduction of Animals in Research"
                width={310}
                height={109}
                className="h-auto w-64 mix-blend-multiply"
                unoptimized
              />
            </Link>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {models.map((m) => (
              <li key={m.name} className="text-center">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <Image src={`/images/about/models/${m.image}.jpg`} alt="" fill sizes="144px" className="object-cover" />
                </div>
                <p className="font-semibold" style={{ color: NAVY }}>{m.name}</p>
                <p className="text-sm text-gray-500 mt-1">{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interdisciplinary by design */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: NAVY }}>
        <SidePhoto src="/images/research-areas/cancer-hero.png" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <Eyebrow light>Our approach</Eyebrow>
              <h2 className="text-4xl sm:text-5xl text-white mb-6" style={SERIF}>
                Interdisciplinary <em>by design</em>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                CIRTM brings together researchers across biosciences, medicine, engineering, computer science and social
                sciences to address complex health challenges. By connecting discovery biology with data science,
                experimental platforms, clinical insight and population-level approaches, we create new opportunities
                for translational impact.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 leading-loose">
              Different perspectives.<br />
              Deeper insights.<br />
              Greater impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map(({ title, text, image, Icon, color }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image src={image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" unoptimized />
                </div>
                <div className="relative px-6 pb-6 pt-10">
                  <span
                    className="absolute -top-7 left-6 w-14 h-14 rounded-full flex items-center justify-center ring-4 ring-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                  <h3 className="text-xl leading-snug mb-3" style={{ ...SERIF, color: NAVY }}>{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div>
            <Eyebrow>Where we are</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-6" style={{ ...SERIF, color: NAVY }}>Location</h2>
            <p className="text-gray-600 mb-6">
              The CIRTM resides within the Division of Biosciences at Brunel University of London, with members taking
              full advantage of recent research infrastructure investments to support cutting edge research including:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 mb-10">
              <li>
                <ExternalLink href="https://www.brunel.ac.uk/about/administration/governance-and-university-committees/Animal-Research-at-Brunel">
                  The Pash Centre
                </ExternalLink>
                {" "}(our new state-of-the-art animal facility)
              </li>
              <li>The Microscopy Suite</li>
              <li>
                <ExternalLink href="https://www.brunel.ac.uk/research/Networks-and-Labs/ETC">The Experimental Techniques Centre</ExternalLink>
                : SEM, TEM, CLEM
              </li>
              <li>Sequencing Centre: MiSeq, HiSeq and Oxford Nanopore</li>
              <li>
                <ExternalLink href="https://www.brunel.ac.uk/research/Groups/Bioprocess-and-Biopharmaceutical-Engineering/About-us">
                  Advanced Bioprocessing Centre
                </ExternalLink>
                : HPLC with both PDA and ELSD detectors, Large Scale Evaporators and centrifuges
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/images/about/campus-aerial.jpg", caption: "Campus aerial view (Heinz Wolff building indicated by the arrow)" },
                { src: "/images/about/heinz-wolff-building.jpg", caption: "Heinz Wolff building" },
                { src: "/images/about/campus-at-night.jpg", caption: "Campus at night" },
                { src: "/images/about/Eastern-Gateway-building-1-30.webp", caption: "Eastern Gateway building" },
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

          <div>
            <h2 className="text-3xl mb-4" style={{ ...SERIF, color: NAVY }}>Take a virtual tour of some of our facilities</h2>
            <ul className="space-y-2">
              {[
                { label: "Heinz Wolff Building, Microscope Suite", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=33&frompin=9" },
                { label: "Heinz Wolff Building, Biosciences Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=34&frompin=9" },
                { label: "Heinz Wolff Building, Tissue Culture Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=35&frompin=9" },
                { label: "Heinz Wolff Building, Molecular Laboratory", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=9&tour=36&frompin=9" },
                { label: "BRAGG, state-of-the-art microscopy, spectroscopy and X-ray suites", href: "https://www.brunel.ac.uk/virtualtour/?filter=academic&content=1012&tour=2010&frompin=1003" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                    style={{ color: RED }}
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
