import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { buildPageGraphJsonLd } from "@/lib/seo";
import { Reveal, SectionHeader } from "@/components/ui";
import { ArchiveCard, ProjectCard } from "@/components/sections";

const workDescription =
  "Five featured engineering projects and case studies across agentic developer tooling, e-commerce backends, mobile operations apps, media APIs and web delivery.";

export const metadata: Metadata = {
  title: "Selected Work",
  description: workDescription,
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: `Selected Work | ${portfolio.name}`,
    description: workDescription,
    url: "/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Selected Work | ${portfolio.name}`,
    description: workDescription,
  },
};

export default function PortfolioPage() {
  const jsonLd = buildPageGraphJsonLd(
    {
      "@type": "CollectionPage",
      "@id": `${portfolio.siteUrl}/portfolio#webpage`,
      url: `${portfolio.siteUrl}/portfolio`,
      name: `Selected Work | ${portfolio.name}`,
      description: workDescription,
      isPartOf: { "@id": `${portfolio.siteUrl}/#website` },
      author: { "@id": `${portfolio.siteUrl}/#person` },
    },
    [
      { name: "Home", path: "/" },
      { name: "Selected Work", path: "/portfolio" },
    ],
  );

  return (
    <div className="space-y-16 sm:space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section aria-labelledby="work-page-heading" className="space-y-8">
        <SectionHeader
          id="work-page-heading"
          as="h1"
          index="01"
          eyebrow="Selected Work"
          title="Projects & engineering case studies"
          description="Five featured projects across developer tooling, backend domain modelling, mobile operations workflows, media APIs and freelance web delivery. Confidential client engagements are anonymised."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </section>

      <Reveal>
        <section
          aria-labelledby="earlier-work-heading"
          className="border-border space-y-6 border-t pt-12"
        >
          <div className="max-w-2xl space-y-2">
            <p className="text-ink-subtle font-mono text-xs tracking-widest uppercase">
              02 {"//"} Archive
            </p>
            <h2
              id="earlier-work-heading"
              className="font-display text-ink text-xl font-semibold sm:text-2xl"
            >
              Earlier work
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed">
              Earlier full-stack applications kept as secondary reference.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.earlierWork.map((project) => (
              <ArchiveCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
