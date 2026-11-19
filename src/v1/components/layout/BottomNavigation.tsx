import IconButton from "@/v1/components/buttons/IconButton";
import { navigationLinks } from "@/v1/lib/constants";
import * as motion from "motion/react-client";
import { slideInFromBottom } from "@/v1/lib/motion";

const BottomNavigation = () => {
  return (
    <motion.div
      {...slideInFromBottom}
      className="bg-shadow fixed bottom-2 left-1/2 mx-auto max-w-full min-w-sm -translate-x-1/2 rounded-3xl p-4 sm:w-full lg:hidden"
    >
      <nav aria-label="Mobile navigation">
        <ul className="flex list-none justify-around">
          {navigationLinks.map((nav) => {
            return (
              <li key={nav.href}>
                <IconButton
                  icon={nav.icon}
                  activeIcon={nav.activeIcon}
                  href={nav.href}
                  title={nav.label}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

export default BottomNavigation;
