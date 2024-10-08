import React, { Fragment, useState, useCallback, useRef } from 'react'
import { AgCharts } from 'ag-charts-react'
import { getData } from '@/app/data/agGrid/snop/inventory/simulationChart'

function tooltipRenderer({ datum, xKey, yKey }) {
  return { content: `${datum[xKey]}: ${datum[yKey]}%` }
}
const Demand = {
  type: 'bar',
  xKey: 'Week',
  yKey: 'Demand',
  yName: 'Demand',
  fill: '#3b82f6',
  grouped: true,
  tooltip: {
    renderer: tooltipRenderer,
  },
}
const Historic_Stock = {
  type: 'area',
  xKey: 'Week',
  yKey: 'Historic_Stock',
  yName: 'Historic Stock',
  fill: '#cbd5e1',
  //   grouped: true,
  tooltip: {
    renderer: tooltipRenderer,
  },
}
const Target_SS = {
  type: 'line',
  xKey: 'Week',
  yKey: 'Target_SS',
  yName: 'Target Safety Stock',
  fill: '#16a34a',
  tooltip: {
    renderer: tooltipRenderer,
  },
}
const Target_RP = {
  type: 'line',
  xKey: 'Week',
  yKey: 'Target_RP',
  yName: 'Target Reorder Point',
  tooltip: {
    renderer: tooltipRenderer,
  },
}
const Target_Net = {
  type: 'area',
  xKey: 'Week',
  yKey: 'Target_Net',
  yName: 'Target Net Stock',
  fill: '#d1fae5',
  tooltip: {
    renderer: tooltipRenderer,
  },
}
const Target_Net_Transit = {
  type: 'area',
  xKey: 'Week',
  yKey: 'Target_Net_Transit',
  yName: 'Target Net Stock in Transit',

  tooltip: {
    renderer: tooltipRenderer,
  },
}

const BAR_AND_LINE = [
  { ...Historic_Stock, type: 'area' },
  { ...Target_Net, type: 'area' },
  { ...Target_Net_Transit, type: 'line' },
  { ...Demand, type: 'bar' },
  { ...Target_SS, type: 'line' },
  { ...Target_RP, type: 'line' },
]

export default function SimulationChart() {
  const chartRef = useRef(null)
  const [options, setOptions] = useState({
    data: getData(),
    // title: {
    //   text: 'Inventory Simulation for SKU 1234',
    // },
    series: BAR_AND_LINE,
    legend: {
      position: 'top',
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
      },
      {
        // primary y axis
        type: 'number',
        position: 'left',
        keys: [
          'Historic_Stock',
          'Target_Net',
          'Target_Net_Transit',
          'Demand',
          'Target_SS',
          'Target_RP',
        ],
        title: {
          text: 'Weekly Demand for SKU 1234',
        },
      },
    ],
  })

  return (
    <div className="flex h-[700px] flex-col">
      <AgCharts ref={chartRef} options={options} />
    </div>
  )
}
