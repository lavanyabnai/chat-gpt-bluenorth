import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AdminInput({ admin }) {
 
  return (
    <div className="grid w-full  gap-10">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="lyf">
          Life
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="lyf"
          name="life"
          defaultValue={admin["life"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="disesel">
          Diesel Price
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="disesel"
          name="diesel_price"
          defaultValue={admin["diesel_price"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="load">
          Loading/ Unloading
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="load"
          name="loading_unloading"
          defaultValue={admin["loading_unloading"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="tol">
          Toll
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="tol"
          name="toll"
          defaultValue={admin["toll"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="route">
          Route Expenses
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="route"
          name="route_expenses"
          defaultValue={admin["route_expenses"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="driver">
          Driver & Cleaner Expenses
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="driver"
          name="driver_expenses"
          defaultValue={admin["driver_expenses"]}
          className="text-base text-gray-500 text-center"
        />
      </div>

      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-base" htmlFor="tyr">
          Tyres
          <p className="text-gray-400 text-sm"></p>
        </Label>
        <Input
          id="tyr"
          name="tyres"
          defaultValue={admin["tyres"]}
          className="text-base text-gray-500 text-center"
        />
      </div>
    </div>
  );
}
