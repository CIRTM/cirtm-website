import Image from "next/image";
import { ArrowRightIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function VisitCirtm() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#B91C1C" }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: "#B91C1C" }} />
              Our Location
            </p>
            <h2 className="flex items-center gap-4 text-4xl sm:text-5xl mb-6" style={{ fontFamily: "Georgia, serif", color: "#0B1B3A" }}>
              Visit
              <Image src="/CIRTM-blue.png" alt="CIRTM" width={80} height={80} className="h-[1.3em] w-auto" />
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              CIRTM is based at Brunel University of London within the College of Health, Medicine and Life
              Sciences. Our location places us within a vibrant research environment with strong links across
              discovery science, translational medicine and clinical partnership.
            </p>
            <ul className="space-y-5 text-sm" style={{ color: "#0B1B3A" }}>
              <li className="flex gap-4">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B91C1C" }} aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  <span className="font-semibold">Centre for Inflammation Research &amp; Translational Medicine</span>
                  <br />
                  Division of Biosciences, Heinz Wolff Building
                  <br />
                  Brunel University of London
                  <br />
                  Kingston Lane, Uxbridge
                  <br />
                  London UB8 3PH, United Kingdom
                </address>
              </li>
              <li className="flex gap-4 items-center">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" style={{ color: "#B91C1C" }} aria-hidden="true" />
                <a href="mailto:felicity.gavins@brunel.ac.uk" className="hover:underline">felicity.gavins@brunel.ac.uk</a>
              </li>
              <li className="flex gap-4 items-center">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" style={{ color: "#B91C1C" }} aria-hidden="true" />
                <a href="tel:+441895267000" className="hover:underline">+44 (0)1895 267000</a>
              </li>
              <li className="flex gap-4 items-center">
                <GlobeAltIcon className="w-5 h-5 flex-shrink-0" style={{ color: "#B91C1C" }} aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Brunel+University+of+London+Kingston+Lane+Uxbridge+UB8+3PH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:underline"
                >
                  View on Google Maps
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/about/heinz-wolff-building.jpg"
                alt="Heinz Wolff Building at Brunel University of London"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-0 right-0 m-4 max-w-[13rem] bg-white/90 backdrop-blur-sm p-5 rounded-lg">
                <p className="text-lg leading-snug" style={{ fontFamily: "Georgia, serif", color: "#0B1B3A" }}>
                  Brunel University of London
                </p>
                <span className="block w-8 h-px my-3" style={{ backgroundColor: "#B91C1C" }} />
                <p className="text-sm text-gray-600" style={{ fontFamily: "Georgia, serif" }}>
                  A connected place for bold ideas
                </p>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Brunel+University+of+London,+Kingston+Lane,+Uxbridge+UB8+3PH&z=15&output=embed"
                title="Map showing Brunel University of London"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
