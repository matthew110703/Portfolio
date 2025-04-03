// UI components
import IconButton from "../buttons/IconButton";
import { navigationLinks } from "@/lib/constants";

const BottomNavigation = () => {
  return (
    <div className="bg-shadow fixed bottom-2 left-1/2 mx-auto max-w-full min-w-sm -translate-x-1/2 rounded-3xl p-4 sm:w-full lg:hidden">
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
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
