import { createRoute, type AnyRoute } from "@tanstack/react-router";
import { useMe } from "@/api/auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components";

function Profile() {
  const { data: user } = useMe();

  return (
    <>
      <section className="rounded-[1.25rem] bg-white p-6 pb-9">
        <header className="mb-2 flex items-center justify-between">
          <h1 className="font-neue text-lg font-semibold text-[#434449]">
            My Account Information
          </h1>
        </header>
        <section className="mb-7 space-y-3">
          <div>
            <h6 className="text-sm text-[#626267]">Name</h6>
            <p className="font-neue text-xl font-bold text-[#130B30]">
              {user?.name}
            </p>
          </div>
          <div>
            <h6 className="text-sm text-[#626267]">Email</h6>
            <p className="font-neue text-xl font-bold text-[#130B30]">
              {user?.email}
            </p>
          </div>
          <div>
            <h6 className="text-sm text-[#626267]">Phone</h6>
            <p className="font-neue text-xl font-bold text-[#130B30]">
              {user?.phone ?? "N/A"}
            </p>
          </div>
          <div>
            <h6 className="mb-0.5 text-sm text-[#626267]">
              Account Verification
            </h6>
            <p
              className={cn(
                "w-fit rounded-4xl px-3 py-1 text-sm font-semibold",
                user?.email_verified_at
                  ? "bg-[#0A814A] text-white"
                  : "bg-[#E8E8E8] text-[#626267]",
              )}
            >
              {user?.email_verified_at ? "Verified" : "Unverified"}
            </p>
          </div>
        </section>
        <section>
          <header className="mb-2">
            <div className="flex items-center justify-between">
              <h6 className="font-neue text-lg font-semibold text-[#434449]">
                Organisation
              </h6>
              <div className="w-fit">
                <Button variant="link">
                  {user?.organisations ? "Edit" : "Add"}
                </Button>
              </div>
            </div>
            {!user?.organisations && (
              <p className="font-neue text-xl font-bold text-[#130B30]">
                No organisation
              </p>
            )}
          </header>
          {user?.organisations && (
            <section className="space-y-3">
              <div>
                <h6 className="text-sm text-[#626267]">Organisation Name</h6>
                <p className="font-neue text-xl font-bold text-[#130B30] capitalize">
                  {user?.organisations[0].name}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">
                  Organisation Description
                </h6>
                <p className="font-neue text-xl font-bold text-[#130B30]">
                  {user?.organisations[0].description ?? "No description"}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">Organisation Type</h6>
                <p className="font-neue text-xl font-bold text-[#130B30]">
                  {user?.organisations[0].type_label}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">Registration Number</h6>
                <p className="font-neue text-xl font-bold text-[#130B30]">
                  {user?.organisations[0].registration_number}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">State</h6>
                <p className="font-neue text-xl font-bold text-[#130B30] capitalize">
                  {user?.organisations[0].address.state}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">
                  Local Government Area
                </h6>
                <p className="font-neue text-xl font-bold text-[#130B30] capitalize">
                  {user?.organisations[0].address.lga}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">Address</h6>
                <p className="font-neue text-xl font-bold text-[#130B30] capitalize">
                  {user?.organisations[0].address.physical_address}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">Number of farms</h6>
                <p className="font-neue text-xl font-bold text-[#130B30]">
                  {user?.organisations[0].expected_farms_count}
                </p>
              </div>
              <div>
                <h6 className="text-sm text-[#626267]">User role</h6>
                <p className="font-neue text-xl font-bold text-[#130B30]">
                  {user?.organisations[0].role ?? "No role"}
                </p>
              </div>
            </section>
          )}
        </section>
      </section>
    </>
  );
}

export default (parentRoute: AnyRoute) =>
  createRoute({
    path: "profile",
    component: Profile,
    getParentRoute: () => parentRoute,
    staticData: {
      title: "Profile",
    },
  });
