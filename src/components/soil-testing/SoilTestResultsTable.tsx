import { DataTable } from "@/components/DataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { defaultData } from "@/data/soil-testing-results";
import type { Transaction } from "@/models/soil-testing-model";
import { type ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { useMemo } from "react";

const StatusBadge: React.FC<{ status: Transaction["status"] }> = ({
  status,
}) => {
  const isCompleted = status === "Completed";
  const bgColor = isCompleted ? "bg-[#E7F2ED]" : "bg-[#FFEEBE]";
  const textColor = isCompleted ? "text-[#0A814A]" : "text-[#674A00]";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${bgColor} ${textColor}`}
    >
      {status}
    </span>
  );
};

const SoilTestingResultsTable = () => {
  const soilColumns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "id",
      header: "Test ID",
    },
    {
      accessorKey: "farmName",
      header: "Farm name",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: "payment",
      header: "Payment",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      id: "actions",
      header: "Actions",
      cell: () => (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical size={15} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuItem>View result</DropdownMenuItem>
              <DropdownMenuItem>Rename result</DropdownMenuItem>
              <DropdownMenuItem>Download result</DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-[#E61504CC]">Delete Result</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  const columns = useMemo(() => soilColumns, []);
  // const [data, setData] = useState(() => defaultData);
  const data = useMemo(() => defaultData, []);

  return (
    <>
      <DataTable title="Test Result" columns={columns} data={data} />
    </>
  );
};
export { SoilTestingResultsTable };
