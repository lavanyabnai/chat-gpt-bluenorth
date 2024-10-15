'use client';

import { useState } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { useNewFacility } from '@/features/facilities/hooks/use-new-facility';
import { useGetFacilities } from '@/features/facilities/api/use-get-facilities';
import { useBulkDeleteFacilities } from '@/features/facilities/api/use-bulk-delete-facilities';
import { useBulkCreateFacilities } from '@/features/facilities/api/use-bulk-create-facilities';
import { facilities as facilitySchema } from '@/db/schema';
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

export default function FacilitiesPage() {
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

  const newFacility = useNewFacility();
  const createFacilities = useBulkCreateFacilities();
  const deleteFacilities = useBulkDeleteFacilities();
  const facilitiesQuery = useGetFacilities();
  const facilities = facilitiesQuery.data || [];

  const isDisabled = facilitiesQuery.isLoading || deleteFacilities.isPending;

  const onSubmitImport = async (
    values: (typeof facilitySchema.$inferInsert)[]
  ) => {
    // const accountId = await confirm();

    // if (!accountId) {
    //   return toast.error('Please select an account to continue.');
    // }

    const data = values.map((value) => ({
      ...value
      // accountId: accountId as string
    }));

    createFacilities.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      }
    });
  };

  if (facilitiesQuery.isLoading) {
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
        <CardTitle className="text-xl line-clamp-1">Facility List</CardTitle>
        <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
          <Button
            onClick={newFacility.onOpen}
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
          data={facilities}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);
            deleteFacilities.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
