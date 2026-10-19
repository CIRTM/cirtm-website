"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  Atom, ChartScatter, ChevronLeft, ChevronRight, Cpu, Dna, FlaskConical, FlaskRound, Microscope, Rat, ScanEye, X,
} from "lucide-react";
import { facilities, type FacilityIcon } from "@/lib/content/facilities";

const NAVY = "#0B1B3A";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };
const ENQUIRY_EMAIL = "felicity.gavins@brunel.ac.uk";

const ICONS: Record<FacilityIcon, typeof Atom> = {
  "scan-eye": ScanEye,
  "chart-scatter": ChartScatter,
  microscope: Microscope,
  "flask-conical": FlaskConical,
  dna: Dna,
  rat: Rat,
  "flask-round": FlaskRound,
  atom: Atom,
  cpu: Cpu,
};

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function setHash(hash: string) {
  history.replaceState(null, "", window.location.pathname + window.location.search + hash);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function FacilitiesExplorer() {
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => "");
  const found = facilities.findIndex((f) => `#${f.id}` === hash);
  const openIndex = found >= 0 ? found : null;
  const [photoIndex, setPhotoIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const open = useCallback((i: number) => {
    setPhotoIndex(0);
    setHash(`#${facilities[i].id}`);
  }, []);

  const close = useCallback(() => {
    if (openIndex !== null) triggerRefs.current[openIndex]?.focus();
    setHash("");
  }, [openIndex]);

  const step = useCallback(
    (delta: number) => {
      if (openIndex === null) return;
      open((openIndex + delta + facilities.length) % facilities.length);
    },
    [openIndex, open],
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const facility = openIndex !== null ? facilities[openIndex] : null;
  const prev = openIndex !== null ? facilities[(openIndex - 1 + facilities.length) % facilities.length] : null;
  const next = openIndex !== null ? facilities[(openIndex + 1) % facilities.length] : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <button
              key={f.id}
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => open(i)}
              className="group flex flex-col text-left bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={f.photos[0].src}
                    alt={f.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span
                  className="absolute left-6 -bottom-6 flex items-center justify-center w-12 h-12 rounded-full text-white ring-4 ring-white shadow-sm"
                  style={{ backgroundColor: RED }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6 pt-10">
                <h3 className="text-xl mb-2" style={{ ...SERIF, color: NAVY }}>{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{f.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>
                  Find out more <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {facility && prev && next && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: "rgba(11,27,58,0.75)" }}
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-title"
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
              <div className="p-4 sm:p-6 md:pr-0">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    key={facility.photos[photoIndex].src}
                    src={facility.photos[photoIndex].src}
                    alt={facility.photos[photoIndex].alt}
                    fill
                    unoptimized
                    className="object-cover"
                    style={{ objectPosition: facility.photos[photoIndex].objectPosition ?? "center" }}
                  />
                </div>
                {facility.photos.length > 1 && (
                  <div className="mt-3 flex gap-3">
                    {facility.photos.map((p, i) => (
                      <button
                        key={p.src}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        aria-label={`Show photo ${i + 1}`}
                        className={`relative w-24 aspect-[4/3] rounded-lg overflow-hidden ring-2 transition ${
                          i === photoIndex ? "ring-[#B91C1C]" : "ring-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={p.src} alt="" fill unoptimized className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-8 h-px" style={{ backgroundColor: RED }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: RED }}>{facility.label}</span>
                </div>
                <h2 id="facility-title" className="text-3xl mb-5 pr-10" style={{ ...SERIF, color: NAVY }}>{facility.title}</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {facility.description.map((para) => <p key={para}>{para}</p>)}
                </div>
                {facility.bullets && (
                  <div className="mt-5">
                    {facility.bulletsHeading && (
                      <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>{facility.bulletsHeading}</p>
                    )}
                    <ul className="space-y-2.5">
                      {facility.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: RED }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <a
                  href={`mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(`Enquiry: ${facility.title}`)}`}
                  className="mt-8 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  Enquire about this facility →
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-gray-100 px-4 sm:px-6 py-4">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#0B1B3A]"
              >
                <ChevronLeft className="w-4 h-4" /> {prev.title}
              </button>
              <span className="hidden sm:block text-xs text-gray-400">
                {openIndex! + 1} of {facilities.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#0B1B3A] text-right"
              >
                {next.title} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
