import 'server-only'

import {
  createAI,
  createStreamableUI,
  getMutableAIState,
  getAIState,
  render,
  createStreamableValue
} from 'ai/rsc'
import OpenAI from 'openai'

import {
  spinner,
  BotCard,
  BotMessage,
  SystemMessage,
  Stock,
  Purchase
} from '@/components/stocks'

import { z } from 'zod'
import { EventsSkeleton } from '@/components/stocks/events-skeleton'
import { Events } from '@/components/stocks/events'
import { StocksSkeleton } from '@/components/stocks/stocks-skeleton'
import { Stocks } from '@/components/stocks/stocks'
import { StockSkeleton } from '@/components/stocks/stock-skeleton'
import { OverallSkeleton } from '@/components/stocks/overall-skeleton'
import { OverallPerf } from '@/components/stocks/overall-perf'
import { Backorder } from '@/components/stocks/backorder'
import { BackorderSkeleton } from '@/components/stocks/backorder-skeleton'
import { StockOut } from '@/components/stocks/stockout'
import { StockoutSkeleton } from '@/components/stocks/stockout-skeleton'
import { KpiDashboard } from '@/components/stocks/kpidashboard'
import { KpidashboardSkeleton } from '@/components/stocks/kpidashboard-skeleton'
import {
  formatNumber,
  runAsyncFnWithoutBlocking,
  sleep,
  nanoid
} from '@/lib/utils'
import { saveChat } from '@/app/actions'
import { SpinnerMessage, UserMessage } from '@/components/stocks/message'
import { Chat } from '@/lib/types'
import { auth } from '@/auth'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

