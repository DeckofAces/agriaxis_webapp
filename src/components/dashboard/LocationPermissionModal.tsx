import React from 'react';
import { X } from 'lucide-react';
import locationIcon from '/assets/icons/location.svg'
import { Button } from '@/components/Button';

interface LocationPermissionModalProps {
  isOpen: boolean;
  onAllow: () => void;
  onDeny: () => void;
  onClose?: () => void;
}

const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  isOpen,
  onAllow,
  onDeny,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80  z-40" onClick={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white relative rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 bg-[#E8E8E8] rounded-full"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          <div className="pt-10 pb-8 px-8 text-center">
            <div className="mx-auto mb-6 size-fit p-3.75 bg-[#E7F2ED] rounded-2xl flex items-center justify-center border border-[#0A814A]">
              <img src={locationIcon} width={23} height={29} />
            </div>

            <h2 className="font-neue text-lg font-semibold text-[#130B30] mb-2">
              Allow your location
            </h2>

            <p className="text-sm text-[#423C59]">
              Farm Intelligence use your location to provide result analysis for your farm land.
            </p>
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <Button variant='tertiary' onClick={onDeny}>
              Don't Allow
            </Button>
            <Button variant='primary' onClick={onAllow}>
              Allow Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPermissionModal;
