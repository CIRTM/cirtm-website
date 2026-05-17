export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Contact
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We welcome enquiries from researchers, industry partners, and prospective students.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6 border border-gray-100">
              <h3 className="font-semibold text-navy mb-1">General Enquiries</h3>
              <p className="text-gray-600">Prof. Felicity N. E. Gavins</p>
              <p className="text-gray-500 text-sm">Centre Director</p>
              <a
                href="mailto:felicity.gavins@brunel.ac.uk"
                className="text-teal text-sm hover:underline mt-2 block"
              >
                felicity.gavins@brunel.ac.uk
              </a>
            </div>
            <div className="card p-6 border border-gray-100">
              <h3 className="font-semibold text-navy mb-1">Scientific Enquiries</h3>
              <p className="text-gray-600">Prof. Felicity N. E. Gavins</p>
              <p className="text-gray-500 text-sm">Centre Director</p>
              <a
                href="mailto:felicity.gavins@brunel.ac.uk"
                className="text-teal text-sm hover:underline mt-2 block"
              >
                felicity.gavins@brunel.ac.uk
              </a>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-navy mb-2">Address</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {`Centre for Inflammation Research and Translational Medicine
Division of Biosciences
Heinz Wolff Building, Brunel University London
Uxbridge, UB8 3PH
United Kingdom`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
