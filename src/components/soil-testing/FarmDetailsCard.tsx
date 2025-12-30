import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { RadioButton } from "@/components/RadioButton";
import { useState } from "react";

const CROP_TYPE_OPTIONS: { id: number; title: string }[] = [
  {
    id: 1,
    title: "cocoa",
  },
  {
    id: 2,
    title: "rice",
  },
  {
    id: 3,
    title: "maize",
  },
  {
    id: 4,
    title: "beans",
  },
  {
    id: 5,
    title: "yam",
  },
  {
    id: 6,
    title: "cassava",
  },
  {
    id: 7,
    title: "barley",
  },
  {
    id: 8,
    title: "quinoa",
  },
  {
    id: 10,
    title: "oats",
  },
  {
    id: 11,
    title: "millet",
  },
];

const FarmDetailsCard: React.FC<{
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ isOpen, onClose, onConfirm }) => {
  const [cropType, setCropType] = useState("cocoa");
  // if (!isOpen) return null;

  return (
    <section className="size-full overflow-y-auto">
      <header className="mb-10 flex items-start gap-3.5 pt-7 pr-20 pl-6">
        <button
          onClick={onClose}
          className="grid size-fit place-items-center rounded-full bg-[#E8E8E8] p-1"
        >
          <ChevronLeft size={24} className="text-[#434449]" />
        </button>
        <div>
          <h5 className="font-neue text-xl font-bold text-[#130B30]">
            Farm details
          </h5>
          <h6 className="text-[#423C59]">
            Let's know the farm and crop type you are requesting soil test for
          </h6>
        </div>
      </header>
      <section className="mx-20 space-y-6 pb-10">
        <header>
          <h6 className="text-lg font-semibold text-[#939397]">Details</h6>
        </header>
        <div>
          <label htmlFor="farm_name" className="mb-1.5 text-sm text-[#130B30]">
            Farm name
          </label>
          <div className="rounded-lg bg-[#F3F6F8] p-3.5">
            <input
              id="farm_name"
              type="text"
              className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
              placeholder="Select your farm"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 text-sm text-[#130B30]">Crop type</label>
          <div className="grid grid-cols-2 gap-2">
            {CROP_TYPE_OPTIONS.map((entry) => (
              <RadioButton
                key={entry.id}
                title={entry.title}
                isSelected={cropType === entry.title}
                select={setCropType}
              />
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="others" className="mb-1.5 text-sm text-[#130B30]">
            Other crops
          </label>
          <div className="rounded-lg bg-[#F3F6F8] p-3.5">
            <input
              id="others"
              type="text"
              className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-sm placeholder:text-[#423C59] placeholder:opacity-70"
              placeholder="Enter more crop type"
            />
          </div>
        </div>
        <Button onClick={onConfirm} variant="primary">
          Add new farm
        </Button>
      </section>
    </section>
  );
};

export { FarmDetailsCard };
