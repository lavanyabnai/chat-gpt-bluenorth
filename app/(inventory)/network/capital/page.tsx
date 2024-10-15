'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import CardLayout from '@/components/snop/CardLayout';
import { kpiService_m } from '@/app/data/dashboard/inventoryData';
import { cn } from '@/lib/utils';
import OrderMangement from '@/components/network/OrderMangement';

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

export default function Agmap() {
  const [position, setPosition] = React.useState('bottom');

  return (
    <div>
      <div className="m-4">
        <DemoContainer>
          <Tabs defaultValue="store" className="">
            <TabsList className="">
              <TabsTrigger value="store" className="relative uppercase">
                Overall
              </TabsTrigger>
              {/* <TabsTrigger className="uppercase" value="dc">
                Store
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="supplier">
                DC
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="supplier">
                Supplier
              </TabsTrigger> */}
              <TabsTrigger className="uppercase" value="Working">
                Working Capital
              </TabsTrigger>
            </TabsList>

            <TabsContent value="store">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Inventory KPIs</div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="">
                <CardLayout kpiData={kpiService_m} />
              </div>
            </TabsContent>

            <TabsContent value="Working">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Order Management</div>
                </div>
              </div>

              <div>
                <OrderMangement />
              </div>
            </TabsContent>
          </Tabs>
        </DemoContainer>
      </div>
    </div>
  );
}
