import { Fragment } from 'react'

import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'

// const inventory = [
//   {
//     category: 'FFs Respules (Suspension)',
//     SapName: 'Budecort Rsepu 0.5',
//     SapCode: '32006820',
//     Stn1: 'bg-green-500',
//     Stn2: 'bg-green-400',
//     Stn3: 'bg-green-300',
//     Stn4: 'bg-green-200',
//     ActionMonth1: 'Advance Production',
//     ActionMonth2: 'Excess stock - stop production',
//     ActionMonth3: 'Obtain Supply Plan',
//     ActionMonth4: 'Obtain Supply Plan',
//   },
//   {
//     category: 'Liquids',
//     SapName: 'Axalin 100ml New Formulation',
//     SapCode: '32006766',
//     Stn1: 'bg-green-500',
//     Stn2: 'bg-green-400',
//     Stn3: 'bg-green-300',
//     Stn4: 'bg-green-200',
//     ActionMonth1: 'Excess stock - stop production',
//     ActionMonth2: 'Increase production',
//     ActionMonth3: 'Reduce Supply Plan',
//     ActionMonth4: 'Reduce Supply Plan',
//   },
//   {
//     category: 'Tablets',
//     SapName: 'Fixar-5mg Tablets',
//     SapCode: '32010500',
//     Stn1: 'bg-green-500',
//     Stn2: 'bg-green-400',
//     Stn3: 'bg-green-300',
//     Stn4: 'bg-green-200',
//     ActionMonth1: 'High Forecast risk - Maintain Supply Plan',
//     ActionMonth2: 'Reduce Supply Plan',
//     ActionMonth3: 'High forecast risk - Maintain Supply Plan',
//     ActionMonth4: 'High forecast risk - Maintain Supply Plan',
    
//   },
// ]

const inventory = [
  {
    category: 'SKU Group 1',
    items: [
      {
        SapName: 'SKU 1',
        SapCode: '32006820',
        Stn1: 'bg-green-500',
        Stn2: 'bg-green-400',
        Stn3: 'bg-green-300',
        Stn4: 'bg-green-200',
        ActionMonth1: 'Advance Production',
        ActionMonth2: 'Excess stock - stop production',
        ActionMonth3: 'Obtain Supply Plan | Rellocate Capacity',
        ActionMonth4: 'Obtain Supply Plan | Rellocate Capacity',
      },
    ],
  },
  {
    category: 'SKU Group 2',
    items: [
      {
        SapName: 'SKU 2',
        SapCode: '32006766',
        Stn1: 'bg-green-500',
        Stn2: 'bg-green-400',
        Stn3: 'bg-green-300',
        Stn4: 'bg-red-300',
        ActionMonth1: 'Excess stock - stop production',
        ActionMonth2: 'Increase production | Reduce Supply Plan',
        ActionMonth3: 'Reduce Supply Plan | Increase Production | Reduce Supply Plan',
        ActionMonth4: 'Reduce Supply Plan | Increase Production |Increase Production | Reduce Supply Plan',
      },
    ],
  },
  {
    category: 'SKU Group 3',
    items: [
      {
        SapName: 'Sku 1',
        SapCode: '32010500',
        Stn1: 'bg-green-500',
        Stn2: 'bg-green-400',
        Stn3: 'bg-green-300',
        Stn4: 'bg-green-200',
        ActionMonth1: 'High Forecast risk - Maintain Supply Plan',
        ActionMonth2: 'Reduce Supply Plan',
        ActionMonth3: 'High forecast risk - Maintain Supply Plan | Reduce Supply Plan',
        ActionMonth4: 'High forecast risk - Maintain Supply Plan | Increase Production | Reduce Supply Plan | Suggest cut in production',
      },
      {
        SapName: 'Sku 2',
        SapCode: '32010500',
        Stn1: 'bg-green-500',
        Stn2: 'bg-green-400',
        Stn3: 'bg-green-300',
        Stn4: 'bg-green-200',
        ActionMonth1: 'Increase Production',
        ActionMonth2: 'Increase Production | Material available - trigger Production',
        ActionMonth3: 'Increase Production | Increase Production | Increase Production days| No Change',
        ActionMonth4: 'Incresae Production | No Change | No change',
      },
      {
        SapName: 'Sku 3',
        SapCode: '32010500',
        Stn1: 'bg-red-500',
        Stn2: 'bg-green-400',
        Stn3: 'bg-green-300',
        Stn4: 'bg-green-200',
     
      },
    ],
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LogisticsChart() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>SapName</TableHead>
                <TableHead>SapCode</TableHead>
                <TableHead>
                  <span className="flex justify-center">Stock to Norm</span>
                  <TableHead>Stn 1</TableHead>
                  <TableHead>Stn 2</TableHead>
                  <TableHead>Stn 3</TableHead>
                  <TableHead>Stn 4</TableHead>
                </TableHead>
                <TableHead>Action Month 1</TableHead>
                <TableHead>Action Month 2</TableHead>
                <TableHead>Action Month 3</TableHead>
                <TableHead>Action Month 4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((category) => (
                <Fragment key={category.category}>
                  {category.items.map((item, index) => (
                    <TableRow key={`${category.category}-${index}`}>
                      {index === 0 && (
                        <TableCell
                          rowSpan={category.items.length}
                          className="font-medium min-w-[120px]"
                        >
                          {category.category}
                        </TableCell>
                      )}
                      <TableCell className="font-medium">
                        {item.SapName}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.SapCode}
                      </TableCell>
                      <TableCell className="flex justify-center items-center space-x-4">
                        <TableCell className={classNames(item.Stn1, 'h-6 w-6')}></TableCell>
                        <TableCell className={classNames(item.Stn2, 'h-6 w-6')}></TableCell>
                        <TableCell className={classNames(item.Stn3, 'h-6 w-6')}></TableCell>
                        <TableCell className={classNames(item.Stn4, 'h-6 w-6')}></TableCell>
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.ActionMonth1}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.ActionMonth2}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.ActionMonth3}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.ActionMonth4}
                      </TableCell>
                    </TableRow>
                  ))}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
