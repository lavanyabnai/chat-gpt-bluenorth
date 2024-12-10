'use client';
import { Providers } from '@/components/providers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bars3Icon,
  UserGroupIcon,
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  CpuChipIcon
} from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import taskData from '@/app/data/columndata/tasks.json';
import { columns } from '@/components/datatable/columns-inci';
import { DataTable } from '@/components/datatable/data-table-inci';

const demandData = taskData.filter(
  (task) => task.label === 'Demand Planning' && task.severity === 'High'
);

  const invData = taskData.filter(
    (task) => task.label === 'Inventory' && task.severity === 'High'
  );

 const distributionData = taskData.filter(
   (task) =>
     (task.label.includes('Logistics') || task.label.includes('Warehousing')) &&
     task.severity === 'High'
 );


const supplyData = taskData.filter((task) => task.label === 'Sourcing');




function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}
const eventsmenus = [
  {
    name: 'Demand',
    to: '/events/demand',
    icon: ChartBarIcon,
    current: true
  },
  {
    name: 'Inventory',
    to: '/events/inventory',
    icon: TableCellsIcon,
    current: false
  },
  {
    name: 'Logistics & Warehousing',
    to: '/events/logistics',
    icon: CpuChipIcon,
    current: false
  },
  {
    name: 'Supply',
    to: '/events/supply',
    icon: ArrowTrendingUpIcon,
    current: false
  }
];
export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <DemoContainer>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Events
          </h2>
        </div>

        <Tabs defaultValue="demand" className="m-2">
          <TabsList className="">
            <TabsTrigger value="demand" className="relative">
              Demand
            </TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="logistics">Logistics & Warehousing</TabsTrigger>
            <TabsTrigger value="supply">Supply</TabsTrigger>
          </TabsList>
          <TabsContent value="demand">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={demandData} columns={columns} />
            </div>
          </TabsContent>
          <TabsContent value="inventory">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={invData} columns={columns} />
            </div>
          </TabsContent>
          <TabsContent value="logistics">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={distributionData} columns={columns} />
            </div>
          </TabsContent>
          <TabsContent value="supply">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={supplyData} columns={columns} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DemoContainer>
  );
}
