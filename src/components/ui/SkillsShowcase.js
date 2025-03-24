import React from "react";

// Next imports
import Image from "next/image";

// Portfolio
import { profile } from "@/lib/portfolio";

const SkillsShowcase = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-[200px] bg-shadow rounded-3xl ${className}`}
    >
      <aside className="mx-auto ">
        <ul className="list-disc list-inside space-y-2 *:text-xs *:font-semibold *:text-primary">
          {profile.coreSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </aside>

      <div className="relative bg-primary rounded-3xl w-1/2 h-full">
        <Image
          src={"/icons/skill.png"}
          alt="skill-icon"
          width={128}
          height={128}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default SkillsShowcase;
