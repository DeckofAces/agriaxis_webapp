import { FarmMeasurementSelectionCard } from "@/components/dashboard/FarmMeasurementSelectionCard";
import { FarmDetailsCard } from "@/components/soil-testing/FarmDetailsCard";
import { Activity, useState } from "react";
import { PreviousLandMeasurementCard } from "./PreviousLandMeasurementCard";
import { PaymentMethodsSheet } from "../soil-testing/PaymentMethodsSheet";

export const RequestCropInformationSheetsContainer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}> = ({ isOpen, onClose, serviceType }) => {
  if (!isOpen) return null;
  const [currentView, setCurrentView] = useState("details");
  const [measurementMethod, setMeasurementMethod] = useState<
    "existing" | "new"
  >("existing");
  const handleMeasurementMethodSelection = (selection: "existing" | "new") => {
    setMeasurementMethod(selection);
    setCurrentView("measurement_method");
  };
  const handleProceedToPayment = () => {
    setCurrentView("payment");
  };

  return (
    <section
      className="fixed inset-0 z-40 bg-black/70 p-4 transition-opacity"
      onClick={onClose}
    >
      <section
        className="z-50 ml-auto h-full w-full lg:w-3/4 lg:max-w-xl rounded-[1.25rem] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <Activity mode={currentView === "details" ? "visible" : "hidden"}>
          <FarmDetailsCard
            onClose={onClose}
            onConfirm={() => setCurrentView("measurement")}
            requestServiceType={serviceType}
          />
        </Activity>
        <Activity mode={currentView === "measurement" ? "visible" : "hidden"}>
          <FarmMeasurementSelectionCard
            onClose={() => setCurrentView("details")}
            onConfirm={(selection) =>
              handleMeasurementMethodSelection(selection)
            }
            serviceType={serviceType}
          />
        </Activity>
        <Activity
          mode={currentView === "measurement_method" ? "visible" : "hidden"}
        >
          {measurementMethod === "existing" && (
            <PreviousLandMeasurementCard
              onClose={() => setCurrentView("measurement")}
              onConfirm={handleProceedToPayment}
            />
          )}
        </Activity>
        <Activity mode={currentView === "payment" ? "visible" : "hidden"}>
          <PaymentMethodsSheet
            isOpen={true}
            onClose={() => setCurrentView("measurement_method")}
          />
        </Activity>
      </section>
    </section>
  );
};
