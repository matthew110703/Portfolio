import React from "react";

// UI Components
import { ProfileCard, SkillsShowcase, TitleCard } from "@/components";

const About = () => {
  return (
    <section className="lg:flex gap-x-3 space-y-3 lg:space-y-0">
      {/* Profile */}
      <div>
        <ProfileCard />
        <SkillsShowcase />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <TitleCard text="About Me" />

        <p>
          I am a passionate and versatile Full Stack Web Developer with a strong
          foundation in designing, developing, and deploying dynamic web
          applications. With expertise in both front-end and back-end
          technologies, I specialize in creating seamless user experiences and
          robust server-side functionality.
        </p>

        <p>
          Driven by curiosity and a love for problem-solving, I thrive in
          building scalable and efficient solutions, from responsive web
          interfaces to API integrations. As a developer, I place a strong
          emphasis on code quality, collaboration, and continuous learning to
          keep up with evolving industry standards. Whether it&apos;s crafting
          innovative user experiences or optimizing server-side logic, I take
          pride in delivering projects that meet both technical and business
          goals.
        </p>

        <p>
          I&apos;m always eager to contribute to impactful projects and explore
          new opportunities to grow as a developer. Let&apos;s build something
          amazing together!
        </p>

        <p>
          “Let me take you into a deeper experience, make a moment a lasting
          conveyable memory. Let me help build your tribe.”
          <blockquote>-- Deep Immersion</blockquote>
        </p>
      </div>
    </section>
  );
};

export default About;
