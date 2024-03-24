import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { Squares2X2Icon } from '@heroicons/react/20/solid'
import { cache } from 'react'
import Link from 'next/link'

interface SidebarListProps {
  userId?: string
  children?: React.ReactNode
}

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId)
})

export async function SidebarList({ userId }: SidebarListProps) {
  const chats = await loadChats(userId)

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-2 px-2">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} />
        <Link href="" className="p-2 rounded-lg bg-blue-600 text-white">
          <Squares2X2Icon className="size-5 " aria-hidden="true" />
        </Link>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  )
}
