'use client';

import { useState } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { useNewGroup } from '@/features/groups/hooks/use-new-group';
import { useGetGroups } from '@/features/groups/api/use-get-groups';
import { useBulkDeleteGroups } from '@/features/groups/api/use-bulk-delete-groups';
import { useBulkCreateGroups } from '@/features/groups/api/use-bulk-create-groups';

// import { useSelectAccount } from '@/features/accounts/hooks/use-select-account';

import { groups as groupSchema } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { columns } from './columns';
import { ImportCard } from './import-card';
import { UploadButton } from '@/components/upload-button';
import { Separator } from '@/components/ui/separator';

enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT'
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {}
};

export default function GroupsPage() {
  // const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);

  const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    setImportResults(results);
    setVariant(VARIANTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };

  const newGroup = useNewGroup();
  const createGroups = useBulkCreateGroups();
  const deleteGroups = useBulkDeleteGroups();
  const groupsQuery = useGetGroups();
  const groups = groupsQuery.data || [];

  const isDisabled = groupsQuery.isLoading || deleteGroups.isPending;

  const onSubmitImport = async (
    values: (typeof groupSchema.$inferInsert)[]
  ) => {
    // const accountId = await confirm();

    // if (!accountId) {
    //   return toast.error('Please select an account to continue.');
    // }

    const data = values.map((value) => ({
      ...value
      // accountId: accountId as string
    }));

    createGroups.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      }
    });
  };

  if (groupsQuery.isLoading) {
    return (
      <div className="max-w-screen-6xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === VARIANTS.IMPORT) {
    return (
      <>
        {/* <AccountDialog /> */}
        <ImportCard
          data={importResults.data}
          onCancel={onCancelImport}
          onSubmit={onSubmitImport}
        />
      </>
    );
  }

  return (
    <div className="max-w-screen-6xl mx-auto w-full">
      <div className="flex flex-col px-4 py-2 m-0.5 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="text-xl line-clamp-1">Groups List</CardTitle>
        <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
          <Button
            onClick={newGroup.onOpen}
            size="sm"
            className="w-full lg:w-auto"
          >
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
          <UploadButton onUpload={onUpload} />
        </div>
      </div>
      <Separator />
      <div className="px-4">
        <DataTable
          filterKey="name"
          columns={columns}
          data={groups}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);
            deleteGroups.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
