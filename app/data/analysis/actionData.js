import WrapperMultiBarChart from "~/kendo/charts/bar/WrapperBarChart"
import WrapperMap from '../../kendo/map/WrapperMap'
import { orderTrendCategories_m, orderTrendSeries_m,discountproductCategories_m,discountproductSeries_m} from '~/kendo/rawData/analysis/actionAnalysis'


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
    Name: "Current backorders",
    container: (
      <WrapperMultiBarChart
        category={orderTrendCategories_m}
        series={orderTrendSeries_m}
      />
    ),
  },

  {
    Name: "Global Inventories",
    container: <WrapperMap />,
  },
];

export const kpiInv_m = [
  {
    Name: "Global Stock",
    container: (
      <WrapperMultiBarChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
  {
    Name: "Global Inventories",
    container: <WrapperMap />,
  },
];

