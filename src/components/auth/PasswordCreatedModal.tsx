import checkIcon from "/assets/icons/check.svg";

export default function PasswordCreatedModal() {
  return (
    <section className="z-50 w-screen h-screen grid place-items-center bg-black/50 fixed top-0 left-0">
      <div className="max-w-5/12 min-w-115 rounded-3xl bg-white p-16">
        <img src={checkIcon} width={64} height={64} className="mx-auto mb-10" />
        <div className="text-center mb-6">
          <h5 className="text-2xl font-medium text-[#14151C]">
            Password created
          </h5>
          <h6 className="text-[#423C59]">You have successfully created your password</h6>
        </div>
      </div>
    </section>
  );
}
