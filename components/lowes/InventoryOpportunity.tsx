import React from 'react'
import React, { Fragment, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { createRoot } from 'react-dom/client'
import { AgChartsReact } from 'ag-charts-react'
import 'ag-charts-enterprise'
import { cn } from '~/lib/utils'

function formatNumber(value) {
  value /= 1_000_000

  if (value % 1 === 0) {
    return `${Math.floor(value)}M`
  } else {
    return `${value.toFixed(1)}M`
  }
}
const salesProductA = [
  {
    date: 'Total',
    start: 0,
    gain: 2500000,
  },
  {
    date: 'Current Target Gap',
    start: 5500000,
    gain: 500000,
  },
  {
    date: 'Current Target',
    start: 0,
    gain: 2000000,
  },
  {
    date: 'Should Target Gap',
    start: 4000000,
    gain: 300000,
  },
  {
    date: 'Should Target',
    start: 0,
    gain: 1600000,
  },
  {
    date: 'Target Gap',
    start: 3300000,
    gain: 200000,
  },
  {
    date: 'Target',
    start: 0,
    gain: 1300000,
  },
  {
    date: 'Total Gap',
    start: 3500000,
    gain: 1100000,
  },
]

const costsProductA = [
  {
    date: 'Total',
    start: 0,
    gain: 2500000,
  },
  {
    date: 'Current Target Gap',
    start: 5500000,
    gain: 500000,
  },
  {
    date: 'Current Target',
    start: 0,
    gain: 2000000,
  },
  {
    date: 'Should Target Gap',
    start: 4000000,
    gain: 300000,
  },
  {
    date: 'Should Target',
    start: 0,
    gain: 1600000,
  },
  {
    date: 'Target Gap',
    start: 3300000,
    gain: 200000,
  },
  {
    date: 'Target',
    start: 0,
    gain: 1300000,
  },
  {
    date: 'Total Gap',
    start: 3500000,
    gain: 1100000,
  },
]

const salesProductB = [
  {
    date: 'Total',
    start: 0,
    gain: 2500000,
  },
  {
    date: 'Current Target Gap',
    start: 5500000,
    gain: 500000,
  },
  {
    date: 'Current Target',
    start: 0,
    gain: 2000000,
  },
  {
    date: 'Should Target Gap',
    start: 4000000,
    gain: 300000,
  },
  {
    date: 'Should Target',
    start: 0,
    gain: 1600000,
  },
  {
    date: 'Target Gap',
    start: 3300000,
    gain: 200000,
  },
  {
    date: 'Target',
    start: 0,
    gain: 1300000,
  },
  {
    date: 'Total Gap',
    start: 3500000,
    gain: 1100000,
  },
]

const salesA = [
  {
    quarter: "Q1'18",
    iphone: 10000000,
  },
  {
    quarter: "Q2'18",
    iphone: 7200000,
  },
  {
    quarter: "Q3'18",
    iphone: 2900000,
  },
  {
    quarter: "Q4'18",
    iphone: 1900000,
  },
  {
    quarter: "Q5'18",
    iphone: 600000,
  },
  {
    quarter: "Q6'18",
    iphone: 600000,
  },
  {
    quarter: "Q7'18",
    iphone: 400000,
  },
  {
    quarter: "Q8'18",
    iphone: 200000,
  },
  {
    quarter: "Q9'18",
    iphone: 0,
  },
]

const salesB = [
  {
    quarter: "Q1'18",
    iphone: 10000000,
  },
  {
    quarter: "Q2'18",
    iphone: 7200000,
  },
  {
    quarter: "Q3'18",
    iphone: 2900000,
  },
  {
    quarter: "Q4'18",
    iphone: 1900000,
  },
  {
    quarter: "Q5'18",
    iphone: 600000,
  },
  {
    quarter: "Q6'18",
    iphone: 600000,
  },
  {
    quarter: "Q7'18",
    iphone: 400000,
  },
  {
    quarter: "Q8'18",
    iphone: 200000,
  },
  {
    quarter: "Q9'18",
    iphone: 0,
  },
]

const salesC = [
  {
    quarter: "Q1'18",
    iphone: 10000000,
  },
  {
    quarter: "Q2'18",
    iphone: 7200000,
  },
  {
    quarter: "Q3'18",
    iphone: 2900000,
  },
  {
    quarter: "Q4'18",
    iphone: 1900000,
  },
  {
    quarter: "Q5'18",
    iphone: 600000,
  },
  {
    quarter: "Q6'18",
    iphone: 600000,
  },
  {
    quarter: "Q7'18",
    iphone: 400000,
  },
  {
    quarter: "Q8'18",
    iphone: 200000,
  },
  {
    quarter: "Q9'18",
    iphone: 0,
  },
]

function getData() {
  return [
    {
      date: 'Total',
      start: 0,
      gain: 5300000,
    },
    {
      date: 'Current Target Gap',
      start: 5500000,
      gain: 1300000,
    },
    {
      date: 'Current Target',
      start: 0,
      gain: 3900000,
    },
    {
      date: 'Should Target Gap',
      start: 4000000,
      gain: 700000,
    },
    {
      date: 'Should Target',
      start: 0,
      gain: 3200000,
    },
    {
      date: 'Target Gap',
      start: 3300000,
      gain: 500000,
    },
    {
      date: 'Target',
      start: 0,
      gain: 2600000,
    },
    {
      date: 'Total Gap',
      start: 3500000,
      gain: 2600000,
    },
  ]
}

function getBar() {
  return [
    {
      quarter: "Q1'18",
      iphone: 10000000,
    },
    {
      quarter: "Q2'18",
      iphone: 7200000,
    },
    {
      quarter: "Q3'18",
      iphone: 2900000,
    },
    {
      quarter: "Q4'18",
      iphone: 1900000,
    },
    {
      quarter: "Q5'18",
      iphone: 600000,
    },
    {
      quarter: "Q6'18",
      iphone: 600000,
    },
    {
      quarter: "Q7'18",
      iphone: 400000,
    },
    {
      quarter: "Q8'18",
      iphone: 200000,
    },
    {
      quarter: "Q9'18",
      iphone: 0,
    },
  ]
}
const options = {
  data: getData(),

  series: [
    {
      type: 'range-bar',
      xKey: 'date',
      label: {
        formatter: ({ value }) => formatNumber(value),
      },
      yLowKey: 'start',
      yHighKey: 'gain',
      xName: 'Month',
      yLowName: 'Start',
      yHighName: 'End',
      yName: 'Gained',
    },
  ],
}

const bar = {
  data: getBar(),
  series: [
    {
      type: 'bar',
      label: {
        formatter: ({ value }) => formatNumber(value),
      },
      xKey: 'quarter',
      yKey: 'iphone',
      yName: 'iPhone',
    },
  ],
}
const commonOptions = {
  tooltip: {
    enabled: false,
  },
  zoom: {
    enabled: true,
  },
}

const MyChart1 = () => {
  const [chartOptions1, setChartOptions1] = useState({
    ...commonOptions,

    sync: {
      enabled: true,
      groupId: 'sales',
    },

    data: salesProductA,
    padding: { bottom: 5 },
    series: [
      {
        type: 'range-bar',
        xKey: 'date',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        yLowKey: 'start',
        yHighKey: 'gain',
        xName: 'Month',
        yLowName: 'Start',
        yHighName: 'End',
        yName: 'Gained',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions1} />
    </div>
  )
}

const MyChart2 = () => {
  const [chartOptions2, setChartOptions2] = useState({
    ...commonOptions,

    sync: {
      enabled: true,
      groupId: 'costs',
    },

    data: costsProductA,
    series: [
      {
        type: 'range-bar',
        xKey: 'date',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        yLowKey: 'start',
        yHighKey: 'gain',
        xName: 'Month',
        yLowName: 'Start',
        yHighName: 'End',
        yName: 'Gained',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions2} />
    </div>
  )
}

const MyChart3 = () => {
  const [chartOptions3, setChartOptions3] = useState({
    ...commonOptions,

    sync: {
      enabled: true,
      groupId: 'sales',
    },

    data: salesProductB,
    series: [
      {
        type: 'range-bar',
        xKey: 'date',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        yLowKey: 'start',
        yHighKey: 'gain',
        xName: 'Month',
        yLowName: 'Start',
        yHighName: 'End',
        yName: 'Gained',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions3} />
    </div>
  )
}
const MyChart4 = () => {
  const [chartOptions1, setChartOptions1] = useState({
    ...commonOptions,

    data: salesA,
    padding: { bottom: 5 },
    series: [
      {
        type: 'bar',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        xKey: 'quarter',
        yKey: 'iphone',
        yName: 'iPhone',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions1} />
    </div>
  )
}

const MyChart5 = () => {
  const [chartOptions2, setChartOptions2] = useState({
    ...commonOptions,

    data: salesB,
    series: [
      {
        type: 'bar',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        xKey: 'quarter',
        yKey: 'iphone',
        yName: 'iPhone',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions2} />
    </div>
  )
}

const MyChart6 = () => {
  const [chartOptions3, setChartOptions3] = useState({
    ...commonOptions,

    data: salesC,
    series: [
      {
        type: 'bar',
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
        xKey: 'quarter',
        yKey: 'iphone',
        yName: 'iPhone',
      },
    ],
  })

  return (
    <div className="h-[200px]">
      <AgChartsReact options={chartOptions3} />
    </div>
  )
}
export default function InventoryOpportunity() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <Card className="shadow-lg text-blue-900">
          <CardHeader className="space-y-1 ">
            <CardTitle className="text-2xl flex">Gap-Overall</CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </CardHeader>

          <CardContent className="">
            <div className="h-[350px]">
              <AgChartsReact options={options} />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg text-blue-900">
          <CardHeader className="space-y-1 ">
            <CardTitle className="text-2xl flex">
              Opportunity Action
            </CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </CardHeader>

          <CardContent className="">
            <div className="h-[350px]">
              <AgChartsReact options={bar} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Card className="shadow-lg text-blue-900">
          <CardHeader className="space-y-1 ">
            <CardTitle className="text-2xl flex">Gap</CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </CardHeader>

          <CardContent className="">
            <div className="">
              <MyChart1 />
              <MyChart2 />
              <MyChart3 />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg text-blue-900">
          <CardHeader className="space-y-1 ">
            <CardTitle className="text-2xl flex">Opportunity Action</CardTitle>
            {/* <p className="text-gray-400 text-sm">Units per month</p> */}
            <div className="border-b" />
          </CardHeader>

          <CardContent className="">
            <div className="">
              <MyChart4 />
              <MyChart5 />
              <MyChart6 />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
