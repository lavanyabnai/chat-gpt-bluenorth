import { AgCharts } from 'ag-charts-react';

// import { topology } from './topology'
import {
  topology,
  backgroundtopology,
  capitals
} from '@/app/data/network/mapData/storeMap/topology';
import 'ag-charts-enterprise'; // Import AgCharts Enterprise if needed
import { AgChartOptions } from 'ag-charts-community';

import { ProgressBar } from '@progress/kendo-react-progressbars';
export const data = [
  { name: 'Alabama', code: 'AL', sales: 302289 },
  { name: 'Arizona', code: 'AZ', sales: 512504 },
  { name: 'Arkansas', code: 'AR', sales: 176878 },
  { name: 'California', code: 'CA', sales: 3898158 },
  { name: 'Colorado', code: 'CO', sales: 525868 },
  { name: 'Connecticut', code: 'CT', sales: 343186 },
  { name: 'Delaware', code: 'DE', sales: 94116 },
  { name: 'District of Columbia', code: 'DC', sales: 176491 },
  { name: 'Florida', code: 'FL', sales: 1595347 },
  { name: 'Georgia', code: 'GA', sales: 811294 },
  { name: 'Idaho', code: 'ID', sales: 119810 },
  { name: 'Illinois', code: 'IL', sales: 1092246 },
  { name: 'Indiana', code: 'IN', sales: 501267 },
  { name: 'Iowa', code: 'IA', sales: 250819 },
  { name: 'Kansas', code: 'KS', sales: 230388 },
  { name: 'Kentucky', code: 'KY', sales: 280449 },
  { name: 'Louisiana', code: 'LA', sales: 313334 },
  { name: 'Maine', code: 'ME', sales: 91818 },
  { name: 'Maryland', code: 'MD', sales: 516455 },
  { name: 'Massachusetts', code: 'MA', sales: 741343 },
  { name: 'Michigan', code: 'MI', sales: 664452 },
  { name: 'Minnesota', code: 'MN', sales: 475590 },
  { name: 'Mississippi', code: 'MS', sales: 146725 },
  { name: 'Missouri', code: 'MO', sales: 425203 },
  { name: 'Montana', code: 'MT', sales: 71088 },
  { name: 'Nebraska', code: 'NE', sales: 181127 },
  { name: 'Nevada', code: 'NV', sales: 241432 },
  { name: 'New Hampshire', code: 'NH', sales: 112065 },
  { name: 'New Jersey', code: 'NJ', sales: 806890 },
  { name: 'New Mexico', code: 'NM', sales: 131535 },
  { name: 'New York', code: 'NY', sales: 2168133 },
  { name: 'North Carolina', code: 'NC', sales: 773365 },
  { name: 'North Dakota', code: 'ND', sales: 74538 },
  { name: 'Ohio', code: 'OH', sales: 880871 },
  { name: 'Oklahoma', code: 'OK', sales: 256974 },
  { name: 'Oregon', code: 'OR', sales: 319525 },
  { name: 'Pennsylvania', code: 'PA', sales: 974558 },
  { name: 'Rhode Island', code: 'RI', sales: 77948 },
  { name: 'South Carolina', code: 'SC', sales: 325373 },
  { name: 'South Dakota', code: 'SD', sales: 73005 },
  { name: 'Tennessee', code: 'TN', sales: 527938 },
  { name: 'Texas', code: 'TX', sales: 2596144 },
  { name: 'Utah', code: 'UT', sales: 275048 },
  { name: 'Vermont', code: 'VT', sales: 43384 },
  { name: 'Virginia', code: 'VA', sales: 712900 },
  { name: 'Washington', code: 'WA', sales: 808344 },
  { name: 'West Virginia', code: 'WV', sales: 100240 },
  { name: 'Wisconsin', code: 'WI', sales: 417135 },
  { name: 'Wyoming', code: 'WY', sales: 50743 }
];

const stats = [
  {
    Name: 'Sales',
    Value: '$2.2B',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Name: 'Forcast Accuracy',
    Value: '75%',
    TargetAch: '90',
    status: 'Below Target'
  },
  {
    Name: 'On-Time & In-Full',
    Value: '80%',
    TargetAch: '90',
    status: 'Above Target'
  },
  {
    Name: 'Backlog',
    Value: '$1.2M',
    TargetAch: '50',
    status: 'Below Target'
  },
  {
    Name: 'Cost of Goods',
    Value: '$1.2B',
    TargetAch: '90',
    status: ''
  },
  {
    Name: 'Inventory',
    Value: '$600M',
    TargetAch: '50',
    status: 'Below Target'
  }
];

