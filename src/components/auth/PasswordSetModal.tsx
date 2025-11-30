import { Button } from "@/components/Button";
import checkIcon from "/assets/icons/check.svg";

export default function PasswordSetModal() {
  return (
    <section className="z-50 w-screen h-screen grid place-items-center bg-black/50 fixed top-0 left-0">
      <div className="max-w-5/12 min-w-115 rounded-3xl bg-white p-16">
        <img src={checkIcon} width={64} height={64} className="mx-auto mb-10" />
        <div className="text-center mb-6">
          <h5 className="text-2xl font-medium text-[#14151C]">
            Password set!
          </h5>
          <h6 className="text-[#423C59]">
            Your password reset was successful. <br />
            Login to continue
          </h6>
        </div>
        <Button variant="primary">Login</Button>
      </div>
    </section>
  );
}
