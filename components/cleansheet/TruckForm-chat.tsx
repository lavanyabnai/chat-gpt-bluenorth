import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'
import { Check, ChevronsUpDown } from 'lucide-react'
import TruckInput from '@/components/cleansheet/truck-form-chat'
import AdminInput from '@/components/cleansheet/admin-form-chat'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import WrapperWaterfallChart from '@/app/kendo/charts/waterfall/WrapperWaterfallChart'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const navigation = [
  { id: 1, name: 'S&OP', to: '/snop/optimize' },
  { id: 2, name: 'Demand', to: '#' },
  { id: 3, name: 'Inventory', to: '#' },
  { id: 4, name: 'Logistics', to: '#' },
  { id: 5, name: 'Procurement', to: '#' }
]

const stats = [
  { name: 'Cost per Unit (INR/Unit)', stat: '2,279' },
  { name: 'Cost per Trip Margin', stat: '136,744' },
  { name: 'Cost per km', stat: '41' }
]

const frameworks = [
  {
    value: 'next.js',
    label: 'Kolkata'
  },
  {
    value: 'sveltekit',
    label: 'Chennai'
  }
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

export default function TruckForm({ truckData }) {
  const [tyopen, settyOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [truckOutputData, setTruckOutputData] = useState({})
  const [chartData, setChartData] = useState([])
  console.log(`truckOutputData`, truckOutputData)
  console.log(`chartData`, chartData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getTruckOutputData') // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch truck output data')
        }
        const data = await response.json()
        setTruckOutputData(data.truckOutputData)
        setChartData(data.truckOutputData[0])
      } catch (error) {
        console.error('Error fetching truck output data:', error)
        // Handle error
      }
    }

    fetchData()
  }, [])

  const tripData = [
    {
      category: 'Variable cost per trip',
      field: chartData?.variable_cost_trip || 0
    },
    {
      category: 'Fixed cost per Trip',
      field: chartData?.fixed_cost_trip || 0
    },
    {
      category: 'Admin Cost per Trip',
      field: chartData?.admin_cost_per_trip || 0
    },
    {
      category: 'Return of sale cost per trip',
      field: chartData?.return_sale_trip || 0
    },
    { category: 'Total', summary: 'total' }
  ]

  const unitData = [
    { category: 'Variable Cost', field: chartData?.variable_cost || 0 },
    { category: 'Fixed Cost', field: chartData?.fixed_cost || 0 },
    { category: 'Admin Cost', field: chartData?.admin_cost || 0 },
    { category: 'Profit per unit', field: chartData?.profit_unit || 0 },
    { category: 'Total', summary: 'total' }
  ]
  return (
    <div className="">
      <form>
    
          <div className="flex items-center justify-between">
            <h2 className="text-xl lg:text-3xl font-bold  p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Transportation Cleansheet
            </h2>
          </div>
          <div className="mt-2 items-start justify-center gap-2 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
            <div className="">
              <div className="flex items-center  mb-4 p-2 border-b rounded-lg">
                <div className="flex justify-between">
                  <Input
                    className="text-blue-900 w-full"
                    name="origin"
                    defaultValue={truckData?.origin || 'Chennai'}
                  />

                  <Input
                    className="mx-2 text-blue-900 w-full"
                    name="destination"
                    defaultValue={truckData?.destination || 'Kolkata'}
                  />
                </div>

                <div className="flex items-center justify-between  ">
                  <Input
                    className="mx-2 text-blue-900 w-full"
                    name="distance"
                    defaultValue={truckData?.distance || '1,676'}
                  />

                  <Input
                    className="mx-2 text-blue-900 w-full"
                    name="backhaul"
                    defaultValue={truckData?.backhaul || 'backhaul'}
                  />
                </div>
              </div>
              <div className="mt-4 items-start justify-center gap-2 grid grid-cols-1 lg:grid-cols-2">
                <DemoContainer>
                  <Card className="  text-blue-900">
                    <CardHeader className="space-y-1 ">
                      <CardTitle className="flex items-center">
                        <TruckIcon className="size-8 mr-2" />
                        <span className="text-xl">Truck Parameters</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>

                    <CardContent className="grid gap-10 mb-2">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <div className="text-base text-blue-900 font-semibold ">
                          Truck Type
                        </div>
                        <div>
                          <Popover open={tyopen} onOpenChange={settyOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={tyopen}
                                className=" w-full justify-between text-base "
                              >
                                {value
                                  ? frameworks.find(
                                      framework => framework.value === value
                                    )?.label
                                  : 'Kolkata'}
                                <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                              <Command>
                                <CommandGroup>
                                  {frameworks.map(framework => (
                                    <CommandItem
                                      key={framework.value}
                                      value={framework.value}
                                      onSelect={currentValue => {
                                        setValue(
                                          currentValue === value
                                            ? ''
                                            : currentValue
                                        )
                                        settyOpen(false)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          'mr-2 size-4',
                                          value === framework.value
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                        )}
                                      />
                                      {framework.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <TruckInput truck={truckData} />
                    </CardContent>
                  </Card>
                </DemoContainer>
                <DemoContainer>
                  <Card className=" text-blue-900">
                    <CardHeader className="space-y-1">
                      <CardTitle className="flex items-center">
                        <MapIcon className="size-8 mr-2" />
                        <span className="text-xl"> Route Admin Expenses</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <AdminInput admin={truckData} />
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
              <div className="flex justify-end  pt-6 rounded-lg">
                <Button className="bg-blue-900 hover:bg-blue-800 text-lg">
                  {/* {params.bkt ? "Submitting" : "Submit"} */}
                </Button>
              </div>
            </div>

            <div>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <PresentationChartLineIcon className="size-8 mr-2" />
                      <span className="text-xl">Cleansheet Summary</span>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {stats.map(item => (
                        <div
                          key={item.name}
                          className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                        >
                          <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                            {item.stat}
                          </dd>
                          <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                            {item.name}
                          </dt>
                        </div>
                      ))}
                    </dl>

                    <ul role="list" className="grid grid-cols-1 gap-2 mt-2">
                      <li className="col-span-1 flex flex-col divide-y divide-white">
                        <div className="relative flex flex-1 flex-col p-2">
                          <div className="flex items-baseline gap-2">
                            <h3 className="text-base font-medium text-gray-900">
                              Cost per Trip
                            </h3>
                          </div>
                          <div className="mt-2">
                            <WrapperWaterfallChart data={tripData} />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex flex-col divide-y divide-white">
                        <div className="relative flex flex-1 flex-col p-2">
                          <div className="flex items-baseline gap-2">
                            <h3 className="text-base font-medium text-gray-900">
                              Cost per Unit
                            </h3>
                          </div>
                          <div className="mt-2">
                            {' '}
                            <WrapperWaterfallChart data={unitData} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        
      </form>
    </div>
  )
}
