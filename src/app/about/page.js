// UI
import {
  ContactOverview,
  SkillsShowcase,
  TimelineHeader,
} from "@/components/ui";
import { TitleCard, ProfileCard, TimelineCard } from "@/components/cards";

import portfolio from "@/lib/portfolio.json";

// Motion
import * as motion from "motion/react-client";
import { aboutContainer, aboutItem } from "@/lib/motion";

const About = () => {
  return (
    <section aria-labelledby="about" className="flex h-full w-full flex-col">
      <header className="mb-4 block md:hidden">
        <TitleCard text={"About Me"} id={"about"} />
      </header>

      <div className="flex flex-col gap-4 overflow-hidden md:flex-row">
        {/* Profile */}
        <div className="flex flex-col justify-evenly gap-4 overflow-x-hidden">
          <ProfileCard variant="minimal" />
          <SkillsShowcase />
          {/* Contact */}
          <ContactOverview className={"hidden md:flex"} />
        </div>

        {/* About */}
        <div className="h-full flex-1 overflow-hidden">
          <div className="h-full px-2 md:overflow-y-auto">
            <TitleCard
              text={"About Me"}
              className={"mx-auto mb-8 hidden md:block"}
            />

            <motion.div
              variants={aboutContainer}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {portfolio.summary.map((para, index) => (
                <motion.p
                  variants={aboutItem}
                  key={index}
                  className="text-sm lg:text-base"
                >
                  {para}
                </motion.p>
              ))}
              <motion.q variants={aboutItem} className="text-primary italic">
                {portfolio.quote.text}
                <cite className="float-end mt-2 text-sm text-gray-400">
                  — {portfolio.quote.author}
                </cite>
              </motion.q>
            </motion.div>

            {/* Experience */}
            <section aria-labelledby="experience" className="my-8 space-y-4">
              <TimelineHeader title="Experience" id={"experience"} />
              {portfolio.experience.map((exp) => (
                <TimelineCard
                  key={exp.id}
                  title={exp.title}
                  org={exp.company}
                  from={exp.from}
                  to={exp.to}
                  tags={exp.technologies}
                >
                  {exp.description}
                </TimelineCard>
              ))}
            </section>

            {/* Education */}
            <section aria-labelledby="education" className="my-4 space-y-4">
              <TimelineHeader title="Education" id={"education"} />
              {portfolio.education.map((exp) => (
                <TimelineCard
                  key={exp.id}
                  title={exp.degree}
                  org={exp.institution}
                  from={exp.from}
                  to={exp.to}
                  tags={exp.technologies}
                >
                  {exp.description}
                </TimelineCard>
              ))}
            </section>

            {/* Contact */}
            <ContactOverview
              className={"border-primary flex border-t pt-8 md:hidden"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
