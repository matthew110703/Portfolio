import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inconsolata, Montserrat, Poppins } from "next/font/google";
import { Container } from "@/v1/components/layout";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-inconsolata",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    absolute: "Mathew R | Portfolio (v1 Archive)",
  },
  description: "Archived v1 bento snapshot of Mathew R's portfolio.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function V1Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`v1-root md:bg-shadow min-h-screen w-full bg-black ${inconsolata.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <Container>{children}</Container>
    </div>
  );
}
