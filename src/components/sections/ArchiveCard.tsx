import Image from "next/image";
import type { ArchiveProject } from "@/types/portfolio";
import { Badge } from "@/components/ui";
import { GithubOutlined } from "@/components/icons";

interface ArchiveCardProps {
  project: ArchiveProject;
}

const ArchiveCard = ({ project }: ArchiveCardProps) => {
  return (
    <article className="border-border bg-surface/70 hover:border-border-strong flex flex-col justify-between gap-4 rounded-xl border p-4 transition-colors sm:p-5">
      <div className="space-y-3.5">
        <div className="border-border bg-canvas overflow-hidden rounded-lg border">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            width={640}
            height={360}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-1.5">
          <p className="text-ink-subtle font-mono text-[11px] uppercase">
            {project.category}
          </p>
          <h3 className="font-display text-ink text-lg font-semibold">
            {project.title}
          </h3>
          <p className="text-ink-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="border-border border-t pt-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 text-xs font-medium transition-colors sm:text-sm"
        >
          <GithubOutlined aria-hidden="true" />
          <span>Source on GitHub</span>
        </a>
      </div>
    </article>
  );
};

export default ArchiveCard;
