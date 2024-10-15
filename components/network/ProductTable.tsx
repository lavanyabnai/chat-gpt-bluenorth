
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

const product = [
  {
    ProductId: 101,
    ProductName: 'Acme Widget',
    Price: 19.99,
    Cost: 10.0,
    Segment: 'Hardware',
    NumOfSuppliers: 5,
  },
  {
    ProductId: 102,
    ProductName: 'Titan Hammer',
    Price: 25.5,
    Cost: 15.0,
    Segment: 'Tools',
    NumOfSuppliers: 3,
  },
  {
    ProductId: 103,
    ProductName: 'Quantum Paint',
    Price: 35.75,
    Cost: 20.0,
    Segment: 'Paint',
    NumOfSuppliers: 4,
  },
  {
    ProductId: 104,
    ProductName: 'Orbit Drill',
    Price: 89.99,
    Cost: 45.0,
    Segment: 'Tools',
    NumOfSuppliers: 6,
  },
  {
    ProductId: 105,
    ProductName: 'Bolt Driver Set',
    Price: 22.95,
    Cost: 11.5,
    Segment: 'Tools',
    NumOfSuppliers: 2,
  },
  {
    ProductId: 106,
    ProductName: 'Vertex Chainsaw',
    Price: 199.99,
    Cost: 120.0,
    Segment: 'Outdoor Equipment',
    NumOfSuppliers: 4,
  },
  {
    ProductId: 107,
    ProductName: 'Garden Genie Gloves',
    Price: 9.99,
    Cost: 4.5,
    Segment: 'Gardening',
    NumOfSuppliers: 3,
  },
  {
    ProductId: 108,
    ProductName: 'Granite Worktop',
    Price: 300.0,
    Cost: 150.0,
    Segment: 'Building Supplies',
    NumOfSuppliers: 1,
  },
  {
    ProductId: 109,
    ProductName: 'Lunar Ladder 20ft',
    Price: 99.99,
    Cost: 50.0,
    Segment: 'Tools',
    NumOfSuppliers: 4,
  },
  {
    ProductId: 110,
    ProductName: 'Aqua Pure Water Filter',
    Price: 49.99,
    Cost: 25.0,
    Segment: 'Appliances',
    NumOfSuppliers: 5,
  },
]

const customer = [
  {
    Customer: 'Customer001',
    Product: 'Acme Widget',
    PurchaseDate: '2024-01-05',
    Price: 19.99,
    Segment: 'Hardware',
    LifetimeValue: 1500.0,
  },
  {
    Customer: 'Customer002',
    Product: 'Titan Hammer',
    PurchaseDate: '2024-02-15',
    Price: 25.5,
    Segment: 'Tools',
    LifetimeValue: 800.0,
  },
  {
    Customer: 'Customer003',
    Product: 'Quantum Paint',
    PurchaseDate: '2024-03-10',
    Price: 35.75,
    Segment: 'Paint',
    LifetimeValue: 450.0,
  },
  {
    Customer: 'Customer004',
    Product: 'Orbit Drill',
    PurchaseDate: '2024-01-22',
    Price: 89.99,
    Segment: 'Tools',
    LifetimeValue: 1200.0,
  },
  {
    Customer: 'Customer005',
    Product: 'Bolt Driver Set',
    PurchaseDate: '2024-04-02',
    Price: 22.95,
    Segment: 'Tools',
    LifetimeValue: 300.0,
  },
  {
    Customer: 'Customer006',
    Product: 'Vertex Chainsaw',
    PurchaseDate: '2024-05-18',
    Price: 199.99,
    Segment: 'Outdoor Equipment',
    LifetimeValue: 1500.0,
  },
  {
    Customer: 'Customer007',
    Product: 'Garden Genie Gloves',
    PurchaseDate: '2024-06-20',
    Price: 9.99,
    Segment: 'Gardening',
    LifetimeValue: 200.0,
  },
  {
    Customer: 'Customer008',
    Product: 'Granite Worktop',
    PurchaseDate: '2024-07-04',
    Price: 300.0,
    Segment: 'Building Supplies',
    LifetimeValue: 5000.0,
  },
  {
    Customer: 'Customer009',
    Product: 'Lunar Ladder 20ft',
    PurchaseDate: '2024-08-15',
    Price: 99.99,
    Segment: 'Tools',
    LifetimeValue: 700.0,
  },
  {
    Customer: 'Customer010',
    Product: 'Aqua Pure Water Filter',
    PurchaseDate: '2024-09-01',
    Price: 49.99,
    Segment: 'Appliances',
    LifetimeValue: 620.0,
  },
]
const inventory = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]
const deficit = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]

export function ProductTable() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Id</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>Num Of Suppliers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.map((invoice) => (
                <TableRow key={invoice.ProductId}>
                  <TableCell className="font-medium">
                    {invoice.ProductId}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.ProductName}
                  </TableCell>
                  <TableCell className="font-medium">{invoice.Price}</TableCell>
                  <TableCell className="font-medium">{invoice.Cost}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.Segment}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.NumOfSuppliers}
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
export function CustomerTable() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Id</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Purchase Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>LifetimeValue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customer.map((invoice) => (
                <TableRow key={invoice.Customer}>
                  <TableCell className="font-medium">
                    {invoice.Customer}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.Product}
                  </TableCell>
                  <TableCell className="font-medium">{invoice.PurchaseDate}</TableCell>
                  <TableCell className="font-medium">{invoice.Price}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.Segment}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.LifetimeValue}
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

export function InventoryTable() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Excess</TableHead>
                <TableHead>Percent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.location}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.deficit}
                  </TableCell>
                  <TableCell>
                    <Progress
                      indicatorColor="bg-green-400"
                      value={invoice.percent}
                    />
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

export function ExcessTable() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Deficit</TableHead>
                <TableHead>Percent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deficit.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="w-100 font-medium">
                    {invoice.title}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.location}
                  </TableCell>
                  <TableCell className="w-100 font-medium">
                    {invoice.deficit}
                  </TableCell>
                  <TableCell className="w-200 ">
                    <Progress
                      indicatorColor="bg-red-400"
                      value={invoice.percent}
                    />
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