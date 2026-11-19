"use client";

import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps extends Omit<
  ComponentProps<typeof Link>,
  "href" | "children"
> {
  href?: string;
  text?: string;
  className?: string;
}

const NavLink = ({
  href = "#",
  text = "",
  className = "",
  ...rest
}: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      title={text}
      aria-current={pathname === href ? "page" : undefined}
      className={`hover:shadow-primary origin-center -rotate-90 rounded-3xl p-2 text-sm font-semibold transition-all hover:shadow-sm ${pathname === href ? "text-primary" : "text-primary/60"} ${className}`}
      {...rest}
    >
      {text}
    </Link>
  );
};

export default NavLink;
