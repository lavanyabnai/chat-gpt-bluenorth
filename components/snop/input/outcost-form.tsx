import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CostInput({ cost }) {

  return (
    <div className="grid w-full gap-4">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="mc">
          Material Cost
          <p className="text-gray-400 text-sm">per unit</p>
        </Label>
        <Input
          id="mc"
          name="outsourcing_cost_pu"
          // defaultValue={cost["outsourcing_cost_pu"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="man">
          Manufacturing Cost
          <p className="text-gray-400 text-sm">per unit</p>
        </Label>
        <Input
          id="man"
          name="max_work_hrs_pwpm"
          // defaultValue={cost["max_work_hrs_pwpm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="logi">
          Logistics Cost
          <p className="text-gray-400 text-sm">per unit</p>
        </Label>
        <Input
          id="logi"
          name="max_overtime_hrs_pwpm"
          // defaultValue={cost["max_overtime_hrs_pwpm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>
   
    </div>
  );
}
