import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createRoot } from 'react-dom/client'
import { AgCharts } from 'ag-charts-react'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'

const action1 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action2 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action3 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action4 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action5 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action6 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
const action7 = [
  {
    title: 'SKU-890123',
    deficit: '2.8M',
    percent: 110,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.6M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.3M',
    percent: 100,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '1.7M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    deficit: '2.2M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    deficit: '0.9M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    deficit: '3.7M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    deficit: '4.3M',
    percent: 90,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    deficit: '1.1M',
    percent: 80,
    progressColor: 'bg-yellow-500',
  },
]
function formatNumber(value) {
  value /= 1_000_000

  if (value % 1 === 0) {
    return `${Math.floor(value)}M`
  } else {
    return `${value.toFixed(1)}M`
  }
}
const getTotal= [
    {
      quarter: "Q1'18",
      iphone: 120,
      mac: 80, 
    },
]

const Total = {
  data: getTotal,
  series: [
    {
      type: 'bar',
      xKey: 'quarter',
      yKey: 'iphone',
      yName: 'iPhone',
      stacked: true,
    },
    {
      type: 'bar',
      xKey: 'quarter',
      yKey: 'mac',
      yName: 'Mac',
      stacked: true,
    },
  ],
}
const stats = [
  { name: 'Total Inventory', stat: '$53,165,402' },
  { name: 'Inv Rebalancing From DC', stat: '$8,194,778' },
  { name: 'Inv Rebalacing From Hub', stat: '$13,477,786' },
  { name: 'Inv Rebalacing From Store', stat: '$4,808,126' },
]
export default function Recommendations() {
  return (
    <>
      <div>
        <dl className="mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-center text-xl font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-center text-lg font-bold tracking-tight  text-gray-900  lg:text-5xl">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-8 gap-2">
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 1-Store to Hub
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action1.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-blue-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 2- Hub to Store
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action2.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-red-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 3- Hub to Hub
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action3.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-blue-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-2xl text-center">
              {' '}
              Action 4- Hub to DC
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action4.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-yellow-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-2xl text-center">
              Action 5- DC to Hub
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action5.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-yellow-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 6-DC to DC
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action6.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-purple-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 7- Send Back to Supplier
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Demand (000s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {action7.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium text-xs">
                      {invoice.title}
                    </TableCell>
                    <TableCell>
                      <Progress
                        className="w-full"
                        indicatorColor="bg-gray-500"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-xl text-center">
              Action 8- Flush Out Dead Inv
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px] overflow-y-auto">
            <AgCharts options={Total} />
          </div>
        </div>
      </div>
    </>
  )
}
