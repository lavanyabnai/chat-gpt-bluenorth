import SidebarShadcn from '@/components/SidebarShadcn';
import { cookies } from 'next/headers';
import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon
} from '@radix-ui/react-icons';
import { LifeBuoy, SquareUser } from 'lucide-react'


const senariomenus = [
  {
    id: 1,
    name: 'Master Data',
    to: '/snop/master',
    icon: <CubeIcon className="size-5" />,
    current: false
  },

  {
    id: 2,
    name: 'S&OP Process',
    to: '/snop/process',
    icon: <LoopIcon className="size-5" />,
    current: false
  },
  {
    id: 3,
    name: 'Exceptions',
    to: '/snop/incidents',
    icon: <ExclamationTriangleIcon className="size-5" />,
    current: false
  },
  // {
  //   id: 4,
  //   name: 'Capacity Optimizer',
  //   to: '/snop/scenarioanalysis',
  //   icon: BarChartIcon,
  //   current: false,
  // },
  {
    id: 5,
    name: 'Scenario Planning',
    to: '/snop/scenarioplan',
    icon: <MixIcon className="size-5" />,
    current: true
  },
  {
    id: 6,
    name: 'List of Scenarios',
    to: '/snop/scenario',
    icon: <GearIcon className="size-5" />,
    current: true
  },
  {
    id: 7,
    name: 'Optimizer',
    to: '/snop/optimize',
    icon: <PieChartIcon className="size-5" />,
    current: true
  },
  {
    id: 8,
    name: 'Results',
    to: '/snop/results',
    icon: <GearIcon className="size-5" />,
    current: true
  }
  // {
  //   id: 6,
  //   name: 'Truck',
  //   to: '/snop/input',
  //   icon: BarChartIcon,
  //   current: false,
  // },
];

const bottomNavItems = [
  { icon: <LifeBuoy className="size-5" />, label: 'Help', href: '/help' },
  {
    icon: <SquareUser className="size-5 " />,
    label: 'Account',
    href: '/account'
  }
];

export default function Page({children}:{children:React.ReactNode}) {
  const layout = cookies().get('react-resizable-panels:layout:mail');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div className="h-full">
      {/* <Header title="Inventory Optimizer" navigation={[]} /> */}
      <div className="flex max-h-full">
        <SidebarShadcn
          sidebarMenu={senariomenus}
          bottomNavItems={bottomNavItems}
        />

        <main className="flex-1 pl-[56px] mx-4">
          {' '}
          {children}
        </main>
      </div>
    </div>
  );
}
