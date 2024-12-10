"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { productFlows } from '@/db/schema';
// import { Actions } from "./actions"

// Define the type for a coglocation based on the schema
type productFlows = typeof productFlows.$inferSelect;

export const columns: ColumnDef<productFlows>[] = [
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
    accessorKey: 'label',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Label
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.label,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'sourceId',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Source
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.sourceId,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'destinationId',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Destination
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.destinationId,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'vehicleTypeId',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Vehicle Type
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.vehicleTypeId,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'productId',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Product
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.productId,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'expandSources',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Expand Sources
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.expandSources ? 'Yes' : 'No',
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'expandDestinations',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Expand Destinations
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.expandDestinations ? 'Yes' : 'No',
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'expandProducts',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Expand Products
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.expandProducts ? 'Yes' : 'No',
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'minThroughput',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Min Throughput
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.minThroughput,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'maxThroughput',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Max Throughput
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.maxThroughput,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'fixed',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Fixed
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.fixed ? 'Yes' : 'No',
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'fixedValue',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Fixed Value
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.fixedValue,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'productUnit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Product Unit
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.productUnit,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'downPenalty',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Down Penalty
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.downPenalty,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'upPenalty',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Up Penalty
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.upPenalty,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'currency',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Currency
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.currency,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'distanceLimit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Distance Limit
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.distanceLimit,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'distanceUnit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Distance Unit
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.distanceUnit,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'timeLimit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Time Limit
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.timeLimit,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'timeUnit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Time Unit
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.timeUnit,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'timePeriodId',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Time Period
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.timePeriodId,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'expandPeriods',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Expand Periods
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.expandPeriods ? 'Yes' : 'No',
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'inclusionType',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Inclusion Type
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.inclusionType,
    enableSorting: true,
    enableHiding: true
  }

  // {
  //   id: 'actions',
  //   cell: ({ row }) => <Actions id={row.original.id.toString()} />
  // }
]
