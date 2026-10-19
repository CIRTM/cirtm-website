import Link from "next/link";
import { Building2, FlaskConical, Handshake, MessagesSquare } from "lucide-react";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const SERIF = { fontFamily: "Georgia, serif" };

const waysToWork = [
  {
    Icon: Handshake,
    title: "Collaborative & sponsored research",
    text: "Joint projects, grant applications and company-funded programmes with our teams.",
  },
  {
    Icon: MessagesSquare,
    title: "Consultancy & expert advice",
    text: "Named specialists for scientific, regulatory and translational guidance.",
  },
  {
    Icon: FlaskConical,
    title: "Contract testing & services",
    text: "Assays, models and analyses run to your specification in our laboratories.",
  },
  {
    Icon: Building2,
    title: "Access to facilities",
    text: "Use of specialist equipment and core facilities on a fee-for-service basis.",
    href: "/facilities",
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

export default function IndustryPartnersPage() {
  return (
    <>
      <FadeBanner image="/images/facilities/bio-process-biopharma-eng.webp" className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Innovation &amp; partnerships</Eyebrow>
          <h1 className="text-4xl sm:text-6xl text-white mb-6 leading-tight" style={SERIF}>
            Resources for
            <br />
            <em>industry partners</em>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            CIRTM researchers work closely with industrial partners across pharma, biotech, diagnostics and clinical
            translation.
          </p>
        </div>
      </FadeBanner>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-16">
            Researchers within CIRTM work closely with industrial partners across drug discovery, biomedical
            engineering, microbial diagnostics and clinical translation. We welcome new opportunities for collaboration,
            sponsored research, consultancy and contract testing. If you are looking for a partner or expert
            consultant, get in touch with the Centre Director, or reach a specific member via the{" "}
            <Link href="/people" className="font-medium underline underline-offset-2 hover:opacity-80" style={{ color: RED }}>
              Our members
            </Link>{" "}
            page.
          </p>

          <Eyebrow>What we offer</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-10" style={{ ...SERIF, color: NAVY }}>
            Ways to <em>work with us</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {waysToWork.map(({ Icon, title, text, href }) => {
              const body = (
                <>
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "rgba(185,28,28,0.08)", color: RED }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl mb-2" style={{ ...SERIF, color: NAVY }}>{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{text}</p>
                    {href && (
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>
                        View our facilities <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    )}
                  </div>
                </>
              );
              const className = "group flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-7";
              return href ? (
                <Link key={title} href={href} className={`${className} hover:shadow-md transition-shadow`}>
                  {body}
                </Link>
              ) : (
                <div key={title} className={className}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-3xl mb-6" style={{ ...SERIF, color: NAVY }}>Start a conversation</h2>
            <p className="text-gray-500 text-sm mb-1">Centre Director</p>
            <p className="text-lg font-semibold mb-1" style={{ color: NAVY }}>Prof. Felicity N. E. Gavins</p>
            <a href="mailto:felicity.gavins@brunel.ac.uk" className="text-sm font-medium hover:underline" style={{ color: RED }}>
              felicity.gavins@brunel.ac.uk
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: RED }}
              >
                General contact →
              </Link>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-colors hover:bg-gray-50"
                style={{ borderColor: "rgba(11,27,58,0.3)", color: NAVY }}
              >
                Our facilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
