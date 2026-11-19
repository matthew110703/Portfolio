"use client";

import type { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IconButtonProps extends Omit<
  ComponentProps<typeof Link>,
  "href" | "children"
> {
  icon: ReactNode;
  activeIcon?: ReactNode;
  href?: string;
  className?: string;
  size?: 32 | 40 | 48;
  title?: string;
}

const IconButton = ({
  icon,
  href = "/v1",
  className = "",
  size = 32,
  activeIcon,
  onClick,
  title = "",
  ...rest
}: IconButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      role="button"
      href={href}
      className={`text-primary ${size === 40 ? "w-10" : size === 48 ? "w-12" : "w-8"} ${className}`}
      aria-label={title}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {activeIcon && pathname === href ? activeIcon : icon}
    </Link>
  );
};

export default IconButton;
