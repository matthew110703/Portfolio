import React from "react";

// Next imports
import Image from "next/image";

// Portfolio
import { profile } from "@/lib/portfolio";

const SkillsShowcase = ({ className }) => {
  return (
    <div
      className={`bg-shadow flex h-[200px] w-full max-w-sm items-center justify-center rounded-3xl ${className}`}
    >
      <aside className="mx-auto">
        <ul className="*:text-primary list-inside list-disc space-y-2 *:text-xs *:font-semibold">
          {profile.coreSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </aside>

      <div className="bg-primary relative h-full w-1/2 rounded-3xl">
        <Image
          src={"/icons/skill.png"}
          alt="skill-icon"
          width={128}
          height={128}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>
    </div>
  );
};

export default SkillsShowcase;
