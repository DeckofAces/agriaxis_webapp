import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import FormSimpleDemo from './routes/demo/form.simple.tsx'
import FormAddressDemo from './routes/demo/form.address.tsx'
import TableDemo from './routes/demo/table.tsx'
import StoreDemo from './routes/demo/store.tsx'
import TanStackQueryDemo from './routes/demo/tanstack-query.tsx'

import Header from './components/Header'

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

import App from './App.tsx'
import AuthIndex from './routes/auth/AuthIndex.tsx'
import GetStartedCard from './routes/auth/GetStartedCard.tsx'
import SelectCountryCard from './routes/auth/SelectCountryCard.tsx'
import FarmTypeCard from './routes/auth/FarmTypeCard.tsx'
import Signin from './routes/auth/Signin.tsx'
import ForgotPassword from './routes/auth/ForgotPassword.tsx'
import OtpVerification from './routes/auth/OtpVerification.tsx'
import ResetPassword from './routes/auth/ResetPassword.tsx'
import Signup from './routes/auth/Signup.tsx'
import Organisation from './routes/auth/Organisation.tsx'
import Splash from './routes/Splash.tsx'
import DashboardRoot from './routes/dashboard/dashboard-root.tsx'
import DashboardIndex from './routes/dashboard/index.tsx'
import soilTesting from './routes/dashboard/soil-testing.tsx'
import cropInformation from './routes/dashboard/crop-information.tsx'
import cropMonitoring from './routes/dashboard/crop-monitoring.tsx'
import CreatePassword from './routes/auth/CreatePassword.tsx'

const rootRoute = createRootRoute({
  component: () => (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const splashRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/splash',
  component: Splash,
})

const authRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: 'auth',
  component: AuthIndex
})

const getStartedRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'get-started',
  component: GetStartedCard
})

const selectCountryRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'select-country',
  component: SelectCountryCard
})

const farmTypeRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'farm-type',
  component: FarmTypeCard
})

const signinRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'signin',
  component: Signin
})

const createPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'create-password',
  component: CreatePassword
})

const forgotPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'forgot-password',
  component: ForgotPassword
})

const otpVerificationRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'otp-verification',
  component: OtpVerification
})

const resetPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'reset-password',
  component: ResetPassword
})

const signupRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'signup',
  component: Signup
})

const organisationRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'organisation',
  component: Organisation
})

const dashboardRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: 'dashboard',
  component: DashboardRoot
})

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: 'dashboard',
  component: DashboardIndex
})

const soilTestingRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: 'soil-testing',
  component: soilTesting
})

const cropInformationRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: 'crop-information',
  component: cropInformation
})

const cropMonitoringRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: 'crop-monitoring',
  component: cropMonitoring
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  splashRoute,
  authRoute,
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
  dashboardRoute,
  dashboardIndexRoute,
  soilTestingRoute,
  cropInformationRoute,
  cropMonitoringRoute,
  FormSimpleDemo(rootRoute),
  FormAddressDemo(rootRoute),
  TableDemo(rootRoute),
  StoreDemo(rootRoute),
  TanStackQueryDemo(rootRoute),
])

const TanStackQueryProviderContext = TanStackQueryProvider.getContext()
const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProviderContext,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <RouterProvider router={router} />
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
