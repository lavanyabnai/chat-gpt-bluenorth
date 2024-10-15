'use client';
import React, { useState, Fragment } from 'react';
import UsMap from '@/app/data/agMap/usmap/Map';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import OrderMangement from '@/components/network/OrderMangement';
import FillRate from '@/components/network/FillRate';
import Backorder from '@/components/network/Backorder';
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

export default function Agmap() {
  const [position, setPosition] = React.useState('bottom');

  return (
    <div>
      <div className="m-4">
        <DemoContainer>
          <Tabs defaultValue="store" className="">
            <TabsList className="">
              <TabsTrigger value="store" className="relative uppercase">
                Overall
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="fill">
                Fill rate
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="Backorder">
                Backorder
              </TabsTrigger>
              {/* <TabsTrigger className="uppercase" value="Carrier">
                Carrier Service
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="store">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 ">
                  <div className="p-2 flex items-center space-x-2">
                    {' '}
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">Region 1</SelectItem>
                          <SelectItem value="yes">Region 2</SelectItem>
                          <SelectItem value="no">Region 3</SelectItem>
                          <SelectItem value="no">Region 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">State 1</SelectItem>
                          <SelectItem value="yes">State 2</SelectItem>
                          <SelectItem value="no">State 3</SelectItem>
                          <SelectItem value="no">State 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="DC" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">DC 1</SelectItem>
                          <SelectItem value="yes">DC 2</SelectItem>
                          <SelectItem value="no">DC 3</SelectItem>
                          <SelectItem value="no">DC 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan'24
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="bg-black">
                <UsMap />
              </div>
            </TabsContent>
            <TabsContent value="fill">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg ">
                  <div className="p-2 flex items-center space-x-2">
                    {' '}
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">Region 1</SelectItem>
                          <SelectItem value="yes">Region 2</SelectItem>
                          <SelectItem value="no">Region 3</SelectItem>
                          <SelectItem value="no">Region 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">State 1</SelectItem>
                          <SelectItem value="yes">State 2</SelectItem>
                          <SelectItem value="no">State 3</SelectItem>
                          <SelectItem value="no">State 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="DC" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">DC 1</SelectItem>
                          <SelectItem value="yes">DC 2</SelectItem>
                          <SelectItem value="no">DC 3</SelectItem>
                          <SelectItem value="no">DC 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Daily
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan'24
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div>
                <FillRate />
              </div>
            </TabsContent>
            <TabsContent value="Backorder">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg">
                  <div className="p-2 flex items-center space-x-2">
                    {' '}
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">Region 1</SelectItem>
                          <SelectItem value="yes">Region 2</SelectItem>
                          <SelectItem value="no">Region 3</SelectItem>
                          <SelectItem value="no">Region 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">State 1</SelectItem>
                          <SelectItem value="yes">State 2</SelectItem>
                          <SelectItem value="no">State 3</SelectItem>
                          <SelectItem value="no">State 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="DC" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no">DC 1</SelectItem>
                          <SelectItem value="yes">DC 2</SelectItem>
                          <SelectItem value="no">DC 3</SelectItem>
                          <SelectItem value="no">DC 4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <Backorder />
              </div>
            </TabsContent>
            {/* <TabsContent value="Carrier">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Order Management</div>
                </div>
              </div>

              <div>
                <OrderMangement />
              </div>
            </TabsContent> */}
          </Tabs>
        </DemoContainer>
      </div>
    </div>
  );
}
