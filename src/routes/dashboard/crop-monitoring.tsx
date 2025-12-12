import StatCard from "@/components/dashboard/StatCard";
import farmIcon from '/assets/icons/farm.svg'
import testingIcon from '/assets/icons/testing.svg'
import testingIconGrey from '/assets/icons/testing-grey.svg'
import processingIcon from '/assets/icons/processing.svg'
import ServiceCard from "@/components/dashboard/ServiceCard";
import healthIcon from '/assets/icons/health.svg'
import monitoringIcon from '/assets/icons/monitoring.svg'

export default function CropMonitoring() {
  return (
    <section className="bg-white p-6 pb-9 rounded-[1.25rem]">
      <section className="mb-6">
        <header className="mb-3 w-full">
          <h1 className="text-lg sm:text-xl font-semibold font-neue text-[#939397]">
            Overview
          </h1>
        </header>
        <div className="flex items-center gap-3">
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={farmIcon} width={17.5} height={15.64} /></div>}
            title="Total no. of crop"
            value="0"
          />
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#FDF8EA] border border-[#EEB72C]"><img src={testingIcon} width={20} height={20} /></div>}
            title="Pending Tests"
            value="0"
          />
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7E7EA] border border-[#423C59]"><img src={testingIconGrey} width={20} height={20} /></div>}
            title="Completed Tests"
            value="0"
          />
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#EDEBE9] border border-[#4F3824]"><img src={processingIcon} width={20} height={20} /></div>}
            title="Average turnaround time"
            value="0"
          />
        </div>
      </section>
      <section>
        <header className="mb-4">
          <h1 className="text-lg sm:text-xl font-semibold font-neue text-[#939397]">
            Crop monitoring services
          </h1>
        </header>
        <div className="flex flex-col gap-2 w-full">
          <ServiceCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={monitoringIcon} width={20} height={20} /></div>}
            title="Pest/Disease monitoring"
            value="Click here to get your pest management result"
          />
          <ServiceCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={healthIcon} width={20} height={20} /></div>}
            title="Crop health"
            value="Click here to get your crop health result"
          />
        </div>
      </section>
    </section>
  )
}
