"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { locations } from "@/db/schema"
import { Actions } from './actions'

// Define the type for a location based on the schema
type Location = typeof locations.$inferSelect

export const columns: ColumnDef<Location>[] = [
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
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'code',
    header: 'Code'
  },
  {
    accessorKey: 'city',
    header: 'City'
  },
  {
    accessorKey: 'region',
    header: 'Region'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },
  {
    accessorKey: 'address',
    header: 'Address'
  },
  {
    accessorKey: 'latitude',
    header: 'Latitude',
    cell: ({ row }) => row.original.latitude?.toFixed(6) || 'N/A'
  },
  {
    accessorKey: 'longitude',
    header: 'Longitude',
    cell: ({ row }) => row.original.longitude?.toFixed(6) || 'N/A'
  },
  {
    accessorKey: 'autofillCoordinates',
    header: 'Autofill Coordinates',
    cell: ({ row }) => row.original.autofillCoordinates ? 'Yes' : 'No'
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const createdAt = row.original.createdAt
      if (createdAt instanceof Date) {
        return createdAt.toLocaleDateString()
      } else if (typeof createdAt === 'string') {
        return new Date(createdAt).toLocaleDateString()
      } else {
        return 'Invalid Date'
      }
    }
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
      )
    },
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt
      if (updatedAt instanceof Date) {
        return updatedAt.toLocaleDateString()
      } else if (typeof updatedAt === 'string') {
        return new Date(updatedAt).toLocaleDateString()
      } else {
        return 'Invalid Date'
      }
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
]
