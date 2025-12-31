import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "@tanstack/react-router";

export default function DashboardRoot() {
  return (
    <section className="bg-[#F3F6F8] w-screen h-screen p-4 overflow-x-hidden stable-gutter">
      <div className="w-64 fixed top-4 left-4 h-[calc(100%-2rem)]">
        <Sidebar />
      </div>
      <section className="w-[calc(100vw-20rem)] ml-auto flex flex-col gap-1 h-full">
        <div className="">
          <DashboardHeader />
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </section>
    </section>
  )
}
