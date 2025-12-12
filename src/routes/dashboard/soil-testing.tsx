import { Button } from "@/components/Button";
import StatCard from "@/components/dashboard/StatCard";
import soilIcon from '/assets/icons/soil.svg'
import testingIcon from '/assets/icons/testing.svg'
import testingIconGrey from '/assets/icons/testing-grey.svg'
import processingIcon from '/assets/icons/processing.svg'
import soilEmptyIcon from '/assets/icons/soil-empty.png'

export default function SoilTesting() {
  return (
    <section className="bg-white p-6 pb-9 rounded-[1.25rem]">
      <section className="mb-6">
        <header className="flex items-center justify-between mb-3 w-full">
          <h1 className="text-lg sm:text-xl font-semibold font-neue text-[#939397]">
            Overview
          </h1>
          <div className="w-fit">
            <Button variant="primary">
              Request Test ₦25,000
            </Button>
          </div>
        </header>
        <div className="flex items-center gap-3">
          <StatCard
            icon={<div className="size-9.5 rounded-[0.375rem] grid place-items-center bg-[#E7F2ED] border border-[#0A814A]"><img src={soilIcon} width={20} height={20} /></div>}
            title="Total Soil Tests"
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
            Test Result
          </h1>
        </header>
        <div className="w-full h-[23rem] grid place-items-center">
          <div className="size-fit text-center">
            <img src={soilEmptyIcon} width={97} height={50} className="mb-3 mx-auto" />
            <p className="text-[#615C74] -mb-0.5">You have no soil test result.</p>
            <p className="text-[#615C74]">Click the button above to get your farm soil test</p>
          </div>
        </div>
      </section>
    </section>
  )
}
