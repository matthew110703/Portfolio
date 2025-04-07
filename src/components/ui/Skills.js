"use client";
import { useState } from "react";

// Next
import Image from "next/image";
import Icon from "./Icon";

import portfolio from "@/lib/portfolio.json";

const Skills = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        role="button"
        className="bg-primary flex h-full w-1/2 flex-col items-center justify-center rounded-3xl"
        onClick={() => setShow(!show)}
      >
        <Image
          src={"/icons/skill.png"}
          width={128}
          height={128}
          alt="skill-icon"
          loading="lazy"
          unoptimized
        />
        <h2 className="text-shadow font-main text-lg font-semibold">
          My Skills
        </h2>
      </div>

      {show && (
        <>
          <div
            className="absolute inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-black/50"
            onClick={() => setShow(false)}
          >
            <div className="bg-shadow border-primary shadow-primary flex flex-col gap-4 rounded-3xl border p-4 shadow-md">
              <Skill
                heading={"Programming Languages"}
                skills={portfolio.skills.programming_languages}
              />
              <Skill heading={"Frontend"} skills={portfolio.skills.frontend} />
              <Skill heading={"Backend"} skills={portfolio.skills.backend} />
              <Skill heading={"Tools"} skills={portfolio.skills.tools} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

function Skill({ heading, skills }) {
  return (
    <div className="w-sm max-w-sm space-y-2">
      <h5 className="text-sm font-semibold text-gray-400">{heading}</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Icon
            key={skill.label}
            src={skill.icon}
            alt={skill.label}
            size={48}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
