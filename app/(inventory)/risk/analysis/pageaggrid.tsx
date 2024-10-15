"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PrinterIcon } from '@heroicons/react/24/outline';
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon
} from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import LevelMaster from '@/components/lowes/LevelMaster';
import { cn } from '@/lib/utils';
import DemandGrid from '@/app/data/riskData/DemandGrid';
import EventData from '@/app/data/riskData/EventGrid';
import CustomerGrid from '@/app/data/riskData/CustomerGrid';
import FacilityGrid from '@/app/data/riskData/FacilityGrid';
import InventoryGrid from '@/app/data/riskData/InventoryGrid';
import PathsGrid from '@/app/data/riskData/PathsGrid';
import ProcessGrid from '@/app/data/riskData/ProcessGrid';
import SourcingGrid from '@/app/data/riskData/SourcingGrid';
// import { getCustomerRisk } from '@/app/models/risk.server';

// export async function loader({ params }) {
//   const Customerdata = await getCustomerRisk();
//   if (!Customerdata) {
//     throw new Response('Not Found', { status: 404 });
//   }
//   return json({ Customerdata });
// }

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   console.log(`risk Analysis`, formData);
//   // const updates = convertToNumbers(Object.fromEntries(formData))
//   // await createScenario(updates)
//   // console.log(updates)
//   return redirect(`/`);
// };

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}

export function Icontooltip() {
  return (
    <div className="m-2 space-x-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-indigo-100 ">
              <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>New</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-purple-100">
              <Pencil2Icon className="text-purple-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-red-100">
              <TrashIcon className="text-red-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-yellow-100">
              <PrinterIcon className="text-yellow-800 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Print</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-green-100">
              <DownloadIcon className="text-green-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
export default function MasterData() {
  return (
    <>
      <div className="m-4">
        <DemoContainer>
          <Tabs defaultValue="Customers" className="">
            <TabsList className="">
              <TabsTrigger value="Customers" className="relative ">
                Customers
              </TabsTrigger>

              <TabsTrigger className="" value="Demand">
                Demand
              </TabsTrigger>
              <TabsTrigger className="" value="Events">
                Events
              </TabsTrigger>
              <TabsTrigger className="" value="Facility">
                Facility Expenses
              </TabsTrigger>

              <TabsTrigger className="" value="Inventory">
                Inventory
              </TabsTrigger>

              <TabsTrigger className="" value="Paths">
                Paths
              </TabsTrigger>

              <TabsTrigger className="" value="Sourcing">
                Sourcing
              </TabsTrigger>
              <TabsTrigger className="" value="Process">
                Processing Cost
              </TabsTrigger>
              <TabsTrigger className="" value="Suppliers">
                Suppliers
              </TabsTrigger>
              <TabsTrigger className="" value="Unit">
                Unit Conversions
              </TabsTrigger>
              <TabsTrigger className="" value="Types">
                Vehicle Types
              </TabsTrigger>

              <TabsTrigger className="" value="DC">
                DC
              </TabsTrigger>
              <TabsTrigger className="" value="Groups">
                Groups
              </TabsTrigger>
              <TabsTrigger className="" value="Location">
                Location
              </TabsTrigger>
              <TabsTrigger className="" value="Periods">
                Periods
              </TabsTrigger>
              <TabsTrigger className="" value="Products">
                Products
              </TabsTrigger>
              <TabsTrigger className="" value="Shipping">
                Shipping
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Customers">
              <div>
                <CustomerGrid />
              </div>
            </TabsContent>
            <TabsContent value="DC">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">DC</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Demand">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Demand</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <DemandGrid />
              </div>
            </TabsContent>
            <TabsContent value="Events">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Events</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <EventData />
              </div>
            </TabsContent>
            <TabsContent value="Facility">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Facility</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <FacilityGrid />
              </div>
            </TabsContent>
            <TabsContent value="Groups">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Groups</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Inventory">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Inventory</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <InventoryGrid />
              </div>
            </TabsContent>
            <TabsContent value="Location">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Location</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Paths">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Paths</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <PathsGrid />
              </div>
            </TabsContent>
            <TabsContent value="Periods">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Periods</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Products">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Products</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Shipping">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Shipping</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Sourcing">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Sourcing</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <SourcingGrid />
              </div>
            </TabsContent>
            <TabsContent value="Suppliers">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Suppliers</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Unit">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Unit</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Types</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
            <TabsContent value="Process">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Types</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <ProcessGrid />
              </div>
            </TabsContent>
          </Tabs>
        </DemoContainer>
      </div>
    </>
  );
}