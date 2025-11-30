import { Button } from "@/components/Button";
import { Eye, EyeOff, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { allCountries, type Country } from "@/data/countries";
import facebookIcon from '/assets/icons/facebook.svg';
import googleIcon from '/assets/icons/google.svg';

const flagStyle = {
  fontSize: '1.25rem',
  lineHeight: 1,
  marginLeft: '0.5rem',
};

type LoginType = 'phone' | 'email';
const LOGIN_TYPE: LoginType = 'phone';

export default function Signin() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    allCountries.find(c => c.code === '234') || allCountries[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = useMemo<Country[]>(() => {
    const lowerCaseSearch = searchTerm.toLowerCase().trim();
    if (!lowerCaseSearch) return allCountries;

    return allCountries.filter(country => {
      return country.name.toLowerCase().includes(lowerCaseSearch) ||
        country.code.includes(lowerCaseSearch);
    });
  }, [searchTerm]);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchTerm('');
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="max-w-5/12 min-w-135 rounded-3xl bg-white p-16">
      <section className="flex flex-col gap-10 w-full">
        <header className="space-y-2">
          <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
            Welcome back!
          </h5>
          <h6 className="text-[#423C59]">Fill in your details to continue with Farm Intelligence</h6>
        </header>
        <section className="space-y-6">
          {LOGIN_TYPE === 'phone' ?
            <div>
              <label className="mb-0.5 text-sm text-[#130B30]">Phone number</label>
              <div className="flex items-center gap-0.5">
                <div
                  ref={dropdownRef}
                  className="relative z-20 shrink-0 cursor-pointer transition duration-150 ease-in-out bg-[#F3F6F8] py-4 px-2 rounded-lg"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center pr-2 pl-1.5">
                    <span className="text-sm  text-[#130B30]">
                      +{selectedCountry.code}
                    </span>
                    <span style={flagStyle}>{selectedCountry.flag}</span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                      <div className="p-3 border-b border-gray-100 flex items-center">
                        <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                        <input
                          type="text"
                          placeholder="Search country or code"
                          className="w-full text-sm bg-transparent border-none focus:outline-none placeholder-gray-500 text-gray-700"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        {searchTerm && (
                          <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={() => setSearchTerm('')} />
                        )}
                      </div>

                      <ul className="max-h-64 overflow-y-auto custom-scrollbar">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <li
                              key={`${country.code}-${country.name}`}
                              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out border-b border-gray-100 last:border-b-0"
                              onClick={() => handleSelectCountry(country)}
                            >
                              <div className="flex items-center">
                                <span style={flagStyle} className="mr-2 text-sm">{country.flag}</span>
                                <span className="text-[#130B30] text-sm font-medium">{country.name}</span>
                              </div>
                              <span className="text-[#423C59] text-xs font-mono">+{country.code}</span>
                            </li>
                          ))
                        ) : (
                          <li className="p-3 text-center text-[#423C59] text-sm">No results found.</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4 w-full">
                  <input
                    type="tel"
                    className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
                    placeholder="081 **** 572"
                  />
                </div>
              </div>
            </div>
            :
            <div>
              <label className="mb-0.5 text-sm text-[#130B30]">Email</label>
              <div className="rounded-lg bg-[#F3F6F8] p-4">
                <input
                  type="email"
                  className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
                  placeholder="user@example.com"
                />
              </div>
            </div>
          }
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">Password</label>
            <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4">
              <input
                type={showPassword ? "text" : "password"}
                className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
                placeholder="Enter Password"
              />
              {showPassword ?
                <EyeOff className="text-[#626267]" onClick={() => setShowPassword(false)} />
                :
                <Eye className="text-[#626267]" onClick={() => setShowPassword(true)} />
              }
            </div>
            <p className="w-fit mt-0.5 cursor-pointer text-[#0A814A] ml-auto">Forgot Password?</p>
          </div>
        </section>
        <Button variant="primary">Sign in</Button>
        <div className="w-fit mx-auto text-center mt-6">
          <p className="text-sm text-[#434449] mb-4">Or continue with</p>
          <div className="flex items-center gap-6 w-fit mx-auto">
            <img src={facebookIcon} width={32} height={32} />
            <img src={googleIcon} width={32} height={32} />
          </div>
        </div>
        <p className="w-fit mx-auto">Don't have an account? <span className="ml-3 text-[#0A814A] cursor-pointer">Sign up</span></p>
      </section>
    </div>
  );
}
