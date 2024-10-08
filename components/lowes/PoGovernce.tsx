import { kpiService_m } from '@/app/data/analysis/poGoverData'
import {  useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const deficit = [
  {
    poNumber: 'PO98464',
    poLineItems: 2,
    Buyer: 'Frank Smith',
    SKU: 'SKU29617',
    promiseDate: '2024-04-17',
    needByDate: '2024-05-17',
    totalValue: '80000$',
    poQty: 12,
    daysdifferent: 30,
  },
  {
    poNumber: 'PO97027',
    poLineItems: 8,
    Buyer: 'John Brown',
    SKU: 'SKU94153',
    promiseDate: '2024-04-03',
    needByDate: '2024-04-12',
    totalValue: '181000$',
    poQty: 66,
    daysdifferent: 9,
  },
  {
    poNumber: 'PO50582',
    poLineItems: 5,
    Buyer: 'Frank Smith',
    SKU: 'SKU23802',
    promiseDate: '2024-04-07',
    needByDate: '2024-04-29',
    totalValue: '332000$',
    poQty: 49,
    daysdifferent: 22,
  },
  {
    poNumber: 'PO88762',
    poLineItems: 5,
    Buyer: 'Ella Jones',
    SKU: 'SKU31641',
    promiseDate: '2024-04-28',
    needByDate: '2024-05-07',
    totalValue: '388000$',
    poQty: 13,
    daysdifferent: 9,
  },
  {
    poNumber: 'PO41791',
    poLineItems: 4,
    Buyer: 'Alice Johnson',
    SKU: 'SKU41456',
    promiseDate: '2024-04-05',
    needByDate: '2024-04-11',
    totalValue: '146000$',
    poQty: 86,
    daysdifferent: 6,
  },
  {
    poNumber: 'PO90253',
    poLineItems: 5,
    Buyer: 'Grace Davis',
    SKU: 'SKU23667',
    promiseDate: '2024-04-22',
    needByDate: '2024-05-21',
    totalValue: '969000$',
    poQty: 69,
    daysdifferent: 29,
  },
  {
    poNumber: 'PO95314',
    poLineItems: 9,
    Buyer: 'Harry Garcia',
    SKU: 'SKU67445',
    promiseDate: '2024-04-03',
    needByDate: '2024-04-14',
    totalValue: '979000$',
    poQty: 50,
    daysdifferent: 11,
  },
  {
    poNumber: 'PO53113',
    poLineItems: 6,
    Buyer: 'Jane Johnson',
    SKU: 'SKU14927',
    promiseDate: '2024-04-26',
    needByDate: '2024-05-17',
    totalValue: '751000$',
    poQty: 20,
    daysdifferent: 21,
  },
  {
    poNumber: 'PO25259',
    poLineItems: 1,
    Buyer: 'Grace Williams',
    SKU: 'SKU50620',
    promiseDate: '2024-04-11',
    needByDate: '2024-04-13',
    totalValue: '814000$',
    poQty: 8,
    daysdifferent: 2,
  },
  {
    poNumber: 'PO63894',
    poLineItems: 2,
    Buyer: 'Grace Garcia',
    SKU: 'SKU71511',
    promiseDate: '2024-04-24',
    needByDate: '2024-04-26',
    totalValue: '984000$',
    poQty: 24,
    daysdifferent: 2,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function POGovernance() {

  return (
    <>
      <div className="flex justify-between  bg-white  shadow-lg rounded-b-lg">
        <ul className="w-full mx-4 my-4 grid grid-cols-1 gap-2">
          {/* grid-row-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 */}
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1  divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-md mt-6 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full bg-white rounded-b-lg border m-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">PO Number</TableHead>
                <TableHead>PO Line Items</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Promise Date</TableHead>
                <TableHead>Need By Date</TableHead>
                <TableHead>Total Value</TableHead>
                <TableHead>PO Qty</TableHead>
                <TableHead>Days Different</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deficit.map((invoice) => (
                <TableRow key={invoice.poNumber}>
                  <TableCell className="w-100 font-medium">
                    {invoice.poNumber}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.poLineItems}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.Buyer}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.SKU}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.promiseDate}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.needByDate}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.totalValue}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.poQty}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.daysdifferent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
