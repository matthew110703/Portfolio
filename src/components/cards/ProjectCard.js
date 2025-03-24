// Next imports
import Image from "next/image";
import Link from "next/link";

// UI components
import { ContactLink } from "@/components/buttons";
import { Tag } from "../ui";

// Icons
import { GithubFilled, ExportOutlined } from "@ant-design/icons";

const ProjectCard = ({ className, image, title, details }) => {
  return (
    <details
      className={`border-primary shadow-primary relative h-full max-h-[300px] min-h-[200px] w-full max-w-full min-w-sm rounded-3xl border-2 shadow-sm transition-all sm:max-w-[500px] ${className}`}
    >
      <summary className="list-none">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="aspect-video h-full w-full"
          style={{ objectFit: "contain" }}
        />
        <header className="absolute top-0 left-0">
          <h3 className="mt-1 ml-3 text-base font-semibold">{title}</h3>
        </header>
      </summary>

      {/* Details */}
      {details && (
        <div className="bg-shadow border-primary my-2 flex flex-col items-start justify-center gap-4 rounded-b-3xl border-x-2 border-b-2 p-4">
          <div className="flex w-full items-center justify-between">
            <ContactLink
              text={"Clinic Management System"}
              icon={<GithubFilled />}
              href={details?.source}
            />
            <ContactLink
              text={"Live Demo"}
              icon={<ExportOutlined />}
              href={details?.live}
            />
          </div>
          <p className="text-sm">{details?.description}</p>
          <ul className="list-inside list-disc text-sm">
            {details?.keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-start gap-2">
            {details?.tags.map((tag, idx) => (
              <Tag key={idx} title={tag} />
            ))}
          </div>
        </div>
      )}
    </details>
  );
};

export default ProjectCard;
