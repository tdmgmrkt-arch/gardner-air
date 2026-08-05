import type { Metadata } from "next";
import { Inter, DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/*
  Typography choices:
  - Inter (400/500/600): body text, UI labels, navigation
  - DM Sans (600/700/800): display headlines — geometric authority at heavy weights
  - Fraunces (300/400): editorial serif accent — used ONLY for hero accent line and
    pull quotes. One serif line against the sans-serif system creates editorial gravity.
    Used in ≤2 places on the homepage. Never for body copy.
  All via next/font for zero CLS.
*/
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Gardner Air | Commercial HVAC Preventative Maintenance — Southern California",
    template: "%s | Gardner Air",
  },
  description:
    "Gardner Air specializes in commercial HVAC preventative maintenance across Southern California. Complete-scope service visits, factory-trained technicians, long-term partnerships with facilities managers.",
  metadataBase: new URL("https://gardnerair.com"), // TODO: replace with live domain once confirmed
  alternates: {
    canonical: "https://gardnerair.com",
    types: {
      "application/json": [
        { url: "/ai-actions.json", title: "Gardner Air AI Service Menu" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gardnerair.com",
    siteName: "Gardner Air",
    title: "Gardner Air | Commercial HVAC Preventative Maintenance — Southern California",
    description:
      "Complete-scope commercial HVAC maintenance. Factory-trained technicians. Southern California's trusted commercial HVAC specialists.",
    images: [
      {
        url: "/og-image.webp", // TODO: create branded OG image (1200×630)
        width: 1200,
        height: 630,
        alt: "Gardner Air — Commercial HVAC Maintenance Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gardner Air | Commercial HVAC Preventative Maintenance",
    description:
      "Complete-scope commercial HVAC maintenance across Southern California.",
    images: ["/og-image.webp"], // TODO: branded OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-[#0A0A0A] antialiased">{children}</body>
    </html>
  );
}
