import Link from "next/link";
import TrainingPathway from "@/components/TrainingPathway";

const pathway = [
  {
    level: "UG",
    label: "Undergraduate",
    color: "bg-orange-500",
    hex: "#F97316",
    title: "Research Placements & Lab Experience",
    description:
      "Students from the Brunel Biosciences degree programmes carry out supervised research placements within CIRTM laboratories, gaining hands-on exposure to translational science, state-of-the-art equipment including flow cytometry, and cutting-edge advanced imaging, before they graduate.",
    link: { label: "Placement Opportunities", href: "/contact" },
  },
  {
    level: "MSC",
    label: "Masters",
    color: "bg-teal",
    hex: "#00A99D",
    title: "MSc Research Projects in Translational Medicine",
    description:
      "CIRTM researchers supervise MSc students on the Disease Mechanisms & Therapeutics and Molecular Medicine programmes, directing independent projects alongside world-class PIs and preparing graduates for doctoral research or specialist careers in the life sciences.",
    link: { label: "MSc Programmes", href: "/contact" },
  },
  {
    level: "BMS",
    label: "Brunel Medical School",
    color: "bg-blue-500",
    hex: "#3B82F6",
    title: "Translational Science at the Heart of Clinical Training",
    description:
      "CIRTM researchers are embedded in the Brunel Medical School clinical curriculum, providing specialist teaching in inflammation, cardiovascular biology, oncology, and therapeutics. Medical students gain direct access to live translational research, connecting clinical training directly to the science that will shape tomorrow's medicine.",
    link: { label: "Brunel Medical School", href: "https://www.brunel.ac.uk/study/medicine" },
  },
  {
    level: "PHD",
    label: "Doctoral Research",
    color: "bg-purple-500",
    hex: "#A855F7",
    title: "PhD Programme & Industry Studentships",
    description:
      "Our doctoral programme offers rigorous, co-supervised research within a vibrant multidisciplinary environment. Industry-funded studentships, supported by major funders including Wellcome Trust, BHF, Cancer Research UK and NIHR, deliver world-level measurement capability.",
    link: { label: "PhD Opportunities", href: "/contact" },
  },
  {
    level: "PD",
    label: "Post-Doctoral & Fellowship",
    color: "bg-rose-500",
    hex: "#F43F5E",
    title: "Fellowships & Early Career Development",
    description:
      "CIRTM supports early-career researchers through industry-backed fellowships and mentored transitional programmes, providing the environment, training and network needed to become independent research leaders.",
    link: { label: "Fellowship Schemes", href: "/contact" },
  },
];

const modules = [
  { level: "BSc", title: "Applied Molecular & Cell Biology" },
  { level: "BSc / PGT", title: "Pharmacology & Immunology" },
  { level: "BSc", title: "Microbial Pathogenesis" },
  { level: "PGT", title: "Paediatric Immunology" },
  { level: "BSc / PGT", title: "Molecular Pharmacology & Toxicology" },
  { level: "BSc", title: "Pharmacology & Medicine" },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Education
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Education &amp; Training</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            CIRTM is committed to training the next generation of biomedical researchers through postgraduate
            programmes, seminars, and collaborative learning opportunities.
          </p>
        </div>
      </section>

      {/* Intro + Training Pathway */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — intro */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-5">
                Education &amp; Training
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6">
                Training the next{" "}
                <em style={{ fontFamily: "Georgia, serif" }}>
                  generation of translational scientists
                </em>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                CIRTM is built on a research-led teaching philosophy. Our scientists don&apos;t just make
                discoveries. They bring them into the lecture theatre, the laboratory and the
                clinic, inspiring the next generation at every level.
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "Brunel Medical School",
                    description:
                      "CIRTM researchers are embedded in the Medical School's clinical curriculum, providing specialist teaching, laboratory immersion and live research access that connects medical training to the science that improves patient outcomes.",
                  },
                  {
                    name: "British Pharmacological Society",
                    description:
                      "CIRTM maintains close links with the BPS, including Deputy Chair of the Meetings Committee and Honorary Fellowship, bringing pharmacological expertise directly into our undergraduate and postgraduate teaching programmes.",
                  },
                ].map((partner) => (
                  <div key={partner.name} className="rounded-xl border border-gray-200 p-5" style={{ backgroundColor: "#F8F9FC" }}>
                    <p className="font-semibold text-navy mb-1">{partner.name}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — training pathway */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
                The CIRTM Training Pathway
              </p>
              <TrainingPathway pathway={pathway} />
            </div>

          </div>
        </div>
      </section>

      {/* Research-Led Teaching Excellence */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Research-Led Teaching Excellence
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10">
            CIRTM members lead and contribute to undergraduate and postgraduate modules across Brunel&apos;s
            College of Health, Medicine and Life Sciences, embedding active research directly into the
            curriculum at every level of study.
          </p>

          <div className="rounded-xl border-l-4 border-teal bg-white p-6 mb-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-2">Featured Group</p>
            <h3 className="text-xl font-bold text-navy mb-3">Biosciences Immunology Group</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-2xl">
              The Biosciences Immunology Group is one of CIRTM&apos;s most active teaching collectives, with members
              leading modules from cell signalling to clinical immunology and running a dedicated seminar series for
              postgraduate students. The group welcomes undergraduate project students and offers a structured
              pathway into doctoral research.
            </p>
            <Link
              href="/research"
              className="text-xs font-semibold uppercase tracking-widest text-teal hover:text-teal-700 transition-colors"
            >
              Visit the Biosciences Immunology Group →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal mb-1">{mod.level}</p>
                <p className="font-semibold text-navy text-sm">{mod.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Engagement & Outreach */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Public Engagement &amp; Outreach
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10">
            CIRTM researchers actively engage with the public, schools, and patient communities, communicating
            the value of biomedical science and ensuring our research is informed by the people it seeks to
            benefit. Supported by funding from the Society of Biology and the Royal Society.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🏫",
                title: "Schools & Young People",
                description:
                  "CIRTM researchers visit local schools and host sixth-form students in the laboratory, inspiring the next generation of scientists through hands-on research experiences and careers talks.",
              },
              {
                icon: "👥",
                title: "Patient & Public Involvement",
                description:
                  "Patients and members of the public contribute to shaping our research priorities and dissemination. Dedicated PPI events ensure the voices of those affected are heard at the heart of our science.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-gray-200 p-6" style={{ backgroundColor: "#F8F9FC" }}>
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
