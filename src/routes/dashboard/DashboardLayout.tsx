import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { useSidebar, SidebarProvider } from "@/contexts/SidebarContext";
import { useEffect } from "react";

function DashboardLayoutContent() {
  const { isOpen, close } = useSidebar();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        close();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [close]);

  return (
    <section className="stable-gutter h-screen w-screen gap-4 overflow-hidden bg-[#F3F6F8] p-4 lg:flex">
      <div
        className={`fixed inset-y-0 z-30 w-65 transform transition-transform duration-300 ease-in-out max-lg:top-4 max-lg:h-[calc(100%-2rem)] lg:static lg:inset-0 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={close}
        />
      )}

      <section className="ml-4 flex h-full w-full flex-col gap-2 pr-4 transition-all duration-300 lg:ml-0 lg:pr-0">
        <div className="">
          <DashboardHeader />
        </div>
        <div className="flex-1 overflow-y-auto rounded-lg bg-white shadow">
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardLayoutContent />
    </SidebarProvider>
  );
}
