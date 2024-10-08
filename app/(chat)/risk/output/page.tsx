'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import Ratio from '@/components/risk/Ratio';
import Products from '@/components/risk/Product';
import Finance from '@/components/risk/finances';
import Order from '@/components/risk/Orders';
import Time from '@/components/risk/Time';

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

export default function SnopInput() {


  return (
    <div className="m-4 ">
      <form>
        <div className="bg-white shadow-md rounded-b-lg">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Simulation - Output KPIs
            </h2>
          </div>
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Products</CardTitle>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <Products />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Ratio</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Ratio />
                  </CardContent>
                </Card>
              </DemoContainer>

              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Time</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Time />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Finance</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Finance />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Order</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Order />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
