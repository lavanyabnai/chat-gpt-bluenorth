'use client';

import { Loader2, Plus } from 'lucide-react';
import { useState } from 'react';

import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { UploadButton } from '@/components/upload-button';
import { linearRanges as linearrangeSchema } from '@/db/schema';
import { useBulkCreateLinearranges } from '@/features/linearranges/api/use-bulk-create-linearranges';
import { useBulkDeleteLinearranges } from '@/features/linearranges/api/use-bulk-delete-linearranges';
import { useGetLinearranges } from '@/features/linearranges/api/use-get-linearranges';
import { useNewLinearrange } from '@/features/linearranges/hooks/use-new-linearrange';


import { columns } from './columns';
import { ImportCard } from './import-card';

enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT'
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {}
};

export default function LinearrangesPage() {
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

  const newLinearrange = useNewLinearrange();
  const createLinearranges = useBulkCreateLinearranges();
  const deleteLinearranges = useBulkDeleteLinearranges();
  const linearrangesQuery = useGetLinearranges();
  const linearranges = linearrangesQuery.data || [];
  

  const isDisabled = linearrangesQuery.isLoading || deleteLinearranges.isPending;

  const onSubmitImport = async (
    values: (typeof linearrangeSchema.$inferInsert)[]
  ) => {
    const data = values.map((value) => ({
      ...value
    }));
    createLinearranges.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      }
    });
  };

  if (linearrangesQuery.isLoading) {
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
        <CardTitle className="text-xl line-clamp-1">Linearrange List</CardTitle>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <Button
            onClick={newLinearrange.onOpen}
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
          placeholder="Search by name"
          columns={columns}
          data={linearranges}
          onDelete={(row) => {
            const ids = row.map((r: any) => r.original.id);
            deleteLinearranges.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
