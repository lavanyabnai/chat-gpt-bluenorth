"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
// import { AccountSwitcher } from "@/app/(inventory)/mail/components/account-switcher"
import { MailDisplay } from "@/app/(inventory)/mail/components/mail-display"
import { MailList } from "@/app/(inventory)/mail/components/mail-list"

import { type Mail, type CogMail } from "@/app/(inventory)/mail/data"
import { useMail } from "@/app/(inventory)/mail/use-mail"
import { Search } from "lucide-react"


interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  allTables: Mail[];
  cogTables: CogMail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  // navCollapsedSize: number;
}

export function Mail({
  // accounts,
  allTables,
  cogTables,
  defaultLayout = [16, 48],
  // navCollapsedSize
}: MailProps) {
  // const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
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
      >
        {/* <ResizablePanel
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
     
        </ResizablePanel>
        <ResizableHandle withHandle /> */}
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={16}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 h-[59px] border-b">
              <h1  className="text-xl font-bold">Tables</h1>
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
            {/* <Separator className="ml-2" /> */}
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
              <MailList items={cogTables} />
             
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30} className="w-100">
          <MailDisplay
            mail={allTables.find((item) => item.id === mail.selected) || 
                  cogTables.find((item) => item.id === mail.selected) || 
                  { id: '', name: '', email: '', subject: '', text: '', dataTable: <></>, date: '', read: false, labels: [] }}
            // tblName={allTables.find((item) => item.id === mail.selected)?.name || ''}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
