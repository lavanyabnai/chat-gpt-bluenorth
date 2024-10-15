"use client";

import React from 'react';
import StoreMap from '@/components/network/StoreMap';
import DcMap from '@/components/network/DcMap';
import SupplierMap from '@/components/network/SupplierMap';
import LaneMap from '@/components/network/LaneMap';
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

export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

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
      <div className="flex h-full ">
        {/* <SidebarDemo sidebarMenu={menus} /> */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
          <div className="m-4">
            <DemoContainer>
              <Tabs defaultValue="store" className="">
                <TabsList className="">
                  <TabsTrigger value="store" className="relative uppercase">
                    Store
                  </TabsTrigger>
                  <TabsTrigger className="uppercase" value="dc">
                    DC
                  </TabsTrigger>
                  <TabsTrigger className="uppercase" value="supplier">
                    Supplier
                  </TabsTrigger>
                  <TabsTrigger className="uppercase" value="lane">
                    Lane
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="store">
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
                            <SelectValue placeholder="Store" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="no">Store 1</SelectItem>
                              <SelectItem value="yes">Store 2</SelectItem>
                              <SelectItem value="no">Store 3</SelectItem>
                              <SelectItem value="no">Store 4</SelectItem>
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
                                Jan 2024
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
                    <StoreMap />
                  </div>
                </TabsContent>
                <TabsContent value="dc">
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
                                Jan 2024
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
                    <DcMap />
                  </div>
                </TabsContent>
                <TabsContent value="supplier">
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
                            <SelectValue placeholder="Supplier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="no">Supplier 1</SelectItem>
                              <SelectItem value="yes">Supplier 2</SelectItem>
                              <SelectItem value="no">Supplier 3</SelectItem>
                              <SelectItem value="no">Supplier 4</SelectItem>
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
                                Jan 2024
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
                    <SupplierMap />
                  </div>
                </TabsContent>
                <TabsContent value="lane">
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
                            <SelectValue placeholder="Supplier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="no">Supplier 1</SelectItem>
                              <SelectItem value="yes">Supplier 2</SelectItem>
                              <SelectItem value="no">Supplier 3</SelectItem>
                              <SelectItem value="no">Supplier 4</SelectItem>
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
                                Jan 2024
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
                    <LaneMap />
                  </div>
                </TabsContent>
              </Tabs>
            </DemoContainer>
          </div>
        </div>
      </div>
    </div>
  );
}