import Link from "next/link";
import Image from "next/image";

const researchAreas = [
  {
    title: "Cardiovascular Diseases",
    slug: "cardiovascular-diseases",
    description:
      "Aiming to better understand, diagnose and treat heart and circulatory disease through cutting-edge research and international collaboration.",
    icon: "❤️",
    color: "bg-red-50 border-red-100",
    tag: "CVD",
  },
  {
    title: "Inflammation",
    slug: "inflammation",
    description:
      "Targeting uncontrolled inflammatory responses in cardiovascular diseases, infection and immunity, and cancer.",
    icon: "🔬",
    color: "bg-orange-50 border-orange-100",
    tag: "Immunology",
  },
  {
    title: "Infections & Immunity",
    slug: "infections-and-immunity",
    description:
      "Understanding how the body handles harmful pathogens like bacteria and viruses, and developing vaccines, diagnostics and treatments.",
    icon: "🛡️",
    color: "bg-blue-50 border-blue-100",
    tag: "Microbiology",
  },
  {
    title: "Microbiome & Health",
    slug: "microbiome-and-health",
    description:
      "Studying the role of the host microbiome in disease, including the development of organ-on-a-chip technology to model human tissues.",
    icon: "🧬",
    color: "bg-green-50 border-green-100",
    tag: "Microbiome",
  },
  {
    title: "Cancer",
    slug: "cancer",
    description:
      "Increasing understanding of cancer hallmarks, immunology and metastasis to develop diagnostic biomarkers and targeted therapies.",
    icon: "⚗️",
    color: "bg-purple-50 border-purple-100",
    tag: "Oncology",
  },
  {
    title: "Microbial Resistance",
    slug: "microbial-resistance",
    description:
      "Understanding how bacteria evolve antibiotic resistance and identifying novel compounds that disrupt virulence mechanisms.",
    icon: "🦠",
    color: "bg-yellow-50 border-yellow-100",
    tag: "AMR",
  },
  {
    title: "Drug Repurposing",
    slug: "drug-repurposing",
    description:
      "Using high-throughput technologies to identify clinically-approved drugs that can be repurposed to treat new diseases and drive clinical impact.",
    icon: "💊",
    color: "bg-teal-50 border-teal-100",
    tag: "Translation",
  },
];

const featuredProjects = [
  {
    title: "Investigating thrombo-inflammation associated with cardiovascular diseases",
    area: "Cardiovascular Diseases",
  },
  {
    title: "Promoting inflammation resolution in sickle cell disease",
    area: "Inflammation",
  },
  {
    title: "Host-pathogen interactions in tuberculosis",
    area: "Infections & Immunity",
  },
  {
    title: "Modelling infant leukaemia using gene editing technology",
    area: "Cancer",
  },
  {
    title: "Metabolic reprogramming for improved BCG vaccine efficacy",
    area: "Infections & Immunity",
  },
  {
    title: "Early growth protein molecules and preventing autoimmune disease and cancer",
    area: "Cancer",
  },
];

const funders = [
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/Wellcome-Trust-logo.jpg?q=70&f=webp&height=200", alt: "Wellcome Trust" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/medical-research-council.jpg?q=70&f=webp&height=200", alt: "Medical Research Council" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/british-heart-foundation-logo.jpg?q=70&f=webp&height=200", alt: "British Heart Foundation" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/CRUK-Logo.jpg?q=70&f=webp&height=200", alt: "Cancer Research UK" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/BBSRC-horiz-logo-blue.jpg?q=70&f=webp&height=200", alt: "BBSRC" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/NIH-logo.jpg?q=70&f=webp&height=200", alt: "NIH" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/royal-society-logo.jpg?q=70&f=webp&height=200", alt: "Royal Society" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/epsrc.ukri.jpg?q=70&f=webp&height=200", alt: "EPSRC / UKRI" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/innovate-uk.jpg?q=70&f=webp&height=200", alt: "Innovate UK" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/age-uk-logo.jpg?q=70&f=webp&height=200", alt: "Age UK" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/American-Heart-Association-Logo..jpg?q=70&f=webp&height=200", alt: "American Heart Association" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/BPS-logo.jpeg?q=70&f=webp&height=200", alt: "British Pharmacological Society" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/British-Society-for-Antimicrobial-chemotherapy-society-logo.jpg?q=70&f=webp&height=200", alt: "British Society for Antimicrobial Chemotherapy" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/endocrine-society-logo.jpeg?q=70&f=webp&height=200", alt: "Endocrine Society" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/kidscan-logo.jpg?q=70&f=webp&height=200", alt: "Kidscan" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/nc3rs-logo.jpg?q=70&f=webp&height=200", alt: "NC3Rs" },
  { src: "https://www.brunel.ac.uk/research/Images/cirtm/funder-images/VALIDATE-logo.jpg?q=70&f=webp&height=200", alt: "VALIDATE" },
];

