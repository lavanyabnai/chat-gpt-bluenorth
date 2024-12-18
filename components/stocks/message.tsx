'use client'

import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { spinner } from './spinner'
import { CodeBlock } from '../ui/codeblock'
import { MemoizedReactMarkdown } from '../markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { StreamableValue } from 'ai/rsc'
import { useStreamableText } from '@/lib/hooks/use-streamable-text'
import Image from 'next/image'
// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="relative flex  size-12 items-center  justify-center rounded-full">
        <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <IconUser className="mx-auto bg-white size-11 justify-center rounded-full p-1.5" />
        </div>
      </div>
      <div className="relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white">
        {' '}
       
          {children}
        
      </div>

      {/* <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div> */}
    </div>
  )
}

export function BotMessage({
  content,
  className
}: {
  content: string | StreamableValue<string>
  className?: string
}) {
  const text = useStreamableText(content)

  return (
    <div className={cn('group relative flex items-start md:-ml-12', className)}>
      <div className="relative flex  size-13 items-center  justify-center rounded-full">
        <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <Image
            className="mx-auto bg-white  justify-center rounded-full p-1.5"
            src="/assets/logo-4.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg">
        <MemoizedReactMarkdown
          className="flex
          w-full flex-col relative  bg-white p-4 shadow rounded-lg "
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {text}
        </MemoizedReactMarkdown>
      </div>
    </div>
  )
}

export function BotCard({
  children,
  showAvatar = true
}: {
  children: React.ReactNode
  showAvatar?: boolean
}) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="relative flex  size-13 items-center  justify-center rounded-full">
        <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <Image
            className="mx-auto bg-white  justify-center rounded-full p-1.5"
            src="/assets/logo-4.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* <div
        className={cn(
          'flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm',
          !showAvatar && 'invisible'
        )}
      >
        <IconOpenAI />
      </div> */}
      <div className="mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg">
        <div
          className="flex
          w-full flex-col relative  bg-white p-4 shadow rounded-lg "
        >
          {children}
        </div>
      </div>
      {/* <div className="relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white">
        {children}d
      </div> */}
    </div>
  )
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500'
      }
    >
      <div className={'max-w-[600px] flex-initial p-2'}>{children}</div>
    </div>
  )
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="relative flex  size-13 items-center  justify-center rounded-full">
        <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <Image
            className="mx-auto bg-white  justify-center rounded-full p-1.5"
            src="/assets/logo-4.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  )
}
