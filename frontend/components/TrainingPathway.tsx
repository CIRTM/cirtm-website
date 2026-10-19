"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PathwayStep = {
  level: string;
  label: string;
  hex: string;
  title: string;
  description: string;
  link: { label: string; href: string };
};

export default function TrainingPathway({ pathway }: { pathway: PathwayStep[] }) {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [hovered, setHovered] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setVisible((prev) => new Set([...prev, i]));
          }
        });
      },
      { threshold: 0.25 }
    );

    stepRefs.current.forEach((el) => { if (el) stepObserver.observe(el); });

    const lineObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLineHeight(100); },
      { threshold: 0.1 }
    );
    if (containerRef.current) lineObserver.observe(containerRef.current);

    return () => { stepObserver.disconnect(); lineObserver.disconnect(); };
  }, []);

  const fade = "linear-gradient(to right, transparent 0%, black 30%, black 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)";

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="hidden xl:block absolute inset-y-0 left-[44rem] right-0 overflow-hidden pointer-events-none mix-blend-lighten"
        style={{
          maskImage: fade,
          WebkitMaskImage: fade,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          opacity: lineHeight ? 1 : 0,
          transition: "opacity 1.8s ease",
        }}
      >
        {/* Scaled and nudged so each colour group sits level with its step. */}
        <div className="absolute inset-x-0" style={{ top: "4%", height: "108.6%" }}>
          <Image src="/images/education/edu-pathway.webp" alt="" fill sizes="560px" className="object-cover object-right" />
        </div>
      </div>
      <div ref={containerRef} className="relative max-w-3xl">
        {/* Animated vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/15" />
        <div
          className="absolute left-5 top-0 w-px bg-amber-400 origin-top"
          style={{
            height: `${lineHeight}%`,
            transition: "height 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        <div className="space-y-8">
          {pathway.map((step, i) => {
            const isVisible = visible.has(i);
            const isHovered = hovered === i;
            return (
              <div
                key={step.level}
                ref={(el) => { stepRefs.current[i] = el; }}
                data-index={i}
                className="relative pl-14 rounded-xl cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? isHovered ? "translateX(6px)" : "translateX(0)"
                    : "translateY(28px)",
                  transition: isVisible
                    ? "opacity 0.6s ease, transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease"
                    : `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                  background: isHovered ? "rgba(255,255,255,0.04)" : "transparent",
                  boxShadow: isHovered ? `inset 3px 0 0 ${step.hex}` : "inset 3px 0 0 transparent",
                  padding: "12px 12px 12px 56px",
                  marginLeft: "-12px",
                }}
              >
                {/* Dot */}
                <div className="absolute left-3 top-3">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: step.hex,
                      opacity: 0,
                      animation: isVisible
                        ? `ping-once 0.8s cubic-bezier(0, 0, 0.2, 1) ${i * 120 + 300}ms 1 forwards`
                        : "none",
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: step.hex,
                      transform: isVisible
                        ? isHovered ? "scale(1.15)" : "scale(1)"
                        : "scale(0.5)",
                      transition: isVisible
                        ? "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)"
                        : `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120 + 100}ms`,
                      boxShadow: isHovered ? `0 4px 14px rgba(0,0,0,0.25)` : "",
                    }}
                  >
                    <span className="text-white text-[10px] font-bold leading-none text-center">
                      {step.level}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-1">
                  {step.label}
                </p>
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "Georgia, serif",
                    color: isHovered ? step.hex : "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">{step.description}</p>
                <Link
                  href={step.link.href}
                  {...(step.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-xs font-semibold uppercase tracking-widest text-amber-400 transition-all duration-200"
                  style={{
                    letterSpacing: isHovered ? "0.12em" : "0.05em",
                  }}
                >
                  {step.link.label} →
                </Link>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes ping-once {
            0%   { transform: scale(1); opacity: 0.5; }
            80%  { transform: scale(2); opacity: 0; }
            100% { transform: scale(2); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
}
