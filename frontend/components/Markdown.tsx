"use client";
import ReactMarkdown, { type Components } from "react-markdown";

export const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl text-[#0B1B3A] mt-10 mb-4 first:mt-0" style={{ fontFamily: "Georgia, serif" }}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl text-[#0B1B3A] mt-12 mb-4 first:mt-0" style={{ fontFamily: "Georgia, serif" }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl text-[#0B1B3A] mt-8 mb-3" style={{ fontFamily: "Georgia, serif" }}>{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xs font-semibold uppercase tracking-widest text-red-700 mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-4 space-y-1 text-gray-700 marker:text-red-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-4 space-y-1 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-[#0B1B3A]">{children}</strong>,
  em: ({ children }) => <em className="text-gray-500 not-italic font-medium">{children}</em>,
  a: ({ children, href }) => (
    <a href={href} className="text-red-700 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} className="rounded-lg my-4 max-w-full h-auto" />
  ),
};

export function Markdown({ children }: { children: string }) {
  return <ReactMarkdown components={markdownComponents}>{children}</ReactMarkdown>;
}
