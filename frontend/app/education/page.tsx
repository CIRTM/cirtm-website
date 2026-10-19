import Image from "next/image";
import Link from "next/link";
import { School, Users } from "lucide-react";
import TrainingPathway from "@/components/TrainingPathway";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };
const PG_COURSES = "https://www.brunel.ac.uk/biomedical-sciences/postgraduate-courses";

const pathway = [
  {
    level: "UG",
    label: "Undergraduate",
    hex: "#0F9F8F",
    title: "Research placements & lab experience",
    description:
      "Students from Biomedical Sciences, Bioengineering and related programmes carry out supervised research placements within CIRTM laboratories, gaining hands-on exposure to translational science, state-of-the-art equipment and advanced imaging, before they graduate.",
    link: { label: "Undergraduate courses", href: "https://www.brunel.ac.uk/biomedical-sciences/undergraduate-courses" },
  },
  {
    level: "MSc",
    label: "Postgraduate taught",
    hex: "#2563EB",
    title: "MSc & MRes research projects",
    description:
      "CIRTM researchers supervise MSc and MRes students across Brunel's master's programmes, directing independent research projects alongside world-class PIs and preparing graduates for doctoral research or specialist roles in the life sciences.",
    link: { label: "Postgraduate courses", href: PG_COURSES },
  },
  {
    level: "MED",
    label: "Brunel Medical School",
    hex: "#D97706",
    title: "Translational science at the heart of clinical training",
    description:
      "CIRTM researchers are embedded in the Brunel Medical School clinical curriculum, providing specialist training in immunology, pharmacology, therapeutics and oncology. Medical students gain access to live translational research, connecting clinical training to the science shaping tomorrow's medicine.",
    link: { label: "Brunel Medical School", href: "https://www.brunel.ac.uk/brunel-medical-school" },
  },
  {
    level: "PhD",
    label: "Doctoral research",
    hex: "#9333EA",
    title: "PhD research & industry studentships",
    description:
      "CIRTM researchers supervise doctoral students through Brunel's doctoral programmes, offering co-supervised research in a vibrant multidisciplinary environment. Projects are supported by funders including the BHF, Royal Society, BBSRC and industry partners.",
    link: { label: "PhD opportunities", href: "https://www.brunel.ac.uk/biomedical-sciences/research-and-phd-programmes" },
  },
  {
    level: "PD",
    label: "Post-doctoral & fellowship",
    hex: RED,
    title: "Fellowships & early career development",
    description:
      "CIRTM supports early-career researchers pursuing independent fellowships, providing the mentorship, facilities and collaborative environment they need to establish themselves as research leaders.",
    link: { label: "Fellowship schemes", href: "/contact" },
  },
];

