import Link from "next/link";

export default function IndustryPartnersPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Innovation
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Resources for Industry Partners</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            CIRTM researchers work closely with industrial partners across pharma, biotech, and clinical translation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 mb-10">
            <p>
              Researchers within the Centre for Inflammation Research and Translational Medicine work closely with
              several industrial partners across drug discovery, biomedical engineering, microbial diagnostics, and
              clinical translation.
            </p>
            <p>
              We welcome new opportunities for collaboration, sponsored research, consultancy, and contract testing. If
              you are looking for a collaborative partner or expert consultant, please contact the Centre Director or
              get in touch with a specific CIRTM member directly via the{" "}
              <Link href="/people" className="text-teal hover:underline">
                people page
              </Link>
              .
            </p>
          </div>

          <div className="card p-8 border border-gray-100">
            <h2 className="font-semibold text-navy text-lg mb-2">Get in touch</h2>
            <p className="text-gray-600 mb-1">Prof. Felicity N. E. Gavins</p>
            <p className="text-gray-500 text-sm mb-3">Centre Director</p>
            <a
              href="mailto:felicity.gavins@brunel.ac.uk"
              className="text-teal text-sm hover:underline"
            >
              felicity.gavins@brunel.ac.uk
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">General contact</Link>
              <Link href="/expertise" className="btn-outline text-sm">Our expertise</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
