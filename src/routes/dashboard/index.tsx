import { Button } from "@/components/Button";
import StatCard from "@/components/dashboard/StatCard";
import farmIcon from '/assets/icons/farm.svg'
import soilIcon from '/assets/icons/soil.svg'
import cropIcon from '/assets/icons/crop.svg'
import monitoringIcon from '/assets/icons/monitoring.svg'
import ServiceCard from "@/components/dashboard/ServiceCard";

export default function DashboardIndex() {
  return (
    <section className="bg-white p-6 pb-9 rounded-[1.25rem]">
      <section className="mb-6">
        <header className="flex items-center justify-between mb-3 w-full">
          <h1 className="text-lg sm:text-xl font-semibold font-neue text-[#939397]">
            Overview
          </h1>
          <div className="w-41.5">
            <Button variant="primary">
              Add a new farm
            </Button>
          </div>
        </header>
        <div className="flex items-center gap-3">
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={farmIcon} width={17.5} height={15.64} /></div>}
            title="No. of farms"
            value="12"
          />
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={farmIcon} width={17.5} height={15.64} /></div>}
            title="No. of users"
            value="34"
          />
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={farmIcon} width={17.5} height={15.64} /></div>}
            title="Crop monitoring"
            value="12"
          />
        </div>
      </section>
      <section>
        <header className="mb-4">
          <h1 className="text-lg sm:text-xl font-semibold font-neue text-[#939397]">
            Services
          </h1>
        </header>
        <div className="flex flex-col gap-2 w-full">
          <ServiceCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={soilIcon} width={20} height={20} /></div>}
            title="Soil testing"
            value="Click here to get your soil test result"
          />
          <ServiceCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={cropIcon} width={20} height={20} /></div>}
            title="Crop information"
            value="Get your crop information here"
          />
          <ServiceCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={monitoringIcon} width={20} height={20} /></div>}
            title="Crop monitoring"
            value="Monitor your crops health here"
          />
        </div>
      </section>
    </section>
  )
}
