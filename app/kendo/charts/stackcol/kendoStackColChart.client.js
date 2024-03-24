import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartLegend,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts'
import 'hammerjs'
import { nanoid } from 'nanoid'

export function MultiStackColChartContainer({ categories, series, name }) {
  return (
    <Chart style={{ height: 250 }}>
      {/* <ChartTitle text="Units sold" /> */}
      <ChartLegend position="top" orientation="horizontal" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} />
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map(s => (
          <ChartSeriesItem
            name={s.name}
            data={s.data}
            type="column"
            stack={true}
            key={nanoid()}
            tooltip={{ visible: true }}
          />
        ))}
      </ChartSeries>
    </Chart>
  )
}

//   export function SingleStackColChartContainer({ categories, firstSeries }) {
//       return (
//           <Chart style={{height: 200}}>
//               {/* <ChartTitle text="Units sold" /> */}
//               <ChartCategoryAxis>
//               <ChartCategoryAxisItem categories={categories}>
//                   {/* <ChartCategoryAxisTitle text="Months" /> */}
//               </ChartCategoryAxisItem>
//               </ChartCategoryAxis>
//               <ChartSeries>
//               <ChartSeriesItem type="column" stack={true} gap={2} spacing={0.25} data={firstSeries} />
//               {/* <ChartSeriesItem type="column" stack={true} data={secondSeries} />
//               <ChartSeriesItem type="column" stack={true} data={thirdSeries} />
//               <ChartSeriesItem type="column" stack={true} data={fourthSeries} /> */}
//               </ChartSeries>
//           </Chart>
//       )
//   }

//   export function DoubleStackColChartContainer({ categories, firstSeries, secondSeries }){
//       return (
//           <Chart style={{height: 200}}>
//           {/* <ChartTitle text="Units sold" /> */}
//           <ChartCategoryAxis>
//           <ChartCategoryAxisItem categories={categories}>
//               {/* <ChartCategoryAxisTitle text="Months" /> */}
//           </ChartCategoryAxisItem>
//           </ChartCategoryAxis>
//           <ChartSeries>
//           <ChartSeriesItem type="column" stack={true} gap={2} spacing={0.25} data={firstSeries} />
//           <ChartSeriesItem type="column" stack={true} data={secondSeries} />
//           {/* <ChartSeriesItem type="column" stack={true} data={thirdSeries} />
//           <ChartSeriesItem type="column" stack={true} data={fourthSeries} /> */}
//           </ChartSeries>
//       </Chart>
//       )

//   }

//   export function TripleStackColChartContainer({ categories, firstSeries, secondSeries, thirdSeries }){
//       return (
//           <Chart style={{height: 200}}>
//           {/* <ChartTitle text="Units sold" /> */}
//           <ChartCategoryAxis>
//           <ChartCategoryAxisItem categories={categories}>
//               {/* <ChartCategoryAxisTitle text="Months" /> */}
//           </ChartCategoryAxisItem>
//           </ChartCategoryAxis>
//           <ChartSeries>
//           <ChartSeriesItem type="column" stack={true} gap={2} spacing={0.25} data={firstSeries} />
//           <ChartSeriesItem type="column" stack={true} data={secondSeries} />
//           <ChartSeriesItem type="column" stack={true} data={thirdSeries} />
//           {/* <ChartSeriesItem type="column" stack={true} data={fourthSeries} /> */}
//           </ChartSeries>
//       </Chart>
//       )

//   }

//   export function QuadStackColChartContainer({ categories, firstSeries, secondSeries, thirdSeries, fourthSeries }){
//       return (
//           <Chart style={{height: 200}}>
//           {/* <ChartTitle text="Units sold" /> */}
//           <ChartCategoryAxis>
//           <ChartCategoryAxisItem categories={categories}>
//               {/* <ChartCategoryAxisTitle text="Months" /> */}
//           </ChartCategoryAxisItem>
//           </ChartCategoryAxis>
//           <ChartSeries>
//           <ChartSeriesItem type="column" stack={true} gap={2} spacing={0.25} data={firstSeries} />
//           <ChartSeriesItem type="column" stack={true} data={secondSeries} />
//           <ChartSeriesItem type="column" stack={true} data={thirdSeries} />
//           <ChartSeriesItem type="column" stack={true} data={fourthSeries} />
//           </ChartSeries>
//       </Chart>
//       )

//   }
