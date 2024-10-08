import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from '@/components/datatable/data-table-column-header-inci'
import { DataTableRowActions } from '@/components/datatable/data-table-row-actions-insight'
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { statuses } from "@/app/data/insightdata/data";
import { Task } from "@/app/data/insightdata/schema";
import { Progress } from "@/components/ui/progress";
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
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
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
        <div className="flex w-[150px] items-center">
          {status && status.icon ? (
            <svg
              className={`${status.fill} mr-2 h-2 w-2`}
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
      <DataTableColumnHeader column={column} title="Module" />
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
    accessorKey: "avg",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Avg.Deviation" />
    ),
    cell: ({ row }) => {
      const avg = row.getValue("avg");
      return (
        <div className="">
          <span className="flex max-w-[100px] truncate font-medium ">
            {avg["av1"]}
          </span>

          <span className="flex truncate">{avg["av2"]}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "inv",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="On Hand Inventory" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium ">
            {row.getValue("inv")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "safe",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Safety Stock" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium ">
            {row.getValue("safe")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Module" />
    ),
    cell: ({ row }) => {
      return (
        <div>
          <Progress
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

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
