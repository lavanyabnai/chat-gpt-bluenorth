'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  BanknotesIcon,
  PresentationChartLineIcon,
  CubeIcon,
  ArchiveBoxArrowDownIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  TruckIcon,
  ChevronDownIcon,
  RocketLaunchIcon
} from '@heroicons/react/20/solid';

const components = [
  {
    title: 'Demand Review',
    to: '/snop/process',
    icon: RocketLaunchIcon,
    iconcolr: 'text-blue-500'
  },
  {
    title: 'Supply Review',
    to: '/snop/process/supply',
    icon: CubeIcon
  },
  {
    title: 'Inventory Review',
    to: '/snop/process/inventory',
    icon: ArchiveBoxArrowDownIcon
  },
  {
    title: 'Distribution Meeting',
    to: '/snop/process/distribution',
    icon: TruckIcon
  },
  {
    title: 'New Product Review',
    to: '/snop/process/product',
    icon: ArrowTrendingUpIcon
  },

  {
    title: 'Demand Supply Balancing',
    to: '/snop/process/balance',
    icon: ScaleIcon
  },
  {
    title: 'Financial Planning',
    to: '/snop/process/finance',
    icon: BanknotesIcon
  },
  {
    title: 'Executive Meeting',
    to: '/snop/process/executive',
    icon: PresentationChartLineIcon
  }
];

export default function ProcessData({children}: {children: React.ReactNode}) {
  const [selectedProcess, setSelectedProcess] = useState('Process');
  return (
    <>
      <div>
        <div className="w-100 m-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Sales & Operations Planning
          </h2>

          <div className="flex items-center justify-end">
      
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectedProcess} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {components.map((component) => (
                    <SelectItem
                      key={component.title}
                      value={component.title}
                      onClick={() => setSelectedProcess(component.title)}
                    >
                      <Link
                        href={component.to}
                        className="flex items-center px-4 py-2 text-sm"
                      >
                        <component.icon
                          className="mr-3 h-5 w-5 text-gray-400 hover:text-sky-500 rounded-lg"
                          aria-hidden="true"
                        />
                        {component.title}
                      </Link>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <>
          {children}
        </>
      </div>
    </>
  );
}
