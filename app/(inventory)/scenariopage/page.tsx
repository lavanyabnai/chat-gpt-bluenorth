'use client';

import * as React from 'react';
import {
  Archive,
  ArchiveX,
  File,
  Inbox,
  Search,
  Send,
  Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
// import { AccountSwitcher } from "@/app/(inventory)/mail/components/account-switcher"
import { MailDisplay } from '@/app/(inventory)/mail/components/mail-display';
import { MailList } from '@/app/(inventory)/mail/components/mail-list';
import { Nav } from '@/app/(inventory)/mail/components/nav';
import { type Mail } from '@/app/(inventory)/mail/data';
import { useMail } from '@/app/(inventory)/mail/use-mail';

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  allTables: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function ScenarioPage({
  // accounts,
  allTables,
  defaultLayout = [2, 16, 48],
  defaultCollapsed = true,
  navCollapsedSize
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [mail] = useMail();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[1020px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={2}
          maxSize={4}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            isCollapsed &&
              'min-w-[20px] transition-all duration-300 ease-in-out'
          )}
        >
          {/* <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div> */}
          {/* <Separator /> */}
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Dashboard',
                label: '128',
                icon: Inbox,
                variant: 'default',
                href: '/inventory/mail/inbox'
              },
              {
                title: 'Drafts',
                label: '9',
                icon: File,
                variant: 'ghost',
                href: '/inventory/mail/drafts'
              },
              {
                title: 'Sent',
                label: '',
                icon: Send,
                variant: 'ghost',
                href: '/inventory/mail/sent'
              },
              {
                title: 'Junk',
                label: '23',
                icon: ArchiveX,
                variant: 'ghost',
                href: '/inventory/mail/junk'
              },
              {
                title: 'Trash',
                label: '',
                icon: Trash2,
                variant: 'ghost',
                href: '/inventory/mail/trash'
              },
              {
                title: 'Archive',
                label: '',
                icon: Archive,
                variant: 'ghost',
                href: '/inventory/mail/archive'
              }
            ]}
          />
          {/* <Separator /> */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={16}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Tables</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="net"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  NET
                </TabsTrigger>
                <TabsTrigger
                  value="sim"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  SIM
                </TabsTrigger>
                <TabsTrigger
                  value="cog"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  COG
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList items={allTables} />
            </TabsContent>
            <TabsContent value="COG" className="m-0">
              <MailList
                items={allTables.filter(
                  (item) =>
                    !item.read &&
                    !['COG', 'NET', 'sim'].some((label) =>
                      item.labels.includes(label.toLowerCase())
                    )
                )}
              />
            </TabsContent>
            <TabsContent value="sim" className="m-0">
              <MailList
                items={allTables.filter(
                  (item) =>
                    !item.read &&
                    !['COG', 'NET', 'sim'].includes(
                      item.labels.join(',').toLowerCase()
                    )
                )}
              />
            </TabsContent>
            <TabsContent value="cog" className="m-0">
              <MailList
                items={allTables.filter(
                  (item) =>
                    !item.read &&
                    !['COG', 'NET', 'sim'].includes(
                      item.labels.join(',').toLowerCase()
                    )
                )}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay
            mail={allTables.find((item) => item.id === mail.selected) || null}
            // tblName={allTables.find((item) => item.id === mail.selected)?.name || ''}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
