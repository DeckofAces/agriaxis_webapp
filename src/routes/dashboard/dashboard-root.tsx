import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { useSidebar, SidebarProvider } from "@/contexts/SidebarContext";
import { useEffect } from "react";

function DashboardRootContent() {
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
        className={`max-lg:h-[calc(100%-2rem)] max-lg:top-4 fixed inset-y-0 z-50 w-65 transform transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
        />
      )}

      <section
        className={`ml-4 flex h-full w-full flex-col transition-all duration-300 lg:ml-0`}
      >
        <div className="mb-1">
          <DashboardHeader />
        </div>
        <div className="flex-1 overflow-y-auto rounded-lg bg-white shadow">
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default function DashboardRoot() {
  return (
    <SidebarProvider>
      <DashboardRootContent />
    </SidebarProvider>
  );
}
