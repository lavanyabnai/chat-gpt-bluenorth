import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
 
} from "@progress/kendo-react-charts";
import "hammerjs";


export function ColumnColorChartContainer({ categories, series,color }) {
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