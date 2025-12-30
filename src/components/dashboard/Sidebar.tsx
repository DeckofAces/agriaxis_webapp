import React from 'react';
import { Home, Pencil, Leaf, Settings, ShoppingCart, UserCog, Users, LogOut, type LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface NavItemType {
  name: string;
  icon: LucideIcon;
  href: string;
  isActive: boolean;
}

const navItems: NavItemType[] = [
  { name: 'Dashboard', icon: Home, href: '/dashboard/dashboard', isActive: false },
  { name: 'Soil Testing', icon: Pencil, href: '/dashboard/soil-testing', isActive: false },
  { name: 'Crop Information', icon: Leaf, href: '/dashboard/crop-information', isActive: false },
  { name: 'Crop Monitoring', icon: Settings, href: '/dashboard/crop-monitoring', isActive: false },
  { name: 'Market place', icon: ShoppingCart, href: '/dashboard', isActive: false },
  { name: 'Roles & permission', icon: UserCog, href: '/dashboard/roles', isActive: false },
  { name: 'Users', icon: Users, href: '/dashboard/users', isActive: false },
];

interface NavItemProps {
  name: string;
  Icon: LucideIcon;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, Icon, href, isActive, onClick }) => {
  const baseClasses = "flex items-center space-x-3 p-3 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer";
  const activeClasses = "bg-white text-[#1E8838] shadow-md";
  const inactiveClasses = "text-white hover:bg-white/10";

  return (
    <Link
      to={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState("Dashboard");
  const sidebarBgColor = "bg-[#1E8838]";

  return (
    <div className={`h-full rounded-[1.25rem] w-64 flex flex-col ${sidebarBgColor} p-4 shadow-2xl`}>
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/icons/full-logo-light.svg"
            alt="AgriAxis Logo"
            className="h-auto max-h-12 object-contain"
          />
        </div>
      </div>

      <nav className="grow space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            Icon={item.icon}
            href={item.href}
            isActive={activeItem === item.name}
            onClick={() => setActiveItem(item.name)}
          />
        ))}
      </nav>

      <div className="mt-8 pt-4">
        <NavItem
          name="Log Out"
          Icon={LogOut}
          href="#logout"
          isActive={false}
          onClick={() => setActiveItem("Log Out")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
