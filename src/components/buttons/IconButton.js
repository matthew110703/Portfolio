"use client";

import React from "react";
import Link from "next/link";

const IconButton = ({
  icon,
  href = "/",
  className,
  size = 32,
  active = false,
  activeIcon,
  ariaLabel = "icon",
  onClick,
}) => {
  return (
    <Link
      role="button"
      href={href}
      className={`text-primary w-${size / 4} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {activeIcon && active ? activeIcon : icon}
    </Link>
  );
};

export default IconButton;
