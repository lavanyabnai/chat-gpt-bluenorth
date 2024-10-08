import React from "react";
import { Link, useLoaderData, useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import WrapperMultiColumnChart from "@/app/kendo/charts/column/WrapperColumnChart";

import WrapperMultiAreaChart from '@/app/kendo/charts/area/WrapperAreaChart'

import WrapperMultiLineChart from '@/app/kendo/charts/line/WrapperLineChart'

import WrapperMultiBarChart from '@/app/kendo/charts/bar/WrapperBarChart'

import { getScenarioById } from "@/models/scenario.server";

import { cn } from "@/lib/utils";

const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];

const monthCategory = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const materialCategory = ["Material Cost", "Holding Cost", "Stockout Cost"];
const empCategory = [
  "Hiring Cost",
  "Layoff Cost",
  "Employee Cost",
  "Overtime Cost",
];
const outCategory = ["Material Cost", "Manufacturing Cost", "Logistics Cost"];
const invConstCategory = [
  "Starting Inventory",
  "Ending Inventory",
  "Starting Backlog",
  "Ending Backlog",
];
const empConstCategory = [
  "Max overtime hours",
  "Starting # of employee",
  "Min ending # of employees",
  "Max ending # of employees",
];
const proConstCategory = ["Labour Hours"];
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 p-0.5 rounded-xl ",
        className,
      )}
      {...props}
    />
  );
}

export const loader = async ({ params }) => {
  const scenarioData = await getScenarioById(params.scenId);
  return json({ scenarioData });
};

export default function AnalyzeScenario() {
  const [date, setDate] = React.useState<Date>(new Date());
  const { scenarioData } = useLoaderData<typeof loader>();
  console.log("Scenario data", scenarioData);
  const fetcher = useFetcher();

  const demandSeries = [
    {
      name: "Demand",
      data: [
        scenarioData["Jan"],
        scenarioData["Feb"],
        scenarioData["Mar"],
        scenarioData["Apr"],
        scenarioData["May"],
        scenarioData["Jun"],
        scenarioData["Jul"],
        scenarioData["Aug"],
        scenarioData["Sep"],
        scenarioData["Oct"],
        scenarioData["Nov"],
        scenarioData["Dec"],
      ],
    },
  ];

  const materialSeries = [
    {
      name: "Material Cost",
      data: [
        {
          value: scenarioData["material_cost_pu"],
          color: "#67e8f9",
        },
        {
          value: scenarioData["inv_hold_cost_pupm"],
          color: "#06b6d4",
        },
        {
          value: scenarioData["stockout_cost_pupm"],
          color: "#0e7490",
        },
      ],
    },
  ];

  const empSeries = [
    {
      name: "Material Cost",
      data: [
        scenarioData["hiring_cost_pw"],
        scenarioData["firing_cost_pw"],
        scenarioData["worker_cost_pm"],
        scenarioData["overtime_cost_phr"],
      ],
    },
  ];

  const outSeries = [
    {
      name: "Material Cost",
      data: [
        scenarioData["outsourcing_cost_pu"],
        scenarioData["max_work_hrs_pwpm"],
        scenarioData["max_overtime_hrs_pwpm"],
      ],
    },
  ];

  const invConstSeries = [
    {
      name: "Material Cost",
      data: [
        scenarioData["inventory_start"],
        scenarioData["inventory_end"],
        scenarioData["backlog_start"],
        scenarioData["backlog_end"],
      ],
    },
  ];
  const empConstSeries = [
    {
      name: "Material Cost",
      data: [
        scenarioData["max_overtime_hrs_pwpm"],
        scenarioData["num_workers_start"],
        scenarioData["min_end_workers"],
        scenarioData["max_end_workers"],
      ],
    },
  ];
  const proConstSeries = [
    {
      name: "Material Cost",
      data: [scenarioData["labor_hrs_pu"]],
    },
  ];
  // const demandSeries = [scenarioData["Jan"], scenarioData["Feb"],];

  return (
    <>
      <div className="m-2">
        <div className="mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ">
          <nav
            className="ml-6 pl-6 flex items-center justify-center"
            aria-label="Global"
          >
            <div className=" flex gap-x-8 justify-center ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className=" text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="bg-white mx-2 shadow-md rounded-b-lg">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Sales & Operations Planning - List of Scenarios
            </h2>
          </div>
          <div className=" shadow-lg items-start justify-center gap-y-4 rounded-lg p-4 md:grid lg:grid-cols-1 xl:grid-cols-1">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl">Demand</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiColumnChart
                      category={monthCategory}
                      series={demandSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-3 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl">
                        {" "}
                        Material & Inventory Cost
                      </span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiColumnChart
                      category={materialCategory}
                      series={materialSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>

              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl"> Employee Cost</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiAreaChart
                      category={empCategory}
                      series={empSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>

              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl">Outsourcing Cost</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiLineChart
                      category={outCategory}
                      series={outSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-3">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl">Inventory Constraint</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiBarChart
                      category={invConstCategory}
                      series={invConstSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>

              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl"> Employee Constraint</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiColumnChart
                      category={empConstCategory}
                      series={empConstSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>

              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-2xl"> Product Constraint</span>
                      <div className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                              <DotsHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[140px]"
                          >
                            <Link to={`/snop/scenario/${scenarioData}`}>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <WrapperMultiColumnChart
                      category={proConstCategory}
                      series={proConstSeries}
                    />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
