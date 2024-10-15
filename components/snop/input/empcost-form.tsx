import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

  export default function CostInput({ cost }) {

  return (
    <div className="grid w-full gap-4">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="hiringcost">
          Hiring Cost
          <p className="text-gray-400 text-sm">per employee</p>
        </Label>
        <Input
          id="hiringcost"
          name="hiring_cost_pw"
          // defaultValue={cost["hiring_cost_pw"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="layoff">
          Layoff Cost
          <p className="text-gray-400 text-sm">per employee</p>
        </Label>
        <Input
          id="layoff"
          name="firing_cost_pw"
          // defaultValue={cost["firing_cost_pw"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="emp">
          Employee Cost
          <p className="text-gray-400 text-sm">per employee</p>
        </Label>
        <Input
          id="emp"
          name="worker_cost_pm"
          // defaultValue={cost["worker_cost_pm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="ot">
          Overtime Cost
          <p className="text-gray-400 text-sm">per hour</p>
        </Label>
        <Input
          id="ot"
          name="overtime_cost_phr"
          // defaultValue={cost["overtime_cost_phr"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

  
    </div>
  );
}
