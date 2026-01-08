import { createRoute, Outlet, type AnyRoute } from "@tanstack/react-router";
import fullLogo from "/assets/icons/full-logo.svg";

function AuthLayout() {
  return (
    <main className="relative grid h-screen w-screen place-items-center bg-[#E7F2ED]">
      <img
        src={fullLogo}
        width={183}
        height={49}
        className="absolute top-20 left-20"
      />
      <Outlet />
    </main>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    id: "auth",
    component: AuthLayout,
    getParentRoute: () => parentRoute,
  });