async function confirmPurchase(symbol: string, price: number, amount: number) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  const purchasing = createStreamableUI(
    <div className="inline-flex items-start gap-1 md:items-center">
      {spinner}
      <p className="mb-2">
        Purchasing {amount} ${symbol}...
      </p>
    </div>
  )

  const systemMessage = createStreamableUI(null)

  runAsyncFnWithoutBlocking(async () => {
    await sleep(1000)

    purchasing.update(
      <div className="inline-flex items-start gap-1 md:items-center">
        {spinner}
        <p className="mb-2">
          Purchasing {amount} ${symbol}... working on it...
        </p>
      </div>
    )

    await sleep(1000)

    purchasing.done(
      <div>
        <p className="mb-2">
          You have successfully purchased {amount} ${symbol}. Total cost:{' '}
          {formatNumber(amount * price)}
        </p>
      </div>
    )

    systemMessage.done(
      <SystemMessage>
        You have purchased {amount} shares of {symbol} at ${price}. Total cost ={' '}
        {formatNumber(amount * price)}.
      </SystemMessage>
    )

    aiState.done({
      ...aiState.get(),
      messages: [
        ...aiState.get().messages.slice(0, -1),
        {
          id: nanoid(),
          role: 'function',
          name: 'showStockPurchase',
          content: JSON.stringify({
            symbol,
            price,
            defaultAmount: amount,
            status: 'completed'
          })
        },
        {
          id: nanoid(),
          role: 'system',
          content: `[User has purchased ${amount} shares of ${symbol} at ${price}. Total cost = ${
            amount * price
          }]`
        }
      ]
    })
  })

  return {
    purchasingUI: purchasing.value,
    newMessage: {
      id: nanoid(),
      display: systemMessage.value
    }
  }
}
// updated prompt - changed show_stock_price to showStockPrice - Original - If the user just wants the price, call \`show_stock_price\` to show the price.
async function submitUserMessage(content: string) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content
      }
    ]
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
  let textNode: undefined | React.ReactNode

  const ui = render({
    model: 'gpt-3.5-turbo',
    provider: openai,
    initial: <SpinnerMessage />,
    messages: [
      {
        role: 'system',
        content: `\
        You are a supply chain conversation bot for a large home improvement store company. You can help users with insights on their supply chain, step by step.
        You and the user can discuss the supply chain such as overall inventory and service performance, what is the change in performance sice last week
        what are the backorders within product families and sku what is the service performance for an SKU, and the user can ask for insights or help with their supply chain, in the UI.
        Messages inside [] means that it's a UI element or a user event. For example:
        - "[SKU performance for SKU-1234]" means that an interface of the SKU performance for the SKU-1234 is shown to the user.
 
        If the user requests overall performance of service and inventory, call \`showOverallPerformance\` to show the product group e.g. Construction/Paint/Gardening..
        If the user wants the last week performance comparison, call \`showLastWeek\` to show the performance compared to last week.
        If you want to show backorder trends and KPIs or Which product families and SKUs created the most backorders and OTIF misses?, call \`showBackOrders\` to show backorder related charts and KPIs with insights.
        If you want to show events, call \`get_events\`.
        If you want to show SKUs that are out of stock or low on stock for the product group call \`showStockout\`.

        If you want to show Key KPI Dashboard for all product groups and SKUs call \`kpiDashboard\`.
       
        Besides that, you can also chat with users and do some calculations if needed.`
      },
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name
      }))
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content
            }
          ]
        })
      } else {
        textStream.update(delta)
      }

      return textNode
    },
    functions: {
      showOverallPerformance: {
        description:
          'Display Backorder performance, OTIF performance and Inventory performance for the week',
        parameters: z.object({
          productGroup: z
            .string()
            .describe(
              'The name of product group e.g. Construction/Paint/Gardening.'
            )
        }),
        render: async function* ({ productGroup }) {
          yield (
            <BotCard>
              <OverallSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showOverallPerformance',
                content: JSON.stringify(productGroup)
              }
            ]
          })

          return (
            <BotCard>
              {/* <Stock props={{ symbol, price, delta }} /> */}
              <OverallPerf props={{ productGroup }} />
            </BotCard>
          )
        }
      },
      showBackOrders: {
        description:
          'what are the product groups and skus that have the most backorders',
        parameters: z.object({
          productGroup: z
            .string()
            .describe(
              'The name of product group e.g. Construction/Paint/Gardening.'
            )
        }),
        render: async function* ({ productGroup }) {
          yield (
            <BotCard>
              <BackorderSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showBackOrders',
                content: JSON.stringify(productGroup)
              }
            ]
          })

          return (
            <BotCard>
              {/* <Stock props={{ symbol, price, delta }} /> */}
              <Backorder props={{ productGroup }} />
            </BotCard>
          )
        }
      },
      showStockout: {
        description:
          'Display table with all SKUs that are out of stock or low on stock for the product group',
        parameters: z.object({
          productGroup: z
            .string()
            .describe(
              'The name of product group e.g. Construction/Paint/Gardening.'
            )
        }),
        render: async function* ({ productGroup }) {
          yield (
            <BotCard>
              <StockoutSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showStockout',
                content: JSON.stringify(productGroup)
              }
            ]
          })

          return (
            <BotCard>
              <StockOut props={{ productGroup }} />
            </BotCard>
          )
        }
      },
      kpiDashboard: {
        description: 'Key KPI Dashboard for all product groups and SKUs',
        parameters: z.object({
          productGroup: z
            .string()
            .describe(
              'The name of product group e.g. Construction/Paint/Gardening/Overall.'
            )
        }),
        render: async function* ({ productGroup }) {
          yield (
            <BotCard>
              <KpidashboardSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'kpiDashboard',
                content: JSON.stringify(productGroup)
              }
            ]
          })

          return (
            <BotCard>
              {/* <Stock props={{ symbol, price, delta }} /> */}
              <KpiDashboard props={{ productGroup }} />
            </BotCard>
          )
        }
      },
      listStocks: {
        description:
          'List three imaginary stocks that are trending that are not DOGE, SHIB and SAFEMOON.',
        parameters: z.object({
          stocks: z.array(
            z.object({
              symbol: z.string().describe('The symbol of the stock'),
              price: z.number().describe('The price of the stock'),
              delta: z.number().describe('The change in price of the stock')
            })
          )
        }),
        render: async function* ({ stocks }) {
          yield (
            <BotCard>
              <StocksSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'listStocks',
                content: JSON.stringify(stocks)
              }
            ]
          })

          return (
            <BotCard>
              <Stocks props={stocks} />
            </BotCard>
          )
        }
      },

      showStockPurchase: {
        description:
          'Show price and the UI to purchase a stock or currency. Use this if the user wants to purchase a stock or currency.',
        parameters: z.object({
          symbol: z
            .string()
            .describe(
              'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.'
            ),
          price: z.number().describe('The price of the stock.'),
          numberOfShares: z
            .number()
            .describe(
              'The **number of shares** for a stock or currency to purchase. Can be optional if the user did not specify it.'
            )
        }),
        render: async function* ({ symbol, price, numberOfShares = 100 }) {
          if (numberOfShares <= 0 || numberOfShares > 1000) {
            aiState.done({
              ...aiState.get(),
              messages: [
                ...aiState.get().messages,
                {
                  id: nanoid(),
                  role: 'system',
                  content: `[User has selected an invalid amount]`
                }
              ]
            })

            return <BotMessage content={'Invalid amount'} />
          }

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showStockPurchase',
                content: JSON.stringify({
                  symbol,
                  price,
                  numberOfShares
                })
              }
            ]
          })

          return (
            <BotCard>
              <Purchase
                props={{
                  numberOfShares,
                  symbol,
                  price: +price,
                  status: 'requires_action'
                }}
              />
            </BotCard>
          )
        }
      },
      getEvents: {
        description:
          'List funny imaginary events between user highlighted dates that describe stock activity.',
        parameters: z.object({
          events: z.array(
            z.object({
              date: z
                .string()
                .describe('The date of the event, in ISO-8601 format'),
              headline: z.string().describe('The headline of the event'),
              description: z.string().describe('The description of the event')
            })
          )
        }),
        render: async function* ({ events }) {
          yield (
            <BotCard>
              <EventsSkeleton />
            </BotCard>
          )

          await sleep(1000)

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'getEvents',
                content: JSON.stringify(events)
              }
            ]
          })

          return (
            <BotCard>
              <Events props={events} />
            </BotCard>
          )
        }
      },
      addNumbers: {
        description: 'Add a list of numbers provided by the user.',
        parameters: z.object({
          numbers: z.array(z.number()).describe('The list of numbers to add')
        }),
        render: async function* ({ numbers }) {
          // Calculate the sum of the numbers
          const sum = numbers.reduce((acc, current) => acc + current, 0)

          // Update the AI state with the result
          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'addNumbers',
                content: `The sum of the provided numbers is ${sum}.`
              }
            ]
          })

          // Return a message displaying the sum
          return (
            <BotMessage
              content={`The sum of the provided numbers is ${sum}.`}
            />
          )
        }
      }
    }
  })

  return {
    id: nanoid(),
    display: ui
  }
}

