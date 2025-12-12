import React from 'react';
import { Search, Bell, ChevronsRight } from 'lucide-react';
import { useState } from "react";
import NotificationPermissionModal from "@/components/dashboard/NotificationPermissionModal";
import LocationPermissionModal from '@/components/dashboard/LocationPermissionModal';

interface IconButtonProps {
  children: React.ReactNode;
  badge?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ children, badge = false }) => (
  <button className="relative p-3 rounded-full hover:bg-gray-100 bg-[#F1F5F9] transition duration-150 ease-in-out text-gray-700">
    {children}
    {badge && (
      <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
    )}
  </button>
);

const ProfileButton: React.FC = () => (
  <button className="flex items-center space-x-2 p-1 pl-1 pr-3 rounded-full bg-white border border-gray-200 hover:shadow-md transition duration-150 ease-in-out">
    <div className="relative w-8 h-8 flex items-center justify-center text-sm font-semibold bg-green-100 text-green-700 rounded-full border-2 border-green-500">
      AJ
    </div>
    <ChevronsRight className="w-5 h-5 text-gray-500" />
  </button>
);

const DashboardHeader: React.FC = () => {
  const [isNotificationPermissionModalOpen, setIsNotificationPermissionModalOpen] = useState(false);

  const handleAllowNotification = () => {
    setIsNotificationPermissionModalOpen(false);
  };
  const handleDenyNotification = () => {
    setIsNotificationPermissionModalOpen(false);
  };

  const [isLocationPermissionModalOpen, setIsLocationPermissionModalOpen] = useState(false);

  const handleAllowLocation = () => {
    setIsLocationPermissionModalOpen(false);
  };
  const handleDenyLocation = () => {
    setIsLocationPermissionModalOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 sm:p-6 bg-white rounded-[1.25rem] border-b border-[#E6EBF0]">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl sm:text-3xl font-bold font-neue text-[#0F172A]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <IconButton>
          <Search className="w-5 h-5" />
        </IconButton>

        <IconButton badge={true}>
          <Bell className="w-5 h-5" />
        </IconButton>

        <ProfileButton />
      </div>

      <NotificationPermissionModal
        isOpen={isNotificationPermissionModalOpen}
        onAllow={handleAllowNotification}
        onDeny={handleDenyNotification}
        onClose={() => setIsNotificationPermissionModalOpen(false)}
      />

      <LocationPermissionModal
        isOpen={isLocationPermissionModalOpen}
        onAllow={handleAllowLocation}
        onDeny={handleDenyLocation}
        onClose={() => setIsLocationPermissionModalOpen(false)}
      />
    </header>
  );
};

export default DashboardHeader;
