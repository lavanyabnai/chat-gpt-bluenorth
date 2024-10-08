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
    title: 'SKU-123456',
    Region: 'Region009',
    inbound: '1.2M',
    outbound: '0.8M',
    dc: '0.6M',
    total: '2.6M',
    percent: 90,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-987654',
    Region: 'Region025',
    inbound: '0.7M',
    outbound: '1.3M',
    dc: '1.1M',
    total: '3.1M',
    percent: 95,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-456789',
    Region: 'Region003',
    inbound: '0.9M',
    outbound: '1.0M',
    dc: '0.5M',
    total: '2.4M',
    percent: 92,
    progressColor: 'bg-green-500',
  },

  {
    title: 'SKU-890123',
    Region: 'Region023',
    inbound: '2.1M',
    outbound: '1.6M',
    dc: '1.9M',
    total: '5.6M',
    percent: 47,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-345678',
    Region: 'Region019',
    inbound: '1.4M',
    outbound: '0.9M',
    dc: '1.1M',
    total: '3.4M',
    percent: 54,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-901234',
    Region: 'Region030',
    inbound: '1.3M',
    outbound: '1.5M',
    dc: '1.7M',
    total: '4.5M',
    percent: 62,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-678901',
    Region: 'Region013',
    inbound: '2.2M',
    outbound: '1.9M',
    dc: '2.4M',
    total: '6.5M',
    percent: 47,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-543210',
    Region: 'Region021',
    inbound: '1.7M',
    outbound: '1.3M',
    dc: '1.5M',
    total: '4.5M',
    percent: 58,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-789456',
    Region: 'Region016',
    inbound: '1.1M',
    outbound: '1.4M',
    dc: '1.2M',
    total: '3.7M',
    percent: 43,
    progressColor: 'bg-green-500',
  },
  {
    title: 'SKU-654321',
    Region: 'Region008',
    inbound: '1.5M',
    outbound: '1.8M',
    dc: '2.1M',
    total: '5.4M',
    percent: 34,
    progressColor: 'bg-yellow-500',
  },
  {
    title: 'SKU-567890',
    Region: 'Region031',
    inbound: '1.8M',
    outbound: '2.3M',
    dc: '2.7M',
    total: '6.8M',
    percent: 29,
    progressColor: 'bg-yellow-500',
  },

  {
    title: 'SKU-789012',
    Region: 'Region027',
    inbound: '1.9M',
    outbound: '1.7M',
    dc: '1.8M',
    total: '5.4M',
    percent: 39,
    progressColor: 'bg-yellow-500',
  },

  {
    title: 'SKU-012345',
    Region: 'Region004',
    inbound: '1.5M',
    outbound: '1.8M',
    dc: '2.1M',
    total: '5.4M',
    percent: 34,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-321098',
    Region: 'Region007',
    inbound: '1.9M',
    outbound: '1.8M',
    dc: '2.0M',
    total: '5.7M',
    percent: 29,
    progressColor: 'bg-red-500',
  },
  {
    title: 'SKU-234567',
    Region: 'Region011',
    inbound: '0.6M',
    outbound: '1.2M',
    dc: '0.9M',
    total: '2.7M',
    percent: 18,
    progressColor: 'bg-red-500',
  },
]


export default function LogisticsChart() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Region</TableHead>
                <TableHead>Inbound Transport Cost</TableHead>
                <TableHead>Outbound Transport Cost</TableHead>
                <TableHead>DC Ops cost</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>DC Capacity Utilized %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">
                    {invoice.Region}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.inbound}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.outbound}
                  </TableCell>
                  <TableCell className="font-medium">{invoice.dc}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.total}
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
