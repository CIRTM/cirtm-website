import { publications, type Publication } from "@/lib/content/publications";
import { PublicationEntry } from "@/components/PublicationEntry";

export default function ImpactCaseStudiesPage() {
  const grouped = new Map<number, Publication[]>();
  for (const pub of publications) {
    const list = grouped.get(pub.year) ?? [];
    list.push(pub);
    grouped.set(pub.year, list);
  }
  const years = Array.from(grouped.keys()).sort((a, b) => b - a);

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Innovation
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Impact Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Selected publications from the Centre for Inflammation Research and Translational Medicine, demonstrating
            the breadth and impact of CIRTM-affiliated research.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-2">Read our publications</h2>
          <p className="text-gray-500 text-sm mb-10">
            {publications.length} publications from CIRTM members and collaborators.
          </p>

          <div className="space-y-2">
            {years.map((year, i) => {
              const list = grouped.get(year)!;
              return (
                <details key={year} open={i === 0} className="group border border-gray-100 rounded-lg overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none bg-white hover:bg-gray-50 transition-colors list-none">
                    <span className="text-lg font-bold text-navy">
                      {year}
                      <span className="ml-3 text-sm font-normal text-gray-400">({list.length})</span>
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ol className="divide-y divide-gray-100 px-5 pb-4 text-sm text-gray-600 leading-relaxed list-decimal list-outside ml-5 space-y-0">
                    {list.map((pub) => (
                      <li key={pub.slug} className="py-4">
                        <PublicationEntry pub={pub} />
                      </li>
                    ))}
                  </ol>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
