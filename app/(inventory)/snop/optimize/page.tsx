
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { getSubmittedoptimize } from "~/models/optimize.server";
// import { json, redirect } from "@remix-run/node";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";




// export const loader = async () => {
//   const submittedList = await getSubmittedoptimize();
//   console.log(submittedList);

//   return json({ submittedList });
// };




function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}
export default function Optimizer() {
//   const { submittedList } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="m-2">
        {/* <div className="mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ">
          <nav
            className="ml-6 pl-6 flex items-center justify-center"
            aria-label="Global"
          >
            <div className=" flex gap-x-8 justify-center ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className=" text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div> */}

        <div className="bg-white mx-2 shadow-md rounded-b-lg pb-6">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Optimizer Dashboard
            </h2>
          </div>

          <div className="items-start justify-center gap-6 rounded-lg p-4 grid grid-cols-2 ">
            <div className="">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Scenario Summary
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold">
                        Select for Optimization
                      </span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Scenario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Scenario</SelectLabel>
                            {/* {submittedList.map((scenario) => (
                              <SelectItem
                                key={scenario.scenario_id}
                                value={scenario.scenario_id ?? ""}
                              >
                                {scenario.scenario_id ?? ""}
                              </SelectItem>
                            ))} */}
                           
                              <SelectItem
                                value="SCEN-1"
                              >
                               SCEN-1
                              </SelectItem>
                        
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Spare threshold
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="20"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Number of Knives
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="0"
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

            <div className="">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Optimization Parameters
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Optimization Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="Completed @ 1:51:32 PM - 2/23/2021"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Solver Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="OPTIMAL"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">Job ID</span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="eeeb3265-3cf4-44f4-944d-ea7dad4c12ed"
                      />
                    </div>
                    <form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Log
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
