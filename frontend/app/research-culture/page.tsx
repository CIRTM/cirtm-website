import Image from "next/image";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };

type Commitment = {
  id: string;
  label: string;
  title: string;
  logo?: { src: string; width: number; height: number };
  Icon?: LucideIcon;
  statement: React.ReactNode;
  intro: string;
  pointsHeading: string;
  points: { title: string; text: string }[];
  links: { label: string; href: string }[];
};

const commitments: Commitment[] = [
  {
    id: "dora",
    label: "Research assessment",
    title: "San Francisco Declaration on Research Assessment (DORA)",
    logo: { src: "/images/research-culture/dora-signatory.png", width: 400, height: 173 },
    statement: (
      <>
        The Centre for Inflammation Research and Translational Medicine (CIRTM) supports the San Francisco Declaration
        on Research Assessment (DORA) as part of its commitment to fair, transparent and responsible research
        assessment.
      </>
    ),
    intro:
      "DORA recognises that journal-based metrics such as the journal impact factor were designed to help librarians choose which journals to buy, not to measure the quality of an individual piece of research. Its central recommendation is that these metrics should not stand in for the quality of an article, an individual's contribution, or decisions on hiring, promotion and funding.",
    pointsHeading: "In practice, this means we aim to",
    points: [
      { title: "Judge research on its merits", text: "Assess the content and contribution of the work itself, not the journal in which it was published." },
      { title: "Value the full range of outputs", text: "Recognise datasets, software, methods, teaching, mentoring and public engagement alongside publications." },
      { title: "Be clear and consistent", text: "Use transparent criteria in recruitment, progression and funding decisions." },
      { title: "Keep improving", text: "Review our own assessment practices as the centre grows." },
    ],
    links: [{ label: "Read the declaration", href: "https://sfdora.org/read/" }],
  },
  {
    id: "openness-animal-research",
    label: "Animal research",
    title: "Concordat on Openness on Animal Research in the UK",
    logo: { src: "/images/research-culture/concordat-openness-animal-research.jpg", width: 150, height: 150 },
    statement: (
      <>
        The Centre for Inflammation Research and Translational Medicine (CIRTM) endorses the Concordat on Openness in
        Animal Research, which helps us continue to take practical steps towards openness and transparency in our animal
        research.
      </>
    ),
    intro:
      "Launched by Understanding Animal Research in 2014, the Concordat is a set of voluntary commitments for UK life science organisations to be more open about their use of animals in research. It has more than 130 signatories, and Brunel University of London is one of them.",
    pointsHeading: "Signatories commit to",
    points: [
      { title: "Be clear", text: "About when, how and why animals are used in research." },
      { title: "Communicate openly", text: "Improve how we talk with the media and the public about animal research." },
      { title: "Engage the public", text: "Offer proactive opportunities for people to learn about research using animals." },
      { title: "Report on progress", text: "Report annually on progress and share our experiences." },
    ],
    links: [
      { label: "About the Concordat", href: "https://www.understandinganimalresearch.org.uk/regulation/concordat-openness-animal-research" },
      { label: "Animal research at Brunel", href: "https://www.brunel.ac.uk/about/administration/governance-and-university-committees/Animal-Research-at-Brunel" },
    ],
  },
  {
    id: "researcher-development",
    label: "Researcher careers",
    title: "Researcher Development Concordat",
    logo: { src: "/images/research-culture/concordat_large.png", width: 1564, height: 474 },
    statement: (
      <>
        The Centre for Inflammation Research and Translational Medicine (CIRTM) fully supports the UK Researcher
        Development Concordat as part of the personal, professional and career development of our community of research
        staff.
      </>
    ),
    intro:
      "The Concordat to Support the Career Development of Researchers sets out the responsibilities of funders, institutions, researchers and their managers. Brunel University of London has been a signatory since 2019 and has held the EU HR Excellence in Research Award since 2011.",
    pointsHeading: "It is built on three principles",
    points: [
      { title: "Environment and culture", text: "Healthy, inclusive and supportive research environments that help a diverse workforce thrive." },
      { title: "Employment", text: "Fair, transparent and merit-based recruitment, progression and performance management, with a good work-life balance." },
      { title: "Professional and career development", text: "Support for researchers to develop for a wide range of careers, including a minimum of 10 days' professional development each year, pro rata." },
    ],
    links: [
      { label: "About the Concordat", href: "https://researcherdevelopmentconcordat.ac.uk/" },
      { label: "Support for research staff at Brunel", href: "https://www.brunel.ac.uk/research/our-research/support" },
    ],
  },
  {
    id: "technician-commitment",
    label: "Technical staff",
    title: "Technician Commitment",
    logo: { src: "/images/research-culture/logo-technician-commitment.png", width: 1494, height: 182 },
    statement: (
      <>
        The Centre for Inflammation Research and Translational Medicine (CIRTM) endorses the sector-wide initiative to
        ensure visibility, recognition, career development and sustainability for our technical workforce in higher
        education and research.
      </>
    ),
    intro:
      "Launched in 2017, the Technician Commitment is a sector-wide initiative recognising that technicians are essential to research and teaching. Our technical colleagues are central to the facilities, models and methods that underpin CIRTM's work.",
    pointsHeading: "It focuses on four themes",
    points: [
      { title: "Visibility", text: "Making the contribution of technicians visible, inside and outside our institutions." },
      { title: "Recognition", text: "Recognising technical skills, including through professional registration." },
      { title: "Career development", text: "Clear routes for technicians to develop and progress their careers." },
      { title: "Sustainability", text: "Securing a skilled technical workforce for the future." },
    ],
    links: [
      { label: "About the Technician Commitment", href: "https://www.techniciancommitment.org.uk/" },
      { label: "Science Council", href: "https://sciencecouncil.org/our-work-with-employers/technician-commitment/" },
    ],
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

function Badge({ c, size }: { c: Commitment; size: "sm" | "lg" }) {
  const box = size === "lg" ? "h-24 max-w-full sm:max-w-[22rem] object-left" : "h-14 max-w-full";
  if (c.logo) {
    return (
      <Image
        src={c.logo.src}
        alt={c.title}
        width={c.logo.width}
        height={c.logo.height}
        className={`${box} w-auto object-contain mix-blend-multiply`}
      />
    );
  }
  const Icon = c.Icon!;
  return (
    <span
      className={`flex items-center justify-center ${size === "lg" ? "w-28 h-28" : "w-16 h-16"} rounded-full`}
      style={{ backgroundColor: "rgba(185,28,28,0.08)", color: RED }}
    >
      <Icon className={size === "lg" ? "w-12 h-12" : "w-7 h-7"} strokeWidth={1.5} aria-hidden />
    </span>
  );
}

export default function ResearchCulturePage() {
  return (
    <>
      <FadeBanner image="/images/facilities/microscope-suite.jpg" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Research culture</Eyebrow>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 leading-tight" style={SERIF}>
            Our <em>commitments</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            CIRTM is committed to a research culture that is fair, open and supportive, for everyone who contributes to
            our work. We support four sector-wide commitments that shape how we assess research, communicate openly and
            develop our people.
          </p>
        </div>
      </FadeBanner>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commitments.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center h-20 mb-4">
                  <Badge c={c} size="sm" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: RED }}>{c.label}</p>
                <p className="leading-snug" style={{ ...SERIF, color: NAVY }}>{c.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {commitments.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className="py-20 scroll-mt-24"
          style={{ backgroundColor: i % 2 === 0 ? IVORY : "#FFFFFF" }}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-8">
                  <Badge c={c} size="lg" />
                </div>
                <Eyebrow>{c.label}</Eyebrow>
                <h2 className="text-3xl sm:text-4xl leading-tight mb-6" style={{ ...SERIF, color: NAVY }}>{c.title}</h2>
                <blockquote
                  className="border-l-4 pl-5 text-lg leading-relaxed italic mb-6"
                  style={{ ...SERIF, borderColor: RED, color: NAVY }}
                >
                  {c.statement}
                </blockquote>
                <p className="text-gray-600 leading-relaxed mb-6">{c.intro}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {c.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: RED }}
                    >
                      {l.label}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">{c.pointsHeading}</p>
                <ol className="space-y-6">
                  {c.points.map((p, n) => (
                    <li key={p.title} className="flex gap-4">
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full text-sm flex-shrink-0 text-white"
                        style={{ backgroundColor: NAVY, ...SERIF }}
                      >
                        {n + 1}
                      </span>
                      <div>
                        <h3 className="text-lg mb-1" style={{ ...SERIF, color: NAVY }}>{p.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
