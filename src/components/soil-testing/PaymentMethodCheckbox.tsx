import React from 'react';
import { Check } from 'lucide-react';

interface PaymentMethodCheckboxProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

export const PaymentMethodCheckbox: React.FC<PaymentMethodCheckboxProps> = ({
  title,
  subtitle,
  imageSrc,
  isChecked,
  onChange
}) => {
  return (
    <div
      onClick={() => onChange(!isChecked)}
      className={`
        relative flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border
        ${isChecked
          ? 'border-[#0A814A] bg-[#E7F2ED]'
          : 'border-transparent bg-[#F3F6F8] hover:bg-slate-50'
        }
      `}
    >
      <div className="shrink-0 mr-4">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="size-12 rounded-full object-cover shadow-sm"
          />
        ) : (
          <div className='size-12 rounded-full bg-gray-200'></div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-[#130B30] font-medium text-base">
          {title}
        </h3>
        <p className="text-[#423C59] text-xs font-normal">
          {subtitle}
        </p>
      </div>

      <div className="shrink-0 ml-4">
        <div
          className={`
            w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center transition-all duration-200
            bg-transparent
          `}
        >
          {isChecked && (
            <Check size={14} className="text-emerald-500 stroke-3" />
          )}
        </div>
      </div>
    </div>
  );
};

