import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Mughees Khan — Software Engineer",
  description:
    "Frontend developer building fast, modern websites and mobile apps with React, Next.js, React Native and WordPress.",
  openGraph: {
    title: "Mughees Khan — Software Engineer",
    description: "Websites and mobile apps with React, Next.js and React Native.",
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
