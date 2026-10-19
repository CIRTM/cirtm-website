"use client";

import { useState } from "react";
import Image from "next/image";

export type ScaleId = "population" | "organs" | "cells" | "molecules" | "genes";
export type Method = { name: string; description: string; scales: ScaleId[] };

const NAVY = "#0B1B3A";
const IVORY = "#F8F7F5";
const RED = "#B91C1C";
const SERIF = { fontFamily: "Georgia, serif" };

// Every disc after the first gets the same space above it, so the discs are evenly spaced.
// Sizes are % of the column width; sink nudges an illustration further down onto its disc.
const SCALE_IMAGE_WIDTH = 70;
const SCALE_STAGE = 33;
const SCALE_DISC_TUCK = 15;

const scales: { id: ScaleId; label: string; width: number; height: number; color: string; sink: number }[] = [
  { id: "population", label: "Population network", width: 1000, height: 619, color: "#1E3A8A", sink: 0 },
  { id: "organs", label: "Organ networks", width: 1000, height: 516, color: "#6B21A8", sink: 0 },
  { id: "cells", label: "Cellular networks", width: 1000, height: 493, color: "#0F766E", sink: 0 },
  { id: "molecules", label: "Molecular networks", width: 1000, height: 429, color: "#3F7D20", sink: 1 },
  { id: "genes", label: "Genes", width: 1000, height: 408, color: "#1D4ED8", sink: 1 },
];

export default function ScaleExplorer({ methods }: { methods: Method[] }) {
  const [active, setActive] = useState<number | null>(null);
  // Keeps the last method on screen while the card closes
  const [shown, setShown] = useState<number | null>(null);
  const lit = active === null ? null : methods[active].scales;

  function toggle(i: number) {
    if (i === active) {
      setActive(null);
    } else {
      setActive(i);
      setShown(i);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <ol className="w-full max-w-xl mx-auto">
        {scales.map((s, i) => {
          const state = lit === null ? "idle" : lit.includes(s.id) ? "lit" : "dim";
          const transition = { transitionDelay: `${i * 70}ms` };
          return (
            <li key={s.id}>
              {i > 0 && (
                <div aria-hidden className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr]">
                  <span />
                  <div className="relative h-4">
                    <span className="absolute left-[20%] inset-y-0 border-l-2 border-dashed" style={{ borderColor: s.color, opacity: 0.45 }} />
                    <span className="absolute right-[20%] inset-y-0 border-l-2 border-dashed" style={{ borderColor: s.color, opacity: 0.45 }} />
                  </div>
                </div>
              )}
              <div
                className={`grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] items-center gap-2 transition-all duration-500 ${
                  state === "dim" ? "opacity-30 grayscale-[.6]" : "opacity-100"
                } ${state === "lit" ? "-translate-y-1" : ""}`}
                style={transition}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white font-bold sm:text-lg transition-all duration-500 ${
                      state === "lit" ? "scale-110" : ""
                    }`}
                    style={{
                      ...transition,
                      backgroundColor: s.color,
                      boxShadow: state === "lit" ? `0 0 0 5px ${s.color}33` : "none",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide leading-tight" style={{ color: s.color }}>
                    {s.label}
                  </span>
                </div>
                <div>
                  <div
                    className="relative"
                    style={{
                      containerType: "inline-size",
                      paddingTop: `${i === 0 ? (SCALE_IMAGE_WIDTH * s.height) / s.width : SCALE_STAGE}%`,
                    }}
                  >
                    <Image
                      src={`/images/about/scales/${s.id}.webp`}
                      alt=""
                      width={s.width}
                      height={s.height}
                      className={`absolute z-10 left-1/2 -translate-x-1/2 h-auto transition-[filter] duration-500 ${
                        state === "lit" ? "saturate-100" : "saturate-[.75]"
                      }`}
                      style={{ ...transition, width: `${SCALE_IMAGE_WIDTH}%`, bottom: `-${s.sink}cqw` }}
                    />
                  </div>
                  <div
                    className="aspect-[4/1] rounded-[50%] border-b-[6px] transition-shadow duration-500"
                    style={{
                      ...transition,
                      marginTop: `-${SCALE_DISC_TUCK}%`,
                      borderColor: s.color,
                      background: `radial-gradient(ellipse at 50% 35%, #FFFFFF 0%, #F4F6FA 55%, ${s.color}22 100%)`,
                      boxShadow:
                        state === "lit"
                          ? `0 0 0 3px ${s.color}40, 0 14px 30px -8px ${s.color}AA`
                          : "0 10px 20px -12px rgba(11,27,58,0.35)",
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div>
        <h3 className="text-2xl mb-3" style={{ ...SERIF, color: NAVY }}>Methods &amp; capabilities</h3>
        <p className="text-gray-600 mb-6">We draw on a broad toolkit of methods and capabilities, including:</p>
        <ul className="flex flex-wrap gap-3">
          {methods.map((m, i) => {
            const isActive = i === active;
            return (
              <li key={m.name}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls="method-detail"
                  onClick={() => toggle(i)}
                  className="px-4 py-2 rounded-full border text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={
                    isActive
                      ? { backgroundColor: NAVY, borderColor: NAVY, color: "#FFFFFF" }
                      : { backgroundColor: IVORY, borderColor: "#E5E7EB", color: NAVY }
                  }
                >
                  {m.name}
                </button>
              </li>
            );
          })}
        </ul>

        <div
          id="method-detail"
          aria-live="polite"
          aria-hidden={active === null}
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
            active === null ? "grid-rows-[0fr] opacity-0 mt-0" : "grid-rows-[1fr] opacity-100 mt-8"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative rounded-xl border border-gray-200 overflow-hidden" style={{ backgroundColor: IVORY }}>
              {shown !== null && (
                <div key={shown} className="p-6 pl-8">
                  <span className="method-bar absolute left-0 inset-y-0 w-1" style={{ backgroundColor: RED }} />
                  <p className="method-reveal text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: RED }}>
                    {String(shown + 1).padStart(2, "0")} / {String(methods.length).padStart(2, "0")}
                  </p>
                  <h4 className="method-reveal text-xl mb-2" style={{ ...SERIF, color: NAVY, animationDelay: "60ms" }}>
                    {methods[shown].name}
                  </h4>
                  <p className="method-reveal text-gray-600 leading-relaxed" style={{ animationDelay: "120ms" }}>
                    {methods[shown].description}
                  </p>
                  <ul className="method-reveal flex flex-wrap items-center gap-2 mt-4" style={{ animationDelay: "180ms" }}>
                    <li className="text-xs text-gray-500 mr-1">Works across:</li>
                    {scales
                      .filter((s) => methods[shown].scales.includes(s.id))
                      .map((s) => (
                        <li
                          key={s.id}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: s.color }}
                        >
                          {s.label}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-400">Select a method to see where it fits across the scales of biology.</p>
      </div>
    </div>
  );
}
