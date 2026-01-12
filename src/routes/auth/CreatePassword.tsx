import PasswordCreatedModal from "@/components/auth/PasswordCreatedModal";
import { Button } from "@/components/Button";
import { createRoute, Link, type AnyRoute } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess] = useState(false);

  return (
    <>
      <div className="flex max-w-5/12 min-w-135 flex-col gap-10 rounded-3xl bg-white p-16">
        <header className="space-y-2">
          <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
            Create Password
          </h5>
          <h6 className="text-[#423C59]">Let's keep your account secured</h6>
        </header>
        <section className="space-y-6">
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">
              Create new password
            </label>
            <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4">
              <input
                type={showPassword ? "text" : "password"}
                className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter your new password"
              />
              {showPassword ? (
                <EyeOff
                  className="text-[#626267]"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className="text-[#626267]"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">
              Confirm new password
            </label>
            <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-11/12 border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Confirm your new password"
              />
              {showConfirmPassword ? (
                <EyeOff
                  className="text-[#626267]"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <Eye
                  className="text-[#626267]"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>
        </section>
        <Link to="/organisation" className="block">
          <Button variant="primary">Continue</Button>
        </Link>
      </div>
      {showSuccess && <PasswordCreatedModal />}
    </>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    path: "create-password",
    component: CreatePassword,
    getParentRoute: () => parentRoute,
  });
