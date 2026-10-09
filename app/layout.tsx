import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal Kizor — Architect, Designer, Educator & Ecosystem Builder | Studio COKA",
  description:
    "Official ecosystem of Crystal Kizor: Lead Architect at Studio COKA, Creative Director of ELEvated, Founder of The Effective Architect (TEA), and Co-Founder of AKO Alliance. Pioneering climate-responsive architecture, contextual African design, and built-environment education.",
  keywords: [
    "Crystal Kizor",
    "Studio COKA",
    "African architecture",
    "Climate-responsive architecture",
    "Passive tropical design",
    "ELEvated furniture",
    "The Effective Architect",
    "TEA media platform",
    "AKO Alliance",
    "Alive and Free",
    "Nigerian architect",
    "Contemporary African design",
  ],
  authors: [{ name: "Crystal Kizor" }],
  creator: "Crystal Kizor",
  publisher: "Studio COKA",
  metadataBase: new URL("https://crystal-kizor.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crystal-kizor.vercel.app",
    title: "Crystal Kizor — Architect, Designer, Educator & Ecosystem Builder",
    description:
      "Bringing climate-responsive architecture, contemporary African craft, and professional practice mentorship under one visionary personal brand.",
    siteName: "Crystal Kizor Ecosystem",
    images: [
      {
        url: "/images/portraits/crystal-desk-brown.jpg",
        width: 1200,
        height: 630,
        alt: "Crystal Kizor in her architectural studio drafting desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Kizor — Architect, Designer & Founder",
    description:
      "Shaping spaces, objects, and human potential across Africa through Studio COKA, ELEvated, and The Effective Architect.",
    images: ["/images/portraits/crystal-desk-brown.jpg"],
    creator: "@crystalkizor",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Crystal Kizor",
    jobTitle: "Lead Architect & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Studio COKA",
      url: "https://studiocoka.com",
    },
    description:
      "Architect, designer, entrepreneur, speaker, researcher, and creator building Studio COKA, ELEvated, TEA, AKO Alliance, and Alive & Free.",
    knowsAbout: [
      "Climate-Responsive Architecture",
      "Passive Solar Design",
      "Contemporary Furniture Design",
      "Vernacular African Materials",
      "Built-Environment Mentorship",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0E0D0C] text-[#F3EFEA] selection:bg-[#C2704E] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
