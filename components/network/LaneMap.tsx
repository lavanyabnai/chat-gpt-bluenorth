import { AgCharts } from 'ag-charts-react' // Check if this import is correct

// import { topology } from './topology'
import {
  islandTopology,
  flightTopology,
  backgroundTopology,
  capitals,
} from '@/app/data/network/mapData/laneData/topology'

import 'ag-charts-enterprise' // Import AgCharts Enterprise if needed

import { ProgressBar } from '@progress/kendo-react-progressbars'
import { AgChartOptions } from 'ag-charts-community'

const flightData = [
  { name: 'SHA-FL', duration: 20 },
  // { name: 'ATH-AXD', duration: 57 },
  // { name: 'ATH-CHQ', duration: 49 },
  // { name: 'ATH-HER', duration: 52 },
  // { name: 'ATH-JIK', duration: 45 },
  // { name: 'ATH-JKH', duration: 44 },
  // { name: 'ATH-JKL', duration: 51 },
  // { name: 'ATH-JMK', duration: 40 },
  // { name: 'ATH-JNX', duration: 41 },
  // { name: 'ATH-JSH', duration: 56 },
  // { name: 'ATH-JSI', duration: 40 },
  // { name: 'ATH-JSY', duration: 37 },
  // { name: 'ATH-JTR', duration: 46 },
  // { name: 'ATH-JTY', duration: 49 },
  // { name: 'ATH-KGS', duration: 52 },
  // { name: 'ATH-KIT', duration: 45 },
  // { name: 'ATH-KVA', duration: 54 },
  // { name: 'ATH-LRS', duration: 49 },
  // { name: 'ATH-LXS', duration: 48 },
  // { name: 'ATH-MJT', duration: 49 },
  // { name: 'ATH-MLO', duration: 40 },
  // { name: 'ATH-PAS', duration: 40 },
  // { name: 'ATH-RHO', duration: 60 },
  // { name: 'ATH-SKU', duration: 39 },
  // { name: 'ATH-SMI', duration: 49 },
]

const islandData = [
  { name: 'Shanghai', population: 3138 },
  { name: 'Andros', population: 8826 },
  { name: 'Astypalaia', population: 1300 },
  { name: 'Chios', population: 50361 },
  { name: 'Crete', population: 636504 },
  { name: 'Icaria', population: 8843 },
  { name: 'Ithaca', population: 2862 },
  { name: 'Ios', population: 2024 },
  { name: 'Kalymnos', population: 17752 },
  { name: 'Karpathos', population: 6567 },
  { name: 'Kea', population: 2335 },
  { name: 'Kythira', population: 3644 },
  { name: 'Kythnos', population: 1456 },
  { name: 'Lemnos', population: 16411 },
  { name: 'Lesbos', population: 83755 },
  { name: 'Milos', population: 5302 },
  { name: 'Mykonos', population: 10704 },
  { name: 'Naxos', population: 20578 },
  { name: 'Paros', population: 14520 },
  { name: 'Rhodes', population: 125113 },
  { name: 'Salamis', population: 37220 },
  { name: 'Samos', population: 32642 },
  { name: 'Samothrace', population: 2596 },
  { name: 'Santorini', population: 15480 },
  { name: 'Serifos', population: 1400 },
  { name: 'Sifnos', population: 2777 },
  { name: 'Skopelos', population: 4518 },
  { name: 'Skyros', population: 3052 },
  { name: 'Syros', population: 21507 },
  { name: 'Thasos', population: 13104 },
  { name: 'Tinos', population: 8934 },
]


const stats = [
  {
    Name: 'Logistics Cost',
    Value: '$2.2B',
    TargetAch: '75',
    status: 'Above Target',
  },
  {
    Name: 'Loading Cost',
    Value: '75%',
    TargetAch: '90',
    status: 'Below Target',
  },
  {
    Name: 'Unloading Cost',
    Value: '80%',
    TargetAch: '90',
    status: 'Above Target',
  },
]

const sizeDomain = [500, 0]

const options = {
  series: [
    {
      type: 'map-shape-background',
      topology: backgroundTopology,
    },
    {
      type: 'map-marker',
      title: 'Islands',
      data: islandData,
      topology: islandTopology,
      idKey: 'name',
      sizeKey: 'population',
      shape: 'pin',
      size: 8,
      maxSize: 32,
    },
    {
      type: 'map-marker',
      topology: capitals,
      data: capitals.features.map((t) => {
        return { name: t.properties.name }
      }),

      idKey: 'name',
      shape: 'pin',
      size: 10,
      fill: '#15803d',
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (
          params: { datum: { name: unknown } }
        ) => `<div class="ag-chart-tooltip-title" style="background-color: #15803d">
      DC Location
    </div>
    <div class="ag-chart-tooltip-content">
      <a href="/execution/dc">${params.datum.name} <br> Shipment Volume: 806 <br> D+X: 958 <br> Open items: 1,098 <br> Cost per Shipment: 238</a>
    </div>`,

        interaction: {
          enabled: true,
        },
      },
    },
 
    {
      type: 'map-line',
      title: 'Flights',
      legendItemName: 'Flights',
      data: flightData,
      topology: flightTopology,
      idKey: 'name',
      sizeKey: 'duration',
      sizeName: 'Duration',
      sizeDomain,
      lineDash: [1, 4],
    },
  ],
  legend: {
    enabled: true,
  },
}
export default function LaneMap() {
    const emptyStyles = { background: '#ef4444' }
    const progressStyles = { background: '#22c55e' }
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <ul className="p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {stats.map((kpi) => (
          <li
            key={kpi.Name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white border shadow-md"
          >
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <span
                className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                  kpi.status === 'Above Target'
                    ? `bg-green-500`
                    : kpi.status === 'Below Target'
                      ? `bg-red-500`
                      : ''
                }`}
              ></span>
              <div className="my-2 flex items-baseline gap-2">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    {kpi.Name}
                  </h3>
                  <h1 className="text-4xl font-bold text-black">{kpi.Value}</h1>
                </div>
                <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                  <ProgressBar
                    value={parseFloat(kpi.TargetAch)}
                    style={{ width: 100, height: 12 }}
                    labelVisible={true}
                    labelPlacement={'start'}
                    emptyStyle={emptyStyles}
                    progressStyle={progressStyles}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="w-full h-[900px]">
        <AgCharts options={options as AgChartOptions} />
     
      </div>
    </div>
  )
}
