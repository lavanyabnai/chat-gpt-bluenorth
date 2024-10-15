import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
          name="material_cost_pu"
          // defaultValue={cost["material_cost_pu"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="hold">
          Holding Cost
          <p className="text-gray-400 text-sm">per unit per month</p>
        </Label>
        <Input
          id="hold"
          name="inv_hold_cost_pupm"
          // defaultValue={cost["inv_hold_cost_pupm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="stock">
          Stockout Cost
          <p className="text-gray-400 text-sm">per unit per month</p>
        </Label>
        <Input
          id="stock"
          name="stockout_cost_pupm"
          // defaultValue={cost["stockout_cost_pupm"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>
    </div>
  );
}