export type Message = {
  role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool'
  content: string
  id: string
  name?: string
}

export type AIState = {
  chatId: string
  messages: Message[]
}

export type UIState = {
  id: string
  display: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage,
    confirmPurchase
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  unstable_onGetUIState: async () => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const aiState = getAIState()

      if (aiState) {
        const uiState = getUIStateFromAIState(aiState)
        return uiState
      }
    } else {
      return
    }
  },
  unstable_onSetAIState: async ({ state, done }) => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const { chatId, messages } = state

      const createdAt = new Date()
      const userId = session.user.id as string
      const path = `/chat/${chatId}`
      const title = messages[0].content.substring(0, 100)

      const chat: Chat = {
        id: chatId,
        title,
        userId,
        createdAt,
        messages,
        path
      }

      await saveChat(chat)
    } else {
      return
    }
  }
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter(message => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'function' ? (
          message.name === 'listStocks' ? (
            <BotCard>
              <Stocks props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showOverallPerformance' ? (
            <BotCard>
              <OverallPerf props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showBackOrders' ? (
            <BotCard>
              <Backorder props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showStockout' ? (
            <BotCard>
              <StockOut props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'kpiDashboard' ? (
            <BotCard>
              <KpiDashboard props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showStockPurchase' ? (
            <BotCard>
              <Purchase props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'getEvents' ? (
            <BotCard>
              <Events props={JSON.parse(message.content)} />
            </BotCard>
          ) : null
        ) : message.role === 'user' ? (
          <UserMessage>{message.content}</UserMessage>
        ) : (
          <BotMessage content={message.content} />
        )
    }))
}
