import type { CapabilitiesContent } from "@/types/portfolio";
import { Badge } from "@/components/ui";

interface CapabilitiesGridProps {
  capabilities: CapabilitiesContent;
}

const CapabilitiesGrid = ({ capabilities }: CapabilitiesGridProps) => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.groups.map((group) => (
          <section
            key={group.title}
            className="border-border bg-surface flex flex-col gap-3.5 rounded-xl border p-5"
          >
            <div className="border-border flex items-baseline justify-between gap-2 border-b pb-3">
              <h3 className="font-display text-ink text-base font-semibold">
                {group.title}
              </h3>
              <span className="text-ink-subtle font-mono text-[11px]">
                {group.cadence}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="neutral">
                  {item}
                </Badge>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border-border bg-surface/70 flex items-center justify-between gap-4 rounded-xl border px-5 py-4">
          <span className="text-ink-muted font-mono text-xs uppercase">
            Currently learning
          </span>
          <Badge variant="accent">{capabilities.learning}</Badge>
        </div>

        <div className="border-border bg-surface/70 flex flex-col justify-center gap-1 rounded-xl border px-5 py-4">
          <span className="text-ink-subtle font-mono text-xs uppercase">
            Additional exposure
          </span>
          <p className="text-ink-muted text-sm">
            {capabilities.additionalExposure}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesGrid;
