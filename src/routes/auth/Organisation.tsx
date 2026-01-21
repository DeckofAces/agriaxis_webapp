import OrganisationAddressForm from "@/components/auth/OrganisationAddressForm";
import OrganisationProfileForm from "@/components/auth/OrganisationProfileForm";
import { Button } from "@/components/Button";
import { createRoute, type AnyRoute } from "@tanstack/react-router";
import { useState } from "react";

function Organisation() {
  const [step, setStep] = useState<"profile" | "address">("profile");
  const handleContinue = () => {
    if (step === "profile") {
      setStep("address");
    } else {
      setStep("profile");
    }
  };

  return (
    <div className="flex max-w-5/12 min-w-135 flex-col gap-10 rounded-3xl bg-white p-16">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
          Organisation Profile
        </h5>
        <h6 className="text-[#423C59]">
          Fill in details to set up your organisation details
        </h6>
      </header>
      <section>
        {step === "profile" && <OrganisationProfileForm />}
        {step === "address" && <OrganisationAddressForm />}
      </section>
      <Button variant="primary" onClick={handleContinue}>Continue</Button>
    </div>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    path: "organisation",
    component: Organisation,
    getParentRoute: () => parentRoute,
  });
