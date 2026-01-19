import CountdownTimer from "@/components/auth/CountdownTimer";
import OtpInput from "@/components/auth/OTPInput";
import { Button } from "@/components/Button";
import { useRegistrationStore } from "@/stores/useRegistrationStore";
import { createRoute, Link, type AnyRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type LoginType = "phone number" | "email";

function OtpVerification() {
  const [loginType, setLoginType] = useState<LoginType>("phone number");
  const formData = useRegistrationStore((state) => state.formData);
  const [otpTarget, setOtpTarget] = useState<string>("");

  useEffect(() => {
    if (formData.phone) {
      setLoginType("phone number");
      setOtpTarget(formData.phone);
    } else {
      setLoginType("email");
      setOtpTarget(formData.email);
    }
  }, []);

  return (
    <div className="flex max-w-5/12 min-w-135 flex-col gap-10 rounded-3xl bg-white p-16">
      <header className="space-y-2">
        <h5 className="font-neue text-2xl font-semibold text-[#130B30]">
          OTP Verification
        </h5>
        <h6 className="text-[#423C59]">
          {loginType === "phone number"
            ? `We sent a code to your phone number ${otpTarget} `
            : `We sent a code to your email ${otpTarget}`}
        </h6>
      </header>
      <section className="text-center">
        <div className="mx-auto mb-12 w-fit">
          <OtpInput />
        </div>
        <p className="text-sm text-[#434449]">
          Enter code in: <CountdownTimer />
        </p>
      </section>
      <Link to="/create-password" className="block">
        <Button variant="primary">Continue</Button>
      </Link>
    </div>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    path: "otp-verification",
    component: OtpVerification,
    getParentRoute: () => parentRoute,
  });
