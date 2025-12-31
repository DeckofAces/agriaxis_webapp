import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { SelectDropdown, type SelectOption } from "@/components/SelectDropdown";
import { useState } from "react";

const farm_size_options: SelectOption[] = [
  { label: "Acre", value: "acre" },
  { label: "Hectare", value: "hectare" },
];

const crop_type_options: SelectOption[] = [
  { label: "Cocoa", value: "cocoa" },
  { label: "Rice", value: "rice" },
  { label: "Maize", value: "maize" },
  { label: "Beans", value: "beans" },
  { label: "Yam", value: "yam" },
  { label: "Cassava", value: "cassava" },
  { label: "Barley", value: "barley" },
  { label: "Quinoa", value: "quinoa" },
  { label: "Oats", value: "oats" },
  { label: "Millet", value: "millet" },
];

const vegetable_type_options: SelectOption[] = [
  { label: "Onion", value: "onion" },
  { label: "Tomato", value: "tomato" },
  { label: "Carrot", value: "carrot" },
  { label: "Lettuce", value: "lettuce" },
  { label: "Cucumber", value: "cucumber" },
  { label: "Potato", value: "potato" },
  { label: "Cabbage", value: "cabbage" },
  { label: "Cauliflower", value: "cauliflower" },
];

const state_options: SelectOption[] = [
  { label: "Abuja", value: "abuja" },
  { label: "Lagos", value: "lagos" },
  { label: "Kaduna", value: "kaduna" },
  { label: "Sokoto", value: "sokoto" },
];

const city_options: SelectOption[] = [
  { label: "Aba", value: "aba" },
  { label: "Abeokuta", value: "abeokuta" },
  { label: "Ado-Ekiti", value: "ado-ekiti" },
  { label: "Akoko", value: "akoko" },
  { label: "Akure", value: "akure" },
  { label: "Amuwo-Odofin", value: "amuwo-odofin" },
  { label: "Enugu", value: "enugu" },
];

const lga_options: SelectOption[] = [
  { label: "Abaji", value: "abaji" },
  { label: "Abeokuta", value: "abeokuta" },
  { label: "Ado-Ekiti", value: "ado-ekiti" },
  { label: "Akoko", value: "akoko" },
  { label: "Akure", value: "akure" },
  { label: "Amuwo-Odofin", value: "amuwo-odofin" },
  { label: "Enugu", value: "enugu" },
  { label: "Ife", value: "ife" },
  { label: "Ilorin", value: "ilorin" },
  { label: "Irepodun", value: "irepodun" },
  { label: "Iseyin", value: "iseyin" },
  { label: "Kaduna", value: "kaduna" },
  { label: "Kano", value: "kano" },
];

const AddNewFarmSheet: React.FC<{ onClose: () => void; isOpen: boolean }> = ({
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;
  const [farmSize, setFarmSize] = useState<string | null>(null);
  const [cropType, setCropType] = useState<string[]>([]);
  const [vegetableType, setVegetableType] = useState<string[]>([]);
  const [state, setState] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [lga, setLga] = useState<string | null>(null);

  return (
    <section
      className="fixed inset-0 z-40 bg-black/70 p-4 transition-opacity"
      onClick={onClose}
    >
      <section
        className="z-50 ml-auto h-full w-full overflow-y-auto rounded-[1.25rem] bg-white p-8 lg:w-[calc(100vw-19rem)]"
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
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
              <div className="min-w-27">
                <SelectDropdown
                  mode="single"
                  label="Farm size unit"
                  options={farm_size_options}
                  value={farmSize}
                  onChange={setFarmSize}
                  placeholder="Select farm size"
                  headerTitle="Select farm size"
                />
              </div>
            </div>
            <div>
              <SelectDropdown
                mode="multiple"
                label="Crop type"
                options={crop_type_options}
                value={cropType}
                onChange={setCropType}
                placeholder="Select one or more crops you have"
                headerTitle="Select crops"
              />
            </div>
            <div>
              <SelectDropdown
                mode="multiple"
                label="Vegetable type"
                options={vegetable_type_options}
                value={vegetableType}
                onChange={setVegetableType}
                placeholder="Select one or more vegetables you have"
                headerTitle="Select vegetables"
              />
            </div>
          </section>
          <section className="space-y-6">
            <header>
              <h6 className="text-lg font-semibold text-[#939397]">
                Farm address
              </h6>
            </header>
            <div>
              <SelectDropdown
                mode="single"
                label="State"
                options={state_options}
                value={state}
                onChange={setState}
                placeholder="Select state"
                headerTitle="Select state"
              />
            </div>
            <div>
              <SelectDropdown
                mode="single"
                label="City"
                options={city_options}
                value={city}
                onChange={setCity}
                placeholder="Select city"
                headerTitle="Select city"
              />
            </div>
            <div>
              <SelectDropdown
                mode="single"
                label="Local Government (LGA)"
                options={lga_options}
                value={lga}
                onChange={setLga}
                placeholder="Select LGA"
                headerTitle="Select LGA"
              />
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
