'use client';

import { useState, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const navigation = [
  { id: 1, name: 'S&OP', to: '/snop/optimize' },
  { id: 2, name: 'Demand', to: '#' },
  { id: 3, name: 'Inventory', to: '#' },
  { id: 4, name: 'Logistics', to: '#' },
  { id: 5, name: 'Procurement', to: '#' }
];

export const loader = async () => {
  const submittedList = await getSubmittedoptimize();

  return json({ submittedList });
};

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
export default function Optimizer() {
    const { submittedList } = useLoaderData<typeof loader>();

  function handleSubmit(onSubmit: any): import("react").FormEventHandler<HTMLFormElement> | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Optimize Scenario</CardTitle>
        <CardDescription>Enter optimization parameters</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="scenario">Scenario</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minSites">Minimum Number of Sites</Label>
            <Input
              type="number"
              {...register('minSites', {
                required: 'This field is required',
                min: 1
              })}
            />
            {errors.minSites && (
              <p className="text-red-500 text-sm">
                {errors.minSites?.message as string}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="maxSites">Maximum Number of Sites</Label>
            <Input
              type="number"
              {...register('maxSites', {
                required: 'This field is required',
                min: 1
              })}
            />
            {errors.maxSites && (
              <p className="text-red-500 text-sm">
                {errors.maxSites?.message as string}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="maxDistance">
              Max Allowed Distance to Customer (km)
            </Label>
            <Input
              type="number"
              {...register('maxDistance', {
                required: 'This field is required',
                min: 0
              })}
            />
            {errors.maxDistance && (
              <p className="text-red-500 text-sm">
                {errors.maxDistance?.message as string}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="avgDistance">Avg Distance to Customer (km)</Label>
            <Input
              type="number"
              {...register('avgDistance', {
                required: 'This field is required',
                min: 0
              })}
            />
            {errors.avgDistance && (
              <p className="text-red-500 text-sm">
                {errors.avgDistance?.message as string}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="customerCoverage">
              % of Customers to Cover in 1 Day
            </Label>
            <Input
              type="number"
              {...register('customerCoverage', {
                required: 'This field is required',
                min: 0,
                max: 100
              })}
            />
            {errors.customerCoverage && (
              <p className="text-red-500 text-sm">
                {errors.customerCoverage?.message as string}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            ref={submitBtnRef}
          >
            {isSubmitting ? 'Processing...' : 'Submit'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {taskId && <p>Task ID: {taskId}</p>}
        {result && (
          <div>
            <h3 className="font-bold mt-4">Result:</h3>
            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
