import { ImageResponse } from "next/og";
import { getProjectBySlug, portfolio } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return portfolio.featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project ? project.title : portfolio.name;
  const eyebrow = project
    ? `${project.index} // ${project.category}`
    : portfolio.hero.eyebrow;
  const summary = project ? project.summary : portfolio.seo.description;
  const technologies = project ? project.technologies.slice(0, 5) : [];
  const isConfidential = project?.confidential ?? false;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#07090d",
        padding: "56px 64px",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
        border: "1px solid #1e2733",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#14ffec",
            fontSize: "17px",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </span>

        {isConfidential ? (
          <span
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.12)",
              border: "1px solid rgba(245, 158, 11, 0.45)",
              color: "#f59e0b",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "15px",
              fontFamily: "monospace",
            }}
          >
            Confidential client project
          </span>
        ) : (
          <span
            style={{
              color: "#94a3b8",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            Case Study · {portfolio.name}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            lineHeight: 1.45,
            color: "#94a3b8",
            maxWidth: "1000px",
          }}
        >
          {summary}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #1e2733",
          paddingTop: "24px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "#141a23",
                border: "1px solid #2d3b4d",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "15px",
                fontFamily: "monospace",
                color: "#94a3b8",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <span
          style={{
            fontSize: "16px",
            fontFamily: "monospace",
            color: "#64748b",
          }}
        >
          mathew-pi.vercel.app
        </span>
      </div>
    </div>,
    size,
  );
}
