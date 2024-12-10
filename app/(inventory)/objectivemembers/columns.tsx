"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { objectiveMembers } from '@/db/schema';

import { Actions } from './actions';
// Define the type for a customconstraint based on the schema
type objectivemember = typeof objectiveMembers.$inferSelect

export const columns: ColumnDef<objectivemember>[] = [
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
    header: 'Name'
  },
  {
    accessorKey: 'expression',
    header: 'Expression'
  },
  {
    accessorKey: 'coefficient',
    header: 'Co Efficient'
  },
  {
    accessorKey: 'addToObjective',
    header: 'Add To Objective'
  },
  {
    accessorKey: 'inclusionType',
    header: 'Inclusion Type'
  }, {
    accessorKey: 'customConstraintId',
    header: 'Custom Constrain tId'
  },

  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
