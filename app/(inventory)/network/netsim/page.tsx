'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PresentationChartLineIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { kpiService_m } from '@/components/trans/outputData';
import { kpiDc } from '@/components/trans/dcData';
import { kpiInv } from '@/components/trans/inventoryData';
import { kpiCont } from '@/components/trans/containerData';
import { kpiEoq } from '@/components/trans/eoqData';
import InventoryControl from '@/components/trans/InventoryControl';
import BlueNorthSC from '@/components/trans/BlueNorthSc';
import DC from '@/components/trans/DC';
import ContainerLine from '@/components/trans/ContainerLine';
import EOQ from '@/components/trans/Eoq';

export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const stats = [
  { name: 'Pixels per kilometer', stat: '0.39' },
  { name: 'Scaling Factor', stat: '10000' },
  { name: 'Number of iterations', stat: '10' },
  { name: 'Number of replications', stat: '3' }
];

const DcSta = [
  { name: 'Initial Warehouse Utilization', stat: '0.5' },
  { name: 'Loading docks number', stat: '3' },
  { name: 'Unloading docks number', stat: '5' },
  { name: 'Forklits number', stat: '30' },
  { name: 'Forklits per order assembling', stat: '1000' },
  { name: 'Forklits per unload dock', stat: '1000' },
  { name: 'Forklits per load dock', stat: '1000' },
  { name: 'Forklits per storage', stat: '1000' },
  { name: 'Order rate', stat: '3' },
  { name: 'Truck Capacity', stat: '15' },
  { name: 'Pallet Types Num', stat: '10' }
];
const ContSta = [
  { name: 'Number of Yard Trucks', stat: '27' },
  { name: 'Truck Limit', stat: '4' },
  { name: 'Speed Multiple', stat: '1' }
];
const eoqSta = [
  { name: 'Fixed Cost Per Order', stat: '1000' },
  { name: 'Demand Per Year', stat: '365' },
  { name: 'Holding Cost', stat: '2' },
  { name: 'Order Quantity', stat: '146' },
  { name: 'Inventory', stat: '1' },
  {
    name: 'Cost of Policy at the end of simulation run ( Based on current parameters)',
    stat: '4,163.679'
  }
];
function DemoContainer({
  // eslint-disable-next-line react/prop-types
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
  return (
    <div>
      <div className="flex h-full">
        <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
          <div className="m-4">
            <DemoContainer>
              <Tabs defaultValue="Adaptive" className="">
                <TabsList className="">
                  <TabsTrigger value="Adaptive">
                    Adaptive Supply Chain
                  </TabsTrigger>
                  <TabsTrigger value="DC">DC</TabsTrigger>
                  <TabsTrigger value="Inventory">Inventory Control</TabsTrigger>
                  <TabsTrigger value="Container">Container Line</TabsTrigger>
                  <TabsTrigger value="Eoq">EOQ</TabsTrigger>
                </TabsList>
                <TabsContent value="Adaptive" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <BlueNorthSC />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                              {stats.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2  h-[515px] overflow-auto">
                              {kpiService_m.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="DC" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <DC />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                              {DcSta.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border p-1 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-2xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center  text-center text-xs font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2  h-[515px] overflow-auto">
                              {kpiDc.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Inventory" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <InventoryControl />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-4 ">
                              {stats.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2  h-[515px] overflow-auto">
                              {kpiInv.map((inv) => (
                                <li
                                  key={inv.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {inv.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{inv.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Container" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <ContainerLine />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 ">
                              {ContSta.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2  h-[515px] overflow-auto">
                              {kpiCont.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Eoq" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <EOQ />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 ">
                              {eoqSta.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border p-4  shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center text-center text-xs font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2 h-[390px] overflow-auto">
                              {kpiEoq.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DemoContainer>
          </div>
        </div>
      </div>
    </div>
  );
}