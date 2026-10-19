import Image from "next/image";
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import { seminars, type Seminar } from "@/lib/content/seminars";
import { news, linkedinPosts, LINKEDIN_URL } from "@/lib/content/news";
import { FadeBanner } from "@/components/FadeBanner";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const IVORY = "#F8F7F5";
const serif = { fontFamily: "Georgia, serif" };

function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) {
  return new Date(iso).toLocaleDateString("en-GB", { ...opts, timeZone: "UTC" });
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest ${dark ? "text-amber-400" : ""}`}
      style={dark ? undefined : { color: RED }}
    >
      <span className={`inline-block w-8 h-px ${dark ? "bg-amber-400" : ""}`} style={dark ? undefined : { backgroundColor: RED }} />
      {children}
    </p>
  );
}

function SampleBadge() {
  return (
    <span className="inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-amber-100 text-amber-800">
      Sample
    </span>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function NewsEventsPage() {
  const now = new Date();
  const upcoming = seminars
    .filter((s) => new Date(s.date) >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = seminars
    .filter((s) => new Date(s.date) < now)
    .sort((a, b) => b.date.localeCompare(a.date));
  const pastByYear = past.reduce<Record<string, Seminar[]>>((acc, s) => {
    const year = s.date.slice(0, 4);
    (acc[year] ??= []).push(s);
    return acc;
  }, {});
  const [featured, ...moreNews] = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* Hero */}
      <FadeBanner image="/images/hero-images/hero-img.jpg" className="">
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <Eyebrow dark>News &amp; Events</Eyebrow>
          <h1 className="text-5xl sm:text-6xl text-white leading-[1.08]" style={serif}>
            What&rsquo;s happening<br />
            <em>at CIRTM</em>
          </h1>
          <hr className="mt-6 mb-6 border-amber-400 w-24" />
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
            Research highlights, awards and announcements from across the centre, plus our seminar series,
            symposia and events. Everyone is welcome.
          </p>
          <nav className="mt-10 flex flex-wrap gap-3" aria-label="On this page">
            {[
              ["Latest news", "#news"],
              ["Upcoming events", "#upcoming"],
              ["From LinkedIn", "#linkedin"],
              ["Seminar archive", "#archive"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </FadeBanner>

      {/* Latest news */}
      <section id="news" className="py-20 scroll-mt-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Latest News</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-12" style={{ ...serif, color: NAVY }}>
            Stories from <em>the centre</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {featured && (
              <article className="lg:col-span-3 group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                {featured.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={featured.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white" style={{ backgroundColor: RED }}>
                      {featured.category}
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                    {formatDate(featured.date)} {featured.sample && <SampleBadge />}
                  </p>
                  <h3 className="text-2xl sm:text-3xl leading-snug mb-4" style={{ ...serif, color: NAVY }}>
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{featured.summary}</p>
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all"
                      style={{ color: RED }}
                    >
                      Read the full story <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            )}

            <div className="lg:col-span-2 flex flex-col gap-6">
              {moreNews.map((item) => (
                <article key={item.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex">
                  {item.image && (
                    <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
                      <Image src={item.image} alt="" fill sizes="160px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-5 flex flex-col">
                    <p className="text-[11px] uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="font-semibold" style={{ color: RED }}>{item.category}</span>
                      <span className="text-gray-400">{formatDate(item.date, { month: "short", year: "numeric" })}</span>
                      {item.sample && <SampleBadge />}
                    </p>
                    <h3 className="text-lg leading-snug" style={{ ...serif, color: NAVY }}>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section id="upcoming" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <Eyebrow>Upcoming Events</Eyebrow>
              <h2 className="text-4xl sm:text-5xl mb-6" style={{ ...serif, color: NAVY }}>
                Join us <em>in person</em>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The CIRTM seminar series brings leading researchers from Brunel and beyond to share work across
                inflammation, immunity and translational medicine.
              </p>
              <div className="rounded-xl p-6 border-l-4" style={{ backgroundColor: IVORY, borderColor: RED }}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To attend a seminar or suggest a speaker, contact{" "}
                  <a href="mailto:felicity.gavins@brunel.ac.uk" className="font-semibold hover:underline" style={{ color: RED }}>
                    Professor Felicity Gavins
                  </a>
                  , CIRTM Director.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              {upcoming.length === 0 && (
                <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
                  No events are scheduled right now. Follow us on LinkedIn to hear about the next one.
                </div>
              )}
              {upcoming.map((s) => {
                const d = new Date(s.date);
                return (
                  <article key={s.slug} className="flex gap-6 rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-20 rounded-xl text-center py-3 text-white" style={{ backgroundColor: NAVY }}>
                      <div className="text-3xl leading-none" style={serif}>{d.getUTCDate()}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-amber-400">
                        {formatDate(s.date, { month: "short" })}
                      </div>
                      <div className="text-[11px] text-gray-400">{d.getUTCFullYear()}</div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest" style={{ color: RED }}>
                        {s.type ?? "Seminar"} {s.sample && <SampleBadge />}
                      </p>
                      <h3 className="text-xl leading-snug mb-3" style={{ ...serif, color: NAVY }}>{s.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
                        {s.speaker && (
                          <span className="inline-flex items-center gap-1.5">
                            <UserIcon className="w-4 h-4" aria-hidden="true" />
                            {s.speaker}
                            {s.speakerAffiliation && `, ${s.speakerAffiliation}`}
                          </span>
                        )}
                        {s.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPinIcon className="w-4 h-4" aria-hidden="true" />
                            {s.location}
                          </span>
                        )}
                      </div>
                      {s.registrationLink && (
                        <a
                          href={s.registrationLink}
                          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90"
                          style={{ backgroundColor: RED }}
                        >
                          Register →
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section id="linkedin" className="py-20 scroll-mt-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Eyebrow dark>Latest Updates</Eyebrow>
              <h2 className="text-4xl sm:text-5xl text-white" style={serif}>
                From our <em>LinkedIn</em>
              </h2>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <LinkedInIcon className="w-4 h-4" /> Follow CIRTM →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinPosts.map((post, i) => (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 p-5 pb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                    <Image src="/CIRTM-blue.png" alt="" fill sizes="40px" className="object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: NAVY }}>CIRTM, Brunel University of London</p>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      {formatDate(post.date, { day: "numeric", month: "short", year: "numeric" })}
                      {post.sample && <SampleBadge />}
                    </p>
                  </div>
                  <LinkedInIcon className="w-5 h-5 text-[#0A66C2] flex-shrink-0" />
                </div>
                <p className="px-5 text-sm text-gray-700 leading-relaxed line-clamp-4">{post.text}</p>
                {post.image && (
                  <div className="relative mt-4 aspect-[16/9] overflow-hidden">
                    <Image src={post.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                )}
                <p className="mt-auto p-5 pt-4 text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2" style={{ color: RED }}>
                  View on LinkedIn <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Seminar archive */}
      <section id="archive" className="py-20 scroll-mt-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Seminar Archive</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-12" style={{ ...serif, color: NAVY }}>
            Past <em>events</em>
          </h2>

          <div className="space-y-12">
            {Object.keys(pastByYear)
              .sort((a, b) => b.localeCompare(a))
              .map((year) => (
                <div key={year} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                  <div className="text-4xl md:sticky md:top-24 self-start" style={{ ...serif, color: RED }}>{year}</div>
                  <ol className="border-l border-gray-300">
                    {pastByYear[year].map((s) => (
                      <li key={s.slug} className={`relative pl-8 pb-8 last:pb-0 ${s.cancelled ? "opacity-60" : ""}`}>
                        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.cancelled ? "#9CA3AF" : NAVY }} />
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
                          <CalendarDaysIcon className="w-4 h-4" aria-hidden="true" />
                          {formatDate(s.date)}
                          {s.cancelled && (
                            <span className="rounded border border-red-200 px-1.5 py-0.5 text-[10px] font-semibold text-red-500">Cancelled</span>
                          )}
                        </p>
                        <h3 className={`text-lg leading-snug ${s.cancelled ? "line-through" : ""}`} style={{ ...serif, color: NAVY }}>
                          {s.title}
                        </h3>
                        {s.speaker && (
                          <p className="text-sm text-gray-600 mt-1">
                            {s.speaker}
                            {s.speakerAffiliation && <span className="text-gray-400">, {s.speakerAffiliation}</span>}
                          </p>
                        )}
                        {s.recordingLink && (
                          <a href={s.recordingLink} className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest hover:underline" style={{ color: RED }}>
                            Watch recording →
                          </a>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
