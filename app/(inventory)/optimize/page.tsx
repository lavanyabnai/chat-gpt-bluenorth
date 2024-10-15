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

import { CoGSettingsForm } from './cog-settings-form';
import { NewCoGSettingsSheet } from './new-cog-settings-sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MailProps {
  accounts: {
    label: string;
    email: string;
  }[];
  allTables: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function Optimize({
  allTables,
  defaultLayout = [16, 48],
}: MailProps) {

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[1020px] items-stretch bg-white"
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={16}>
          <ScrollArea className="h-screen">
            <div className="p-4">
              <NewCoGSettingsSheet />
            </div>
          </ScrollArea>
          {/* <Tabs defaultValue="all">
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
          </Tabs> */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex flex-1 flex-col">dataTable</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
