import React from 'react'
import React, { Fragment, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { createRoot } from 'react-dom/client'
import { AgChartsReact } from 'ag-charts-react'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { Progress } from '~/components/ui/progress'
import { labels } from '~/data/columndata/data'

function getData() {
  return [
    { asset: 'Inv at DC', amount: 15000000 },
    { asset: 'Inv at Hub', amount: 25000000 },
    { asset: 'Inv at Store', amount: 13000000 },
  ]
}

function getBar() {
  return [
    {
      quarter: "Q1'18",
      Dc: 140,
      Hub: 16,
      Store: 14,
    },
    {
      quarter: "Q2'18",
      Dc: 124,
      Hub: 20,
      Store: 14,
    },
    {
      quarter: "Q3'18",
      Dc: 112,
      Hub: 20,
      Store: 18,
    },
    {
      quarter: "Q4'18",
      Dc: 118,
      Hub: 24,
      Store: 14,
    },
  ]
}
const dataExcess = [
  {
    children: [
      {
        title: 'SKU-840417',
        location: 'Location001',
        excess: '0.7M',
        percent: 50,
      },
      {
        title: 'SKU-575471',
        location: 'Location002',
        excess: '0.2M',
        percent: 51,
      },
      {
        title: 'SKU-980960',
        location: 'Location003',
        excess: '1.2M',
        percent: 81,
      },
      {
        title: 'SKU-859711',
        location: 'Location004',
        excess: '0.3M',
        percent: 25,
      },
      {
        title: 'SKU-983840',
        location: 'Location005',
        excess: '0.8M',
        percent: 29,
      },
      {
        title: 'SKU-802319',
        location: 'Location006',
        excess: '1.7M',
        percent: 8,
      },
      {
        title: 'SKU-642013',
        location: 'Location007',
        excess: '1.3M',
        percent: 98,
      },
      {
        title: 'SKU-844802',
        location: 'Location008',
        excess: '2.0M',
        percent: 2,
      },
      {
        title: 'SKU-668798',
        location: 'Location009',
        excess: '1.7M',
        percent: 80,
      },
      {
        title: 'SKU-215106',
        location: 'Location010',
        excess: '1.9M',
        percent: 47,
      },
      {
        title: 'SKU-658596',
        location: 'Location011',
        excess: '1.1M',
        percent: 12,
      },
      {
        title: 'SKU-973932',
        location: 'Location012',
        excess: '0.3M',
        percent: 80,
      },
      {
        title: 'SKU-774724',
        location: 'Location013',
        excess: '1.3M',
        percent: 9,
      },
      {
        title: 'SKU-005216',
        location: 'Location014',
        excess: '0.9M',
        percent: 45,
      },
      {
        title: 'SKU-224022',
        location: 'Location015',
        excess: '1.9M',
        percent: 23,
      },
    ],
  },
]
const pie = {
  data: getData(), // Assuming getData() returns the chart data
  theme: 'ag-polychroma',
  series: [
    {
      type: 'pie',
      angleKey: 'amount', // Assuming 'amount' is the key for the data values
      legendItemKey: 'asset',
      sectorLabelKey: 'amount',

      sectorLabel: {
        color: 'white',
        fontWeight: 'bold',
        formatter: ({ value }) => {
          // Format value to 1M format
          const valueInMillions = value / 10 ** 6
          return `$${valueInMillions.toFixed(0)}M` // Format to whole number (1M)
        }, // Format to whole number (1M),
      },
    },
  ],
}

const stackBar = {
  theme: 'ag-polychroma',
  data: getBar(),
  series: [
    {
      type: 'bar',
      xKey: 'quarter',
      yKey: 'Dc',
      yName: 'Inv at Dc',
      stacked: true,
      label: {
        enabled: true, // Set to true or false based on your requirement
      },
    },
    {
      type: 'bar',
      xKey: 'quarter',
      yKey: 'Hub',
      yName: 'Inv at Hub',
      stacked: true,
      label: {
        enabled: true, // Set to true or false based on your requirement
      },
    },
    {
      type: 'bar',
      xKey: 'quarter',
      yKey: 'Store',
      yName: 'Inv at Store',
      stacked: true,
      label: {
        enabled: true, // Set to true or false based on your requirement
      },
    },

  ],
}

export default function NetworkInventory() {
  const [heat, setOptions] = useState({
    // theme: 'ag-polychroma',
    data: dataExcess,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'excess',
        sizeKey: 'percent',
        sizeName: 'Excess',
        colorKey: 'percent',
        colorName: 'percent',
        colorRange: ['#155e75', '#0ea5e9'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
  })
  return (
    <>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-2xl text-center">
              On Hand Inventory
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px]">
            <AgChartsReact options={pie} />
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-2xl text-center">
              Product Lifecycle and Inv Distribution
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px]">
            <AgChartsReact options={stackBar} />
          </div>
        </div>
        <div className=" text-blue-900 rounded-lg border">
          <div className="space-y-1 p-2 ">
            <CardTitle className="text-2xl text-center">
              Inventory Status
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </div>

          <div className="h-[450px]">
            <AgChartsReact options={heat} />
          </div>
        </div>
      </div>
    </>
  )
}
