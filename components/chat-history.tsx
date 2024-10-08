import * as React from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { SidebarList } from '@/components/sidebar-list'
import { buttonVariants } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'

interface ChatHistoryProps {
  userId?: string
}

export async function ChatHistory({ userId }: ChatHistoryProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4  ">
        <h4 className="text-lg font-semibold">Chat History</h4>
        <Link href="/">
          <div className="relative flex  size-10 items-center  justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <IconPlus className="mx-auto bg-white dark:bg-black dark:text-white  size-8 justify-center rounded-full p-1.5 stroke-5" />
            </div>
          </div>
        </Link>
        {/* <div className="mb-2 px-2">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              ' w-full justify-start bg-blue-500 p-2 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10 rounded-full'
            )}
          >
            <IconPlus className="-translate-x-2 stroke-2 " />
          </Link>
        </div> */}
      </div>
      {/* <div className="mb-2 px-2">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10'
          )}
        >
          <IconPlus className="-translate-x-2 stroke-2" />
          New Chat
        </Link>
      </div> */}
      <React.Suspense
        fallback={
          <div className="flex flex-col flex-1 px-4 space-y-4 overflow-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800"
              />
            ))}
          </div>
        }
      >
        {/* @ts-ignore */}
        <SidebarList userId={userId} />
      </React.Suspense>
    </div>
  )
}
