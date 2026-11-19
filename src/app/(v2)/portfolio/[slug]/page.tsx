import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, portfolio } from "@/data/portfolio";
import { buildPageGraphJsonLd } from "@/lib/seo";
import { Badge, ProjectDiagram } from "@/components/ui";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ExportOutlined,
  GithubOutlined,
  LockOutlined,
} from "@/components/icons";

export function generateStaticParams() {
  return portfolio.featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    keywords: [...project.technologies, project.category, portfolio.name],
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${portfolio.name}`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${portfolio.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIdx = portfolio.featuredProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const prevProject =
    portfolio.featuredProjects[
      (currentIdx - 1 + portfolio.featuredProjects.length) %
        portfolio.featuredProjects.length
    ];
  const nextProject =
    portfolio.featuredProjects[
      (currentIdx + 1) % portfolio.featuredProjects.length
    ];

  const jsonLd = buildPageGraphJsonLd(
    {
      "@type": project.links.github ? "SoftwareSourceCode" : "CreativeWork",
      name: project.title,
      description: project.summary,
      url: `${portfolio.siteUrl}/portfolio/${project.slug}`,
      author: { "@id": `${portfolio.siteUrl}/#person` },
      keywords: project.technologies,
      ...(project.links.github ? { codeRepository: project.links.github } : {}),
    },
    [
      { name: "Home", path: "/" },
      { name: "Selected Work", path: "/portfolio" },
      { name: project.title, path: `/portfolio/${project.slug}` },
    ],
  );

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-6">
        <Link
          href="/portfolio"
          className="text-ink-muted hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeftOutlined aria-hidden="true" />
          <span>Back to selected work</span>
        </Link>

        <header className="border-border space-y-4 border-b pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-primary font-mono text-xs tracking-widest uppercase">
              {project.index} {"//"} {project.category}
            </p>
            {project.confidential && (
              <Badge variant="confidential">
                <LockOutlined aria-hidden="true" />
                <span>
                  {project.confidentialLabel ?? "Confidential client project"}
                </span>
              </Badge>
            )}
          </div>

          <h1 className="font-display text-ink text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <p className="text-ink-muted max-w-3xl text-base leading-relaxed sm:text-lg">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-canvas hover:bg-primary-dim inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
              >
                <ExportOutlined aria-hidden="true" />
                <span>Live website</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border-strong bg-surface text-ink hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
              >
                <GithubOutlined aria-hidden="true" />
                <span>View source on GitHub</span>
              </a>
            )}
            {project.confidential && (
              <span className="border-amber/30 bg-amber/10 text-amber inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-xs">
                <LockOutlined aria-hidden="true" />
                <span>Confidential client work — repository omitted</span>
              </span>
            )}
          </div>
        </header>

        <ProjectDiagram visual={project.visual} />
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <section aria-labelledby="context-heading" className="space-y-3">
            <h2
              id="context-heading"
              className="font-display text-ink text-xl font-semibold"
            >
              Context
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed sm:text-base">
              {project.caseStudy.context}
            </p>
          </section>

          <section aria-labelledby="contribution-heading" className="space-y-3">
            <h2
              id="contribution-heading"
              className="font-display text-ink text-xl font-semibold"
            >
              Contribution
            </h2>
            <ul className="text-ink-muted space-y-2.5 text-sm leading-relaxed sm:text-base">
              {project.caseStudy.contribution.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="decisions-heading" className="space-y-3">
            <h2
              id="decisions-heading"
              className="font-display text-ink text-xl font-semibold"
            >
              Key engineering decisions
            </h2>
            <ul className="text-ink-muted space-y-2.5 text-sm leading-relaxed sm:text-base">
              {project.caseStudy.engineeringDecisions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="outcomes-heading" className="space-y-3">
            <h2
              id="outcomes-heading"
              className="font-display text-ink text-xl font-semibold"
            >
              Outcomes
            </h2>
            <ul className="text-ink-muted space-y-2.5 text-sm leading-relaxed sm:text-base">
              {project.caseStudy.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.caseStudy.note && (
            <aside className="border-border-strong bg-surface/80 rounded-xl border p-4 text-xs leading-relaxed sm:text-sm">
              <span className="text-primary mr-2 font-mono uppercase">
                Note:
              </span>
              <span className="text-ink-muted">{project.caseStudy.note}</span>
            </aside>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="border-border bg-surface sticky top-24 space-y-5 rounded-xl border p-5">
            <div className="border-border space-y-3 border-b pb-4 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-ink-subtle font-mono">CASE STUDY</span>
                <span className="text-primary font-mono">{project.index}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-ink-subtle font-mono">VISIBILITY</span>
                <span className="text-ink font-medium">
                  {project.confidential ? "Confidential client" : "Public"}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
                Technologies &amp; concepts
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <nav
        aria-label="Other case studies"
        className="border-border grid gap-4 border-t pt-8 sm:grid-cols-2"
      >
        <Link
          href={`/portfolio/${prevProject.slug}`}
          className="border-border bg-surface hover:border-border-strong group rounded-xl border p-4 transition-colors"
        >
          <span className="text-ink-subtle inline-flex items-center gap-1.5 font-mono text-xs">
            <ArrowLeftOutlined aria-hidden="true" />
            <span>Previous</span>
          </span>
          <p className="font-display text-ink group-hover:text-primary mt-1 text-base font-semibold transition-colors">
            {prevProject.title}
          </p>
        </Link>

        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="border-border bg-surface hover:border-border-strong group rounded-xl border p-4 text-right transition-colors"
        >
          <span className="text-ink-subtle inline-flex items-center gap-1.5 font-mono text-xs">
            <span>Next</span>
            <ArrowRightOutlined aria-hidden="true" />
          </span>
          <p className="font-display text-ink group-hover:text-primary mt-1 text-base font-semibold transition-colors">
            {nextProject.title}
          </p>
        </Link>
      </nav>
    </article>
  );
}
