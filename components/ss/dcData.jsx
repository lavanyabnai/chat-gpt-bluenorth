import { AgChartsReact } from 'ag-charts-react'
import 'ag-charts-enterprise'
import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'

import {
  ssBasicCat,
  ssBasicSeries_m,
  ssBasicCat2,
  ssBasicSeries_m2,
  ssBasicCat3,
  ssBasicSeries_m3,
  ssBasicCat4,
  ssBasicSeries_m4,
} from '~/components/ss/dcDashboard'

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
    Name: 'Saftey Stock in Product Units,Analgesics,Basic period',
    Value: '$113M',
    Trend: 'up',
    TargetAch: 94,
    container: (
      <WrapperMultiColumnChart category={ssBasicCat} series={ssBasicSeries_m} />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/supplyAnalysis',
  },
  {
    Name: 'Saftey Stock in Product Units,Analgesics,Basic period',
    Value: '$113M',
    Trend: 'up',
    TargetAch: 94,
    container: (
      <WrapperMultiColumnChart
        category={ssBasicCat2}
        series={ssBasicSeries_m2}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/supplyAnalysis',
  },

  {
    Name: 'Saftey Stock in Product Units,Analgesics,Basic period',
    Value: '$113M',
    Trend: 'up',
    TargetAch: 94,
    container: (
      <WrapperMultiColumnChart
        category={ssBasicCat3}
        series={ssBasicSeries_m3}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/supplyAnalysis',
  },
  {
    Name: 'Saftey Stock in Product Units,Analgesics,Basic period',
    Value: '$113M',
    Trend: 'up',
    TargetAch: 94,
    container: (
      <WrapperMultiColumnChart
        category={ssBasicCat4}
        series={ssBasicSeries_m4}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/supplyAnalysis',
  },
]
