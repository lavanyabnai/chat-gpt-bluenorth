import WrapperMultiColumnChart from '@/app/kendo/charts/column/WrapperColumnChart';
import WrapperMultiAreaChart from '@/app/kendo/charts/area/WrapperAreaChart';
import {
 truckEmptyCat,
truckEmptySeries,
truckQueueCat,
truckQueueSeries,
QuayCat,
Quayeries
} from '@/app/kendo/rawData/trans/containerRawData'

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiCont = [
  {
    Name: 'Yard Trucks Empty Time Rate',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiAreaChart
        category={truckEmptyCat}
        series={truckEmptySeries}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Yard Trucks Queue Time Rate',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiAreaChart
        category={truckQueueCat}
        series={truckQueueSeries}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },

  {
    Name: 'Quay Cranes Ending Time (s)',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiColumnChart category={QuayCat} series={Quayeries} />
    ),
    // <WrapperMultiColumnColorChart seriesData={pro1Data} />
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
]
