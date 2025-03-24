import React from "react";

import Link from "next/link";

const LinkButton = ({ text, href, className, icon }) => {
  return (
    <Link
      href={href}
      role="button"
      className={`text-shadow text-xs font-semibold bg-primary py-1 px-3 rounded-3xl flex items-center gap-x-1.5 ${className}`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default LinkButton;
