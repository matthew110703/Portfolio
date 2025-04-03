// UI
import { ProfileCard, ProjectCard, TitleCard } from "@/components/cards";
import { ViewAllButton, ContactLink, LinkButton } from "@/components/buttons";
import { Icon, SkillsShowcase } from "@/components/ui";

// Icons
import {
  LinkedinFilled,
  GithubOutlined,
  XOutlined,
  MailFilled,
} from "@ant-design/icons";

import portfolio from "@/lib/portfolio.json";

const Home = () => {
  return (
    <section aria-label="Home" className="h-full w-full space-y-4">
      <div className="flex items-center gap-4">
        <ProfileCard />
        {/* Overview */}
        <div className="hidden w-full flex-col items-center gap-4 md:flex">
          <TitleCard text={"Welcome"} className={"max-w-full"} />
          <div className="flex gap-4">
            <ProjectCard {...portfolio.projects[0]} />
            <ViewAllButton />
          </div>
          <div className="flex w-full gap-4">
            <ProjectCard
              {...portfolio.projects[1]}
              style={{ maxHeight: "400px" }}
              className={"h-[300px] lg:h-[200px]"}
            />
            <SkillsShowcase className={"hidden lg:flex"} />
          </div>
        </div>
      </div>

      <section aria-label="About">
        <div className="border-primary flex flex-col items-center gap-4 rounded-3xl border-2 p-4 lg:flex-row">
          <p className="basis-3/5 text-justify text-base">{portfolio.about}</p>

          <div className="flex flex-col items-center gap-4 lg:items-start">
            <ContactLink
              icon={<MailFilled />}
              text={"macmatthew724@gmail.com"}
            />
            <ContactLink
              icon={<Icon src={"/icons/pin.svg"} alt="pin" size={24} />}
              text={"Bangalore, Karnataka"}
            />

            <div className="flex flex-wrap gap-4">
              <LinkButton
                icon={<LinkedinFilled />}
                href={portfolio.social.likedin}
                text={"LinkedIn"}
              />
              <LinkButton
                icon={<GithubOutlined />}
                href={portfolio.social.github}
                text={"Github"}
              />
              <LinkButton
                icon={<XOutlined />}
                href={portfolio.social.twitter}
                text={"Twitter"}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
