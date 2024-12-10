import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import DemandInput from '@/components/inputdata/demand-form'
import CostInput from '@/components/inputdata/cost-form'
import EmpInput from '@/components/inputdata/empcost-form'
import OutsourcingInput from '@/components/inputdata/outcost-form'
import ConstraintInput from '@/components/inputdata/constraint-form'
import EmpConstraintInput from '@/components/inputdata/empconstraint-form'
import ProductConstraintInput from '@/components/inputdata/proconstraint-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { ArrowUpTrayIcon, CalendarIcon } from '@heroicons/react/20/solid'

import { cn } from '@/lib/utils'

const navigation = [
  { id: 1, name: 'S&OP', to: '/snop/optimize' },
  { id: 2, name: 'Demand', to: '#' },
  { id: 3, name: 'Inventory', to: '#' },
  { id: 4, name: 'Logistics', to: '#' },
  { id: 5, name: 'Procurement', to: '#' }
]

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  )
}

export function SnopForm() {
// export function SnopForm({ getInput }) {
  
  const [date, setDate] = React.useState<Date>(new Date())
  const [inputData, setInputData] = React.useState({})

  // useEffect(() => {
  //   const fetchInputData = async () => {
  //     const data = await getInput()
  //     setInputData(data)
  //   }
  //   fetchInputData()
  // }, [getInput]) // Ensure useEffect runs only once on component mount

  return (
    <div className="m-2">
      <form>
        <div className="bg-white mx-2 shadow-md rounded-b-lg">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Sales & Operations Planning Input
            </h2>
            <div className="flex items-center ">
              <Input
                className="mx-2 text-blue-900 w-50"
                name="description"
                defaultValue={inputData.description || 'Describe your scenario'}
                // placeholder="Describe your scenario"
              />
              <Input
                className="mx-2 text-blue-900 w-50 "
                name="customer"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="site"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="sku"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="Status"
                defaultValue="Open"
                hidden
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[180px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4 text-blue-900" />
                    {date ? (
                      <span className="text-blue-900">
                        {format(date, 'PPP')}
                      </span>
                    ) : (
                      <span className="text-blue-900">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 ">
                  <Calendar
                    className="text-blue-900"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <div className="ml-2 flex max-w-sm items-center">
                <Input type="file" />

                <Button className="mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600">
                  <div className="flex items-center space-x-1 mx-2 ">
                    <ArrowUpTrayIcon className="text-white size-5" />
                    <span className="mx-1 text-sm p-1 text-white ">Upload</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Demand</CardTitle>
                    <p className="text-gray-400 text-sm">Units per month</p>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <DemandInput demands={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Material & Inventory Cost
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <CostInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Employee Cost</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <EmpInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Outsourcing Cost</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <OutsourcingInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Inventory Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Employee Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <EmpConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Product Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ProductConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>

          <div className="py-4 border-t flex justify-end space-x-2 mr-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              {/* {scenId ? 'Update Scenario' : 'Create Scenario'} */}
            </Button>

            {/* {!scenId && <Button variant="outline">Save Input</Button>} */}
            <div className="mr-2">
              <Button
                // onClick={() => router.back()}
                type="button"
                className=""
                variant="default"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
