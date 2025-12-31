import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";

export const FarmMeasurementSelectionCard: React.FC<{
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: (selection: "existing" | "new") => void;
  serviceType?: string;
}> = ({ isOpen, onClose, onConfirm, serviceType }) => {
  //   if (!isOpen) return null;

  return (
    <section className="size-full">
      <div className="flex h-full flex-col justify-between overflow-y-auto pb-10">
        <div>
          <header className="mb-10 flex items-start gap-3.5 pt-7 pl-6 pr-14">
            <button
              onClick={onClose}
              className="grid size-fit place-items-center rounded-full bg-[#E8E8E8] p-1"
            >
              <ChevronLeft size={24} className="text-[#434449]" />
            </button>
            <div>
              <h5 className="font-neue text-xl font-bold text-[#130B30]">
                Farm measurement
              </h5>
              <h6 className="text-[#423C59]">
                Select how you will like to measure your farm land to proceed
                with your {serviceType ?? "crop information"} request
              </h6>
            </div>
          </header>
          <section className="mx-20 space-y-6 pb-10">
            <div className="max-w-md translate-y-full space-y-6">
              <Button onClick={() => onConfirm("existing")} variant="primary">
                Use previous measurement
              </Button>

              <div className="flex items-center justify-center">
                <span className="text-[#939397]">Or use</span>
              </div>

              <Button onClick={() => onConfirm("new")} variant="secondary">
                Take new measurement
              </Button>
            </div>
          </section>
        </div>

        <div className="mx-20"></div>
      </div>
    </section>
  );
};
