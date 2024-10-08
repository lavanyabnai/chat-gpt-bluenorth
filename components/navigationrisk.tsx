'use client'
import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import Image from 'next/image'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { Session } from '@/lib/types'
import { usePathname } from 'next/navigation'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  {
    name: 'Master Data',
    to: '/risk/analysis',
    current: true
  },
  {
    name: 'Output',
    to: '/risk/output',
    current: true
  },
  {
    name: 'Scenarios',
    to: '/risk/simulation',
 
    current: true
  },
  {
    name: 'Optimization',
    to: '/risk/optimization',
    current: true
  },
  {
    name: 'Results',
    to: '/risk/results',
    current: true
  },
  {
    name: 'Visualizer',
    to: '/risk/flowchart',
    current: true
  },
  {
    name: 'Comparing',
    to: '/risk/comparing',
    current: true
  },
  {
    name: 'Scenario Analysis',
    to: '/risk/scenarioanalysis',
    current: true
  }
]

export function NavigationRisk() {
  const pathname = usePathname()
  return (
      <nav>
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navigation?.map(item => (
                  <Link
                    href={item.to}
                    key={item.name}
                    className={classNames(
                      'rounded-md px-2 py-2 text-sm font-semibold uppercase',
                      pathname === item.to
                        ? 'bg-sky-500 text-white bg-opacity-75 border border-sky-500'
                        : 'text-white hover:bg-sky-500 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}