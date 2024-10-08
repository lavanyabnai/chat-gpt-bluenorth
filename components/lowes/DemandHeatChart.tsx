import { useState, Fragment } from 'react'
import { AgChartsReact } from 'ag-charts-react'

import {
  generatedDeficitData,
  generatedInventoryExcess,
} from '~/data/agGrid/snop/inventory/demandHeatMap'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { Progress } from '~/components/ui/progress'

const inventory = [
  {
    title: 'SKU-890123',
    Region: 'Region023',
    deficit: '2.8M',
    percent: 92,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    Region: 'Region030',
    deficit: '1.6M',
    percent: 82,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456012',
    Region: 'Region026',
    deficit: '3.3M',
    percent: 85,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    Region: 'Region007',
    deficit: '1.7M',
    percent: 78,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-890123',
    Region: 'Region021',
    deficit: '2.2M',
    percent: 77,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-567890',
    Region: 'Region006',
    deficit: '0.9M',
    percent: 71,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-456012',
    Region: 'Region018',
    deficit: '3.7M',
    percent: 65,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-123789',
    Region: 'Region010',
    deficit: '4.3M',
    percent: 56,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-901234',
    Region: 'Region029',
    deficit: '1.1M',
    percent: 33,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-890123',
    Region: 'Region020',
    deficit: '2.4M',
    percent: 48,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-678901',
    Region: 'Region013',
    deficit: '5.1M',
    percent: 50,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-789012',
    Region: 'Region027',
    deficit: '2.3M',
    percent: 42,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-345678',
    Region: 'Region019',
    deficit: '3.5M',
    percent: 32,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-246802',
    Region: 'Region011',
    deficit: '1.8M',
    percent: 28,
    progressColor: 'bg-red-500',
  },
]


export default function CapacityChart() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Demand</TableHead>
                <TableHead>Revenue Contribution</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.Region}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.deficit}
                  </TableCell>
                  <TableCell>
                    <Progress
                      indicatorColor={invoice.progressColor}
                      value={invoice.percent}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
