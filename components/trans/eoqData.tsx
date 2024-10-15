import WrapperMultiAreaChart from '@/app/kendo/charts/area/WrapperAreaChart';
import {
  orderCategories_m,
  orderSeries_m,
  rawMatCategories_m,
  rawMatSeries_m,
  
  operationalCat,
  operationalSeries,
} from '@/app/kendo/rawData/trans/eoqRawData'

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiEoq = [
  {
    Name: 'Inventory',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiAreaChart
        category={orderCategories_m}
        series={orderSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Operational Costs',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiAreaChart
        category={operationalCat}
        series={operationalSeries}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
]
