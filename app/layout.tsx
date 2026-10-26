import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? profile.url),
  title: "Mughees Khan — Software Engineer",
  description:
    "Software engineer specializing in frontend. Building websites, mobile apps and full products with React, Next.js and React Native, plus APIs, backend and AI features.",
  openGraph: {
    title: "Mughees Khan — Software Engineer",
    description: "Software engineer specializing in frontend: web, mobile, backend and AI.",
    images: ["/images/intro-poster.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
