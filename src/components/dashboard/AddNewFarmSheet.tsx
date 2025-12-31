import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { SelectDropdown, type SelectOption } from "@/components/SelectDropdown";
import { useState } from "react";

const farm_size_options: SelectOption[] = [
  { label: "Acre", value: "acre" },
  { label: "Hectare", value: "hectare" },
]

const AddNewFarmSheet: React.FC<{ onClose: () => void; isOpen: boolean }> = ({
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;
  const [farmSize, setFarmSize] = useState<string | null>(null);

  return (
    <section
      className="fixed inset-0 z-40 bg-black/70 p-4 transition-opacity"
      onClick={onClose}
    >
      <section
        className="z-50 ml-auto h-full w-full lg:w-[calc(100vw-19rem)] rounded-[1.25rem] bg-white p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-8 flex items-center gap-3.5">
          <button
            onClick={onClose}
            className="grid size-7 place-items-center rounded-full bg-[#E8E8E8]"
          >
            <ChevronLeft size={20} />
          </button>
          <h5 className="font-neue text-xl font-bold text-[#130B30]">
            Add new farm details
          </h5>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="space-y-6">
            <header>
              <h6 className="text-lg font-semibold text-[#939397]">Details</h6>
            </header>
            <div>
              <label
                htmlFor="farm_name"
                className="mb-1.5 text-sm text-[#130B30]"
              >
                Farm name
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="farm_name"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Enter farm name"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="grow">
                <label
                  htmlFor="farm_size"
                  className="mb-1.5 text-sm text-[#130B30]"
                >
                  Farm size
                </label>
                <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                  <input
                    id="farm_size"
                    type="text"
                    className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                    placeholder="What is your farm size"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="farm_size_unit"
                  className="mb-1.5 text-sm text-[#130B30]"
                >
                  Farm size unit
                </label>
                <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                  <input
                    id="farm_size_unit"
                    type="text"
                    className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                    placeholder="Acres"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="crop_type"
                className="mb-1.5 text-sm text-[#130B30]"
              >
                Crop type
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="crop_type"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Select one or more crops you have"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="vegetable_type"
                className="mb-1.5 text-sm text-[#130B30]"
              >
                Vegetable type
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="vegetable_type"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Select one or more vegetables you have"
                />
              </div>
            </div>
          </section>
          <section className="space-y-6">
            <header>
              <h6 className="text-lg font-semibold text-[#939397]">
                Farm address
              </h6>
            </header>
            <div>
              <label htmlFor="state" className="mb-1.5 text-sm text-[#130B30]">
                State
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="state"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Select state"
                />
              </div>
            </div>
            <div>
              <label htmlFor="city" className="mb-1.5 text-sm text-[#130B30]">
                City
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="city"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Select city"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lga" className="mb-1.5 text-sm text-[#130B30]">
                Local Government (LGA)
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="lga"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Select LGA"
                />
              </div>
            </div>
            <div className="mb-20">
              <label
                htmlFor="address"
                className="mb-1.5 text-sm text-[#130B30]"
              >
                Address
              </label>
              <div className="rounded-lg bg-[#F3F6F8] p-3.5">
                <input
                  id="address"
                  type="text"
                  className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
                  placeholder="Enter address"
                />
              </div>
            </div>
            <Button onClick={onClose} variant="primary">
              Add new farm
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export { AddNewFarmSheet };
