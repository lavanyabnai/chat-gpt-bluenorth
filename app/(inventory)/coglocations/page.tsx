'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useGetcoglocations } from '@/features/coglocations/api/use-get-coglocations';

// import { useSelectAccount } from '@/features/accounts/hooks/use-select-account';

// import { cogNewLocations   } from '@/db/schema';

import { DataTable } from '@/components/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { columns } from './columns';
import { Separator } from '@/components/ui/separator';
import { Row } from '@tanstack/react-table';

enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT'
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {}
};

export default function CogLocationsPage() {
  // const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);


  // const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    
  //   setImportResults(results);
  //   setVariant(VARIANTS.IMPORT);
  // };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };

  const coglocationQuery = useGetcoglocations();

  const isDisabled = coglocationQuery.isLoading;

  // const onSubmitImport = async (
  //   values: (typeof cogNewLocations.$inferInsert)[]
  // ) => {
  //   // const accountId = await confirm();

  //   // if (!accountId) {
  //   //   return toast.error('Please select an account to continue.');
  //   // }

    // const data = values.map((value) => ({
    //   ...value
    //   // accountId: accountId as string
    // }));
    

    //   createcoglocation.mutate(data, {
    //     onSuccess: () => {
    //       onCancelImport();
    //     }
    //   });
    // };

    if (coglocationQuery.isLoading) {
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
          {/* <ImportCard
            data={importResults.data}
            onCancel={onCancelImport}
            onSubmit={onSubmitImport}
          /> */}
        </>
      );
    }

    return (
      <div className="max-w-screen-6xl mx-auto w-full">
        <div className="flex flex-col px-4 py-2 m-0.5 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            cog Location List
          </CardTitle>
          {/* <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
          <Button
              onClick={newLocation.onOpen}
            size="sm"
            className="w-full lg:w-auto"
          >
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
          <UploadButton onUpload={onUpload} />
        </div> */}
        </div>
        <Separator />
        <div className="px-4">
          <DataTable
            filterKey="name"
            columns={columns}
            data={coglocationQuery.data}
            onDelete={(rows) => {
              const ids = rows.map((row) => row.original.id);
            }}
            //   }}
            disabled={isDisabled}
          />
        </div>
        </div>
    
  );
}
