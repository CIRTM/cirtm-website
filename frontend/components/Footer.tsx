import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/CIRTM.png" alt="CIRTM logo" width={36} height={36} className="flex-shrink-0 brightness-0 invert" />
              <div>
                <div className="font-bold text-white text-sm">CIRTM</div>
                <div className="text-[11px] text-gray-400">Brunel University London</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              An internationally acknowledged centre of excellence driving forward
              scientific innovation to transform diagnosis, treatment, and management
              of global health challenges.
            </p>
            <div className="mt-5 text-sm text-gray-400">
              <p>Division of Biosciences</p>
              <p>Heinz Wolff Building, Brunel University London</p>
              <p>Uxbridge, UB8 3PH</p>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Research
            </h3>
            <ul className="space-y-2.5">
              {[
                ["Cardiovascular Diseases", "/research/cardiovascular-diseases"],
                ["Inflammation", "/research/inflammation"],
                ["Infections & Immunity", "/research/infections-and-immunity"],
                ["Microbiome & Health", "/research/microbiome-and-health"],
                ["Cancer", "/research/cancer"],
                ["Microbial Resistance", "/research/microbial-resistance"],
                ["Drug Repurposing", "/research/drug-repurposing"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-teal transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Centre
            </h3>
            <ul className="space-y-2.5">
              {[
                ["About Us", "/about"],
                ["Our People", "/people"],
                ["Projects", "/projects"],
                ["Seminar Series", "/seminars"],
                ["Impact Case Studies", "/innovation/impact"],
                ["Industry Partners", "/innovation/industry"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-teal transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-black text-sm">
            &copy; 2026 Centre for Inflammation Research and Translational Medicine, Brunel University London
          </p>
          <Image
            src="/images/brunel-univeristy.png"
            alt="Brunel University London"
            width={120}
            height={40}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
}
