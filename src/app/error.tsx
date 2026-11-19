"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <AppShell>
      <div className="border-border bg-surface mx-auto my-12 flex max-w-lg flex-col items-center gap-4 rounded-xl border p-8 text-center">
        <p className="text-primary font-mono text-xs tracking-widest uppercase">
          500 {"//"} Runtime error
        </p>
        <h1 className="font-display text-ink text-2xl font-semibold sm:text-3xl">
          Something went wrong
        </h1>
        <p className="text-ink-muted text-sm leading-relaxed">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={reset}
            className="bg-primary text-canvas hover:bg-primary-dim rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border-border-strong bg-canvas text-ink hover:border-primary/60 hover:text-primary rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
