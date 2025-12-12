import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl w-full border border-[#E8E8E8] p-4 ${className}`}>
      <div className="flex flex-col">
        <div className="size-10 flex items-center justify-center">
          {icon}
        </div>

        <p className="text-sm text-[#626267] mt-3 mb-1.5">
          {title}
        </p>

        <p className="font-neue text-3xl font-bold text-[#130B30]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
