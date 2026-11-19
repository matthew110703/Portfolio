import type { ExperienceEntry } from "@/types/portfolio";
import { Badge } from "@/components/ui";
import { ExportOutlined } from "@/components/icons";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  compact?: boolean;
}

const ExperienceCard = ({ entry, compact = false }: ExperienceCardProps) => {
  const highlightsToRender = compact
    ? entry.highlights.slice(0, entry.featured ? 3 : 2)
    : entry.highlights;

  return (
    <article
      className={`border-border bg-surface rounded-xl border p-5 sm:p-6 ${
        entry.featured ? "border-border-strong" : ""
      }`}
    >
      <div className="border-border flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-ink text-lg font-semibold sm:text-xl">
              {entry.role}
            </h3>
            {entry.featured && <Badge variant="accent">Current role</Badge>}
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {entry.companyUrl ? (
              <a
                href={entry.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-ink inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>{entry.company}</span>
                <ExportOutlined className="text-xs" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-primary font-medium">{entry.company}</span>
            )}
            <span className="text-ink-subtle" aria-hidden="true">
              ·
            </span>
            <span className="text-ink-muted">{entry.location}</span>
          </div>
        </div>

        <p className="text-ink-muted shrink-0 font-mono text-xs sm:text-right">
          {entry.period}
        </p>
      </div>

      <div className="mt-4 space-y-4">
        {entry.summary && (
          <p className="text-ink-muted text-sm leading-relaxed">
            {entry.summary}
          </p>
        )}

        {entry.productContributions &&
          entry.productContributions.length > 0 &&
          (compact ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-ink-subtle font-mono text-xs">
                Products:
              </span>
              {entry.productContributions.map((item) => (
                <Badge key={item.product} variant="neutral">
                  {item.product}
                </Badge>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-3">
              {entry.productContributions.map((item) => (
                <div
                  key={item.product}
                  className="border-border bg-canvas/70 rounded-lg border p-3.5"
                >
                  <p className="font-display text-primary text-sm font-semibold">
                    {item.product}
                  </p>
                  <p className="text-ink-muted mt-1 text-xs leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          ))}

        <ul className="text-ink-muted space-y-2 text-sm leading-relaxed">
          {highlightsToRender.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {entry.additionalNote && (
          <p className="text-ink-subtle font-mono text-xs">
            Note: {entry.additionalNote}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1">
          {entry.technologies.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
