import { kpiService_m, kpiInv_m } from '@/app/data/analysis/serviceData'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid'

const navigation = [
  {
    name: 'Service',
    href: '/snop/dashboard/analysis/serviceAnalysis',
    current: true,
  },
  {
    name: 'SKU',
    href: '/snop/dashboard/analysis/skuAnalysis',
    current: false,
  },
  {
    name: 'SKU Pro',
    href: '/snop/dashboard/analysis/skuproAnalysis',
    current: false,
  },
  {
    name: 'Under/shape',
    href: '/snop/dashboard/analysis/underAnalysis',
    current: false,
  },
  {
    name: 'Action:Redeploy',
    href: '/snop/dashboard/analysis/actionAnalysis',
    current: false,
  },
]

const stats = [
  { name: 'Backorders', stat: '+66K' },
  { name: 'OTIF (commit)', stat: '-1.0%' },
  { name: 'OTIF (ship)', stat: '-2.0%' },
  { name: 'Total Change to last', stat: '+1.5M' },
]
const stats2 = [
  { name: 'DC 4 Change to last Week', stat: '-0.4M' },
  { name: 'DC 3 Change to last Week ', stat: '+0.7M' },
  { name: 'DC 2 Change to last Week', stat: '-4.2M' },
  { name: 'DC 1 Change to last Week', stat: '+5.5M' },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FillRate() {

  return (
    <>
      <div className="w-full h-screen">

        <div>
          <dl className="mt-2 grid grid-cols-1 gap-6  lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-center text-lg font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
       
        </div>

        {/* charts */}

        <ul className="mt-2 grid grid-cols-1  gap-6 md:grid-cols-2 ">
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-base m-2 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                      {kpi.sub}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <dl className="mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
            {stats2.map((item) => (
              <div
                key={item.name}
                className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-center text-lg font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        
        </div>

        {/* charts */}

        <ul className="mt-2 grid grid-cols-1 gap-6  ">
          {kpiInv_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-base m-2 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                      {kpi.sub}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="mt-auto">
          <Disclosure as="nav" className="h-16 border-t bg-white">
            {({ open }) => (
              <>
                <div className="w-full px-2 py-2 sm:px-2 lg:px-2">
                  <div className="flex h-12 items-center justify-start">
                    <h2 className="text-md mr-2 font-bold text-gray-500">
                      Demand Analysis
                    </h2>
                    <ChevronDoubleRightIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        {/* <div className="flex items-baseline space-x-4"> */}
                        <div className="flex items-baseline">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-blue-500 text-white'
                                  : 'text-black hover:bg-blue-500 hover:text-white',
                                'text-md mx-2 rounded-md px-5 py-2 font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </footer>
        {/* </div> */}
      </div>

  
    </>
  )
}
