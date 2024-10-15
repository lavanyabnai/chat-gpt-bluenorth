// app/(dashboard)/inventory/scenario/page.tsx

'use client'; // Ensure this component is marked as a client component

import { useState } from 'react';
import { columns } from '@/components/snop/scenario/columns';
import { Loader2, Plus } from 'lucide-react';
import { DataTable } from '@/components/snop/scenario/data-table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { UploadButton } from './upload-button';
import { ImportCard } from './import-card';
import taskData from '@/components/snop/scenario/tasks.json';

enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT'
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {}
};


export default function TaskPage() { // Receive initial data as a prop
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);
  // const onSubmitImport = async (
  //   values: (typeof transactionSchema.$inferInsert)[]
  // ) => {
  //   const accountId = await confirm();

  //   if (!accountId) {
  //     return toast.error('Please select an account to continue.');
  //   }

  //   const data = values.map((value) => ({
  //     ...value,
  //     accountId: accountId as string
  //   }));

  //   createTransactions.mutate(data, {
  //     onSuccess: () => {
  //       onCancelImport();
  //     }
  //   });
  // };
  const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    
    setImportResults(results);
    setVariant(VARIANTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };
if (variant === VARIANTS.IMPORT) {
  return (
    <>
      {/* <AccountDialog /> */}
      <ImportCard
        data={importResults.data}
        onCancel={onCancelImport} onSubmit={function (data: any): void {
          throw new Error('Function not implemented.');
        } }        // onSubmit={onSubmitImport}
      />
    </>
  );
}

  return (
    <>
      <div className="bg-white mx-2 shadow-md rounded-b-lg">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Sales & Operations Planning - List of Scenarios
          </h2>

          <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" className="w-full lg:w-auto">
                  <Plus className="size-4 mr-2" />
                  Add new
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <UploadButton onUpload={onUpload} />
          </div>
        </div>
        <div className="m-4 bg-white rounded-lg p-4">
          <DataTable data={taskData} columns={columns} />
        </div>
      </div>
    </>
  );
}
