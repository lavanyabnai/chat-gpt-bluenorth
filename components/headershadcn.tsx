'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu'; // Make sure 
import { cn } from '@/lib/utils'; // Ensure this utility function is correctly 

import { usePathname } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps {
  title: string;
  navigation: { name: string; to: string }[]; // Corrected typing for navigation prop
}

// const dropdown = [
//   {
//     icon: FaMapLocationDot,
//     name: 'Network Optimizer',
//     to: '/network/config',
//     iconForeground: 'text-green-700',
//     iconBackground: 'bg-green-100',
//     description:
//       'Analyze demand forecasts and trends to optimize your supply chain and inventory levels.'
//   },
//   {
//     icon: MdInventory,
//     name: 'Inventory Optimizer',
//     to: '/inventory/dashboard',
//     iconForeground: 'text-rose-500',
//     iconBackground: 'bg-rose-100',
//     description:
//       'Monitor your supply chain operations, including supplier performance and material availability.'
//   },
//   {
//     icon: FaChartLine,
//     name: 'Sales & Operation Planning',
//     to: '/snop/master',
//     iconForeground: 'text-indigo-700',
//     iconBackground: 'bg-indigo-100',
//     description:
//       'Get a comprehensive overview of your dashboard metrics and performance indicators.'
//   },
//   {
//     icon: FaTruck,
//     name: 'Transport Cleansheet',
//     to: '/trans/config',
//     iconForeground: 'text-yellow-600',
//     iconBackground: 'bg-yellow-100',
//     description:
//       'Manage your inventory levels efficiently to meet demand without overstocking.'
//   },
//   {
//     icon: FaPeopleGroup,
//     name: 'Risk Optimizer',
//     to: '/risk/analysis',
//     iconForeground: 'text-orange-700',
//     iconBackground: 'bg-orange-100',
//     description:
//       "Review the balance sheet for a snapshot of the company's financial health at a specific point in time."
//   },
//   {
//     icon: FaLock,
//     name: 'Safety Stock Optimizer',
//     to: '/ss/dc',
//     iconForeground: 'text-lime-700',
//     iconBackground: 'bg-lime-100',
//     description:
//       "Review the balance sheet for a snapshot of the company's financial health at a specific point in time."
//   },
//   {
//     icon: FaDatabase,
//     name: 'Capacity Analytics',
//     to: '/capacity/master',
//     iconForeground: 'text-blue-700',
//     iconBackground: 'bg-blue-100',
//     description:
//       'Gain insights into financial performance, including revenue, expenses, and profitability.'
//   },
//   {
//     icon: GrTree,
//     name: 'Product Flow Analyzer',
//     to: '/product/sim',
//     iconForeground: 'text-sky-600',
//     iconBackground: 'bg-sky-100',
//     description:
//       'Evaluate the effectiveness of sales and marketing campaigns and strategies.'
//   },
//   {
//     icon: FaWarehouse,
//     name: 'Warehouse Optimizer',
//     to: '/warhousing/dc',
//     iconForeground: 'text-violet-700',
//     iconBackground: 'bg-violet-100',
//     description:
//       'Plan and monitor marketing campaigns to enhance brand visibility and lead generation.'
//   }
// ];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

// function UserOrLogin() {
//   // const user = useUser();
//   return (
//     <div className="flex items-center ">
//       {/* Uncomment or add user-related functionality */}
//     </div>
//   );
// }

export default function Header({ title, navigation }: HeaderProps) {
  const pathname = usePathname();

  return (
    <div className="ml-1">
      <header className="ml-14  sticky top-0 z-50 flex items-center justify-center min-w-fit overflow-hidden h-[60px] shrink-0">
        {/* <div className="flex items-center text-black text-lg ">
    

          <h1 className="ml-4 text-3xl font-semibold text-blue-900">{title}</h1>
        </div> */}

        <nav>
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex items-baseline space-x-4">
                  {navigation?.map((item) => (
                    <Link
                      href={item.to}
                      key={item.name}
                      className={classNames(
                        'rounded-md px-2 py-2 text-sm font-semibold uppercase',
                        pathname === item.to
                          ? 'bg-sky-500 text-white bg-opacity-75 border border-sky-500'
                          : 'text-gray-900 hover:bg-sky-500 hover:text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger className="flex items-center border-none">
              <Button className="text-sm bg-blue-900 text-white">
                Supply Chain Modules
              </Button>
            </MenubarTrigger>
            <MenubarContent>
              <div className="grid grid-cols-3 w-[700px] gap-2">
                {dropdown.map((item) => (
                  <MenubarItem key={item.name}>
                    <Link href={item.to}>
                      <div className="rounded-lg hover:bg-gradient-to-t hover:from-indigo-400 hover:via-cyan-400 hover:to-sky-500 p-0.5">
                        <div className="flex items-center w-full justify-between hover:bg-sky-50 rounded-lg text-2xl text-blue-900 font-bold">
                          <div className="flex items-center p-4">
                            <span
                              className={classNames(
                                item.iconBackground,
                                item.iconForeground,
                                'inline-flex rounded-lg p-2'
                              )}
                            >
                              <item.icon
                                className="h-8 w-8 flex-none rounded-lg"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="ml-4 text-base font-semibold text-gray-900">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </MenubarItem>
                ))}
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}
  
      </header>
    </div>
  );
}
