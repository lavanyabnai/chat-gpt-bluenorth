import WrapperMultiLineChart from '@/app/kendo/charts/line/WrapperLineChart'
import WrapperPieChart from '@/app/kendo/charts/pie/WrapperPieChart';
import {
  orderCategories_m,
  orderSeries_m,
  rawMatCategories_m,
  rawMatSeries_m,
  orderChartSeries,
} from '@/app/kendo/rawData/trans/dcRawData'

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiInv = [
  {
    Name: 'Order backlog | Order backlog',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={orderCategories_m}
        series={orderSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Producers Storage (raw mat.)',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperPieChart series={orderChartSeries} />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },

  {
    Name: 'Inventory | Raw Mat.Shipping to producers',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={rawMatCategories_m}
        series={rawMatSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
]
