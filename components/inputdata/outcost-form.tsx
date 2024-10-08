import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CostInput({ cost }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  // console.log(cost);
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
          defaultValue={cost["outsourcing_cost_pu"]}
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
          defaultValue={cost["max_work_hrs_pwpm"]}
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
          defaultValue={cost["max_overtime_hrs_pwpm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      {/* {cost.map((cost) => (
        <div key={cost.bucket} className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor={cost.cost_name}>
            {cost.cost_name}
            <p className="text-gray-400 text-sm">{cost.sub}</p>
          </Label>

          <Input
            id={cost.cost_value}
            placeholder="constraint value"
            defaultValue={cost.cost_value}
            className="text-lg text-gray-500 text-center"
          />
        </div>
      ))} */}

      {/* <div>
          <Label htmlFor={cost.material_cost_pu}>
            Material Cost (per unit)
          </Label>
          <Input
            id={cost.material_cost_pu}
            placeholder="material cost"
            defaultValue={cost.material_cost_pu}
          />
        </div>
        <div>
          <Label htmlFor={cost.inv_hold_cost_pupm}>
            Holding Cost (per unit per month)
          </Label>
          <Input
            id={cost.inv_hold_cost_pupm}
            placeholder="holding cost"
            defaultValue={cost.inv_hold_cost_pupm}
          />
        </div>
        <div>
          <Label htmlFor={cost.stockout_cost_pupm}>
            Stockout Cost (per unit per month)
          </Label>
          <Input
            id={cost.stockout_cost_pupm}
            placeholder="stockout cost"
            defaultValue={cost.stockout_cost_pupm}
          />
        </div>
        <div>
          <Label htmlFor={cost.hiring_cost_pw}>
            Hiring Cost (per employee)
          </Label>
          <Input
            id={cost.hiring_cost_pw}
            placeholder="hiring cost"
            defaultValue={cost.hiring_cost_pw}
          />
        </div>
        <div>
          <Label htmlFor={cost.firing_cost_pw}>
            Layoff Cost (per employee)
          </Label>
          <Input
            id={cost.firing_cost_pw}
            placeholder="layoff cost"
            defaultValue={cost.firing_cost_pw}
          />
        </div>
        <Label htmlFor={cost.labor_hrs_pu}>Layoff Cost (per employee)</Label>
        <Input
          id={cost.labor_hrs_pu}
          placeholder="layoff cost"
          defaultValue={cost.firing_cost_pw}
        />
        <Label htmlFor={cost.worker_cost_pm}>Employee Cost (per month)</Label>
        <Input
          id={cost.worker_cost_pm}
          placeholder="employee cost"
          defaultValue={cost.worker_cost_pm}
        />
        <Label htmlFor={cost.overtime_cost_phr}>Overtime Cost (per hour)</Label>
        <Input
          id={cost.overtime_cost_phr}
          placeholder="overtime cost"
          defaultValue={cost.overtime_cost_phr}
        />
        <Label htmlFor={cost.outsourcing_cost_pu}>
          Outsourcing Cost (per unit)
        </Label>
        <Input
          id={cost.outsourcing_cost_pu}
          placeholder="overtime cost"
          defaultValue={cost.outsourcing_cost_pu}
        /> */}
    </div>
  );
}
