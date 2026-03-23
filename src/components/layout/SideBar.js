// Next imports
import Link from "next/link";

// UI
import { Icon } from "../ui";
import { NavLink } from "../buttons";

// Motion
import * as motion from "motion/react-client";
import { slideInFromLeft } from "@/lib/motion";

// Constants
import { navigationLinks } from "@/lib/constants";

const SideBar = ({ className }) => {
  return (
    <motion.div
      className={`bg-shadow inset-shadow-primary hidden h-full max-h-[720px] min-h-[600px] flex-col items-center justify-between rounded-3xl py-8 inset-shadow-sm lg:flex ${className}`}
      {...slideInFromLeft}
    >
      <Link href={"/"} title="GitHub Profile">
        <Icon
          src={"/icons/dev.png"}
          alt="Matthew110703 - GitHub Profile"
          size={32}
        />
      </Link>
      <nav aria-label="Main navigation" className="flex flex-col-reverse items-center gap-y-12 place-self-end">
        {navigationLinks.map((link) => (
          <NavLink key={link.label} href={link.href} text={link.label} />
        ))}
      </nav>
    </motion.div>
  );
};

export default SideBar;
