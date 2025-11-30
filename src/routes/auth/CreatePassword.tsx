import { Button } from "@/components/Button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-5/12 min-w-135 rounded-3xl bg-white p-16 flex flex-col gap-10">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">Create Password</h5>
        <h6 className="text-[#423C59]">Let's keep your account secured</h6>
      </header>
      <section className="space-y-6">
        <div>
          <label className="mb-0.5 text-sm text-[#130B30]">Create new password</label>
          <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4">
            <input
              type={showPassword ? "text" : "password"}
              className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
              placeholder="Enter your new password"
            />
            {showPassword ?
              <EyeOff className="text-[#626267]" onClick={() => setShowPassword(false)} />
              :
              <Eye className="text-[#626267]" onClick={() => setShowPassword(true)} />
            }
          </div>
        </div>
        <div>
          <label className="mb-0.5 text-sm text-[#130B30]">Confirm new password</label>
          <div className="flex items-center justify-between rounded-lg bg-[#F3F6F8] p-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-11/12 text-sm placeholder:text-[#423C59] placeholder:opacity-70 text-[#423C59] outline-0 border-none"
              placeholder="Confirm your new password"
            />
            {showConfirmPassword ?
              <EyeOff className="text-[#626267]" onClick={() => setShowConfirmPassword(false)} />
              :
              <Eye className="text-[#626267]" onClick={() => setShowConfirmPassword(true)} />
            }
          </div>
        </div>
      </section>
      <Button variant="primary">Continue</Button>
    </div>
  )
}
