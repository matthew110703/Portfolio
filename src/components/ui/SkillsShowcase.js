// UI
import Skills from "./Skills";

// Portfolio
import portfolio from "@/lib/portfolio.json";

// Motion
import * as motion from "motion/react-client";
import { slideInFromRight } from "@/lib/motion";

const SkillsShowcase = ({ className }) => {
  return (
    <motion.div
      {...slideInFromRight}
      transition={{
        when: "beforeChildren",
        delayChildren: 0.3,
      }}
      className={`bg-shadow relative flex h-[200px] min-h-[150px] w-full max-w-full items-center justify-start rounded-3xl ${className}`}
    >
      <aside className="flex w-1/2 justify-center">
        <ul className="*:text-primary list-inside list-disc space-y-2 *:text-xs *:font-semibold">
          {portfolio.core_skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </aside>

      <Skills />
    </motion.div>
  );
};

export default SkillsShowcase;
