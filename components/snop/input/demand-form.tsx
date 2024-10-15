import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DemandInput() {

  return (
  <div className="grid w-full  gap-4">
      <>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="jan">
            January
          </Label>
          <Input
            id="jan"
            name="Jan"
            // defaultValue={demands["Jan"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="feb">
            February
          </Label>
          <Input
            id="feb"
            name="Feb"
            // defaultValue={demands["Feb"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="mar">
            March
          </Label>
          <Input
            id="mar"
            name="Mar"
            // defaultValue={demands["Mar"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="apr">
            April
          </Label>
          <Input
            id="apr"
            name="Apr"
            // defaultValue={demands["Apr"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="may">
            May
          </Label>
          <Input
            id="may"
            name="May"
            // defaultValue={demands["May"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="jun">
            June
          </Label>
          <Input
            id="jun"
            name="Jun"
            // defaultValue={demands["Jun"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="jul">
            July
          </Label>
          <Input
            id="jul"
            name="Jul"
            // defaultValue={demands["Jul"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="aug">
            August
          </Label>
          <Input
            id="aug"
            name="Aug"
            // defaultValue={demands["Aug"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="sep">
            September
          </Label>
          <Input
            id="sep"
            name="Sep"
            // defaultValue={demands["Sep"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="oct">
            October
          </Label>
          <Input
            id="oct"
            name="Oct"
            // defaultValue={demands["Oct"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="nov">
            November
          </Label>
          <Input
            id="nov"
            name="Nov"
            // defaultValue={demands["Nov"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-1">
          <Label className="text-lg" htmlFor="dec">
            December
          </Label>
          <Input
            id="dec"
            name="Dec"
            // defaultValue={demands["Dec"]}
            className="text-lg text-gray-500 text-center"
          />
        </div>
      </>
    </div>
  );
}
