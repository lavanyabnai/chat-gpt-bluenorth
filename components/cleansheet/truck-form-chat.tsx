import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TruckInput({ truck }) {

  return (
    <div className="grid w-full  gap-10">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="pc">
          Purchase Cost
          <p className="text-gray-400 text-xs">inculing Fabrication</p>
        </Label>
        <Input
          id="pc"
          name="purchase_cost"
          defaultValue={truck["purchase_cost"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="mileagewithload">
          Mileage with Load
          <p className="text-gray-400 text-xs"></p>
        </Label>
        <Input
          id="mileagewithload"
          name="mileage_with_load"
          defaultValue={truck["mileage_with_load"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="mileagewithoutload">
          Mileage without Load
          <p className="text-gray-400 text-xs"></p>
        </Label>
        <Input
          id="mileagewithoutload"
          name="mileage_without_load"
          defaultValue={truck["mileage_without_load"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="main">
          Maintenance
          <p className="text-gray-400 text-xs"></p>
        </Label>
        <Input
          id="main"
          name="maintenance"
          defaultValue={truck["maintenance"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="cap">
          Capacity
          <p className="text-gray-400 text-xs"></p>
        </Label>
        <Input
          id="cap"
          name="capacity"
          defaultValue={truck["capacity"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="annual">
          Annual Distance
          <p className="text-gray-400 text-xs"></p>
        </Label>
        <Input
          id="annual"
          name="annual_distance"
          defaultValue={truck["annual_distance"]}
          className="text-base text-gray-500 text-center"
        />
      </div>
    </div>
  );
}
