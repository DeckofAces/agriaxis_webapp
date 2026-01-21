import { Button } from "@/components/Button";
import { allCountries, type Country } from "@/data/countries";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  createRoute,
  Link,
  redirect,
  useNavigate,
  type AnyRoute,
} from "@tanstack/react-router";
import { useRegistrationStore } from "@/stores/useRegistrationStore";

type LoginType = "phone number" | "email";

const flagStyle = {
  fontSize: "1.25rem",
  lineHeight: 1,
  marginLeft: "0.5rem",
};

interface SignupFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

const initialFormData: SignupFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
};

function Signup() {
  const navigate = useNavigate();
  const updateFormData = useRegistrationStore((state) => state.updateFormData);
  const [loginType, setLoginType] = useState<LoginType>("email");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState(
    allCountries.find((c) => c.code === "234") || allCountries[0],
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo<Country[]>(() => {
    const lowerCaseSearch = searchTerm.toLowerCase().trim();
    if (!lowerCaseSearch) return allCountries;

    return allCountries.filter((country) => {
      return (
        country.name.toLowerCase().includes(lowerCaseSearch) ||
        country.code.includes(lowerCaseSearch)
      );
    });
  }, [searchTerm]);
  const [signupFormData, setSignupFormData] =
    useState<SignupFormData>(initialFormData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (phoneError) setPhoneError("");
    if (emailError) setEmailError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFormData(signupFormData);
    // const finalPayload = useRegistrationStore.getState().formData
    // registerUser(finalPayload);
    navigate({
      to: "/create-password",
    });
  };

  const handleSelectLoginType = (loginType: LoginType) => {
    setLoginType(loginType);
    if (loginType === "phone number") {
      updateFormData({ phone: "" });
    } else {
      updateFormData({ email: "" });
    }
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="max-h-[82vh] max-w-5/12 min-w-135 space-y-8 overflow-y-auto rounded-3xl bg-white p-12">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
          Create account
        </h5>
        <h6 className="text-[#423C59]">Let's have your details</h6>
      </header>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <section className="space-y-6">
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">First name</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                name="first_name"
                type="text"
                className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter your first name"
                value={signupFormData.first_name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">Last name</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                name="last_name"
                type="text"
                className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter your last name"
                value={signupFormData.last_name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <>
            {loginType === "phone number" ? (
              <div>
                <label className="mb-0.5 text-sm text-[#130B30]">
                  Phone number
                </label>
                <div className="flex items-center gap-0.5">
                  <div
                    ref={dropdownRef}
                    className="relative z-20 shrink-0 cursor-pointer rounded-lg bg-[#F3F6F8] px-2 py-4 transition duration-150 ease-in-out"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="flex items-center pr-2 pl-1.5">
                      <span className="text-sm text-[#130B30]">
                        +{selectedCountry.code}
                      </span>
                      <span style={flagStyle}>{selectedCountry.flag}</span>
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
                        <div className="flex items-center border-b border-gray-100 p-3">
                          <Search className="mr-2 h-4 w-4 shrink-0 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search country or code"
                            className="w-full border-none bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                          />
                          {searchTerm && (
                            <X
                              className="ml-2 h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600"
                              onClick={() => setSearchTerm("")}
                            />
                          )}
                        </div>

                        <ul className="custom-scrollbar max-h-64 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <li
                                key={`${country.code}-${country.name}`}
                                className="flex cursor-pointer items-center justify-between border-b border-gray-100 p-3 transition duration-150 ease-in-out last:border-b-0 hover:bg-gray-100"
                                onClick={() => handleSelectCountry(country)}
                              >
                                <div className="flex items-center">
                                  <span
                                    style={flagStyle}
                                    className="mr-2 text-sm"
                                  >
                                    {country.flag}
                                  </span>
                                  <span className="text-sm font-medium text-[#130B30]">
                                    {country.name}
                                  </span>
                                </div>
                                <span className="font-mono text-xs text-[#423C59]">
                                  +{country.code}
                                </span>
                              </li>
                            ))
                          ) : (
                            <li className="p-3 text-center text-sm text-[#423C59]">
                              No results found.
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div
                    className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-colors ${
                      phoneError
                        ? "border-red-500 bg-[#E52B670D]"
                        : "border-transparent bg-[#F3F6F8]"
                    }`}
                  >
                    <input
                      name="phone"
                      type="tel"
                      className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70 disabled:cursor-not-allowed disabled:opacity-70"
                      placeholder="081 **** 572"
                      value={signupFormData.phone}
                      disabled={!signupFormData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
                <p
                  className="ml-auto w-fit cursor-pointer text-sm text-[#0A814A]"
                  onClick={() => handleSelectLoginType("email")}
                >
                  Use email address
                </p>
              </div>
            ) : (
              <div>
                <label className="mb-0.5 text-sm text-[#130B30]">Email</label>
                <div
                  className={`rounded-lg border-2 p-4 transition-colors ${
                    emailError
                      ? "border-red-500 bg-[#E52B670D]"
                      : "border-transparent bg-[#F3F6F8]"
                  }`}
                >
                  <input
                    name="email"
                    type="email"
                    className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70 disabled:cursor-not-allowed disabled:opacity-70"
                    placeholder="user@example.com"
                    value={signupFormData.email}
                    disabled={!signupFormData.first_name}
                    onChange={handleInputChange}
                  />
                </div>
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
                <p
                  className="ml-auto w-fit cursor-pointer text-sm text-[#0A814A]"
                  onClick={() => handleSelectLoginType("phone number")}
                >
                  Use phone number
                </p>
              </div>
            )}
          </>
        </section>

        <Button
          variant="primary"
          type="submit"
          disabled={!signupFormData.email && !signupFormData.phone}
        >
          Sign up
        </Button>
      </form>
      <p className="mx-auto w-fit">
        Already have an account?{" "}
        <Link to="/signin">
          <span className="ml-3 cursor-pointer text-[#0A814A]">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    path: "signup",
    component: Signup,
    getParentRoute: () => parentRoute,
    beforeLoad: () => {
      const isValid = useRegistrationStore
        .getState()
        .validateStep(["farm_type"]);
      if (!isValid) {
        throw redirect({
          to: "/farm-type",
          replace: true,
        });
      }
    },
  });

// TODO: Update error handling, to return popop error messages
// TODO: Update form validation
