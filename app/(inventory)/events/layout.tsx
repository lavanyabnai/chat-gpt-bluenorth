// import { Header } from '@/components/header-net';
import { Providers } from '@/components/providers';
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
// import { SidebarDesktop } from '@/components/sidebar-desktop-snop';

// import SidebarDemo from '@/components/snop/SidebarDemo';


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
    <div className="min-h-screen flex flex-col">
    
        <div className="flex h-screen ">
          {/* <SidebarDesktop sidebarMenu={eventsmenus} /> */}
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            {children}
          </div>
        </div>
    
    </div>
  );
}
