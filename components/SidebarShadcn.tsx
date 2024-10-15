'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar';
import { FaMapLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import {
  FaChartLine,
  FaTruck,
  FaDatabase,
  FaWarehouse,
  FaLock
} from 'react-icons/fa';
import { BsBoxes } from 'react-icons/bs';
import { GrTree } from 'react-icons/gr';
import { MdInventory } from 'react-icons/md';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const dropdown = [
  {
    icon: FaMapLocationDot,
    name: 'Network Optimizer',
    to: '/network/config',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-100',
    description:
      'Analyze demand forecasts and trends to optimize your supply chain and inventory levels.'
  },
  {
    icon: MdInventory,
    name: 'Inventory Optimizer',
    to: '/inventory/dashboard',
    iconForeground: 'text-rose-500',
    iconBackground: 'bg-rose-100',
    description:
      'Monitor your supply chain operations, including supplier performance and material availability.'
  },
  {
    icon: FaChartLine,
    name: 'Sales & Operation Planning',
    to: '/snop/master',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-100',
    description:
      'Get a comprehensive overview of your dashboard metrics and performance indicators.'
  },
  {
    icon: FaTruck,
    name: 'Transport Cleansheet',
    to: '/trans/config',
    iconForeground: 'text-yellow-600',
    iconBackground: 'bg-yellow-100',
    description:
      'Manage your inventory levels efficiently to meet demand without overstocking.'
  },
  {
    icon: FaPeopleGroup,
    name: 'Risk Optimizer',
    to: '/risk/analysis',
    iconForeground: 'text-orange-700',
    iconBackground: 'bg-orange-100',
    description:
      "Review the balance sheet for a snapshot of the company's financial health at a specific point in time."
  },
  {
    icon: FaLock,
    name: 'Safety Stock Optimizer',
    to: '/ss/dc',
    iconForeground: 'text-lime-700',
    iconBackground: 'bg-lime-100',
    description:
      "Review the balance sheet for a snapshot of the company's financial health at a specific point in time."
  },
  {
    icon: FaDatabase,
    name: 'Capacity Analytics',
    to: '/capacity/master',
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-100',
    description:
      'Gain insights into financial performance, including revenue, expenses, and profitability.'
  },
  {
    icon: GrTree,
    name: 'Product Flow Analyzer',
    to: '/product/sim',
    iconForeground: 'text-sky-600',
    iconBackground: 'bg-sky-100',
    description:
      'Evaluate the effectiveness of sales and marketing campaigns and strategies.'
  },
  {
    icon: FaWarehouse,
    name: 'Warehouse Optimizer',
    to: '/warhousing/dc',
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-100',
    description:
      'Plan and monitor marketing campaigns to enhance brand visibility and lead generation.'
  }
];

export default function SidebarShadcn({
  sidebarMenu,
  bottomNavItems
}: {
  sidebarMenu: any[];
  bottomNavItems: any[];
}) {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
        </Button>
        {/* <Separator className="mt-2.5" /> */}
      </div>

      <nav className="grid gap-1 p-2">
        {sidebarMenu?.map(item => (
          <TooltipProvider key={item.to}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.to}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${
                      pathname === item.to ? 'bg-sky-500 text-white' : ''
                    }`}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        {/* {bottomNavItems?.map((item) => (
          <TooltipProvider key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : ''
                    }`}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item.label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))} */}
        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger className="">
              <a
                className="text-primary-foreground"
                aria-label="Supply Chain Modules"
              >
                <BsBoxes className="size-5 text-primary" />
              </a>
            </MenubarTrigger>
            <MenubarContent>
              <div className="grid grid-cols-3 w-[700px] gap-2">
                {dropdown.map(item => (
                  <MenubarItem key={item.name}>
                    <Link href={item.to}>
                      <div className="rounded-lg hover:bg-gradient-to-t hover:from-indigo-400 hover:via-cyan-400 hover:to-sky-500 p-0.5">
                        <div className="flex items-center w-full justify-between hover:bg-sky-50 rounded-lg text-2xl text-blue-900 font-bold">
                          <div className="flex items-center p-4">
                            <span
                              className={classNames(
                                item.iconBackground,
                                item.iconForeground,
                                'inline-flex rounded-lg p-2'
                              )}
                            >
                              <item.icon
                                className="h-8 w-8 flex-none rounded-lg"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="ml-4 text-base font-semibold text-gray-900">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </MenubarItem>
                ))}
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <ThemeToggle />
      </nav>
    </aside>
  )
}
