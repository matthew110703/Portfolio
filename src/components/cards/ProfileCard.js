import PropTypes from "prop-types";
import React from "react";

// Next imports
import Image from "next/image";
import Link from "next/link";

// UI
import { Icon } from "../ui";

// Icons
import { GithubFilled, DownloadOutlined } from "@ant-design/icons";

const ProfileCard = ({ variant = "compact", headlineText = "" }) => {
  const variantStyles = {
    compact: "h-[600px]",
    minimal: "w-1/3",
    headline: "",
  };

  // Element attributes based on variant (for responsive design)
  const elementAttributes = {
    compact: {
      avatarSize: 280,
    },
    minimal: {
      avatarSize: 200,
    },
    headline: {
      avatarSize: 128,
    },
  };

  return (
    <div
      className={`bg-primary text-shadow flex w-full flex-col justify-between rounded-3xl transition-all sm:w-[400px] ${variantStyles[variant]}`}
    >
      {/* Sub-Heading Section  */}
      {variant === "compact" && (
        <section id="sub-head">
          <Link
            href={"/about"}
            className="text-primary flex h-[60px] w-1/2 flex-row items-center justify-evenly rounded-ee-3xl bg-black"
          >
            <figure>
              <Icon src={"/icons/react.svg"} size={32} />
            </figure>

            <p className="font-main text-2xl font-light">About Me</p>
          </Link>
        </section>
      )}

      {/* Body  */}
      <section id="profile-body">
        <div
          className={`w-full gap-4 p-8 ${variant === "headline" ? "hidden flex-row md:flex" : "flex flex-col"}`}
        >
          {/* Headline  */}
          {variant === "headline" && (
            <div>
              <h1 className="font-title w-5/6 text-4xl">{headlineText}</h1>
            </div>
          )}
          <figure>
            <Image
              src={"/avatar.png"}
              alt="avatar"
              width={elementAttributes[variant].avatarSize}
              height={elementAttributes[variant].avatarSize}
              style={{ objectFit: "contain" }}
              priority
              className="justify-self-end"
            />
          </figure>

          {/* Name  */}
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
                Mathew R
              </h1>
              <span className="text-sm font-semibold uppercase">
                Web Developer
              </span>
            </div>
          ) : null}
        </div>
      </section>

      {/* Footer  */}
      {(variant === "compact" || variant === "minimal") && (
        <aside>
          <div className="flex w-full flex-row items-center justify-between px-4 py-2 text-sm font-light">
            <Link
              href={"/"}
              className="flex items-center gap-x-2 hover:font-normal"
            >
              <GithubFilled style={{ fontSize: "16px" }} />
              Matthew110703
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-x-2 hover:font-normal"
            >
              <DownloadOutlined style={{ fontSize: "16px" }} />
              My Resume
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  variant: PropTypes.oneOf(["compact", "minimal", "headline"]),
  headlineText: PropTypes.string,
};

export default ProfileCard;
