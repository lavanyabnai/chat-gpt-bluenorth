import { Header } from '@/components/header';
import SidebarShadcn from '@/components/SidebarShadcn';
// import SidebarDemo from '@/components/SidebarDemo';

import { LifeBuoy, SquareUser } from 'lucide-react';
import {
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/20/solid';

const senariomenus = [
  {
    name: 'Configuration',
    to: '/network/config',
    icon: <ChartBarIcon className="size-5" />,
    current: true
  },
  {
    name: 'Segmentation',
    to: '/network/segment',
    icon: <TableCellsIcon className="size-5" />,
    current: false
  },
  {
    name: 'Service',
    to: '/network/service',
    icon: <CpuChipIcon className="size-5" />,
    current: false
  },
  {
    name: 'Cost',
    to: '/network/cost',
    icon: <ArrowTrendingUpIcon className="size-5" />,
    current: false
  },
  {
    name: 'Capital',
    to: '/network/capital',
    icon: <PresentationChartBarIcon className="size-5" />,
    current: false
  },
  {
    name: 'Network Simulation',
    to: '/network/netsim',
    icon: <PresentationChartBarIcon className="size-5" />,
    current: false
  }
];

const bottomNavItems = [
  { icon: <LifeBuoy className="size-5" />, label: 'Help', href: '/help' },
  {
    icon: <SquareUser className="size-5 " />,
    label: 'Account',
    href: '/account'
  }
];
const navigation = [
  { name: 'Network', to: '/network/config', current: true },
  { name: 'Track & Trace', to: '/track/order', current: false },
  { name: 'Events', to: '/events/demand', current: false },
  { name: 'Planning', to: '/planning/demand', current: false },
  { name: 'Execution', to: '/execution/store', current: false }
];
export default function Page({ children }: { children: React.ReactNode }) {
  // const layout = cookies().get('react-resizable-panels:layout:mail');
  // const collapsed = cookies().get('react-resizable-panels:collapsed');

  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div className="h-full">
      {/* <Header title="Inventory Optimizer" navigation={navigation} /> */}
      <div className="flex max-h-full">
        <SidebarShadcn
          sidebarMenu={senariomenus}
          bottomNavItems={bottomNavItems}
        />

        <main className=" pl-[57px] min-w-full "> {children}</main>
      </div>
    </div>
  );
}
