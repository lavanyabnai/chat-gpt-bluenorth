'use client';
import * as React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { kpiService_m } from '@/app/data/riskData/scenario1';
import { cn } from '@/lib/utils';

const stats = [
  { name: 'BL3: Optimal', stat: '112,778' },
  { name: 'Current on Hand Inventory', stat: '157,221' },
  { name: 'Current on Hand Inventory', stat: '157,221' },
  { name: 'Current on Hand Inventory', stat: '157,221' },
  { name: 'Current on Hand Inventory', stat: '157,221' }
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

export default function SnopTruck() {

  return (
    <div className="m-2">
      <div>
        <DemoContainer>
          <Tabs defaultValue="bl3" className="">
            <TabsList className="">
              <TabsTrigger value="bl3" className="relative uppercase">
                BL3: Optimal
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="3dc">
                S2: 3DC
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s5">
                S5: BFP@250
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s6">
                S6: BFP Infinite
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s7">
                S7: Demand 50% BFP
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s8">
                S8: Demand 50% no BFP
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s9">
                S9: 3 Big DC
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="s10">
                S10: LOS Mins
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bl3">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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
                       

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="3dc">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s5">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s6">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s7">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s8">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s9">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="s10">
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <div className="">
                    <CardTitle className="flex text-xl ">
                      <h1 className="rounded border border-sky-500 p-2 bg-sky-50 text-blue-900">
                        Scenario Results
                      </h1>
                    </CardTitle>

                    <div className="my-2 border-b" />

                    <div>
                      <CardContent className="grid gap-4">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                          {stats.map(item => (
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

                        <ul className="grid grid-cols-1 gap-2 mt-2">
                          {kpiService_m.map(kpi => (
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
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </DemoContainer>
      </div>
    </div>
  )
}