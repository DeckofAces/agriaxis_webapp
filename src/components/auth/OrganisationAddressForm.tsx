import { ChevronRight } from "lucide-react";

export default function OrganisationAddressForm() {
  return (
    <div className="w-full space-y-6">
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">State</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            role="combobox"
            aria-controls=""
          >
            <span className="text-sm text-[#423C59] opacity-70">Select Organisation state</span>
            <ChevronRight className="text-[#717171]" />
          </div>
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">City</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            role="combobox"
            aria-controls=""
          >
            <span className="text-sm text-[#423C59] opacity-70">Select Organisation city</span>
            <ChevronRight className="text-[#717171]" />
          </div>
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Local Government Area (LGA)</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <input
            type="text"
            className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
            placeholder="Enter Organisation LGA"
          />
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Address</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <input
            type="text"
            className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
            placeholder="Enter Organisation address"
          />
        </div>
      </div>
    </div>
  );
}
