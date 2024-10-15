"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { facilities } from "@/db/schema"
import { Actions } from './actions';

// Define the type for a facility based on the schema
type Facility = typeof facilities.$inferSelect

export const columns: ColumnDef<Facility>[] = [
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
      );
    }
  },
  {
    accessorKey: 'type',
    header: 'Type'
  },
  {
    accessorKey: 'inclusionType',
    header: 'Inclusion Type'
  },
  {
    accessorKey: 'capacity',
    header: 'Capacity'
  },
  {
    accessorKey: 'capacityUnit',
    header: 'Capacity Unit'
  },
  {
    accessorKey: 'icon',
    header: 'Icon',
    cell: ({ row }) => <span>{row.original.icon || 'Default'}</span>
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
      );
    },
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      if (createdAt instanceof Date) {
        return createdAt.toLocaleDateString();
      } else if (typeof createdAt === 'string') {
        return new Date(createdAt).toLocaleDateString();
      } else {
        return 'Invalid Date';
      }
    }
  },
  {
    accessorKey: 'locationName',
    header: 'Location Name'
  },
  {
    accessorKey: 'additionalParams',
    header: 'Additional Parameters',
    cell: ({ row }) => {
      const params = row.original.additionalParams;
      return params ? JSON.stringify(params) : 'N/A';
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
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
