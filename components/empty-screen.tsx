import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8 ">
        <div className="">
          <h2 className="text-3xl text-center font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Welcome to BlueNorth AI EnterpriseGPT!
          </h2>
        </div>
       
        {/* <p className="leading-normal text-muted-foreground">
          This is an open source AI chatbot app template built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          .
        </p> */}
        {/* <p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM. The UI state
          is synced through the SDK so the model is aware of your interactions
          as they happen.
        </p> */}
      </div>
    </div>
  )
}
