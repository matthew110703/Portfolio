import "./globals.css";
import portfolio from "@/lib/portfolio.json";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: `${portfolio.name} | ${portfolio.role}`,
  description: `Portfolio of Mathew R, Explore my work and projects as a ${portfolio.role} specializing in the tech stack of ${portfolio.core_skills[0]}, ${portfolio.core_skills[1]}, and ${portfolio.core_skills[2]}.`,
  keywords: [
    "Mathew R",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "JavaScript",
    "React",
    "Next.js",
    "Bangalore",
  ],
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
    },
  },
  alternates: {
    canonical: "https://mathew-pi.vercel.app",
  },
  openGraph: {
    title: `${portfolio.name} Portfolio`,
    description: `Explore Mathew's creative work and projects as a ${portfolio.role} specializing in the tech stack of ${portfolio.core_skills[0]}, ${portfolio.core_skills[1]}, and ${portfolio.core_skills[2]}.`,
    url: "https://mathew-pi.vercel.app",
    siteName: `Mathew R | ${portfolio.role}`,
    images: [
      {
        url: "https://mathew-pi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.role}`,
    description: `Explore ${portfolio.name}'s work as a ${portfolio.role}`,
    site: "@MathewR",
    creator: "@MathewR",
    images: ["https://mathew-pi.vercel.app/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

// Fonts
import { Montserrat, Poppins, Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-title",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-main",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-body",
});

// Layout
import { Container } from "@/components/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for personal branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolio.name,
              jobTitle: portfolio.role,
              email: portfolio.email,
              url: "https://mathew-pi.vercel.app",
              sameAs: [portfolio.social.github, portfolio.social.linkedin],
            }),
          }}
        />
      </head>
      <body
        className={`antialiased ${inconsolata.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <Container>{children}</Container>
        <Analytics />
      </body>
    </html>
  );
}
