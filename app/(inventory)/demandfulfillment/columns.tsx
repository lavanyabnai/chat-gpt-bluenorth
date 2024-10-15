"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { demandFulfillment } from '@/db/schema';
// import { Actions } from "./actions"

// Define the type for a coglocation based on the schema
type DemandFulfillment = typeof demandFulfillment.$inferSelect;

export const columns: ColumnDef<DemandFulfillment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'iteration',
    header: 'Iteration'
  },
  {
    accessorKey: 'period',
    header: 'Period'
  },
  {
    accessorKey: 'customerId',
    header: 'Customer ID'
  },
  {
    accessorKey: 'productId',
    header: 'Product ID'
  },
  {
    accessorKey: 'unit',
    header: 'Unit'
  },
  {
    accessorKey: 'demandMin',
    header: 'Demand Min'
  },
  {
    accessorKey: 'demandMax',
    header: 'Demand Max'
  },
  {
    accessorKey: 'satisfied',
    header: 'Satisfied'
  },

  {
    accessorKey: 'percentage',
    header: 'Percentage'
  },
  {
    accessorKey: 'revenuePerItem',
    header: 'Revenue Per Item'
  },
  {
    accessorKey: 'revenueTotal',
    header: 'Revenue Total'
  },
  {
    accessorKey: 'underCost',
    header: 'Under Cost'
  },
  {
    accessorKey: 'overCost',
    header: 'Over Cost'
  },
  {
    accessorKey: 'penalty',
    header: 'Penalty'
  }

  // {
  //   id: 'actions',
  //   cell: ({ row }) => <Actions id={row.original.id.toString()} />
  // }
];
