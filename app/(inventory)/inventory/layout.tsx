import Header from '@/components/header';
import SidebarShadcn from '@/components/SidebarShadcn';
// import SidebarDemo from '@/components/SidebarDemo';

import { LifeBuoy, SquareUser } from 'lucide-react';
import {
  CubeIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
  CameraIcon,
  Component1Icon,
  RocketIcon,
  ViewGridIcon
} from '@radix-ui/react-icons';

const senariomenus = [
  {
    id: 4,
    name: 'Dashboard',
    to: '/inventory/dashboard',
    icon: <CubeIcon className="size-5" />,
    current: false
  },
  {
    id: 5,
    name: 'Events',
    to: '/inventory/meeting',
    icon: <ViewGridIcon className="size-5" />,
    current: false
  },
  {
    id: 9,
    name: 'Inventory On Hand',
    to: '/inventory/onhand',
    icon: <Component1Icon className="size-5" />,
    current: false
  },
  {
    id: 15,
    name: 'Scenario Analyzer',
    to: '/inventory/scenarioanalysis',
    icon: <BarChartIcon className="size-5" />,
    current: false
  },
  {
    id: 6,
    name: 'Root Cause Analysis',
    to: '/inventory/flowchart',
    icon: <RocketIcon className="size-5" />,
    current: false
  },
  {
    id: 7,
    name: 'Backlog Analyzer',
    to: '/inventory/back',
    icon: <MixIcon className="size-5" />,
    current: false
  },
  {
    id: 8,
    name: 'SKU Service',
    to: '/inventory/skuservice',
    icon: <CubeIcon className="size-5" />,
    current: false
  },

  // {
  //   id: 10,
  //   name: 'Input Data',
  //   to: '/inventory/input',
  //   icon: CameraIcon,
  //   current: false,
  // },
  // {
  //   id: 11,
  //   name: 'Scenario Planning',
  //   to: '/inventory/scenario',
  //   icon: CameraIcon,
  //   current: false,
  // },

  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/optimize',
  //   icon: Component1Icon,
  //   current: false,
  // },
  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/optimize2',
  //   icon: Component1Icon,
  //   current: false,
  // },
  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/country',
  //   icon: Component1Icon,
  //   current: false,
  // },
  {
    id: 1,
    name: 'Inventory Optimizer',
    to: '/inventory/inventoryopt',
    icon: <CubeIcon className="size-5" />,
    current: true
  },

  {
    id: 2,
    name: 'Current Inventory',
    to: '/inventory/current',
    icon: <LoopIcon className="size-5" />,
    current: false
  },
  {
    id: 3,
    name: 'Recommendation',
    to: '/inventory/recommend',
    icon: <ExclamationTriangleIcon className="size-5" />,
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

export default function Page({ children }: { children: React.ReactNode }) {
  // const layout = cookies().get('react-resizable-panels:layout:mail');
  // const collapsed = cookies().get('react-resizable-panels:collapsed');

  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div className="h-full">
      {/* <Header title="Inventory Optimizer" navigation={[]} /> */}
      <div className="flex max-h-full">
        <SidebarShadcn
          sidebarMenu={senariomenus}
          bottomNavItems={bottomNavItems}
        />

        <main className=" pl-[57px] min-w-full"> {children}</main>
      </div>
    </div>
  );
}
