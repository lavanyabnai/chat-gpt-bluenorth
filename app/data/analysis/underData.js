import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'
import WrapperMultiLineChart from '~/kendo/charts/Line/WrapperLineChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'

import { discountproductCategories_m,discountproductSeries_m,cancellationCategories_m,cancellationSeries_m} from '~/kendo/rawData/analysis/underAnalysis'


export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },
  
]


export const kpiService_m = [
  {
    Name: "Demand realization vs. Forecast",
    container: (
      <WrapperMultiStackColChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Demand realization vs.Forecast",
    container: (
      <WrapperMultiStackColChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
];

