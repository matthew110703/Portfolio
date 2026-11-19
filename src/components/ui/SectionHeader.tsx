import Link from "next/link";
import { ArrowRightOutlined } from "@/components/icons";

interface SectionHeaderProps {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  action?: {
    label: string;
    href: string;
  };
}

const SectionHeader = ({
  id,
  index,
  eyebrow,
  title,
  description,
  as = "h2",
  action,
}: SectionHeaderProps) => {
  const HeadingTag = as;

  return (
    <div className="border-border flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-2">
        <p className="text-primary font-mono text-xs tracking-widest uppercase">
          {index} {"//"} {eyebrow}
        </p>
        <HeadingTag
          id={id}
          className={`font-display text-ink font-semibold tracking-tight ${
            as === "h1" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {title}
        </HeadingTag>
        {description && (
          <p className="text-ink-muted text-sm leading-relaxed sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="text-primary hover:text-ink inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors"
        >
          <span>{action.label}</span>
          <ArrowRightOutlined aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
