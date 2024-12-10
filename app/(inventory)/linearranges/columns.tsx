'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { linearRanges } from '@/db/schema';

import { Actions } from './actions';
// Define the type for a customer based on the schema
type LinearRange = typeof linearRanges.$inferSelect

export const columns: ColumnDef<LinearRange>[] = [
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
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'lowerBound',
    header: 'Lower Bound'
  },
  {
    accessorKey: 'expression',
    header: 'Expression'
  },
  {
    accessorKey: 'upperBound',
    header: 'Upper Bound'
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
