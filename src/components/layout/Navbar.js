import React from "react";

// Next imports
import Image from "next/image";
import Link from "next/link";

// Constants
import { navigationLinks } from "@/lib/constants";

const Navbar = () => {
  return (
    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 hidden lg:flex bg-shadow w-16 h-[600px] py-8 rounded-3xl flex-col items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/icons/dev.png"}
          alt="dev"
          width={32}
          height={32}
          priority
        />
      </Link>
      <nav className="flex flex-col items-center gap-12 ">
        {navigationLinks.reverse().map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="p-3 origin-center -rotate-90 text-primary text-sm font-semibold hover:shadow-primary hover:shadow rounded-3xl transition-all"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
