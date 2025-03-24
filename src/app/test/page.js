import React from "react";

// UI
// import {
//   ContactLink,
//   IconButton,
//   LinkButton,
//   ViewAllButton,
// } from "@/components/buttons";
import { Icon, SkillsShowcase } from "@/components/ui";
import {
  ProjectCard,
  ProfileCard,
  TimelineCard,
  TitleCard,
} from "@/components/cards";
import { SideBar, BottomNavigation } from "@/components/layout";
import { HomeFilled, GithubFilled } from "@ant-design/icons";

const Test = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      {/* <BottomNavigation /> */}
      {/* <SkillsShowcase /> */}

      {/* <ProjectCard
        image="/project/cms.png"
        title={"Clinic Management System"}
        details={{
          source: "https://www.example.com",
          live: "www.example.com",
          description: "This is a project description",
          keyPoints: ["point 1", "point 2", "point 3"],
          tags: ["tag 1", "tag 2", "tag 3"],
        }}
      /> */}

      {/* <ProfileCard variant="headline" headlineText="Designing, the future" /> */}

      {/* <TimelineCard
        title="Software Developer"
        org="Company Name"
        from="Sep 2019"
        to="Oct 2021"
        tags={["React", "Node", "MongoDB", "Express"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        consectetur, justo eget aliquam fermentum, turpis ex dignissim tortor,
        nec tristique mi nunc sit amet libero. Nullam nec consectetur lacus.
      </TimelineCard> */}

      {/* <TitleCard text={"Portfolio"} /> */}
      {/* <SideBar /> */}
    </div>
  );
};

export default Test;
