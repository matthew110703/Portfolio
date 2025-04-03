import React from "react";

// Next imports
import Image from "next/image";

// UI
import Skills from "./Skills";

// Portfolio
import portfolio from "@/lib/portfolio.json";

const SkillsShowcase = ({ className }) => {
  return (
    <div
      className={`bg-shadow flex h-[200px] min-h-[150px] w-full max-w-full items-center justify-center rounded-3xl ${className}`}
    >
      <aside className="mx-auto">
        <ul className="*:text-primary list-inside list-disc space-y-2 *:text-xs *:font-semibold">
          {portfolio.core_skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </aside>

      <Skills />
    </div>
  );
};

export default SkillsShowcase;
