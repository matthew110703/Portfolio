"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, portfolio } from "@/data/portfolio";
import { FileTextOutlined } from "@/components/icons";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="bg-primary text-canvas sr-only fixed top-3 left-3 z-50 rounded-md px-3 py-2 text-xs font-semibold focus:not-sr-only"
      >
        Skip to content
      </a>

      <header className="border-border bg-canvas/85 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-md py-1"
            aria-label={`${portfolio.name} — Home`}
          >
            <span className="border-primary/40 bg-primary/10 text-primary group-hover:border-primary inline-flex h-7 w-7 items-center justify-center rounded border font-mono text-xs font-semibold transition-colors">
              MR
            </span>
            <span className="font-display text-ink text-sm font-semibold tracking-tight sm:text-base">
              {portfolio.name}
            </span>
            <span className="text-ink-subtle hidden font-mono text-xs sm:inline">
              / SDE
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface-elevated text-primary"
                      : "text-ink-muted hover:bg-surface hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="bg-primary absolute right-3 bottom-0 left-3 h-px"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-strong bg-surface text-ink hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm"
          >
            <FileTextOutlined aria-hidden="true" />
            <span>View resume</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
