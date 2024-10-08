import { cookies } from 'next/headers';

import { Mail } from '@/app/(chat)/risk/analysis/pageaggrid';
import { accounts, allTables } from '@/app/(chat)/risk/analysis/data';


export default function Page() {
  const layout = cookies().get('react-resizable-panels:layout:mail');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div>
      <Mail
        accounts={accounts}
        allTables={allTables}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        cogTables={[]}
      />
    </div>
  );
}