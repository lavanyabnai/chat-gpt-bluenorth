import React from 'react'

import { Grid, GridColumn } from '@progress/kendo-react-grid'


const invoices = [
  {
    "name": 'Carrying Cost',
    "value": '89.35',
    "unit": 'USD',
  },
  {
    "name": 'Opportunity Cost',
    "value": '7,993.23',
    "unit": 'USD',
  },
  {
    "name": 'Profit',
    "value": '63,344,372.18',
    "unit": 'USD',
  },
  {
    "name": 'Revenue',
    "value": '98,280,000.0',
    "unit": 'USD',
  },
  {
    "name": 'Total Cost',
    "value": '34,935,627.82',
    "unit": 'USD',
  },
  {
    "name": 'Transportation Cost',
    "value": '5,760,238.47',
    "unit": 'USD',
  },
]

const current = [
  {
      "name": "Carrying Cost",
      "object": "DC Berlin",
      "value": "43.78",
      "unit": "USD"
    },
    {
      "name": "Carrying Cost",
      "object": "DC Prague",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Opportunity Cost",
      "object": "DC Berlin",
      "value": "3,996.62",
      "unit": "USD"
    },
    {
      "name": "Profit",
      "object": "DC Prague",
      "value": "3,996.62",
      "unit": "USD"
    },
    {
      "name": "Profit",
      "object": "DC Berlin",
      "value": "3,996.62",
      "unit": "USD"
    },
    {
      "name": "Profit",
      "object": "DC Prague",
      "value": "33,025,633.53",
      "unit": "USD"
    },
    {
      "name": "Profit",
      "object": "Leipzig",
      "value": "32,734,573.31",
      "unit": "USD"
    },
    {
      "name": "Revenue",
      "object": "DC Berlin",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Revenue",
      "object": "DC Prague",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Total Cost",
      "object": "DC Berlin",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Total Cost",
      "object": "DC Prague",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Total Cost",
      "object": "DC Berlin",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Transportation Cost",
      "object": "DC Berlin",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Transportation Cost",
      "object": "DC Prague",
      "value": "45.57",
      "unit": "USD"
    },
    {
      "name": "Transportation Cost",
      "object": "Leipzig",
      "value": "45.57",
      "unit": "USD"
    }
]
export default function Carrying() {

  return (
    <div className="bg-white p-2 grid grid-cols-2 gap-4 border">
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={invoices}
        >
          <GridColumn field="name" title="Statistics" />
          <GridColumn field="value" title="Value" />
          <GridColumn field="unit" title="Unit" />
        </Grid>
      </div>
      <div className="w-full bg-white rounded-b-md border h-92">
        <Grid
          rowHeight={50}
          // groupable={true}
          size={'medium'}
          data={current}
        >
          <GridColumn field="name" title="Statistics" />
          <GridColumn field="value" title="Value" />
          <GridColumn field="object" title="Value" />
          <GridColumn field="unit" title="Unit" />
        </Grid>
      </div>
    
    </div>
  )
}
