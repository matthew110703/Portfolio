import Link from "next/link";
import { navigationItems, portfolio } from "@/data/portfolio";
import {
  DownloadOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@/components/icons";

const Footer = () => {
  const github = portfolio.social.find((item) => item.key === "github");
  const linkedin = portfolio.social.find((item) => item.key === "linkedin");

  return (
    <footer className="border-border bg-surface/50 mt-auto border-t">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6 md:py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="border-primary/40 bg-primary/10 text-primary inline-flex h-6 w-6 items-center justify-center rounded border font-mono text-[11px] font-semibold">
                MR
              </span>
              <span className="font-display text-ink text-sm font-semibold">
                {portfolio.name}
              </span>
            </div>
            <p className="text-ink-muted max-w-sm text-sm leading-relaxed">
              {portfolio.positioning} working on modular web architectures,
              design systems, cross-platform apps and practical tooling.
            </p>
            <p className="text-ink-subtle inline-flex items-center gap-1.5 text-xs">
              <EnvironmentOutlined aria-hidden="true" />
              <span>{portfolio.location}</span>
            </p>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h2 className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <h2 className="text-ink-subtle font-mono text-xs tracking-wider uppercase">
              Connect &amp; Resume
            </h2>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${portfolio.email}`}
                className="text-ink-muted hover:text-primary inline-flex items-center gap-2 transition-colors"
              >
                <MailOutlined aria-hidden="true" />
                <span>{portfolio.email}</span>
              </a>
              <div className="flex flex-wrap items-center gap-4">
                {github && (
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 transition-colors"
                  >
                    <GithubOutlined aria-hidden="true" />
                    <span>{github.label}</span>
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 transition-colors"
                  >
                    <LinkedinFilled aria-hidden="true" />
                    <span>{linkedin.label}</span>
                  </a>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border-strong bg-surface hover:border-primary/60 hover:text-primary text-ink inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                >
                  <FileTextOutlined aria-hidden="true" />
                  <span>View resume</span>
                </a>
                <a
                  href={portfolio.resumeUrl}
                  download={portfolio.resumeFileName}
                  className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                >
                  <DownloadOutlined aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
