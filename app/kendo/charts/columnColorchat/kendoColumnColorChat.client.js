import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartLegend,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts'
import "hammerjs";


export function ColumnColorChartContainerChat({ categories, series,color }) {
  return (
    <>
      <Chart style={{ height: 250 }}>
        {/* <ChartTitle text="Units sold" /> */}
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>

        <ChartSeries>
          {series.map((s) => (
            <ChartSeriesItem
              name={s.name}
              data={s.data}
              type="column"
              key={s.name}
              color={s.color}
            />
          ))}
        </ChartSeries>
      </Chart>
    </>
  );
};
  

// export function MultiColumnChartContainer({categories,series}){
//     return (
  
//         <Chart style={{ height: 250 }}>
//           {/* <ChartTitle text="Units sold" /> */}
//             <ChartLegend position="top" orientation="horizontal" />
//             <ChartCategoryAxis>
//               <ChartCategoryAxisItem categories={categories}
//             />
//             </ChartCategoryAxis>
            
//             <ChartSeries  >
//             {series.map((s) => (
//             <ChartSeriesItem name={s.name} data={s.data} type="column" key={s.name} />
//             ))}
//             </ChartSeries>
//         </Chart>
//     )
//   };