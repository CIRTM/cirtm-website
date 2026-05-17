import { seminars, type Seminar } from "@/lib/content/seminars";

export default function SeminarsPage() {
  const now = new Date();
  const upcoming = seminars.filter((s) => new Date(s.date) >= now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const past = seminars.filter((s) => new Date(s.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Events
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Seminar Series</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Take part in the cutting edge research exchange as part of the Inflammation Research and
            Translational Medicine Seminar Series organised by our Research Centre.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact info */}
          <div className="mb-12 rounded-xl border border-gray-100 p-6" style={{ backgroundColor: "#F8F9FC" }}>
            <p className="text-gray-700 leading-relaxed mb-2">
              To attend one of our seminars, please contact{" "}
              <a href="mailto:felicity.gavins@brunel.ac.uk" className="text-teal hover:underline">
                Professor Felicity Gavins
              </a>{" "}
              (CIRTM Director).
            </p>
            <p className="text-gray-500 text-sm">
              Currently, all seminars are being delivered online via Zoom or Teams.
            </p>
          </div>

          {upcoming.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcoming.map((s) => <SeminarCard key={s.slug} seminar={s} />)}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Past Events</h2>
              <div className="space-y-4">
                {past.map((s) => <SeminarCard key={s.slug} seminar={s} past />)}
              </div>
            </div>
          )}

          {seminars.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No seminars scheduled at this time.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function SeminarCard({ seminar, past = false }: { seminar: Seminar; past?: boolean }) {
  const date = new Date(seminar.date);
  return (
    <div className={`card p-6 border ${seminar.cancelled ? "border-gray-100 opacity-60" : past ? "border-gray-100 opacity-75" : "border-teal/20"}`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-14 text-center">
          <div className="text-2xl font-bold text-teal">{date.getDate()}</div>
          <div className="text-xs text-gray-500 uppercase">{date.toLocaleString("en-GB", { month: "short" })}</div>
          <div className="text-xs text-gray-400">{date.getFullYear()}</div>
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-2">
            <h3 className="font-semibold text-navy text-sm leading-snug">{seminar.title}</h3>
            {seminar.cancelled && (
              <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide text-red-400 border border-red-200 rounded px-1.5 py-0.5">
                Cancelled
              </span>
            )}
          </div>
          {seminar.speaker && (
            <p className="text-sm text-gray-500 mt-1">
              {seminar.speaker}
              {seminar.speakerAffiliation && `, ${seminar.speakerAffiliation}`}
            </p>
          )}
          {seminar.location && <p className="text-xs text-gray-400 mt-1">{seminar.location}</p>}
          {seminar.registrationLink && !past && (
            <a href={seminar.registrationLink} className="text-teal text-xs hover:underline mt-2 inline-block">
              Register →
            </a>
          )}
          {seminar.recordingLink && past && (
            <a href={seminar.recordingLink} className="text-teal text-xs hover:underline mt-2 inline-block">
              Watch recording →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
