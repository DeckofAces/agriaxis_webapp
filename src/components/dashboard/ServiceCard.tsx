import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  value,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl w-full border border-[#E8E8E8] p-3 ${className}`}>
      <div className="flex flex-col">
        <div className='w-full flex items-start justify-between'>
          <div className="size-10 flex items-center justify-center">
            {icon}
          </div>
          <ChevronRight className='text-base text-[#717171]' />
        </div>

        <p className="text-lg font-semibold text-[#130B30] mt-2">
          {title}
        </p>

        <p className="text-base text-[#615C74]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
