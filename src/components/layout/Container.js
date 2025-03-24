import React from "react";

// UI components
import Navbar from "./Navbar";
import BottomNavigation from "../ui/BottomNavigation";

const Container = ({ children }) => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="relative lg:pl-20 py-3 md:px-6 md:container mx-auto bg-black rounded-3xl overflow-auto mb-16 lg:mb-0">
        <Navbar />
        <BottomNavigation />
        {children}
      </div>
    </main>
  );
};

export default Container;
