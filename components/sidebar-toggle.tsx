'use client'

import * as React from 'react'
import Image from 'next/image'
import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Button } from '@/components/ui/button'
import { IconSidebar } from '@/components/ui/icons'
import logo from '@/public/assets/logo.png'
export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      className="-ml-2 hidden lg:flex  hover:bg-sky-500/20 hover:rounded-full p-1   hover:border border-white/10"
      onClick={() => {
        toggleSidebar()
      }}
    >
      <Image
        className="mx-auto p-1"
        src={logo}
        alt="logo"
        width={40}
        height={40}
      />
      {/* <Image
        className="cursor-poniter  h-12 w-15"
        src="/assets/lowes.png"
        width={70}
        height={50}
        alt="logo"
      /> */}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}
