import Link from "next/link";
import type { FeaturedProject } from "@/types/portfolio";
import { Badge, ProjectDiagram } from "@/components/ui";
import {
  ArrowRightOutlined,
  ExportOutlined,
  GithubOutlined,
  LockOutlined,
} from "@/components/icons";

interface ProjectCardProps {
  project: FeaturedProject;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <article
      className={`border-border bg-surface hover:border-border-strong group flex flex-col justify-between rounded-xl border p-5 transition-colors sm:p-6 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={
          featured
            ? "grid gap-6 lg:grid-cols-12 lg:items-center"
            : "flex flex-col gap-5"
        }
      >
        <div className={featured ? "lg:col-span-5" : ""}>
          <Link
            href={`/portfolio/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block rounded-lg"
          >
            <ProjectDiagram
              visual={project.visual}
              className="group-hover:border-primary/40 transition-colors"
            />
          </Link>
        </div>

        <div
          className={`flex flex-col gap-3.5 ${featured ? "lg:col-span-7" : ""}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-primary font-mono text-xs tracking-wide uppercase">
              {project.index} · {project.category}
            </p>
            {project.confidential && (
              <Badge variant="confidential">
                <LockOutlined aria-hidden="true" />
                <span>
                  {project.confidentialLabel ?? "Confidential client project"}
                </span>
              </Badge>
            )}
          </div>

          <h3 className="font-display text-ink group-hover:text-primary text-xl font-semibold tracking-tight transition-colors sm:text-2xl">
            <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-ink-muted text-sm leading-relaxed">
            {project.summary}
          </p>

          <p className="border-primary/40 text-ink/90 border-l-2 pl-3 text-xs leading-relaxed sm:text-sm">
            {project.contributionHighlight}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="neutral">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="border-border mt-5 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
        <Link
          href={`/portfolio/${project.slug}`}
          className="text-primary hover:text-ink inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        >
          <span>Read case study</span>
          <ArrowRightOutlined aria-hidden="true" />
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 font-medium transition-colors"
            >
              <ExportOutlined aria-hidden="true" />
              <span>Live demo</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-primary inline-flex items-center gap-1.5 font-medium transition-colors"
            >
              <GithubOutlined aria-hidden="true" />
              <span>Source code</span>
            </a>
          )}
          {project.confidential && (
            <span className="text-ink-subtle inline-flex items-center gap-1.5 font-mono text-xs">
              <LockOutlined aria-hidden="true" />
              <span>Confidential client work</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
