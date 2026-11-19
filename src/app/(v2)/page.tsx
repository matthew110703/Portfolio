import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { Badge, Reveal, SectionHeader } from "@/components/ui";
import {
  CapabilitiesGrid,
  ExperienceCard,
  ProjectCard,
} from "@/components/sections";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@/components/icons";

export default function HomePage() {
  const github = portfolio.social.find((item) => item.key === "github");
  const linkedin = portfolio.social.find((item) => item.key === "linkedin");

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="pt-2 sm:pt-4">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-8">
            <p className="text-primary font-mono text-xs tracking-widest uppercase">
              {portfolio.hero.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="font-display text-ink text-3xl leading-[1.12] font-semibold tracking-tight sm:text-5xl"
            >
              {portfolio.hero.headline}
            </h1>

            <p className="text-ink-muted max-w-2xl text-base leading-relaxed sm:text-lg">
              {portfolio.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/portfolio"
                className="bg-primary text-canvas hover:bg-primary-dim inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
              >
                <span>Explore selected work</span>
                <ArrowRightOutlined aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="border-border-strong bg-surface text-ink hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                <span>Get in touch</span>
              </Link>

              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-primary inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
              >
                <FileTextOutlined aria-hidden="true" />
                <span>View resume</span>
              </a>
            </div>

            <p className="text-ink-subtle border-border border-t pt-4 font-mono text-xs leading-relaxed">
              {portfolio.hero.supportingStack.join(" · ")}
            </p>
          </div>

          <aside className="border-border bg-surface rounded-xl border p-5 sm:p-6 lg:col-span-4">
            <div className="border-border flex items-center gap-4 border-b pb-5">
              <Image
                src="/avatar.webp"
                alt="Portrait illustration of Mathew R"
                width={88}
                height={88}
                priority
                className="border-border-strong h-20 w-20 shrink-0 rounded-full border object-cover"
              />
              <div className="min-w-0 space-y-1">
                <p className="font-display text-ink text-lg font-semibold">
                  {portfolio.name}
                </p>
                <p className="text-primary text-xs font-medium">
                  {portfolio.role}
                </p>
                <p className="text-ink-subtle inline-flex items-center gap-1.5 text-xs">
                  <EnvironmentOutlined aria-hidden="true" />
                  <span>{portfolio.shortLocation}</span>
                </p>
              </div>
            </div>

            <dl className="mt-4 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-ink-subtle font-mono">Current</dt>
                <dd className="text-ink font-medium">Vananam Ventures</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-ink-subtle font-mono">Focus</dt>
                <dd className="text-ink-muted text-right">
                  Microfrontends &amp; Design Systems
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-ink-subtle font-mono">Learning</dt>
                <dd>
                  <Badge variant="accent">Rust</Badge>
                </dd>
              </div>
            </dl>

            <div className="border-border mt-5 flex flex-wrap items-center gap-3 border-t pt-4 text-xs">
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-canvas text-ink-muted hover:border-primary/50 hover:text-primary inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-medium transition-colors"
                >
                  <GithubOutlined aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-canvas text-ink-muted hover:border-primary/50 hover:text-primary inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-medium transition-colors"
                >
                  <LinkedinFilled aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${portfolio.email}`}
                className="border-border bg-canvas text-ink-muted hover:border-primary/50 hover:text-primary inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-medium transition-colors"
              >
                <MailOutlined aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Selected Work */}
      <Reveal>
        <section aria-labelledby="selected-work-heading" className="space-y-8">
          <SectionHeader
            id="selected-work-heading"
            index="01"
            eyebrow="Selected Work"
            title="Projects & engineering case studies"
            description="Five featured projects spanning agentic developer tooling, e-commerce backend architecture, mobile operations workflows, media APIs and freelance web delivery."
            action={{
              label: "Full work & earlier archive",
              href: "/portfolio",
            }}
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
      </Reveal>

      {/* Experience Snapshot */}
      <Reveal>
        <section aria-labelledby="experience-heading" className="space-y-8">
          <SectionHeader
            id="experience-heading"
            index="02"
            eyebrow="Experience"
            title="Engineering roles & product work"
            description="Building modular web and mobile interfaces, shared design systems and maintainable product workflows."
            action={{
              label: "Full about, experience & education",
              href: "/about",
            }}
          />

          <div className="space-y-4">
            {portfolio.experience.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} compact />
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
            title="Technical stack & focus areas"
            description="Grouped by how technologies are used across architecture, product UI, mobile delivery and backend systems."
          />

          <CapabilitiesGrid capabilities={portfolio.capabilities} />
        </section>
      </Reveal>

      {/* Contact CTA */}
      <Reveal>
        <section
          aria-labelledby="cta-heading"
          className="border-border-strong bg-surface rounded-2xl border p-6 sm:p-10"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-primary font-mono text-xs tracking-widest uppercase">
                04 {"//"} Contact
              </p>
              <h2
                id="cta-heading"
                className="font-display text-ink text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {portfolio.contact.heading}
              </h2>
              <p className="text-ink-muted text-sm leading-relaxed sm:text-base">
                {portfolio.contact.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-primary text-canvas hover:bg-primary-dim inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRightOutlined aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${portfolio.email}`}
                className="border-border-strong bg-canvas text-ink hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                <MailOutlined aria-hidden="true" />
                <span>{portfolio.email}</span>
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
