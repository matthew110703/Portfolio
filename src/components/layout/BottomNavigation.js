// UI components
import IconButton from "../buttons/IconButton";
import { navigationLinks } from "@/lib/constants";

// Motion
import * as motion from "motion/react-client";
import { slideInFromBottom } from "@/lib/motion";

const BottomNavigation = () => {
  return (
    <motion.div
      variants={slideInFromBottom}
      {...slideInFromBottom}
      className="bg-shadow fixed bottom-2 left-1/2 mx-auto max-w-full min-w-sm -translate-x-1/2 rounded-3xl p-4 sm:w-full lg:hidden"
    >
      <nav>
        <ul className="flex list-none justify-around">
          {navigationLinks.map((nav, idx) => {
            return (
              <li key={idx}>
                <IconButton
                  icon={nav.icon}
                  activeIcon={nav.activeIcon}
                  href={nav.href}
                  title={nav.label}
                  alt={nav.label}
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
