import { cookies } from 'next/headers';

import { Mail } from '@/app/(inventory)/mail/components/mail';
import { accounts, allTables } from '@/app/(inventory)/mail/data';

export default function Page() {
  const layout = cookies().get('react-resizable-panels:layout:mail');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div className="h-full">
        <main className="pl-[56px] mx-auto">
          {' '}
          <Mail
            accounts={accounts}
            allTables={allTables}
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
            cogTables={[]}          
          />
        </main>
      </div>
  );
}