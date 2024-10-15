'use client';
import React, { useState, Fragment } from 'react';

import { Button } from '@/components/ui/button';

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Link } from '@remix-run/react';

import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import OrderMangement from '@/components/network/OrderMangement';

import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
const stats = [
  {
    Value: 'B Growth',
    tab1: 'Target Customer Service Level',
    percentage: '85%',
    tab2: 'Min offerd Lead Time',
    percentage2: '28 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Value: 'Rationalize',
    tab1: 'Target Customer Service Level',
    percentage: '85%',
    tab2: 'Min offerd Lead Time',
    percentage2: '28 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Value: 'A Growth/Mature',
    tab1: 'Target Customer Service Level',
    percentage: '95%',
    tab2: 'Min offerd Lead Time',
    percentage2: '0 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Value: 'Declining',
    tab1: 'Target Customer Service Level',
    percentage: '95%',
    tab2: 'Min offerd Lead Time',
    percentage2: '0 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Value: 'VMI',
    tab1: 'Target Customer Service Level',
    percentage: '98%',
    tab2: 'Min offerd Lead Time',
    percentage2: '0 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  },
  {
    Value: 'Default',
    tab1: 'Target Customer Service Level',
    percentage: '95%',
    tab2: 'Min offerd Lead Time',
    percentage2: '1000 Days',
    tab3: 'Max Offered Lead Time',
    percentage3: '',
    TargetAch: '75',
    status: 'Above Target'
  }
];

export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago'
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago'
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago'
  }
];
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
type CardProps = React.ComponentProps<typeof Card>;

export default function Agmap({ className, ...props }: CardProps) {
  const [position, setPosition] = React.useState('bottom');
  const emptyStyles = { background: '#ef4444' };
  const progressStyles = { background: '#22c55e' };
  return (
    <div className="m-4">
      <div className="mx-44 bg-white rounded-lg shadow-lg ">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Segmentation</div>
          </div>
        </div>

        <ul className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {stats.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col rounded-lg bg-white border shadow-md"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <span
                  className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                    kpi.status === 'Above Target'
                      ? `bg-green-500`
                      : kpi.status === 'Below Target'
                      ? `bg-red-500`
                      : ''
                  }`}
                ></span>
                <h1 className="mt-2 text-3xl font-bold text-blue-900">
                  {kpi.Value}
                </h1>
                <div className="my-2 flex items-baseline gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {kpi.tab1}
                    </h3>
                  </div>
                  <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                    {kpi.percentage}
                  </div>
                </div>
                <div className="my-2 flex items-baseline gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {kpi.tab2}
                    </h3>
                  </div>
                  <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                    {kpi.percentage2}
                  </div>
                </div>
                <div className="my-2 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {kpi.tab3}
                    </h3>
                  </div>
                  <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                    {kpi.percentage3}
                  </div>
                </div>
              </div>
              <div className="flex justify-end m-2">
                <div>
                  <Button className="w-full bg-blue-500">
                    <Check className="mr-2 h-4 w-4" /> Explore Segment
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