const options = {
  // title: {
  //   text: 'sales of American States',
  // },
  // background: {
  //   fill: 'aliceblue',
  // },
  data,
  topology,
  series: [
    {
      type: 'map-shape-background',
      fillOpacity: 0,
      stroke: '#66879933',
      fill: '#668799',
      topology: backgroundtopology
    },
    {
      type: 'map-shape',
      idKey: 'name',
      colorKey: 'sales',
      fill: '#668799',
      fillOpacity: 0.5,
      highlightStyle: {
        item: {
          fillOpacity: 1
        }
      },
      colorRange: ['#bae6fd', '#0ea5e9', '#60a5fa']
    },

    // {
    //   type: 'map-marker',
    //   shape: 'square',
    //   topology: capitals,
    //   data: [
    //     { name: 'New York', long: -73.9249, lat: 40.6943 },
    //     { name: 'Los Angeles', long: -118.4068, lat: 34.1141 },
    //     { name: 'Chicago', long: -87.6866, lat: 41.8375 },
    //     { long: -80.2101, lat: 25.784, name: 'Miami' },
    //     { long: -95.3885, lat: 29.786, name: 'Houston' },
    //     { long: -96.7667, lat: 32.7935, name: 'Dallas' },
    //     { long: -122.3244, lat: 47.6211, name: 'Seattle' },
    //     { name: 'Wyoming', long: -109.080842, lat: 45.002073 },
    //   ],
    //   // tooltip: {
    //   //   renderer: ({ datum, title }) => ({
    //   //     title,
    //   //     content: `Name: ${datum.name}`,
    //   //   }),
    //   // },
    //   latitudeKey: 'lat',
    //   longitudeKey: 'long',
    //   labelKey: 'name',
    //   labelName: 'Name',
    //   idKey: 'name',
    //   size: 4,
    //   fill: '#fde047',
    //   fillOpacity: 1,
    //   strokeWidth: 0,
    // },
    {
      type: 'map-marker',
      topology: capitals,
      data: capitals.features.map((t) => {
        return { name: t.properties.name };
      }),

      idKey: 'name',
      shape: 'pin',
      //     type MarkerShape =
      //   'circle'
      // | 'cross'
      // | 'diamond'
      // | 'heart'
      // | 'plus'
      // | 'pin'
      // | 'square'
      // | 'star'
      // | 'triangle'
      // | any;
      size: 10,
      fill: '#EF5450',
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (
          params: { datum: { name: unknown; }; }
        ) => `<div class="ag-chart-tooltip-title" style="background-color: #EF5450">
      Store 
    </div>
    <div class="ag-chart-tooltip-content">
      <a href="/execution/store">${params.datum.name} <br> Daily Sales (units): 318 <br> Daily Sales (Revenue) : 9,771<br> Inventory Level: 314 <br> Customer Foot Traffic: 250 <br> Staff Workig Hours: 195 <br> Promotional Activity Effectiveness: 62</a>
    </div>`,

        interaction: {
          enabled: true
        }
      }
    }
    // {
    //   type: 'map-marker',
    //   legendItemName: 'Markers',
    //   title: 'DC Locations',
    //   data: [
    //     { name: 'New York', long: -73.9249, lat: 40.6943 },
    //     { name: 'Los Angeles', long: -118.4068, lat: 34.1141 },
    //     { name: 'Chicago', long: -87.6866, lat: 41.8375 },
    //     { long: -80.2101, lat: 25.784, name: 'Miami' },
    //     { long: -95.3885, lat: 29.786, name: 'Houston' },
    //     { long: -96.7667, lat: 32.7935, name: 'Dallas' },
    //     { long: -122.3244, lat: 47.6211, name: 'Seattle' },
    //     { name: 'Wyoming', long: -109.080842, lat: 45.002073 },
    //   ],
    //   latitudeKey: 'lat',
    //   longitudeKey: 'long',

    //   labelName: 'Name',
    //   label: { enabled: false },
    //   shape: 'pin',
    //   //     type MarkerShape =
    //   //   'circle'
    //   // | 'cross'
    //   // | 'diamond'
    //   // | 'heart'
    //   // | 'plus'
    //   // | 'pin'
    //   // | 'square'
    //   // | 'star'
    //   // | 'triangle'
    //   // | any;
    //   size: 20,
    //   fill: '#EF5450',
    //   fillOpacity: 1,
    //   strokeWidth: 0,
    //   tooltip: {
    //     renderer: (
    //       params
    //     ) => `<div class="ag-chart-tooltip-title" style="background-color: #fb923c">
    //   DC Location
    // </div>
    // <div class="ag-chart-tooltip-content">
    //   <a href="/snop/master">${params.datum.name}</a>
    // </div>`,

    //     interaction: {
    //       enabled: true,
    //     },
    //   },
    // },
  ]
};
export default function StoreMap() {
  const emptyStyles = { background: '#ef4444' };
  const progressStyles = { background: '#22c55e' };
  return (
    <div className="bg-white">
      <ul className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 ">
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
      <div className="w-full h-[900px] ">
        <AgCharts options={options as AgChartOptions} />
      </div>
    </div>
  );
}
