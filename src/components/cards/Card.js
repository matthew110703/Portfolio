import React from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";
import Link from "next/link";

// UI components
import { LinkButton } from "@/components";

const Card = ({
  className,
  maxWidth,
  height,
  image,
  title,
  actions = [],
  href,
}) => {
  return (
    <article
      className={`relative w-auto border-2 border-primary rounded-3xl transition-all shadow shadow-primary ${className}`}
      style={{
        minWidth: "200px",
        maxWidth,
        height,
      }}
    >
      <Image src={image} alt={title} fill className="aspect-video" />
      <header>
        <h3 className="text-base font-semibold ml-3 mt-1">{title}</h3>
      </header>
      <div className="mx-2 absolute bottom-2 right-0 left-0 flex justify-around bg-shadow bg-opacity-60 p-1 rounded-3xl">
        {actions.map((action, idx) => {
          return (
            <LinkButton
              key={idx}
              text={action.label}
              href={action.href}
              icon={action.icon}
            />
          );
        })}
      </div>
    </article>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  title: PropTypes.string,
  actions: PropTypes.arrayOf({
    label: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.element,
  }),
  href: PropTypes.string,
};

export default Card;
