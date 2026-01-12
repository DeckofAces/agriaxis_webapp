import { ChevronLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/Button";
import StatCard from "@/components/dashboard/StatCard";
import FarmIconHealthy from "/assets/icons/farm.svg";
import FarmIconAverage from "/assets/icons/farm-yellow.svg";
import FarmIconPoor from "/assets/icons/farm-red.svg";
import { DataTable } from "@/components/DataTable";
import { generateFarms } from "@/data/farm.data";
import type { ColumnDef } from "@tanstack/react-table";
import type { Farm } from "@/models/farm.model";
import StatusBadge from "@/components/StatusBadge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMemo, useState } from "react";

const farms = generateFarms(5);

export const FarmsListContainer: React.FC<{
  onClose: () => void;
  onAddNewFarm: () => void;
  selectFarm: (farm: Farm) => void;
}> = ({ onClose, onAddNewFarm, selectFarm }) => {
  const farmColumns: ColumnDef<Farm>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "farmName",
      header: "Farm name",
    },
    {
      accessorKey: "size",
      header: "Size(Hectares)",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <StatusBadge<Farm["status"]>
          status={row.original.status}
          variant={row.original.status === "healthy" ? "success" : "warning"}
        />
      ),
    },
    {
      accessorKey: "dateCreated",
      header: "Date created",
    },
    {
      id: "actions",
      header: "More",
      cell: ({ row }) => (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical size={15} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => selectFarm(row.original)}>
                View farm
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-[#E61504CC]">Delete farm</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  const columns = useMemo(() => farmColumns, []);
  const [data] = useState(() => farms);

  return (
    <main className="rounded-[1.25rem] bg-white p-6 pb-9">
      <header className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClose}
            className="grid size-7 place-items-center rounded-full bg-[#E8E8E8]"
          >
            <ChevronLeft size={20} />
          </button>
          <h5 className="font-neue text-lg font-semibold text-[#434449]">
            All farms
          </h5>
        </div>
        <div className="w-41.5">
          <Button onClick={onAddNewFarm} variant="primary">
            Add a new farm
          </Button>
        </div>
      </header>
      <section>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            icon={
              <div className="grid size-9.5 place-items-center rounded-[0.375rem] border border-[#0A814A] bg-[#E7F2ED]">
                <img src={FarmIconHealthy} width={17.5} height={15.64} />
              </div>
            }
            title="Total no. of farm"
            value="15"
          />
          <StatCard
            icon={
              <div className="grid size-9.5 place-items-center rounded-[0.375rem] border border-[#0A814A] bg-[#E7F2ED]">
                <img src={FarmIconHealthy} width={17.5} height={15.64} />
              </div>
            }
            title="Healthy"
            value="8"
          />
          <StatCard
            icon={
              <div className="grid size-9.5 place-items-center rounded-[0.375rem] border border-[#EEB72C] bg-[#FDF8EA]">
                <img src={FarmIconAverage} width={17.5} height={15.64} />
              </div>
            }
            title="Average"
            value="5"
          />
          <StatCard
            icon={
              <div className="grid size-9.5 place-items-center rounded-[0.375rem] border border-[#E61504] bg-[#E615040D]">
                <img src={FarmIconPoor} width={17.5} height={15.64} />
              </div>
            }
            title="Poor"
            value="2"
          />
        </div>
        <DataTable title="Farms" columns={columns} data={data} />
      </section>
    </main>
  );
};