const stats = [
  { value: "15", label: "Active Research Projects" },
  { value: "15", label: "Principal Investigators" },
  { value: "7", label: "Research Focus Areas" },
  { value: "2019", label: "Year Established" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A99D 0%, transparent 50%), radial-gradient(circle at 80% 20%, #574F5A 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span
              className="tag mb-6 inline-block"
              style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}
            >
              Brunel University London
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Centre for Inflammation Research and{" "}
              <span style={{ color: "#00A99D" }}>Translational Medicine</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              The CIRTM brings together internationally outstanding basic and
              clinical researchers tackling today&apos;s global health challenges,
              from cardiovascular disease and cancer to antimicrobial resistance
              and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/research" className="btn-primary text-base px-6 py-3">
                Explore Our Research
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-white/10 transition-colors"
              >
                About the Centre
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="relative border-t border-white/10"
          style={{ backgroundColor: "rgba(9,24,50,0.5)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-teal">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-white text-lg font-medium max-w-4xl mx-auto leading-relaxed">
            &ldquo;Driving scientific innovation and discovery to transform diagnosis,
            treatment, and management of people with cardiovascular diseases,
            inflammation, infection, microbial resistance, and cancer.&rdquo;
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-heading">Research Areas</h2>
              <p className="section-subheading">
                Multidisciplinary research tackling the global health challenges
                that affect billions of people worldwide.
              </p>
            </div>
            <Link href="/research" className="btn-outline flex-shrink-0">
              View all areas →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {researchAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/research/${area.slug}`}
                className={`card p-6 border ${area.color} hover:shadow-lg group`}
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <span className="tag text-[10px] mb-3">{area.tag}</span>
                <h3
                  className="font-semibold text-navy text-base mb-2 group-hover:text-teal transition-colors"
                >
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-heading">Research Projects</h2>
              <p className="section-subheading">
                Investigator-led projects at the frontiers of biomedical science.
              </p>
            </div>
            <Link href="/projects" className="btn-outline flex-shrink-0">
              Browse all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="card p-6 border border-gray-100 group hover:border-teal/30"
              >
                <span className="tag mb-3">{project.area}</span>
                <h3 className="font-semibold text-navy text-sm leading-snug mt-2 group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Director CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="tag mb-4 inline-block"
                style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}
              >
                About the Centre
              </span>
              <h2 className="text-3xl font-bold text-white leading-tight mb-5">
                Bench to bedside and back again
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Established in 2019, CIRTM provides an inclusive research structure
                and a venue for multidisciplinary research, including in-vivo models
                and patient-centred approaches, with a collective aim of enhancing
                our understanding of the physiology, pharmacology, and pathophysiology
                of human disease.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Working with local, national, and international partners and funders,
                we develop solutions to our research challenges with regional and
                global impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Our story →
                </Link>
                <Link
                  href="/people"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 border border-white/10"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-teal">
                Centre Director
              </div>
              <h3 className="text-white font-bold text-xl mb-1">
                Prof. Felicity N. E. Gavins
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Professor of Cardiovascular &amp; Inflammation Biology
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prof. Gavins leads CIRTM&apos;s mission to unite outstanding basic
                and clinical researchers in confronting today&apos;s most pressing
                global health challenges through internationally recognised,
                cutting-edge science.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400">
                <div>General enquiries: Mrs. Coral Hankins</div>
                <div className="mt-1">Scientific enquiries: Prof. Felicity Gavins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Partners */}
      <section className="py-16 border-t border-gray-100" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
            style={{ color: "#6B7A99" }}
          >
            Funding Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {funders.map((funder) => (
              <Image
                key={funder.alt}
                src={funder.src}
                alt={funder.alt}
                width={120}
                height={50}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ maxHeight: "50px", width: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PhD CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-4 inline-block">Postgraduate Research</span>
          <h2 className="text-3xl font-bold text-navy mb-4">
            Postgraduate Research Opportunities
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B7A99" }}>
            Join a vibrant research community at the cutting edge of biomedical
            science. Browse PhD opportunities in Biomedical Sciences at Brunel
            University London.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-6 py-3">
              Enquire about a PhD
            </Link>
            <Link href="/seminars" className="btn-outline text-base px-6 py-3">
              Attend a seminar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
