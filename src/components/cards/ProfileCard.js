import PropTypes from "prop-types";
import React from "react";

// Next imports
import Image from "next/image";
import Link from "next/link";

// UI components
import Icon from "../ui/Icon";
import { FileDownloadOutlined } from "@mui/icons-material";

const ProfileCard = ({ variant = "compact", headlineText = "" }) => {
  const variantStyles = {
    compact: "h-[600px]",
    minimal: "w-1/3",
    headline: "w-1/2",
  };

  // Element attributes based on variant (for responsive design)
  const elementAttributes = {
    compact: {
      avatarSize: 280,
    },
    minimal: {
      avatarSize: 180,
    },
  };

  return (
    <div
      role="button"
      className={`flex flex-col justify-between w-full lg:w-[400px] bg-primary text-shadow rounded-3xl transition-all  ${variantStyles[variant]}`}
    >
      {/* Sub-Heading Section  */}
      {variant === "compact" && (
        <section id="sub-head">
          <div className="flex flex-row items-center justify-evenly h-[60px] w-1/2  bg-black text-primary rounded-ee-3xl">
            <figure>
              <Icon src={"/icons/react.svg"} size={32} />
            </figure>

            <p className="text-2xl font-main font-light">About Me</p>
          </div>
        </section>
      )}

      {/* Body  */}
      <section id="profile-body">
        <div className="w-full p-8 flex flex-col gap-4">
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
                className={`text-shadow font-title  ${
                  variant === "minimal" ? "text-5xl" : "text-6xl"
                }`}
              >
                <span
                  className={`font-light text-5xl ${
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
          <div className="py-2 px-4 w-full flex flex-row items-center justify-between text-sm font-light">
            <Link href={"/"} className="flex gap-x-1 items-center">
              <Icon src={"/icons/github.svg"} size={20} />
              UnknownLoop11
            </Link>
            <Link href={"/"} className="flex gap-x-1 items-center">
              My Resume
              <FileDownloadOutlined />
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
