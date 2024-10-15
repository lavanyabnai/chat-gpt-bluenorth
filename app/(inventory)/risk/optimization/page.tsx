'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { getSubmittedoptimize } from '@/models/optimize.server';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { json } from 'stream/consumers';

// export const loader = async () => {
//   const submittedList = await getSubmittedoptimize();
//   // console.log(submittedList)

//   return json({ submittedList });
// };

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
  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Capacity Analyzer</div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-b-lg pb-2">
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Scenario Execution
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Scenario Id
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="6"
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Created By
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="ETL"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Scenario Name
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="Base_Data"
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Scenario Description
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="Base Scenario for instance: IO Test Cases"
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Sensitivity Attached
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="False"
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Current Status
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="Ready"
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Last Error Message
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder=""
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Last Run Start
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder=""
                      />
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Last Run End
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder=""
                      />
                    </div>

                    <form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Optimize
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl grid grid-cols-2 gap-4">
                      <div>Objective</div>
                      <div>Constraints</div>
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4 space-y-6">
                    <RadioGroup
                      defaultValue="Mininize"
                      className="space-y-4 w-full"
                    >
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Mininize" id="r1" />
                        <Label htmlFor="r1" className="">
                          Mininize Cost
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2" className="">
                          Maximize Performance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3" className="">
                          Redistibution
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Policy" id="r4" />
                        <Label htmlFor="r4" className="">
                          Replenishment Policy Analyzer
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Tiered" id="r5" />
                        <Label htmlFor="r5" className="">
                          Tiered Budget Otimization
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Replenishment" id="r6" />
                        <Label htmlFor="r6" className="">
                          Replenishment Interval Optimization
                        </Label>
                      </div>
                    </RadioGroup>
                    <RadioGroup defaultValue="TSL" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="TSL" id="s1" />
                        <Label htmlFor="s1" className="">
                          Minimum TSL for Item at a Location
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Minimum" id="s2" />
                        <Label htmlFor="s2" className="">
                          Minimum Overall TSL for a Location
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Location" id="s3" />
                        <Label htmlFor="s3" className="">
                          Location Budget
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="System" id="s4" />
                        <Label htmlFor="s4" className="">
                          System Budget
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="Max" id="s5" />
                        <Label htmlFor="s5" className="">
                          Max Volume at a Location
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                  <form className="flex justify-center border-t  p-4 mx-6">
                    <Button
                      type="submit"
                      name="start"
                      value="yes"
                      className="text-base bg-blue-500  text-white hover:bg-blue-600"
                    >
                      Log
                    </Button>
                  </form>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
