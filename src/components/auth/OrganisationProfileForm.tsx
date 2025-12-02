import { ChevronRight } from "lucide-react";

export default function OrganisationProfileForm() {
  return (
    <div className="w-full space-y-6">
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Organisation Name</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <input
            type="text"
            className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
            placeholder="Enter Organisation name"
          />
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Organisation Type</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            role="combobox"
            aria-controls=""
          >
            <span className="text-sm text-[#423C59] opacity-70">Select Organisation type</span>
            <ChevronRight className="text-[#717171]" />
          </div>
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Registration number (CAC/RC number)</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <input
            type="text"
            className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
            placeholder="Enter RC number"
          />
        </div>
      </div>
      <div>
        <label className="mb-0.5 text-sm text-[#130B30]">Number of farms to be monitored</label>
        <div className="rounded-lg bg-[#F3F6F8] p-4">
          <input
            type="number"
            className="w-full text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
            placeholder="Enter number of farms"
          />
        </div>
      </div>
    </div>
  );
}
