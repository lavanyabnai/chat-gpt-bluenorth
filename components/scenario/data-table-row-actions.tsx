"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { taskSchema } from "@/components/scenario/schema";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);

  console.log(`inside row action`,row.original);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 p-0 data-[state=open]:bg-muted"
          disabled={!row.getIsSelected()}
        >
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[140px]">
        {/* <Link
          to={`/snop/scenario/${row.original.scenario_id}`}
          hidden={row.original.Status !== "Open"}
        >
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link> */}
        <DropdownMenuItem asChild>
          <button
            type="submit"
            name="intent"
            value="duplicate"
            className="w-full"
            // onClick={() =>
            //   fetcher.submit(
            //     { scenario_id: row.original.scenario_id, intent: "duplicate" },
            //     { method: "post" },
            //   )
            // }
          >
            Make a Copy
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            type="submit"
            name="intent"
            value="archive"
            className="w-full"
            // hidden={row.original.Status === "Open"}
            // onClick={() =>
            //   fetcher.submit(
            //     { scenario_id: row.original.scenario_id, intent: "archive" },
            //     { method: "post" },
            //   )
            // }
          >
            Archive
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            type="submit"
            name="intent"
            value="delete"
            className="w-full"
            // hidden={row.original.Status !== "Open"}
            // onClick={() =>
            //   fetcher.submit(
            //     { scenario_id: row.original.scenario_id, intent: "delete" },
            //     { method: "post" },
            //   )
            // }
          >
            Delete
          </button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <Link
            to={`/snop/scenario/${row.original.scenario_id}/analyze`}
            hidden={row.original.Status !== "Open"}
          >
            <DropdownMenuItem>Analyze</DropdownMenuItem>
          </Link> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
