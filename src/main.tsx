import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";

import * as TanStackQueryProvider from "./integrations/tanstack-query/root-provider.tsx";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";

import App from "./App.tsx";
import AuthLayoutRoute from "./routes/auth/AuthLayout.tsx";
import GetStartedRoute from "./routes/auth/GetStartedCard.tsx";
import SelectCountryRoute from "./routes/auth/SelectCountryCard.tsx";
import FarmTypeRoute from "./routes/auth/FarmTypeCard.tsx";
import SigninRoute from "./routes/auth/Signin.tsx";
import ForgotPasswordRoute from "./routes/auth/ForgotPassword.tsx";
import OtpVerificationRoute from "./routes/auth/OtpVerification.tsx";
import ResetPasswordRoute from "./routes/auth/ResetPassword.tsx";
import SignupRoute from "./routes/auth/Signup.tsx";
import OrganisationRoute from "./routes/auth/Organisation.tsx";
import Splash from "./routes/Splash.tsx";
import DashboardLayoutRoute from "./routes/dashboard/DashboardLayout.tsx";
import DashboardIndexRoute from "./routes/dashboard/DashboardIndex.tsx";
import SoilTestingRoute from "./routes/dashboard/SoilTesting.tsx";
import CropInformationRoute from "./routes/dashboard/CropInformation.tsx";
import CropMonitoringRoute from "./routes/dashboard/CropMonitoring.tsx";
import CreatePasswordRoute from "./routes/auth/CreatePassword.tsx";
import RolesRoute from "./routes/dashboard/Roles.tsx";
import UsersRoute from "./routes/dashboard/Users.tsx";

const rootRoute = createRootRoute({
  component: App,
});

const splashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/splash",
  component: Splash,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({
      to: "/get-started",
      replace: true,
    });
  },
});

// const authRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   id: "auth",
//   component: AuthLayout,
// });

// const getStartedRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "get-started",
//   component: GetStartedCard,
// });

// const selectCountryRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "select-country",
//   component: SelectCountryCard,
// });

// const farmTypeRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "farm-type",
//   component: FarmTypeCard,
// });

// const signinRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "signin",
//   component: Signin,
// });

// const createPasswordRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "create-password",
//   component: CreatePassword,
// });

// const forgotPasswordRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "forgot-password",
//   component: ForgotPassword,
// });

// const otpVerificationRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "otp-verification",
//   component: OtpVerification,
// });

// const resetPasswordRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "reset-password",
//   component: ResetPassword,
// });

// const signupRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "signup",
//   component: Signup,
// });

// const organisationRoute = createRoute({
//   getParentRoute: () => authRoute,
//   path: "organisation",
//   component: Organisation,
// });

// const dashboardRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "dashboard",
//   component: DashboardLayout,
// });

const dashboardHomeRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/",
  staticData: {
    title: "Dashboard",
  },
  loader: () => {
    throw redirect({
      to: "/dashboard/dashboard",
      replace: true,
    });
  },
});

// const dashboardHomeRoute = createRoute({
//   getParentRoute: () => dashboardLayoutRoute,
//   path: "dashboard",
//   component: DashboardIndex,
//   staticData: {
//     title: "Dashboard",
//   },
// });

// const soilTestingRoute = createRoute({
//   getParentRoute: () => dashboardRoute,
//   path: "soil-testing",
//   component: soilTesting,
//   staticData: {
//     title: "Soil Testing",
//   },
// });

// const cropInformationRoute = createRoute({
//   getParentRoute: () => dashboardRoute,
//   path: "crop-information",
//   component: cropInformation,
//   staticData: {
//     title: "Crop Information",
//   },
// });

// const cropMonitoringRoute = createRoute({
//   getParentRoute: () => dashboardRoute,
//   path: "crop-monitoring",
//   component: cropMonitoring,
//   staticData: {
//     title: "Crop Monitoring",
//   },
// });

// const rolesRoute = createRoute({
//   getParentRoute: () => dashboardRoute,
//   path: "roles",
//   component: roles,
//   staticData: {
//     title: "Roles & Permission",
//   },
// });

// const usersRoute = createRoute({
//   getParentRoute: () => dashboardRoute,
//   path: "users",
//   component: users,
//   staticData: {
//     title: "User Management",
//   },
// });

const authRoute = AuthLayoutRoute(rootRoute);
const dashboardLayoutRoute = DashboardLayoutRoute(rootRoute);

const routeTree = rootRoute.addChildren([
  splashRoute,
  indexRoute,
  authRoute.addChildren([
    GetStartedRoute(authRoute),
    SelectCountryRoute(authRoute),
    FarmTypeRoute(authRoute),
    SigninRoute(authRoute),
    CreatePasswordRoute(authRoute),
    ForgotPasswordRoute(authRoute),
    OtpVerificationRoute(authRoute),
    ResetPasswordRoute(authRoute),
    SignupRoute(authRoute),
    OrganisationRoute(authRoute),
  ]),
  dashboardLayoutRoute.addChildren([
    dashboardHomeRoute,
    DashboardIndexRoute(dashboardLayoutRoute),
    SoilTestingRoute(dashboardLayoutRoute),
    CropInformationRoute(dashboardLayoutRoute),
    CropMonitoringRoute(dashboardLayoutRoute),
    RolesRoute(dashboardLayoutRoute),
    UsersRoute(dashboardLayoutRoute),
  ]),
]);

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProviderContext,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <RouterProvider router={router} />
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
