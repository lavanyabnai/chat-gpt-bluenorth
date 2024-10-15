'use client';

import { useState } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { useNewPeriod } from '@/features/periods/hooks/use-new-period';
import { useGetPeriods } from '@/features/periods/api/use-get-periods';
import { useBulkDeletePeriods } from '@/features/periods/api/use-bulk-delete-periods';
import { useBulkCreatePeriods } from '@/features/periods/api/use-bulk-create-periods';

// import { useSelectAccount } from '@/features/accounts/hooks/use-select-account';

import { periods as periodSchema } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { columns } from './columns';
import { ImportCard } from './import-card';
import { UploadButton } from './upload-button';
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

export default function PeriodsPage() {
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

  const newPeriod = useNewPeriod();
  const createPeriods = useBulkCreatePeriods();
  const deletePeriods = useBulkDeletePeriods();
  const periodsQuery = useGetPeriods();
  const periods = periodsQuery.data || [];

  const isDisabled = periodsQuery.isLoading || deletePeriods.isPending;

  const onSubmitImport = async (
    values: (typeof periodSchema.$inferInsert)[]
  ) => {
    // const accountId = await confirm();

    // if (!accountId) {
    //   return toast.error('Please select an account to continue.');
    // }

    const data = values.map((value) => ({
      ...value
      // accountId: accountId as string
    }));

    createPeriods.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      }
    });
  };

  if (periodsQuery.isLoading) {
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
        <CardTitle className="text-xl line-clamp-1">Period List</CardTitle>
        <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
          <Button
             onClick={newPeriod.onOpen}
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
          filterKey="customerId"
          columns={columns}
          data={periods}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);
            deletePeriods.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
