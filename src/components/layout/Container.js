import React from "react";

// UI components
import SideBar from "./SideBar";
import BottomNavigation from "./BottomNavigation";

const Container = ({ children }) => {
  return (
    <main className="grid h-screen place-items-center">
      <div className="flex max-h-full w-full max-w-7xl flex-col rounded-3xl bg-black p-4 md:h-[720px] md:max-h-[720px] lg:flex-row">
        <SideBar className={"place-self-center"} />
        {children}
        <BottomNavigation />
      </div>
    </main>
  );
};

export default Container;
