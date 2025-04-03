"use client";
import { useState } from "react";

// Next imports
import Image from "next/image";

// UI components
import { ContactLink } from "@/components/buttons";
import { Tag } from "../ui";

// Icons
import { GithubFilled, ExportOutlined } from "@ant-design/icons";

const ProjectCard = ({
  className,
  thumbnail,
  title,
  imageAspect = "video",
  style,
  description,
  source,
  live,
  technologies = [],
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article
      className={`border-primary group shadow-primary relative max-h-[300px] w-full max-w-full cursor-pointer justify-items-center overflow-visible rounded-3xl border-2 shadow-sm transition-all lg:max-w-[600px] ${className}`}
      style={style}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => setShowDetails((prev) => !prev)}
    >
      <Image
        src={thumbnail}
        alt={title || "Project Thumbnail"}
        width={400}
        height={300}
        className={`h-full w-full rounded-3xl object-cover ${imageAspect === "video" ? "aspect-video" : "aspect-square"}`}
      />

      {/* Details */}
      {showDetails && (
        <div className="border-primary bg-shadow absolute top-0 z-50 flex min-h-full w-full flex-col justify-center gap-4 rounded-3xl border-2 p-4 shadow-md sm:p-6">
          <ContactLink
            text={title}
            href={live}
            className={"text-xl font-bold"}
          />
          <p className="text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 p-2">
            {technologies?.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <ContactLink
              icon={<GithubFilled />}
              text={"GitHub"}
              href={source}
            />
            <ContactLink icon={<ExportOutlined />} text={"Visit"} href={live} />
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
