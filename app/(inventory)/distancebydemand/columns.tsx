"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { distanceCoverageByDemands } from '@/db/schema';
// import { Actions } from "./actions"

// Define the type for a coglocation based on the schema
type distanceCoverageByDemands = typeof distanceCoverageByDemands.$inferSelect;

export const columns: ColumnDef<distanceCoverageByDemands>[] = [
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
    accessorKey: 'siteName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'distanceToSiteKm',
    header: 'Distance to Site (Km)'
  },
  {
    accessorKey: 'demandPercentage',
    header: 'Demand Percentage'
  },
  {
    accessorKey: 'demandM3',
    header: 'Demand M3'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },

  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Updated At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      if (updatedAt instanceof Date) {
        return updatedAt.toLocaleDateString();
      } else if (typeof updatedAt === 'string') {
        return new Date(updatedAt).toLocaleDateString();
      } else {
        return 'Invalid Date';
      }
    }
  }
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <Actions id={row.original.id.toString()} />
  // }
];
