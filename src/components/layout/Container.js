// UI components
import SideBar from "./SideBar";
import BottomNavigation from "./BottomNavigation";

const Container = async ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <div className="mx-auto mb-[80px] flex w-full max-w-[1280px] flex-col gap-4 overflow-hidden rounded-3xl bg-black sm:h-full sm:p-4 md:max-h-[900px] md:min-h-[720px] md:flex-row lg:mb-0">
        <SideBar className="place-self-center" />
        <div className="flex-1 overflow-auto">{children}</div>
        <BottomNavigation />
      </div>
    </main>
  );
};

export default Container;
