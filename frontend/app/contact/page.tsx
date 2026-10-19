import Link from "next/link";
import { Building2, GraduationCap, Handshake, Mail } from "lucide-react";
import { FadeBanner } from "@/components/FadeBanner";
import { VisitCirtm } from "@/components/VisitCirtm";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };
const EMAIL = "felicity.gavins@brunel.ac.uk";

const routes = [
  {
    Icon: Mail,
    title: "General & scientific enquiries",
    text: "Questions about our research, collaborations or the centre. Contact the Centre Director, Prof. Felicity Gavins.",
    href: `mailto:${EMAIL}`,
    cta: "Email the Centre Director",
  },
  {
    Icon: Handshake,
    title: "Industry partners",
    text: "Collaborative and sponsored research, consultancy and contract testing.",
    href: "/innovation/industry",
    cta: "Ways to work with us",
  },
  {
    Icon: Building2,
    title: "Facilities access",
    text: "Access to our specialist equipment and core facilities for members, collaborators and external partners.",
    href: "/facilities",
    cta: "Our facilities",
  },
  {
    Icon: GraduationCap,
    title: "Study & training",
    text: "Placements, master's projects, PhD opportunities and fellowships with CIRTM researchers.",
    href: "/education",
    cta: "Education & training",
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

export default function ContactPage() {
  return (
    <>
      <FadeBanner image="/images/about/campus-at-night.jpg" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="text-5xl sm:text-6xl text-white mb-6" style={SERIF}>
            Get <em>in touch</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            We welcome enquiries from researchers, industry partners and prospective students.
          </p>
        </div>
      </FadeBanner>

      <section className="py-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Enquiries</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-10" style={{ ...SERIF, color: NAVY }}>
            How can <em>we help?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map(({ Icon, title, text, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "rgba(185,28,28,0.08)", color: RED }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl mb-2" style={{ ...SERIF, color: NAVY }}>{title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{text}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>
                    {cta} <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VisitCirtm />
    </>
  );
}
