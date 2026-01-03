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
import AuthLayout from "./routes/auth/AuthLayout.tsx";
import GetStartedCard from "./routes/auth/GetStartedCard.tsx";
import SelectCountryCard from "./routes/auth/SelectCountryCard.tsx";
import FarmTypeCard from "./routes/auth/FarmTypeCard.tsx";
import Signin from "./routes/auth/Signin.tsx";
import ForgotPassword from "./routes/auth/ForgotPassword.tsx";
import OtpVerification from "./routes/auth/OtpVerification.tsx";
import ResetPassword from "./routes/auth/ResetPassword.tsx";
import Signup from "./routes/auth/Signup.tsx";
import Organisation from "./routes/auth/Organisation.tsx";
import Splash from "./routes/Splash.tsx";
import DashboardLayout from "./routes/dashboard/DashboardLayout.tsx";
import DashboardIndex from "./routes/dashboard/index.tsx";
import soilTesting from "./routes/dashboard/SoilTesting.tsx";
import cropInformation from "./routes/dashboard/CropInformation.tsx";
import cropMonitoring from "./routes/dashboard/CropMonitoring.tsx";
import CreatePassword from "./routes/auth/CreatePassword.tsx";
import roles from "./routes/dashboard/Roles.tsx";
import users from "./routes/dashboard/Users.tsx";

const rootRoute = createRootRoute({
  component: App
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
      replace: true
    })
  }
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: AuthLayout,
});

const getStartedRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "get-started",
  component: GetStartedCard,
});

const selectCountryRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "select-country",
  component: SelectCountryCard,
});

const farmTypeRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "farm-type",
  component: FarmTypeCard,
});

const signinRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "signin",
  component: Signin,
});

const createPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "create-password",
  component: CreatePassword,
});

const forgotPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "forgot-password",
  component: ForgotPassword,
});

const otpVerificationRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "otp-verification",
  component: OtpVerification,
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "reset-password",
  component: ResetPassword,
});

const signupRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "signup",
  component: Signup,
});

const organisationRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "organisation",
  component: Organisation,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: DashboardLayout,
});

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "/",
  staticData: {
    title: "Dashboard",
  },
  loader: () => {
    throw redirect({
      to: "/dashboard/dashboard",
      replace: true
    })
  }
});

const dashboardHomeRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "dashboard",
  component: DashboardIndex,
  staticData: {
    title: "Dashboard",
  },
});

const soilTestingRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "soil-testing",
  component: soilTesting,
  staticData: {
    title: "Soil Testing",
  },
});

const cropInformationRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "crop-information",
  component: cropInformation,
  staticData: {
    title: "Crop Information",
  },
});

const cropMonitoringRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "crop-monitoring",
  component: cropMonitoring,
  staticData: {
    title: "Crop Monitoring",
  },
});

const rolesRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "roles",
  component: roles,
  staticData: {
    title: "Roles & Permission",
  },
});

const usersRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "users",
  component: users,
  staticData: {
    title: "User Management",
  },
});

const routeTree = rootRoute.addChildren([
  splashRoute,
  indexRoute,
  authRoute.addChildren([
    getStartedRoute,
    selectCountryRoute,
    farmTypeRoute,
    signinRoute,
    createPasswordRoute,
    forgotPasswordRoute,
    otpVerificationRoute,
    resetPasswordRoute,
    signupRoute,
    organisationRoute,
  ]),
  dashboardRoute.addChildren([
    dashboardIndexRoute,
    dashboardHomeRoute,
    soilTestingRoute,
    cropInformationRoute,
    cropMonitoringRoute,
    rolesRoute,
    usersRoute,
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
