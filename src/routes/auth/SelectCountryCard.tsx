import { Button } from "@/components/Button";
import arrowUp from "/assets/icons/arrow-up.svg";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const countries = [
  {
    value: "nigeria",
    label: "Nigeria",
  },
  {
    value: "ghana",
    label: "Ghana",
  },
  {
    value: "united-states",
    label: "United States",
  },
  {
    value: "south-korea",
    label: "South Korea",
  },
  {
    value: "canada",
    label: "Canada",
  },
];

export default function SelectCountryCard() {
  const [countryListOpen, setcountryListOpen] = useState(false);
  const [countryValue, setCountryValue] = useState("");
  const selectedCountry = countries.find(
    (country) => country.value === countryValue,
  );

  return (
    <div className="flex max-w-5/12 min-w-135 flex-col gap-18.25 rounded-3xl bg-white p-16">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
          Your country
        </h5>
        <h6 className="text-[#423C59]">Let us know your country</h6>
      </header>
      <Popover open={countryListOpen} onOpenChange={setcountryListOpen}>
        <PopoverTrigger asChild>
          <div
            className="cursor-pointer"
            role="combobox"
            aria-expanded={countryListOpen}
            aria-controls="country-list"
          >
            <label className="mb-0.5 text-sm text-[#130B30]">Country</label>
            <div className="flex items-center justify-between rounded-xl bg-[#F3F6F8] p-4">
              <span
                className={cn(
                  "text-sm text-[#423C59]",
                  !selectedCountry && "opacity-65",
                )}
              >
                {selectedCountry
                  ? selectedCountry.label
                  : "Select your country"}
              </span>
              <img
                src={arrowUp}
                width={20}
                height={20}
                className={cn(
                  "transition-transform",
                  countryListOpen && "rotate-180",
                )}
              />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="max-w-1/3 min-w-120 p-0">
          <Command>
            <CommandInput placeholder="Search country..." className="h-9" />
            <CommandList id="country-list">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={(currentValue) => {
                      setCountryValue(
                        currentValue === countryValue ? "" : currentValue,
                      );
                      setcountryListOpen(false);
                    }}
                  >
                    {country.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        countryValue === country.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div>
        <Link to="/auth/farm-type" className="block">
          <Button variant="primary">Continue</Button>
        </Link>
      </div>
    </div>
  );
}
