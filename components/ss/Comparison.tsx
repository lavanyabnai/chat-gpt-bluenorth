import { Grid, GridColumn } from '@progress/kendo-react-grid'


const data1 = [
  {
    kpi: 'Carrying Cost',
    chain: '89.35',
    Inventory: '188.28',
  },
  {
    kpi: 'Opportunity Cost',
    chain: '7988.03',
    Inventory: '7988.03',
  },
  {
    kpi: 'Profit',
    chain: '63,365,215.85',
    Inventory: '63,365,215.85',
  },
  {
    kpi: 'Revenue',
    chain: '98,280,000.0',
    Inventory: '98,280,000.0',
  },
  {
    kpi: 'Total Cost',
    chain: '34,935,627.82',
    Inventory: '34,935,627.82',
  },
  {
    kpi: 'Transportation Cost',
    chain: '5,760,238.47',
    Inventory: '5,760,238.47',
  },


]
const data2 = [
  {
    kpi: 'Maximum lead time,days',
    chain: '2.04',
    Inventory: '2.04',
  },
  {
    kpi: 'Min-Max Service Level, %',
    chain: '10-100',
    Inventory: '40-100',
  },
  {
    kpi: 'Current backlog orders',
    chain: '0',
    Inventory: '0',
  },
  {
    kpi: 'Customer delayed orders',
    chain: '706.0',
    Inventory: '684.0',
  },
  {
    kpi: 'Customer in-time orders',
    chain: '1472.0',
    Inventory: '1472.0',
  },
  {
    kpi: 'Customer orders arrived',
    chain: '2175.0',
    Inventory: '2176.0',
  },
]
const data3 = [
  {
    kpi: 'Maximum Capacity usage in the supply chain, m3',
    chain: '67.8',
    Inventory: '105.4',
    lead: '105.4',
  },
  {
    kpi: 'Maximum inventory in the supply  usage in the supply chain, units',
    chain: '580.0',
    Inventory: '942.0',
    lead: '942.0',
  },
]
const data4 = [
  {
    kpi: 'Other Cost',
    value: '48312.0',
  },
  {
    kpi: 'Outbound Processing Cost',
    value: '70080.0',
  },
  {
    kpi: 'Profit',
    value: '446817',
  },
  {
    kpi: 'Revenue',
    value: '700800.0',
  },
  {
    kpi: 'Total Cost',
    value: '253983.0',
  },

  {
    kpi: 'Transportation Cost',
    value: '135591.0',
  },
]
const data5 = [
  {
    kpi: 'Lead Time',
    value: '0.81',
  },
  {
    kpi: 'Service Level, %',
    value: '100',
  },
  {
    kpi: 'Customer delayed orders',
    value: '0',
  },
  {
    kpi: 'Customer in-time orders',
    value: '730.0',
  },
  {
    kpi: 'Customer items arrived',
    value: '7008.0',
  },
  {
    kpi: 'Customer orders arrived',
    value: '730.0',
  },
  {
    kpi: 'Customer backlog orders',
    value: '0',
  },
  {
    kpi: 'Customer order items',
    value: '7008.0',
  },
  {
    kpi: 'Incoming replenishment items',
    value: '7008.0',
  },
  {
    kpi: 'Items Shipped',
    value: '7008.0',
  },
  {
    kpi: 'Orders Shipped',
    value: '730.0',
  },
  {
    kpi: 'Outgoing replenishment orders',
    value: '0',
  },
]
const data6 = [
  {
    kpi: 'Other Cost',
    location: '48312.0',
    value: '48312.0',
  },
  {
    kpi: 'Outbound Processing Cost',
    location: '70080.0',
    value: '70080.0',
  },
  {
    kpi: 'Profit',
    location: '446817',
    value: '446817',
  },
  {
    kpi: 'Revenue',
    location: '700800.0',
    value: '700800.0',
  },
  {
    kpi: 'Total Cost',
    location: '253983.0',
    value: '277562.29',
  },
  {
    kpi: 'Transportation Cost',
    location: '135591.0',
    value: '159170.29',
  },
]
const data7 = [
  {
    kpi: 'Lead Time,days',
    location: '0.81',
    value: '0.95',
  },
  {
    kpi: 'Service Level, %',
    location: '100',
    value: '100',
  },
  {
    kpi: 'Profit',
    location: '0',
    value: '0',
  },
  {
    kpi: 'Revenue',
    location: '700800.0',
    value: '700800.0',
  },
  {
    kpi: 'Total Cost',
    location: '253983.0',
    value: '277562.29',
  },
  {
    kpi: 'Transportation Cost',
    location: '135591.0',
    value: '159170.29',
  },
]
export  function Comparsion1() {
  return (
    <div className="">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={data1}
        >
          <GridColumn field="kpi" title="Statistics Name" />
          <GridColumn field="chain" title="Object" />
          <GridColumn field="Inventory" title="Product" />
        </Grid>
      </div>
    </div>
  )
}

export function Comparsion2() {
  return (
    <div className="">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={data2}
        >
          <GridColumn field="kpi" title="Statistics Name" />
          <GridColumn field="chain" title="Object" />
          <GridColumn field="Inventory" title="Product" />
         
        </Grid>
      </div>
    </div>
  )
}


export function Comparsion3() {
  return (
    <div className="">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={data3}
        >
          <GridColumn field="kpi" title="Statistics Name" />
          <GridColumn field="chain" title="Object" />
          <GridColumn field="Inventory" title="Product" />
          <GridColumn field="lead" title="Product" />
        </Grid>
      </div>
    </div>
  )
}
export function Comparsion4() {
  return (
    <div className="">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          size={'medium'}
          data={data4}>
          <GridColumn field="kpi" title="KPI" />
          <GridColumn field="value" title="Value" />
        </Grid>
      </div>
    </div>
  )
}

export function Comparsion5() {
  return (
    <div className="w-full bg-white rounded-b-md border h-92">
      <Grid rowHeight={50} size={'medium'} data={data5}>
        <GridColumn field="kpi" title="KPI" />
        <GridColumn field="value" title="Value" />
      </Grid>
    </div>
  )
}

export function Comparsion6() {
  return (
    <div className="w-full bg-white rounded-b-md border h-92">
      <Grid rowHeight={50} size={'medium'} data={data6}>
        <GridColumn field="kpi" title="KPI" />
        <GridColumn field="location" title="Location" />
        <GridColumn field="value" title="Value" />
      </Grid>
    </div>
  )
}


export function Comparsion7() {
  return (
    <div className="w-full bg-white rounded-b-md border h-92">
      <Grid rowHeight={50} size={'medium'} data={data7}>
        <GridColumn field="kpi" title="KPI" />
        <GridColumn field="location" title="Location" />
        <GridColumn field="value" title="Value" />
      </Grid>
    </div>
  )
}