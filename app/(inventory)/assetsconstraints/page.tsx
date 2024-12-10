'use client';

import { Loader2, Plus } from 'lucide-react';
import { useState } from 'react';

import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { assetsConstraints as assetsconstraintSchema } from '@/db/schema';
import { useBulkCreateAssetsconstraints } from '@/features/assetsconstraints/api/use-bulk-create-assetsconstraints';
import { useBulkDeleteAssetsconstraints } from '@/features/assetsconstraints/api/use-bulk-delete-assetsconstraints';
import { useGetAssetsconstraints } from '@/features/assetsconstraints/api/use-get-assetsconstraints';
import { useNewAssetsconstraint } from '@/features/assetsconstraints/hooks/use-new-assetsconstraint';

import { columns } from './columns';
import { ImportCard } from './import-card';
import { UploadButton } from './upload-button';


enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT'
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {}
};

export default function AssetsconstraintsPage() {
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

  const newAssetsconstraint = useNewAssetsconstraint();
  const createAssetsconstraints = useBulkCreateAssetsconstraints();
  const deleteAssetsconstraints = useBulkDeleteAssetsconstraints();
  const assetsconstraintsQuery = useGetAssetsconstraints();
  const assetsconstraints = assetsconstraintsQuery.data || [];

  const isDisabled = assetsconstraintsQuery.isLoading || deleteAssetsconstraints.isPending;

  const onSubmitImport = async (
    values: (typeof assetsconstraintSchema.$inferInsert)[]
  ) => {
    // const accountId = await confirm();

    // if (!accountId) {
    //   return toast.error('Please select an account to continue.');
    // }

    const data = values.map((value) => ({
      ...value
    }));


    createAssetsconstraints.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      }
    });
  };

  if (assetsconstraintsQuery.isLoading) {
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
      <div className="flex flex-col  px-4 py-2 m-0.5 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="text-xl line-clamp-1">
          Assets Constraints Table
        </CardTitle>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <Button
            onClick={newAssetsconstraint.onOpen}
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
          filterKey="inclusionType"
          columns={columns}
          data={assetsconstraints}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);
            deleteAssetsconstraints.mutate({ ids });
          }}
          disabled={isDisabled}
          placeHolder={'groupId'}
        />
      </div>
    </div>
  );
}
