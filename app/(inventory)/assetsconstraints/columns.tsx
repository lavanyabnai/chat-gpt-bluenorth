"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { assetsConstraints } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a assetsconstraint based on the schema
type Assetsconstraint = typeof assetsConstraints.$inferSelect

export const columns: ColumnDef<Assetsconstraint>[] = [
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
    accessorKey: 'groupName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Group ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'minDcs',
    header: 'Min DCs'
  },
  {
    accessorKey: 'maxDcs',
    header: 'Max DCs'
  },
  {
    accessorKey: 'timePeriod',
    header: 'Time Period'
  },
  {
    accessorKey: 'inclusionType',
    header: 'Inclusion Type'
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
          <ArrowUpDown className="ml-2 size-4" />
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
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Updated At
          <ArrowUpDown className="ml-2 size-4" />
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
