import Image from "next/image";
import { BrainCircuit, Dna, Rat, ScanEye, ShieldPlus, TestTubes } from "lucide-react";
import { FadeBanner } from "@/components/FadeBanner";
import { FacilitiesExplorer } from "@/components/FacilitiesExplorer";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };
const ENQUIRY_EMAIL = "felicity.gavins@brunel.ac.uk";

const technicalResources = [
  {
    Icon: Rat,
    title: "In vivo models",
    summary: "Rodent and larger species (e.g. pig) models of disease, plus zebrafish and Galleria mellonella.",
    tags: [
      "Thrombosis", "Inflammation", "Infection", "Lung allergy", "Oedema", "Transplantation",
      "Neuroblastoma", "Adenoid cystic carcinoma", "Zebrafish drug safety", "Galleria infection & burn wound",
    ],
  },
  {
    Icon: Dna,
    title: "Molecular biology & genetics",
    summary: "From gene synthesis and cloning to recombinant protein expression and genome editing.",
    tags: ["Gene synthesis", "cDNA cloning", "E. coli", "Pichia pastoris", "Baculovirus", "Drosophila S2", "Mammalian cell lines", "CRISPR/Cas9"],
  },
  {
    Icon: TestTubes,
    title: "Omics & assays",
    summary: "High-throughput profiling of genes, proteins and cells, plus trace gas analysis.",
    tags: [
      "High-throughput sequencing", "Microarray", "Proteomics", "Epigenomics", "ELISA",
      "Immunohistochemistry", "Multiparameter flow cytometry", "Multiplex bead arrays", "SIFT mass spectrometry",
    ],
  },
  {
    Icon: ScanEye,
    title: "In vivo & cellular imaging",
    summary: "Imaging from whole organisms down to mitochondria.",
    tags: ["Intravital microscopy", "Confocal intravital microscopy", "MRI", "PET", "SPECT", "In vivo imaging systems", "Mitochondrial dynamics"],
  },
  {
    Icon: ShieldPlus,
    title: "Human immune models & screening",
    summary: "In vitro human immune models and robotic high-throughput screening.",
    tags: ["Innate immunity", "Adaptive immunity", "Mycobacterial growth inhibition", "Phenotype screening", "Drug discovery", "Library preparation", "Colony picking"],
  },
  {
    Icon: BrainCircuit,
    title: "Data science",
    summary: "Bioinformatic and statistical analysis of large datasets.",
    tags: ["Bioinformatics", "Genome-wide association studies", "Genetic risk scores", "Machine learning"],
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

export default function FacilitiesPage() {
  return (
    <>
      <FadeBanner image="/images/facilities/Spinning-disk-microscope.jpg" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Facilities &amp; capabilities</Eyebrow>
          <h1 className="text-4xl sm:text-6xl text-white mb-6 leading-tight" style={SERIF}>
            Research facilities that
            <br />
            <em>power discovery and translation</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            CIRTM brings together advanced research facilities, technologies and specialist expertise at Brunel
            University of London and through collaborative links with partner institutions. Our capabilities support
            discovery science, human-relevant models, experimental medicine and translational research across
            inflammation, immunity, health and disease.
          </p>
        </div>
      </FadeBanner>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our facilities and platforms</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ ...SERIF, color: NAVY }}>Specialist facilities. Greater possibilities.</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            Our state-of-the-art facilities enable cutting-edge research, interdisciplinary collaboration and bespoke
            experimental approaches, from molecular and cellular analysis to advanced imaging and human-relevant models.
          </p>
          <FacilitiesExplorer />
        </div>
      </section>

      {/* Technical resources */}
      <section className="py-20" style={{ backgroundColor: IVORY }}>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Technical resources</Eyebrow>
          <h2 className="text-3xl sm:text-4xl mb-4 max-w-2xl" style={{ ...SERIF, color: NAVY }}>From molecular discovery to clinical-grade validation</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10">
            CIRTM operates state-of-the-art research infrastructure at Brunel University of London, purpose-built to
            support translational science.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalResources.map(({ Icon, title, summary, tags }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(185,28,28,0.08)", color: RED }}>
                    <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-xl leading-snug" style={{ ...SERIF, color: NAVY }}>{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with us */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-14" style={{ backgroundColor: NAVY }}>
            <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
              <Image
                src="/images/facilities/brunel-university-london-1.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover object-right"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right, ${NAVY} 0%, rgba(11,27,58,0.75) 35%, rgba(11,27,58,0.25) 100%)` }}
              />
            </div>
            <div className="absolute inset-0 md:hidden" style={{ backgroundColor: "rgba(11,27,58,0.75)" }} />
            <p className="hidden lg:block absolute right-14 top-14 text-right text-xs font-semibold uppercase tracking-widest leading-loose text-white/85">
              World-class facilities.
              <br />
              Collaborative opportunities.
              <span className="block ml-auto mt-3 w-8 h-px bg-amber-400" />
            </p>
            <div className="relative max-w-xl">
              <Eyebrow light>Access &amp; collaboration</Eyebrow>
              <h2 className="text-4xl sm:text-5xl text-white mb-4" style={SERIF}>Work with us</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                CIRTM facilities are available to members, collaborators and external partners. Please get in touch to
                discuss access, feasibility, training and costs.
              </p>
              <a
                href={`mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent("CIRTM facilities enquiry")}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: RED }}
              >
                Enquire about access
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
