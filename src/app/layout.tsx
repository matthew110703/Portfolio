import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider, TimeMachine } from "@/components/layout";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.siteUrl),
  title: {
    default: portfolio.seo.title,
    template: `%s | ${portfolio.name}`,
  },
  description: portfolio.seo.description,
  keywords: portfolio.seo.keywords,
  authors: [{ name: portfolio.name, url: portfolio.siteUrl }],
  creator: portfolio.name,
  publisher: portfolio.name,
  category: "technology",
  verification: {
    google: "wICuXRKk0DYn7kRv9kYb5lB7aO78vAmc9-K7-s37XTA",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: portfolio.siteUrl,
  },
  openGraph: {
    title: portfolio.seo.ogTitle,
    description: portfolio.seo.ogDescription,
    url: portfolio.siteUrl,
    siteName: `${portfolio.name} — ${portfolio.role}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.ogTitle,
    description: portfolio.seo.ogDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${portfolio.siteUrl}/#person`,
        name: portfolio.name,
        jobTitle: portfolio.role,
        description: portfolio.seo.description,
        email: `mailto:${portfolio.email}`,
        url: portfolio.siteUrl,
        image: `${portfolio.siteUrl}/avatar.webp`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Vananam Ventures",
          url: "https://www.vananam.com/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Cambridge College, KR Puram",
        },
        knowsAbout: [
          "React",
          "TypeScript",
          "Next.js",
          "Module Federation",
          "Microfrontends",
          "Design Systems",
          "Storybook",
          "Redux Toolkit",
          "Capacitor",
          "React Native",
          "Node.js",
          "NestJS",
          "Agentic Developer Tooling",
        ],
        sameAs: portfolio.social.map((item) => item.href),
      },
      {
        "@type": "WebSite",
        "@id": `${portfolio.siteUrl}/#website`,
        url: portfolio.siteUrl,
        name: `${portfolio.name} — ${portfolio.role}`,
        description: portfolio.seo.description,
        publisher: { "@id": `${portfolio.siteUrl}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body>
        <MotionProvider>
          {children}
          <TimeMachine />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
