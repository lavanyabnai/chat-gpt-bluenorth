import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-column-header-inci";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { labels, priorities, statuses } from "@/app/data/insightdata/data";
import { Task } from "@/app/data/insightdata/schema";
import { Progress } from "./ui/progress";
export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Insight" />
    ),
    cell: ({ row }) => <div className="w-[20px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    
    cell: ({ row }) => {
   
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
       
          <div className="flex w-[100px] items-center">
            {status && status.icon ? (
              <svg
                className={`${status.fill} mr-2 size-2`}
                viewBox="0 0 6 6"
                aria-hidden="true"
              >
                <circle cx={3} cy={3} r={3} />
              </svg>
            ) : null}
            {status && status.label ? <span>{status.label}</span> : null}{" "}
          </div>
     
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "module",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Availabilty" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      return (
        <div>
          {status ? (
            <Badge
              className={`${status.color} ${status.textClr}`}
              variant="outline"
            >
              {row.getValue("module")}
            </Badge>
          ) : null}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium ">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  
 
 
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Projection" />
    ),
    cell: ({ row }) => {
      return (
        <div>
          <Progress
            className="bg-gray-200"
            indicatorColor={`${
              Number(row.getValue("progress")) > 50
                ? "bg-green-400"
                : "bg-red-400"
            }`}
            value={row.getValue("progress")}
          />
        </div>
      );
    },
  },


];
