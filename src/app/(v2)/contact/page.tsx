import type { Metadata } from "next";
import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import { buildPageGraphJsonLd } from "@/lib/seo";
import type { SocialLink } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui";
import ContactForm from "@/components/forms/ContactForm";
import {
  DownloadOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@/components/icons";

const socialIcons: Record<SocialLink["key"], ReactNode> = {
  github: <GithubOutlined aria-hidden="true" />,
  linkedin: <LinkedinFilled aria-hidden="true" />,
};

export const metadata: Metadata = {
  title: "Contact",
  description: portfolio.contact.description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${portfolio.name}`,
    description: portfolio.contact.description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${portfolio.name}`,
    description: portfolio.contact.description,
  },
};

export default function ContactPage() {
  const jsonLd = buildPageGraphJsonLd(
    {
      "@type": "ContactPage",
      "@id": `${portfolio.siteUrl}/contact#webpage`,
      url: `${portfolio.siteUrl}/contact`,
      name: `Contact | ${portfolio.name}`,
      description: portfolio.contact.description,
      isPartOf: { "@id": `${portfolio.siteUrl}/#website` },
      mainEntity: { "@id": `${portfolio.siteUrl}/#person` },
    },
    [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  );

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionHeader
        as="h1"
        index="01"
        eyebrow="Contact"
        title={portfolio.contact.heading}
        description={portfolio.contact.description}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        <section
          aria-labelledby="contact-form-heading"
          className="space-y-4 lg:col-span-7"
        >
          <h2
            id="contact-form-heading"
            className="font-display text-ink text-lg font-semibold"
          >
            Send a message
          </h2>
          <ContactForm />
        </section>

        <aside
          aria-labelledby="direct-contact-heading"
          className="space-y-6 lg:col-span-5"
        >
          <h2
            id="direct-contact-heading"
            className="font-display text-ink text-lg font-semibold"
          >
            Direct channels &amp; resume
          </h2>

          <div className="border-border bg-surface space-y-5 rounded-xl border p-5 sm:p-6">
            <div className="space-y-3">
              <p className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
                Email &amp; location
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="text-primary hover:text-ink flex items-center gap-2.5 text-sm font-medium transition-colors"
              >
                <MailOutlined aria-hidden="true" />
                <span>{portfolio.email}</span>
              </a>
              <p className="text-ink-muted flex items-center gap-2.5 text-sm">
                <EnvironmentOutlined aria-hidden="true" />
                <span>{portfolio.location}</span>
              </p>
            </div>

            <div className="border-border space-y-3 border-t pt-5">
              <p className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
                Confirmed profiles
              </p>
              <div className="flex flex-col gap-2.5">
                {portfolio.social.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-canvas text-ink hover:border-primary/50 hover:text-primary flex items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex shrink-0 items-center gap-2">
                      {socialIcons[item.key]}
                      <span>{item.label}</span>
                    </span>
                    <span className="text-ink-subtle truncate font-mono text-xs">
                      {item.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-border space-y-3 border-t pt-5">
              <p className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
                Resume
              </p>
              <div className="flex flex-wrap items-center gap-3">
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
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
