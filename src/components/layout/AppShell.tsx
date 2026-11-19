import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";

const AppShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        aria-hidden="true"
        className="bg-tech-grid pointer-events-none fixed inset-x-0 top-0 -z-10 h-[560px]"
      />
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-4 pt-10 pb-20 sm:px-6 md:pt-14 md:pb-20 lg:px-8"
      >
        {children}
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default AppShell;
