import Link from "next/link";
import { AppShell } from "@/components/layout";

export default function NotFound() {
  return (
    <AppShell>
      <div className="border-border bg-surface mx-auto my-12 flex max-w-lg flex-col items-center gap-4 rounded-xl border p-8 text-center">
        <p className="text-primary font-mono text-xs tracking-widest uppercase">
          404 {"//"} Route not found
        </p>
        <h1 className="font-display text-ink text-3xl font-semibold">
          Page not found
        </h1>
        <p className="text-ink-muted text-sm leading-relaxed">
          The page you requested does not exist or has moved.
        </p>
        <Link
          href="/"
          className="bg-primary text-canvas hover:bg-primary-dim mt-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
        >
          Back to home
        </Link>
      </div>
    </AppShell>
  );
}
