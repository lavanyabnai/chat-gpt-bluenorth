import SidebarShadcn from '@/components/SidebarShadcn';
import { cookies } from 'next/headers';
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { GrTree } from 'react-icons/gr';
import { PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { TableCellsIcon } from '@heroicons/react/24/outline';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { LifeBuoy, SquareUser } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const senariomenus = [
  {
    name: 'Master Data',
    to: '/risk/analysis',
    icon: <ChartBarIcon className="size-5" />,
    current: true
  },
  {
    name: 'Output',
    to: '/risk/output',
    icon: <PresentationChartLineIcon className="size-5" />,
    current: true
  },
  {
    name: 'Scenarios',
    to: '/risk/simulation',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'Optimization',
    to: '/risk/optimization',
    icon: <AdjustmentsHorizontalIcon className="size-5" />,
    current: true
  },
  {
    name: 'Results',
    to: '/risk/results',
    icon: <RiBarChartBoxLine className="size-5" />,
    current: true
  },
  {
    name: 'Visualizer',
    to: '/risk/flowchart',
    icon: <GrTree className="size-5 " />,
    current: true
  },
  {
    name: 'Comparing',
    to: '/risk/comparing',
    icon: <GrTree className="size-5 " />,
    current: true
  },
  {
    name: 'Scenario Analysis',
    to: '/risk/scenarioanalysis',
    icon: <GrTree className="size-5 " />,
    current: true
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

export default function Page({children}:{children:React.ReactNode}) {
  const layout = cookies().get('react-resizable-panels:layout:mail');
  const collapsed = cookies().get('react-resizable-panels:collapsed');


  return (
    <div className="h-full">
      {/* <Header title="Inventory Optimizer" navigation={[]} /> */}
      <div className="max-h-full">
        <SidebarShadcn
          sidebarMenu={senariomenus}
          bottomNavItems={bottomNavItems}
        />

        <main className="pl-[56px] mx-4">
          {' '}
          {children}
        </main>
      </div>
    </div>
  );
}
