import React from "react";

import TimelineCard from "@/components/cards/TimelineCard";

const Test = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <TimelineCard
        from="Sep 2024"
        to="Present"
        title="Software Engineer"
        subTitle="Google"
        tags={["React", "Node.js", "Firebase"]}
      >
        <p>
          I work as a Software Engineer at Google, where I help build scalable
          and efficient web applications. My role involves collaborating with
          cross-functional teams to design, develop, and deploy innovative
          solutions that meet the needs of our users.
        </p>
        <p>
          I specialize in front-end technologies such as React and back-end
          technologies like Node.js. I also have experience working with
          Firebase for serverless applications.
        </p>
      </TimelineCard>
    </div>
  );
};

export default Test;
