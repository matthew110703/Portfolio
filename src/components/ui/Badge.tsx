import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "confidential";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface-elevated text-ink-muted",
  accent: "border-primary/35 bg-primary/10 text-primary",
  confidential: "border-amber/35 bg-amber/10 text-amber",
};

const Badge = ({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px] font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
