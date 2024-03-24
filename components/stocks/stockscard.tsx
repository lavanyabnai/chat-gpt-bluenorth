'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { useActions, useUIState } from 'ai/rsc'

import type { AI } from '@/lib/chat/actions'

interface Stock {
  symbol: string
  price: number
  delta: number
}
const stats = [
  { name: 'Backorders', stat: '+66K', change: '+1.0%', changeType: 'increase' },
  {
    name: 'OTIF (commit)',
    stat: '-1.0%',
    change: '+1.0%',
    changeType: 'increase'
  },
  {
    name: 'OTIF (ship)',
    stat: '-2.0%',
    change: '+1.0%',
    changeType: 'increase'
  },
  {
    name: 'Total Change to last',
    stat: '+1.5M',
    change: '+1.0%',
    changeType: 'decrease'
  }
]




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Stocks({ props: stocks }: { props: Stock[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  return (
    <div>
      <dl className="my-2 grid grid-cols-4 gap-4">
        {stats.map(item => (
          <div
            key={item.name}
            className="items-center overflow-hidden rounded-lg bg-white p-4 shadow border flex flex-row"
          >
            <div className=''>
              <dt className="text-xs font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1  text-xl font-bold tracking-tight  text-gray-900">
                {item.stat}
              </dd>
            </div>
            <div></div>
            <div
              className={classNames(
                item.changeType === 'increase'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
              )}
            >
              {item.changeType === 'increase' ? (
                <ArrowUpIcon
                  className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-red-500"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {' '}
                {item.changeType === 'increase'
                  ? 'Increased'
                  : 'Decreased'} by{' '}
              </span>
              {item.change}
            </div>
          </div>
        ))}
      </dl>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {stocks.map(stock => (
          <button
            key={stock.symbol}
            className="flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52"
            onClick={async () => {
              const response = await submitUserMessage(`View ${stock.symbol}`)
              setMessages(currentMessages => [...currentMessages, response])
            }}
          >
            <div
              className={`text-xl ${
                stock.delta > 0 ? 'text-green-600' : 'text-red-600'
              } flex w-11 flex-row justify-center rounded-md bg-white/10 p-2`}
            >
              {stock.delta > 0 ? '↑' : '↓'}
            </div>
            <div className="flex flex-col">
              <div className="bold uppercase text-zinc-300">{stock.symbol}</div>
              <div className="text-base text-zinc-500">
                ${stock.price.toExponential(1)}
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <div
                className={`${
                  stock.delta > 0 ? 'text-green-600' : 'text-red-600'
                } bold text-right uppercase`}
              >
                {` ${((stock.delta / stock.price) * 100).toExponential(1)}%`}
              </div>
              <div
                className={`${
                  stock.delta > 0 ? 'text-green-700' : 'text-red-700'
                } text-right text-base`}
              >
                {stock.delta.toExponential(1)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
