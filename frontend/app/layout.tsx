import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const microgramma = localFont({
  src: "./fonts/microgrammanormal.ttf",
  variable: "--font-microgramma",
});

export const metadata: Metadata = {
  title: "CIRTM | Centre for Inflammation Research and Translational Medicine",
  description:
    "An internationally acknowledged centre of excellence at Brunel University London driving forward scientific innovation to transform diagnosis, treatment, and management of cardiovascular diseases, inflammation, infection, microbial resistance, and cancer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={microgramma.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
