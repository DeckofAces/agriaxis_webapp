import { Outlet } from '@tanstack/react-router'
import fullLogo from '/assets/icons/full-logo.svg'

export default function AuthLayout() {
  return (
    <main className="relative grid h-screen w-screen place-items-center bg-[#E7F2ED]">
        <img src={fullLogo} width={183} height={49} className='absolute top-20 left-20' />
        <Outlet />
    </main>
  )
}
