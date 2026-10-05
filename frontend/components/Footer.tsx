import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/lib/content/research-areas";

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
                <div className="text-[11px] text-gray-400">Brunel University of London</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              An internationally acknowledged centre of excellence driving forward
              scientific innovation to transform diagnosis, treatment, and management
              of global health challenges.
            </p>
            <div className="mt-5 text-sm text-gray-400">
              <p>Division of Biosciences</p>
              <p>Heinz Wolff Building, Brunel University of London</p>
              <p>Uxbridge, UB8 3PH</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://bsky.app/profile/brunelcirtm.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CIRTM on Bluesky"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-teal hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cirtm-bruneluniversitylondon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CIRTM on LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-teal hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Research
            </h3>
            <ul className="space-y-2.5">
              {researchAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/research/${area.slug}`} className="text-gray-400 text-sm hover:text-teal transition-colors">
                    {area.title}
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
                ["Our members", "/people"],
                ["Projects", "/projects"],
                ["News & Events", "/seminars"],
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
            &copy; 2026 Centre for Inflammation Research and Translational Medicine, Brunel University of London
          </p>
          <Image
            src="/images/brunel-univeristy.png"
            alt="Brunel University of London"
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
