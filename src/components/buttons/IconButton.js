"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const IconButton = ({
  icon,
  href = "/",
  className,
  size = 32,
  activeIcon,
  onClick,
  title = "",
  ...rest
}) => {
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