const programmes = [
  { level: "BSc", title: "Applied Molecular & Cell Biology" },
  { level: "BSc / PhD", title: "Human Pathology & Immunology" },
  { level: "BSc", title: "Microbial Pathogenesis" },
  { level: "MSc", title: "Medical Immunology" },
  { level: "BSc / PhD", title: "Molecular Pharmacology & Toxicology" },
  { level: "MSc", title: "Molecular Medicine" },
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

export default function EducationPage() {
  return (
    <>
      <FadeBanner image="/images/facilities/bioscience-lab.jpg" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Education</Eyebrow>
          <h1 className="text-5xl sm:text-6xl text-white mb-6" style={SERIF}>Education &amp; Training</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            CIRTM is committed to training the next generation of biomedical researchers through postgraduate
            programmes, seminars and collaborative learning opportunities.
          </p>
        </div>
      </FadeBanner>

      {/* Training the next generation */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow>Education &amp; training</Eyebrow>
              <h2 className="text-4xl sm:text-5xl leading-tight mb-6" style={{ ...SERIF, color: NAVY }}>
                Training the next <em>generation of translational scientists</em>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                CIRTM is built on a research-led teaching philosophy. Our scientists do not just make discoveries, they
                bring them into the lecture theatre, the laboratory and the clinic, inspiring the next generation at
                every level.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  name: "Brunel Medical School",
                  logo: { src: "/images/education/brunel-medical-school.svg", width: 597, height: 295 },
                  text: "CIRTM researchers are embedded in the Medical School's clinical curriculum, providing specialist teaching, laboratory immersion and live research access that connects clinical training to the science behind better patient care.",
                },
                {
                  name: "British Pharmacological Society",
                  logo: { src: "/images/education/BPS-new-w.png", width: 503, height: 196 },
                  text: "CIRTM researchers are active members of the British Pharmacological Society (BPS), and our Director, Prof. Felicity Gavins, serves as Deputy Vice-President (Meetings) and is an Honorary Fellow of the Society, bringing pharmacological leadership directly into our undergraduate and postgraduate teaching.",
                },
              ].map((card) => (
                <div key={card.name} className="rounded-xl border border-gray-200 p-7 shadow-sm">
                  <Image
                    src={card.logo.src}
                    alt={card.name}
                    width={card.logo.width}
                    height={card.logo.height}
                    unoptimized
                    className="h-16 w-auto mb-5"
                  />
                  <h3 className="sr-only">{card.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training pathway */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>The CIRTM training pathway</Eyebrow>
          <h2 className="text-4xl sm:text-5xl text-white mb-12" style={SERIF}>
            From first placement <em>to research leader</em>
          </h2>
          <TrainingPathway pathway={pathway} />
        </div>
      </section>

      {/* Research-led teaching */}
      <section className="py-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Research-led teaching excellence</Eyebrow>
          <h2 className="text-4xl sm:text-5xl leading-tight mb-6 max-w-3xl" style={{ ...SERIF, color: NAVY }}>
            Cutting-edge research informs <em>every stage of the curriculum</em>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            CIRTM members lead and contribute to undergraduate and postgraduate modules across Brunel&apos;s College of
            Health, Medicine and Life Sciences, embedding active research directly into the curriculum.
          </p>

          <div className="max-w-3xl rounded-xl bg-white border border-gray-200 border-l-4 p-8 mb-8 shadow-sm" style={{ borderLeftColor: RED }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: RED }}>Featured group</p>
            <h3 className="text-2xl mb-3" style={{ ...SERIF, color: NAVY }}>Biosciences Immunology Group</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              A cross-disciplinary group of CIRTM-affiliated researchers and educators coordinating immunology teaching,
              often disease-linked, and helping run a dedicated seminar series for postgraduate students. The group
              welcomes undergraduate project students and offers a structured pathway into doctoral research.
            </p>
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: RED }}
            >
              Visit the Biosciences Immunology Group
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmes.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-200 px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{p.level}</p>
                <p className="text-lg" style={{ ...SERIF, color: NAVY }}>{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public engagement */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Public engagement &amp; outreach</Eyebrow>
          <h2 className="text-4xl sm:text-5xl leading-tight mb-6 max-w-3xl" style={{ ...SERIF, color: NAVY }}>
            Making translational science <em>visible and meaningful</em>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            CIRTM researchers actively engage with the public, schools and patient communities, communicating the value
            of biomedical science and ensuring our research is informed by the people it seeks to benefit. Supported by
            funding from the Society of Biology and the Royal Society.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                Icon: School,
                title: "Schools & young people",
                text: "Hands-on science demonstrations and lab visits inspire school-age students, introducing the next generation to biomedical science.",
              },
              {
                Icon: Users,
                title: "Patient & public involvement",
                text: "Patients and members of the public help shape our research priorities and dissemination, keeping the voice of those affected at the heart of what we do.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-5 rounded-xl border border-gray-200 p-7 shadow-sm">
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "rgba(185,28,28,0.08)", color: RED }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl mb-2" style={{ ...SERIF, color: NAVY }}>{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
