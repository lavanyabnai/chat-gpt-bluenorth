'use client'
import { useState, useRef, useEffect, useId } from 'react'
import { scaleLinear } from 'd3-scale'
import { subMonths, format } from 'date-fns'
import { useResizeObserver } from 'usehooks-ts'
import { useAIState } from 'ai/rsc'

import { SnopInput } from '@/components/inputdata/input-chat'

export function InputDashboard({
  props: { productGroup }
}: {
  props: { productGroup: string }
}) {
  const [aiState, setAIState] = useAIState()
  const id = useId()
  console.log('Inside Overall Perf')

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
  }, [startHighlight, endHighlight, id, xToDate, aiState, setAIState])

  return (
    <div className=" text-gray-800 dark:text-white">
      <h2 className="text-base font-medium text-gray-900">
        Product Group - {productGroup}
      </h2>
      <ul className="p-4 grid grid-cols-1 gap-2 list-disc">
        <li key={1}>The Overall performance of {productGroup}</li>
        <li key={2}>OTIF has improved by 4%</li>
        <li key={3}>Inventory has decreased by 7%</li>
      </ul>
      <SnopInput />
    </div>
  )
}
