import WrapperMultiLineChart from '@/app/kendo/charts/line/WrapperLineChart'
import {
orderCategories_m,
orderSeries_m,
rawMatCategories_m,
rawMatSeries_m,
producersCategories_m,
producersSeries_m,
inProductionCategories_m,
inProductionSeries_m,
ProducersStorgeCategories_m,
ProducersStorgeSeries_m,
ShippingCategories_m,
ShippingSeries_m,
DistributorStorageCategories_m,
DistributorStorageSeries_m,
ShippingRetailersCategories_m,
ShipppingRetailersSeries_m,
RetailersStorageCategories_m,
RetailersStroageSeries_m,
} from '@/app/kendo/rawData/trans/outputRawData'

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiService_m = [

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
  {
    Name: 'Inventory | Producers Storage (raw mat.)',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={producersCategories_m}
        series={producersSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | In Production',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={inProductionCategories_m}
        series={inProductionSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Producer Storage',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={ProducersStorgeCategories_m}
        series={ProducersStorgeSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Shipping to distributors',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={ShippingCategories_m}
        series={ShippingSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Distributor Storage',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={DistributorStorageCategories_m}
        series={DistributorStorageSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Shipping to retailers',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={ShippingRetailersCategories_m}
        series={ShipppingRetailersSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
  {
    Name: 'Inventory | Retailer Storage',
    Value: '$10M',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={RetailersStorageCategories_m}
        series={RetailersStroageSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/apAnalysis',
  },
]
