import "./globals.css";
import portfolio from "@/lib/portfolio.json";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: `${portfolio.name} | ${portfolio.role}`,
  description: `Portfolio of Mathew R, Explore my work and projects as a ${portfolio.role} specializing in the tech stack of ${portfolio.core_skills[0]}, ${portfolio.core_skills[1]}, and ${portfolio.core_skills[2]}.`,
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
    locale: "en",
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
        <meta
          name="google-site-verification"
          content="wICuXRKk0DYn7kRv9kYb5lB7aO78vAmc9-K7-s37XTA"
        />
        <meta
          name="keywords"
          content="Mathew R, Portfolio, Web Developer, JavaScript, React, Next.js"
        />
        {/* Structured data for personal branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolio.name,
              jobTitle: portfolio.role,
              url: "https://mathew-pi.vercel.app",
              sameAs: [
                "https://github.com/matthew110703",
                "https://linkedin.com/in/matthew110703",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`antialiased ${inconsolata.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <Container>{children}</Container>
        <Analytics />
        {/* <div className="bg-primary text-shadow fixed top-0 left-0 z-50 p-4 text-xl font-semibold after:content-['mobile'] sm:after:content-['sm(>640px)'] md:after:content-['md(>768)'] lg:after:content-['lg(>1024px)'] xl:after:content-['xl(>1280px)'] 2xl:after:content-['2xl(>1536px)']"></div> */}
      </body>
    </html>
  );
}
