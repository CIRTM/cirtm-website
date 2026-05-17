"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href?: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  {
    label: "Research",
    children: [
      { label: "Research Areas", href: "/research" },
      { label: "Projects", href: "/projects" },
      { label: "Expertise", href: "/expertise" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  {
    label: "Innovation",
    children: [
      { label: "Impact Case Studies", href: "/innovation/impact" },
      { label: "Industry Partners", href: "/innovation/industry" },
    ],
  },
  {
    label: "Education",
    children: [
      { label: "Training & Education", href: "/education" },
      { label: "Seminar Series", href: "/seminars" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="CIRTM home" className="flex items-center gap-3">
            <Image src="/CIRTM.png" alt="CIRTM logo" width={80} height={80} />
            {/* Text logo — swap in by hiding Image above and removing hidden below */}
            <span
              className="hidden text-2xl font-bold text-navy"
              style={{
                fontFamily: "var(--font-microgramma)",
                letterSpacing: "0.15em",
                fontKerning: "normal",
                textRendering: "optimizeLegibility",
              }}
            >
              CIRTM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-[#374151] hover:text-navy rounded-md hover:bg-gray-50 transition-colors">
                    {link.label}
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#374151] hover:bg-gray-50 hover:text-navy"
                            onClick={() => setDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-base font-medium text-[#374151] hover:text-navy rounded-md hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-5 py-2 text-sm text-[#374151] hover:text-navy rounded-md hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-navy rounded-md hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
