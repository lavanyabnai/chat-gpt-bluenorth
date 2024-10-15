'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  PrinterIcon,
  ArrowUpTrayIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
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
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
// import { getInput } from '@/models/input.server';
// import { createScenario } from '@/models/scenario.server';
// import { json, redirect } from '@remix-run/node';
import SnopForm from '@/components/snop/SnopForm';

import MeasureMaster from '@/components/lowes/MeasureMaster';
import AttributeMaster from '@/components/lowes/AttributeMaster';
import { cn } from '@/lib/utils';


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
// export const loader = async () => {
//   const snopInput = await getInput();
//   console.log(snopInput);

//   return json({ snopInput });
// };

// export const action = async ({ request }) => {
//   const formData = await request.formData();

//   const updates = convertToNumbers(Object.fromEntries(formData));
//   await createScenario(updates);
//   console.log(updates);
//   return redirect(`/snop/scenario`);
// };

export default function MasterData({ inputData }) {
  // const { snopInput } = useLoaderData<typeof loader>();
  const [date, setDate] = React.useState<Date>(new Date());
  return (
    <>
      <div className="m-4">
        <DemoContainer>
          <Tabs defaultValue="Capacity" className="">
            <TabsList className="">
              <TabsTrigger value="Capacity" className="relative ">
                Capacity
              </TabsTrigger>
              <TabsTrigger value="Inventory">Inventory</TabsTrigger>
              <TabsTrigger value="Logistics">Logistics</TabsTrigger>
            </TabsList>

            <TabsContent value="Capacity">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Capacity Analyzer</div>

                  <div className="flex items-center ">
                    <Input
                      className="mx-2 text-blue-900 w-50"
                      name="description"
                      // defaultValue={
                      //   inputData.description || 'Describe your scenario'
                      // }
                      placeholder="Describe your scenario"
                    />
                    <Input
                      className="mx-2 text-blue-900 w-50 "
                      name="customer"
                      defaultValue="All"
                      hidden
                    />
                    <Input
                      className="mx-2 text-blue-900 w-50"
                      name="site"
                      defaultValue="All"
                      hidden
                    />
                    <Input
                      className="mx-2 text-blue-900 w-50"
                      name="sku"
                      defaultValue="All"
                      hidden
                    />
                    <Input
                      className="mx-2 text-blue-900 w-50"
                      name="Status"
                      defaultValue="Open"
                      hidden
                    />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[180px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-blue-900" />
                          {date ? (
                            <span className="text-blue-900">
                              {format(date, 'PPP')}
                            </span>
                          ) : (
                            <span className="text-blue-900">Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 ">
                        <Calendar
                          className="text-blue-900"
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <div className="ml-2 flex max-w-sm items-center">
                      <Input type="file" />

                      <Button className="mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600">
                        <div className="flex items-center space-x-1 mx-2 ">
                          <ArrowUpTrayIcon className="text-white h-5 w-5" />
                          <span className="mx-1 text-sm p-1 text-white ">
                            Upload
                          </span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <SnopForm inputData={inputData} />
              </div>
            </TabsContent>
            <TabsContent value="Inventory">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Inventory</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <div>
                <MeasureMaster />
              </div>
            </TabsContent>
            <TabsContent value="Logistics">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Logistics</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>
                <AttributeMaster />
              </div>
            </TabsContent>
          </Tabs>
        </DemoContainer>
      </div>
    </>
  );
}
