import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/lib/content/research-areas";
import { projects } from "@/lib/content/projects";
import { funders } from "@/lib/content/funders";
import { people } from "@/lib/content/people";

export default function Home() {
  const ongoingProjects = projects
    .filter((p) => p.status === "Ongoing")
    .sort((a, b) => (b.lastModified ?? "").localeCompare(a.lastModified ?? ""));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <Image
          src="/images/hero-images/hero-img.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A99D 0%, transparent 50%), radial-gradient(circle at 80% 20%, #574F5A 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-teal">
              <span className="inline-block w-8 h-px bg-teal" />
              Internationally Recognised Centre of Excellence
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-wide drop-shadow-lg" style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}>
              Centre for<br />
              Inflammation<br />
              Research &amp;<br />
              Translational<br />
              Medicine
            </h1>
            <p className="mt-5 text-lg italic text-gray-400 font-serif drop-shadow-md">
              Innovation that heals. Science that changes lives.
            </p>
            <hr className="mt-4 mb-6 border-teal w-24" />
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
              The CIRTM brings together internationally outstanding basic and clinical researchers tackling
              today&apos;s global health challenges, from cardiovascular disease and cancer to antimicrobial
              resistance and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary text-base px-6 py-3">View Our Projects</Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                About the Centre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="relative bg-teal">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { value: "16", label: "Research Projects" },
              { value: "15", label: "Principal Investigators" },
              { value: String(people.reduce((n, p) => n + (p.publications?.length ?? 0), 0)) + "+", label: "Publications" },
              { value: "4", label: "Core Research Areas" },
              { value: "2019", label: "Year Established" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-base text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* About with director */}
      <section className="py-20 bg-navy">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <span className="inline-block w-8 h-px bg-amber-400" />
                Who We Are
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Bridging the gap<br />
                <em>between discovery</em><br />
                <em>and care</em>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                CIRTM is an internationally recognised centre of excellence established in October 2019. We bring
                together a critical mass of outstanding basic and clinical researchers to confront today&apos;s most
                pressing global health challenges.
              </p>
              <blockquote className="border-l-2 border-teal pl-5 mb-8">
                <p className="text-gray-300 text-sm leading-relaxed italic mb-2">
                  &ldquo;To improve patient outcomes through cutting-edge science and to foster interdisciplinary
                  research, while providing an outstanding environment for research training.&rdquo;
                </p>
                <cite className="text-xs font-semibold uppercase tracking-widest text-teal not-italic">
                  CIRTM Mission Statement
                </cite>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">Our Story →</Link>
                <Link
                  href="/people"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-start gap-5 p-8 pb-4 sm:pb-8">
                <div className="relative flex-shrink-0 w-28 sm:w-44 rounded-xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:self-stretch sm:min-h-[220px]">
                  <Image
                    src="/images/people/felicity-gavins.jpg"
                    alt="Prof. Felicity N. E. Gavins"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-teal">Centre Director</div>
                  <h3 className="text-white font-bold text-xl mb-1">Prof. Felicity N. E. Gavins</h3>
                  <p className="text-gray-400 text-sm mb-4">Professor of Pharmacology and Royal Society Wolfson Fellow</p>
                  <p className="hidden sm:block text-gray-300 text-sm leading-relaxed">
                    Prof. Gavins leads CIRTM&apos;s mission to unite outstanding basic and clinical researchers in
                    confronting today&apos;s most pressing global health challenges through internationally recognised,
                    cutting-edge science.
                  </p>
                </div>
              </div>
              <p className="sm:hidden text-gray-300 text-sm leading-relaxed px-8 pb-6">
                Prof. Gavins leads CIRTM&apos;s mission to unite outstanding basic and clinical researchers in
                confronting today&apos;s most pressing global health challenges through internationally recognised,
                cutting-edge science.
              </p>
              <div className="px-8 pb-6 pt-0 border-t border-white/10 text-sm text-gray-400 mt-0 pt-4">
                <div className="pt-4">All enquiries: Prof. Felicity Gavins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px" style={{ backgroundColor: "#B91C1C" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#B91C1C" }}>
                  Strategic Objectives
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6">
                What we{" "}
                <em style={{ fontFamily: "Georgia, serif" }}>set out<br />to achieve</em>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                Four strategic objectives guide every research programme, partnership, and initiative we
                undertake, anchored always in real-world patient impact.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white transition-colors"
                style={{ backgroundColor: "#B91C1C" }}
              >
                Partner with CIRTM
              </Link>
            </div>

            {/* Right — numbered objectives */}
            <div className="divide-y divide-gray-100">
              {[
                {
                  n: "01",
                  title: "Create Breakthrough Diagnostics & Therapies",
                  body: "Convert cutting-edge laboratory findings into clinically validated diagnostics and therapies that make a measurable difference for patients across multiple disease areas.",
                },
                {
                  n: "02",
                  title: "Fast-Track Lab Discoveries to the Clinic",
                  body: "Compress the translational timeline, ensuring that breakthroughs reach the people who need them with urgency, without compromising the scientific rigour that underpins safe care.",
                },
                {
                  n: "03",
                  title: "Unite Science, Engineering & Medicine",
                  body: "Foster a truly interdisciplinary culture where collaboration across scientific boundaries generates solutions that no single discipline could produce alone.",
                },
                {
                  n: "04",
                  title: "Confront Chronic & Acute Global Health Threats",
                  body: "Address the full spectrum of health challenges, from long-standing chronic conditions to rapidly emerging acute threats, with evidence-based, patient-centred science.",
                },
              ].map((obj) => (
                <div key={obj.n} className="py-7 flex gap-8 items-start">
                  <span className="text-3xl font-bold flex-shrink-0 w-10" style={{ color: "#B91C1C" }}>
                    {obj.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{obj.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{obj.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="section-heading">Research Projects</h2>
              <p className="section-subheading">
                Investigator-led projects at the frontiers of biomedical science.
              </p>
            </div>
            <Link href="/projects" className="btn-outline flex-shrink-0 text-sm">Browse all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
            {ongoingProjects.map((project) => {
              const areas = researchAreas.filter((a) => project.researchAreaSlugs.includes(a.slug));
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="card border border-gray-100 group hover:border-teal/30 hover:shadow-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden flex-shrink-0">
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1">
                      {areas.map((a) => (
                        <span key={a.slug} className="text-[10px] font-medium rounded-full px-2 py-0.5 bg-teal/10 text-teal">
                          {a.tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-teal transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px" style={{ backgroundColor: "#B91C1C" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#B91C1C" }}>Research</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-4">
                Core{" "}
                <em style={{ fontFamily: "Georgia, serif" }}>research areas</em>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg">
                Our research drives forward scientific innovation and discovery, with a collective aim to enhance understanding of health and disease across four key domains.
              </p>
            </div>
            <Link href="/research" className="btn-outline flex-shrink-0 text-sm hidden sm:block">View all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.slice(0, 4).map((area) => (
              <Link
                key={area.slug}
                href={`/research/${area.slug}`}
                className="group"
              >
                {area.image?.url && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={area.image.url}
                      alt={area.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="font-bold text-navy text-lg mb-2 leading-snug group-hover:text-teal transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#B91C1C" }}>
                  Explore Research →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/research" className="btn-outline text-sm">View all →</Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-white/40" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Our Approach</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              From <em style={{ fontFamily: "Georgia, serif" }}>bench to bedside</em>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Everything we do is designed to compress the time between scientific discovery and real clinical impact — because patients cannot wait.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-white/20" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4">
              {[
                { icon: "🔬", label: "Basic Research", desc: "Fundamental discovery in cellular and molecular biology" },
                { icon: "🧪", label: "Pre-Clinical", desc: "Validation in model systems; target identification & testing" },
                { icon: "⚗️", label: "Translational", desc: "Engineering diagnostics & drug candidates for clinical use" },
                { icon: "🏥", label: "Clinical Studies", desc: "Patient trials and real-world clinical validation" },
                { icon: "🌍", label: "Global Impact", desc: "Diagnostics & therapies reaching patients worldwide" },
              ].map((step) => (
                <div key={step.label} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                    {step.icon}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">{step.label}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PhD Opportunities */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="section-heading">PhD Opportunities</h2>
            <p className="section-subheading">Join our postgraduate research community.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-8 flex flex-col" style={{ backgroundColor: "#F8F9FC" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="tag mb-4 inline-block">Postgraduate Research</span>
                <h3 className="text-xl font-bold text-navy mb-4">Postgraduate Research Opportunities</h3>
                <p className="text-base leading-relaxed" style={{ color: "#6B7A99" }}>
                  Join a vibrant research community at the cutting edge of biomedical science. Browse PhD
                  opportunities in Biomedical Sciences at Brunel University London and train alongside
                  internationally outstanding researchers.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "World-class supervisory teams",
                  "State-of-the-art laboratory facilities",
                  "Strong links with clinical and industry partners",
                  "Regular seminar and training programme",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm" style={{ color: "#6B7A99" }}>
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center text-xs font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Enquire about a PhD</Link>
              <Link href="/education" className="btn-outline">Education &amp; Training</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research videos */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Watch our research videos</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Highlights from CIRTM members explaining their work to wider audiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/_EAKsY-bgBE"
                  title="Reducing inflammation in the brain after stroke"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy">Reducing inflammation in the brain after stroke</p>
              <p className="text-xs text-gray-500">
                Professor Felicity Gavins explains her stroke research in The Royal Society video.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/_YlAZX7pCrg"
                  title="Understanding adenoid cystic carcinoma"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy">Understanding adenoid cystic carcinoma</p>
              <p className="text-xs text-gray-500">
                Professor Arturo Sala explains his research with the Oracle Cancer Trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funders */}
      <section className="py-16 border-t border-gray-100" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest mb-10" style={{ color: "#6B7A99" }}>
            Funding Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {funders.map((funder) => (
              <Image
                key={funder.slug}
                src={funder.logoUrl}
                alt={funder.name}
                width={120}
                height={50}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ maxHeight: "50px", width: "auto" }}
                unoptimized
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 text-center" style={{ background: "linear-gradient(to right, #C0392B 0%, #922B21 60%, #7B1111 100%)" }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Join us in changing lives
          </h2>
          <p className="text-red-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you&apos;re a researcher, clinician, industry partner or funder, there&apos;s a
            place for you in the CIRTM community. Let&apos;s build the future of medicine together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-semibold text-sm bg-white text-red-700 hover:bg-red-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/innovation/industry"
              className="px-8 py-3 rounded-lg font-semibold text-sm border border-white/60 text-white hover:bg-white/10 transition-colors"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
