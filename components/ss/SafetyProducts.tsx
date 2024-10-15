import { Grid, GridColumn } from '@progress/kendo-react-grid'


const invoices = [
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 10',
    value: '348.8',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 1',
    value: '399.7',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '381.49',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '379.49',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '412.67',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '375.78',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '372.11',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '372.27',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '328.42',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Analgesics',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '442.73',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Antihistamines',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '141.77',
    unit: 'Product Unit',
  },
  {
    name: 'Safety Stock',
    object: 'DC',
    product: 'Antihistamines',
    period: 'Basic Period',
    replication: 'Replication 2',
    value: '165.63',
    unit: 'Product Unit',
  },
]


export default function SafetyProducts() {

  return (
    <div className="bg-white p-2 border">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={invoices}
        >
          <GridColumn field="name" title="Statistics Name" />
          <GridColumn field="object" title="Object" />
          <GridColumn field="product" title="Product" />
          <GridColumn field="period" title="Period" />
          <GridColumn field="replication" title="Replication" />
          <GridColumn field="value" title="Value" />
          <GridColumn field="unit" title="Unit" />
        </Grid>
      </div>
    </div>
  )
}
