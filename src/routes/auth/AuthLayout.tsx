import {
  createRoute,
  Link,
  Outlet,
  redirect,
  type AnyRoute,
} from "@tanstack/react-router";
import fullLogo from "/assets/icons/full-logo.svg";
import { userToken } from "@/lib/utils";

function AuthLayout() {
  return (
    <main className="relative grid h-screen w-screen place-items-center bg-[#E7F2ED]">
      <Link to="/">
        <img
          src={fullLogo}
          width={183}
          height={49}
          className="absolute top-20 left-20"
        />
      </Link>
      <div className="z-5">
        <Outlet />
      </div>
    </main>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    id: "auth",
    component: AuthLayout,
    getParentRoute: () => parentRoute,
    beforeLoad: ({ location }) => {
      if (userToken()) {
        throw redirect({
          to: "/dashboard",
          search: {
            redirect: location.href,
          },
          replace: true,
        });
      }
    },
  });
