"use client";

import React, { useState } from "react";

// UI components
import IconButton from "../buttons/IconButton";
import { navigationLinks } from "@/lib/constants";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:hidden fixed left-1/2 bottom-2 transform -translate-x-1/2 w-full max-w-screen-md  bg-shadow p-4 rounded-3xl">
      <nav>
        <ul className="list-none flex justify-around">
          {navigationLinks.map((nav, idx) => {
            return (
              <li key={idx}>
                <IconButton
                  icon={nav.icon}
                  activeIcon={nav.activeIcon}
                  active={activeTab === idx}
                  ariaLabel={nav.label}
                  onClick={() => setActiveTab(idx)}
                  href={nav.href}
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
