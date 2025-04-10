// UI
import { ProfileCard, TitleCard, ProjectCard } from "@/components/cards";

import portfolio from "@/lib/portfolio.json";

// motion
import * as motion from "motion/react-client";
import { fadeIn } from "@/lib/motion";

const Portfolio = () => {
  return (
    <section
      aria-label="Portfolio"
      className="flex h-full w-full flex-col gap-y-4"
    >
      <header className="flex items-stretch gap-x-4">
        <ProfileCard variant="headline" headlineText="Designing, The Future" />

        <TitleCard text={"Portfolio"} />
      </header>

      {/* Grid Layout */}
      <div className="flex-1 overflow-hidden">
        <div className="h-[80vh] overflow-y-auto">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          >
            {/* Highlight Projects */}
            {/* Project 1 */}
            <ProjectCard
              {...portfolio.projects[0]}
              imageAspect="square"
              style={{ maxWidth: "100%" }}
              className={
                "col-span-1 max-h-[500px] w-[100%] sm:col-span-2 lg:col-span-4 lg:row-span-2"
              }
            />
            {/* Project 2 */}
            <ProjectCard
              {...portfolio.projects[1]}
              className={"col-span-1 lg:col-span-2 lg:row-span-1"}
            />
            {/* Project 3 */}
            <ProjectCard
              {...portfolio.projects[2]}
              className={"col-span-1 lg:col-span-2 lg:row-span-1"}
            />

            {/* Remaining Projects */}
            {portfolio.projects.slice(3).map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                className={"col-span-1 lg:col-span-3 lg:row-span-1"}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
