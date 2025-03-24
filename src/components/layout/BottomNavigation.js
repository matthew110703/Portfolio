// UI components
import IconButton from "../buttons/IconButton";
import { navigationLinks } from "@/lib/constants";

const BottomNavigation = () => {
  return (
    <div className="bg-shadow fixed bottom-2 w-full rounded-3xl p-4 lg:hidden">
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
