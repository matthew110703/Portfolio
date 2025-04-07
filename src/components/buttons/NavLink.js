"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href = "#", text = "", className, ...rest }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      title={text}
      className={`hover:shadow-primary origin-center -rotate-90 rounded-3xl p-2 text-sm font-semibold transition-all hover:shadow-sm ${pathname === href ? "text-primary" : "text-primary/60"} ${className}`}
      {...rest}
    >
      {text}
    </Link>
  );
};

export default NavLink;
