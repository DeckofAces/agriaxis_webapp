import OrganisationAddressForm from "@/components/auth/OrganisationAddressForm";
import OrganisationProfileForm from "@/components/auth/OrganisationProfileForm";
import { Button } from "@/components/Button";

const step: 'profile' | 'address' = 'address';

export default function Organisation() {
  return (
    <div className="max-w-5/12 min-w-135 rounded-3xl bg-white p-16 flex flex-col gap-10">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">Organisation Profile</h5>
        <h6 className="text-[#423C59]">Fill in details to set up your organisation details</h6>
      </header>
      <section>
        {step === 'profile' && <OrganisationProfileForm />}
        {step === 'address' && <OrganisationAddressForm />}
      </section>
      <Button variant="primary">Continue</Button>
    </div>
  );
}
