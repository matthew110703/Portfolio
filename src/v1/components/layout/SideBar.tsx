import Link from "next/link";
import { Icon } from "@/v1/components/ui";
import { NavLink } from "@/v1/components/buttons";
import * as motion from "motion/react-client";
import { slideInFromLeft } from "@/v1/lib/motion";
import { navigationLinks } from "@/v1/lib/constants";

const SideBar = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`bg-shadow inset-shadow-primary hidden h-full max-h-[720px] min-h-[600px] flex-col items-center justify-between rounded-3xl py-8 inset-shadow-sm lg:flex ${className}`}
      {...slideInFromLeft}
    >
      <Link href={"/v1"} title="Home">
        <Icon src={"/icons/dev.png"} alt="Matthew110703 - Home" size={32} />
      </Link>
      <nav
        aria-label="Main navigation"
        className="flex flex-col-reverse items-center gap-y-12 place-self-end"
      >
        {navigationLinks.map((link) => (
          <NavLink key={link.label} href={link.href} text={link.label} />
        ))}
      </nav>
    </motion.div>
  );
};

export default SideBar;
