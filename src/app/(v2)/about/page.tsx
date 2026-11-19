import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { buildPageGraphJsonLd } from "@/lib/seo";
import { Badge, Reveal, SectionHeader } from "@/components/ui";
import { CapabilitiesGrid, ExperienceCard } from "@/components/sections";
import {
  DownloadOutlined,
  ExportOutlined,
  FileTextOutlined,
} from "@/components/icons";

const aboutDescription =
  "Background, engineering experience at Vananam Ventures and SIRPI, technical capabilities and education of Mathew R.";

export const metadata: Metadata = {
  title: "About & Experience",
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About & Experience | ${portfolio.name}`,
    description: aboutDescription,
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `About & Experience | ${portfolio.name}`,
    description: aboutDescription,
  },
};

export default function AboutPage() {
  const jsonLd = buildPageGraphJsonLd(
    {
      "@type": "ProfilePage",
      "@id": `${portfolio.siteUrl}/about#webpage`,
      url: `${portfolio.siteUrl}/about`,
      name: `About & Experience | ${portfolio.name}`,
      description: aboutDescription,
      isPartOf: { "@id": `${portfolio.siteUrl}/#website` },
      mainEntity: { "@id": `${portfolio.siteUrl}/#person` },
    },
    [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
  );

  return (
    <div className="space-y-16 sm:space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* About Story */}
      <section aria-labelledby="about-heading" className="space-y-8">
        <SectionHeader
          id="about-heading"
          as="h1"
          index="01"
          eyebrow="About"
          title={portfolio.about.heading}
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-ink-muted text-sm leading-relaxed sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="border-border bg-surface flex flex-col justify-between gap-6 rounded-xl border p-5 sm:p-6 lg:col-span-4">
            <div className="space-y-3">
              <h2 className="text-primary font-mono text-xs tracking-wider uppercase">
                Quick facts
              </h2>
              <ul className="text-ink-muted space-y-2.5 text-sm leading-relaxed">
                {portfolio.about.quickFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-border flex flex-wrap items-center gap-3 border-t pt-4">
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-canvas hover:bg-primary-dim inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm"
              >
                <FileTextOutlined aria-hidden="true" />
                <span>View resume</span>
              </a>
              <a
                href={portfolio.resumeUrl}
                download={portfolio.resumeFileName}
                className="border-border-strong bg-canvas text-ink hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm"
              >
                <DownloadOutlined aria-hidden="true" />
                <span>Download PDF</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Experience */}
      <Reveal>
        <section aria-labelledby="experience-heading" className="space-y-8">
          <SectionHeader
            id="experience-heading"
            index="02"
            eyebrow="Experience"
            title="Professional background"
            description="Frontend architecture, shared design systems, cross-platform consolidation and product delivery."
          />

          <div className="space-y-6">
            {portfolio.experience.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Capabilities */}
      <Reveal>
        <section aria-labelledby="capabilities-heading" className="space-y-8">
          <SectionHeader
            id="capabilities-heading"
            index="03"
            eyebrow="Capabilities"
            title="Skills & tooling"
          />

          <CapabilitiesGrid capabilities={portfolio.capabilities} />
        </section>
      </Reveal>

      {/* Education */}
      <Reveal>
        <section aria-labelledby="education-heading" className="space-y-8">
          <SectionHeader
            id="education-heading"
            index="04"
            eyebrow="Education"
            title="Academic foundation"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {portfolio.education.map((edu) => (
              <article
                key={edu.id}
                className="border-border bg-surface flex flex-col justify-between gap-4 rounded-xl border p-5"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink-subtle font-mono text-xs">
                      {edu.period}
                    </span>
                    {edu.grade && <Badge variant="accent">{edu.grade}</Badge>}
                  </div>
                  <h3 className="font-display text-ink text-lg font-semibold">
                    {edu.degree}
                  </h3>
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-ink inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    >
                      <span>{edu.institution}</span>
                      <ExportOutlined className="text-xs" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-primary text-sm font-medium">
                      {edu.institution}
                    </p>
                  )}
                </div>
                <p className="text-ink-muted text-xs">{edu.location}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
