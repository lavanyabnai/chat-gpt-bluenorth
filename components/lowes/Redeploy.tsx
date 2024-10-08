
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'

const inventory = [
  {
    SKU: 'SKU-775833',
    excesslocation: 'California',
    excessquantity: 300,
    excessvalue: 6000,
    daysdemand_e: 90,
    deficientLocation: 'San Francisco',
    deficientQuantity: 60,
    deficientValue: 1200,
    daysdemand_d: 6,
    estimatedDistributionCost: 325,
  },
  {
    SKU: 'SKU-234567',
    excesslocation: 'New York',
    excessquantity: 240,
    excessvalue: 4500,
    daysdemand_e: 70,
    deficientLocation: 'Boston',
    deficientQuantity: 80,
    deficientValue: 2400,
    daysdemand_d: 20,
    estimatedDistributionCost: 450,
  },
  {
    SKU: 'SKU-901234',
    excesslocation: 'Texas',
    excessquantity: 200,
    excessvalue: 3000,
    daysdemand_e: 75,
    deficientLocation: 'Houston',
    deficientQuantity: 100,
    deficientValue: 1500,
    daysdemand_d: 10,
    estimatedDistributionCost: 250,
  },
  {
    SKU: 'SKU-567890',
    excesslocation: 'Florida',
    excessquantity: 120,
    excessvalue: 3600,
    daysdemand_e: 73,
    deficientLocation: 'Miami',
    deficientQuantity: 40,
    deficientValue: 1200,
    daysdemand_d: 20,
    estimatedDistributionCost: 200,
  },
  {
    SKU: 'SKU-345678',
    excesslocation: 'Illinois',
    excessquantity: 90,
    excessvalue: 2700,
    daysdemand_e: 80,
    deficientLocation: 'Chicago',
    deficientQuantity: 20,
    deficientValue: 2100,
    daysdemand_d: 2,
    estimatedDistributionCost: 300,
  },
  {
    SKU: 'SKU-789012',
    excesslocation: 'Georgia',
    excessquantity: 180,
    excessvalue: 5400,
    daysdemand_e: 88,
    deficientLocation: 'Atlanta',
    deficientQuantity: 90,
    deficientValue: 2700,
    daysdemand_d: 25,
    estimatedDistributionCost: 400,
  },
  {
    SKU: 'SKU-123456',
    excesslocation: 'Washington',
    excessquantity: 250,
    excessvalue: 5000,
    daysdemand_e: 90,
    deficientLocation: 'Seattle',
    deficientQuantity: 30,
    deficientValue: 600,
    daysdemand_d: 5,
    estimatedDistributionCost: 350,
  },
  {
    SKU: 'SKU-456789',
    excesslocation: 'Colorado',
    excessquantity: 80,
    excessvalue: 1600,
    daysdemand_e: 76,
    deficientLocation: 'Denver',
    deficientQuantity: 50,
    deficientValue: 1000,
    daysdemand_d: 5,
    estimatedDistributionCost: 150,
  },
  {
    SKU: 'SKU-012345',
    excesslocation: 'Michigan',
    excessquantity: 140,
    excessvalue: 4200,
    daysdemand_e: 85,
    deficientLocation: 'Detroit',
    deficientQuantity: 20,
    deficientValue: 600,
    daysdemand_d: 5,
    estimatedDistributionCost: 280,
  },
  {
    SKU: 'SKU-678901',
    excesslocation: 'Ohio',
    excessquantity: 110,
    excessvalue: 3300,
    daysdemand_e: 78,
    deficientLocation: 'Cleveland',
    deficientQuantity: 75,
    deficientValue: 2250,
    daysdemand_d: 15,
    estimatedDistributionCost: 220,
  },
  {
    SKU: 'SKU-890123',
    excesslocation: 'Pennsylvania',
    excessquantity: 170,
    excessvalue: 5100,
    daysdemand_e: 95,
    deficientLocation: 'Philadelphia',
    deficientQuantity: 45,
    deficientValue: 1350,
    daysdemand_d: 15,
    estimatedDistributionCost: 380,
  },
]

export default function Redeploy() {

  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Sku</TableHead>
                <TableHead>Excess Location</TableHead>
                <TableHead>Excess Quantity</TableHead>
                <TableHead>Excess Value</TableHead>
                <TableHead># days of demand</TableHead>
                <TableHead>Deficient Location</TableHead>
                <TableHead>Deficient Quantity</TableHead>
                <TableHead>Deficient Value</TableHead>
                <TableHead># days of demand</TableHead>
                <TableHead>Estimated Distribution Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((inv) => (
                <TableRow key={inv.SKU}>
                  <TableCell className="font-medium">{inv.SKU}</TableCell>
                  <TableCell className="font-medium">
                    {inv.excesslocation}
                  </TableCell>
                  <TableCell className="font-medium">
                    {inv.excessquantity}
                  </TableCell>
                  <TableCell className="font-medium">
                    {inv.excessvalue}
                  </TableCell>
                  <TableCell className="w-200 ">
                    <Progress
                      indicatorColor="bg-green-400"
                      value={inv.daysdemand_e}
                      
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {inv.deficientLocation}
                  </TableCell>
                  <TableCell className="font-medium">
                    {inv.deficientQuantity}
                  </TableCell>
                  <TableCell className="font-medium">
                    {inv.deficientValue}
                  </TableCell>
                  <TableCell className="w-200 ">
                    <Progress
                      indicatorColor="bg-red-400"
                      value={inv.daysdemand_d}
                    />
                  </TableCell>

                  <TableCell className="font-medium">
                    {inv.estimatedDistributionCost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
