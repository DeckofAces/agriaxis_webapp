import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";

export const AddNewUserSheet: React.FC<{
  onClose: () => void;
  isOpen?: boolean;
}> = ({ onClose }) => {
//   if (!isOpen) return null;
  return (
    <section
      className="fixed inset-0 z-40 bg-black/70 p-4 transition-opacity"
      onClick={onClose}
    >
      <section
        className="z-50 ml-auto h-full w-full lg:w-3/4 lg:max-w-xl rounded-[1.25rem] bg-white p-8 pb-12"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-8 flex items-center gap-3.5">
          <button
            onClick={onClose}
            className="grid size-7 place-items-center rounded-full bg-[#E8E8E8]"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-col gap-2">
            <h5 className="font-neue text-xl font-bold text-[#130B30]">
              Add new user
            </h5>
            <h6 className="text-[#423C59]">Fill in the user details</h6>
          </div>
        </header>
        <section className="mb-10 space-y-6">
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">First Name</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                type="text"
                className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter user first name"
              />
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">Last Name</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                type="text"
                className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter user last name"
              />
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">Email</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                type="email"
                className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter user email"
              />
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">
              Phone Number
            </label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                type="text"
                className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Enter user phone number"
              />
            </div>
          </div>
          <div>
            <label className="mb-0.5 text-sm text-[#130B30]">Role</label>
            <div className="rounded-lg bg-[#F3F6F8] p-4">
              <input
                type="text"
                className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                placeholder="Select user role"
              />
            </div>
          </div>
        </section>
        <Button onClick={onClose} variant="primary">Add new user</Button>
      </section>
    </section>
  );
};
