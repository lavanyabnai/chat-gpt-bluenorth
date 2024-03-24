'use client'
import { useState, useRef, useEffect, useId } from 'react'
import { scaleLinear } from 'd3-scale'
import { subMonths, format } from 'date-fns'
import { useResizeObserver } from 'usehooks-ts'
import { useAIState } from 'ai/rsc'
import { Button } from '@/components/ui/button'
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

import {
  
  kpiServiceChat_m
} from '@/app/data/analysis/skuProData'
import Link from 'next/link'
const data = [1, 2, 3, 5, 8, 13]

interface Stock {
  symbol: string
  price: number
  delta: number
}

export function Backorder({ props: { productGroup } }) {
  const [aiState, setAIState] = useAIState()
  const id = useId()

  const [startHighlight, setStartHighlight] = useState(0)
  const [endHighlight, setEndHighlight] = useState(0)

  const chartRef = useRef<HTMLDivElement>(null)
  const { width = 0 } = useResizeObserver({
    ref: chartRef,
    box: 'border-box'
  })

  const xToDate = scaleLinear(
    [0, width],
    [subMonths(new Date(), 6), new Date()]
  )


  useEffect(() => {
    if (startHighlight && endHighlight) {
      const message = {
        id,
        role: 'system' as const,
        content: `[User has highlighted dates between between ${format(
          xToDate(startHighlight),
          'd LLL'
        )} and ${format(xToDate(endHighlight), 'd LLL, yyyy')}`
      }

      if (aiState.messages[aiState.messages.length - 1]?.id === id) {
        setAIState({
          ...aiState,
          messages: [...aiState.messages.slice(0, -1), message]
        })
      } else {
        setAIState({
          ...aiState,
          messages: [...aiState.messages, message]
        })
      }
    }
  }, [startHighlight, endHighlight])

  return (
    <div className=" text-gray-800 dark:text-white">
      <h2 className="text-base font-medium text-gray-900">
        Product Group - {productGroup}
      </h2>
      <ul className="p-4 grid grid-cols-1 gap-2 list-disc">
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 rounded-lg">
        {kpiServiceChat_m.map(kpi => (
          <li
            key={kpi.Name}
            className="col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border"
          >
            <div className="relative flex flex-1 flex-col py-2 pl-2">
              <div className="flex items-baseline gap-2">
                <div>
                  <h1 className="text-base m-2  text-gray-900 font-bold">
                    {kpi.Name}
                  </h1>
                  <h3 className="font-display m-2 text-sm font-medium">
                    {kpi.sub}
                  </h3>
                </div>
              </div>
              <div>{kpi.container}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2 p-2 bg-white rounded-lg border">
        <div className="-mt-px flex divide-x divide-gray-200 h-10 ">
          <div className="flex w-0 flex-1  ">
            <Link
              href=""
              className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
            >
              <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                <WrenchScrewdriverIcon className="size-5" aria-hidden="true" />
                Analyze
              </span>
            </Link>
          </div>

          <div className="-ml-px flex flex-1">
            <Link
              href="/snop/dashboard/salesExp"
              className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white"
            >
              <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                <CircleStackIcon className="size-5" aria-hidden="true" />
                Explore Data
              </span>
            </Link>
          </div>
          <div className="-ml-px flex  flex-1">
            <Link
              href="/benchmark"
              className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
            >
              <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                <LightBulbIcon className="size-5" aria-hidden="true" />
                Insights
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
