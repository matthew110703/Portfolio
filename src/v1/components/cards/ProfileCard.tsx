import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/v1/components/ui";
import { DownloadOutlined, GithubFilled } from "@/v1/components/icons";
import portfolio from "@/v1/data/portfolio.json";
import * as motion from "motion/react-client";
import { slideInFromLeft, slideInFromRight } from "@/v1/lib/motion";

const githubUsername = portfolio.social.github.split("/").pop();

type ProfileCardVariant = "compact" | "minimal" | "headline";

interface ProfileCardProps {
  variant?: ProfileCardVariant;
  headlineText?: string;
}

const ProfileCard = ({
  variant = "compact",
  headlineText = "",
}: ProfileCardProps) => {
  const variantStyles: Record<ProfileCardVariant, string> = {
    compact: "h-[600px] ",
    minimal: "w-1/3",
    headline: "w-[30%] h-[80px]",
  };

  const elementAttributes: Record<ProfileCardVariant, { avatarSize: number }> =
    {
      compact: {
        avatarSize: 280,
      },
      minimal: {
        avatarSize: 200,
      },
      headline: {
        avatarSize: 60,
      },
    };

  return (
    <motion.div
      variants={variant !== "minimal" ? slideInFromLeft : slideInFromRight}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`bg-primary text-shadow flex min-w-full flex-col justify-between rounded-3xl transition-all md:min-w-[400px] ${variantStyles[variant]} ${variant === "headline" ? "hidden lg:flex" : ""}`}
    >
      {/* Sub-Heading Section */}
      {variant === "compact" && (
        <section id="about">
          <Link
            href={"/v1/about"}
            className="text-primary border-primary flex h-[60px] w-1/2 flex-row items-center justify-evenly rounded-ee-3xl bg-black transition-all duration-200 ease-in-out hover:border-2 hover:shadow-md"
            title="Click to know more about me"
            aria-label="About Me"
          >
            <figure className="h-8 w-8">
              <Icon src={"/icons/react.svg"} size={32} spin alt="ReactJS" />
            </figure>

            <p className="font-main text-2xl font-light">About Me</p>
          </Link>
        </section>
      )}

      {/* Body */}
      <section id="profile-body">
        <div
          className={`flex w-full gap-4 ${variant === "headline" ? "flex-row-reverse items-center justify-center p-1.5 md:flex" : "flex-col p-8"}`}
        >
          {/* Headline */}
          {variant === "headline" && (
            <h1 className="font-title text-2xl font-semibold">
              {headlineText}
            </h1>
          )}
          <motion.figure whileHover={{ scale: 1.05 }}>
            <Image
              src={"/avatar.webp"}
              alt="Avatar, Mathew R"
              width={elementAttributes[variant].avatarSize}
              height={elementAttributes[variant].avatarSize}
              style={{ objectFit: "contain" }}
              priority
              className={`border-shadow rounded-full border-4 ${variant === "headline" ? "justify-self-center" : "justify-self-end"}`}
              title="Hello, Stranger!"
              aria-label="Hello, Stranger!"
            />
          </motion.figure>

          {/* Name */}
          {variant === "compact" || variant === "minimal" ? (
            <div>
              <h1
                className={`text-shadow font-title ${
                  variant === "minimal" ? "text-5xl" : "text-6xl"
                }`}
              >
                <span
                  className={`text-5xl font-light ${
                    variant === "minimal" ? "text-2xl" : "text-3xl"
                  }`}
                >
                  Hey, I&apos;m
                </span>
                <br />
                {portfolio.name}
              </h1>
              <span className="text-sm font-semibold uppercase">
                {portfolio.role}
              </span>
            </div>
          ) : null}
        </div>
      </section>

      {/* Footer */}
      {(variant === "compact" || variant === "minimal") && (
        <aside>
          <div className="flex w-full flex-row items-center justify-between px-4 py-2 text-sm font-light">
            <Link
              href={portfolio.social.github}
              className="flex items-center gap-x-2 hover:font-normal"
              target="_blank"
              rel="noopener noreferrer"
              title="Github Profile"
              aria-label="Github Profile"
            >
              <GithubFilled style={{ fontSize: "16px" }} />
              {githubUsername}
            </Link>
            <a
              href="/Mathew_R_Resume.pdf"
              className="flex items-center gap-x-2 hover:font-normal"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume/CV"
              aria-label="Download Resume/CV"
              download="Mathew_R_Resume.pdf"
            >
              <DownloadOutlined style={{ fontSize: "16px" }} />
              My Resume
            </a>
          </div>
        </aside>
      )}
    </motion.div>
  );
};

export default ProfileCard;
