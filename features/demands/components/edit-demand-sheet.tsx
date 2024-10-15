import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { useGetDemand } from '@/features/demands/api/use-get-demand';
import { useOpenDemand } from '@/features/demands/hooks/use-open-demand';
import { useEditDemand } from '@/features/demands/api/use-edit-demand';
import { useDeleteDemand } from '@/features/demands/api/use-delete-demand';
import { DemandForm } from '@/features/demands/components/demand-form';

// import { useGetLocations } from '@/features/locations/api/use-get-locations';
import { useGetCustomers } from '@/features/customers/api/use-get-customers';
import { useGetProducts } from '@/features/products/api/use-get-products';
import { useGetPeriods } from '@/features/periods/api/use-get-periods';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual demand schema from your schema file

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';

const demandSchema = z.object({
  customerId: z.number().int().positive(),
  productId: z.number().int().positive(),
  demandType: z.string(),
  parameters: z.record(z.any()),
  timePeriodId: z.number().int().positive(),
  // revenue: z.float().optional(),
  // downPenalty: z.number().optional(),
  // upPenalty: z.number().optional(),
  currency: z.string().optional(),
  // expectedLeadTime: z.number().optional(),
  // timeUnit: z.string().optional(),
  // minSplitRatio: z.number().optional(),
  // backorderPolicy: z.string().optional(),
  inclusionType: z.enum(['Include', 'Exclude', 'Consider'])
  // additionalParams: z.record(z.unknown()).optional(),
  // icon: z.string().optional()
});
type FormValues = z.infer<typeof demandSchema>;

export const EditDemandSheet = () => {
  const { isOpen, onClose, id } = useOpenDemand();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this demand.'
  );

  const demandQuery = useGetDemand(id);
  const editMutation = useEditDemand(id);
  const deleteMutation = useDeleteDemand(id);

  // const locationQuery = useGetLocations();
  // const locationOptions = (locationQuery.data ?? []).map((location) => ({
  //   label: location.name,
  //   value: location.id
  // }));

  const customerQuery = useGetCustomers();
  const customerOptions = (customerQuery.data ?? []).map((customer) => ({
    label: customer.name,
    value: customer.id
  }));

  const productQuery = useGetProducts();
  const productOptions = (productQuery.data ?? []).map((product) => ({
    label: product.name,
    value: product.id
  }));

  const timePeriodQuery = useGetPeriods();
  const timePeriodOptions = (timePeriodQuery.data ?? []).map((period) => ({
    label: period.name,
    value: period.id
  }));

  const isPending =
    editMutation.isPending || deleteMutation.isPending || demandQuery.isLoading;

  const isLoading =
    demandQuery.isLoading ||
    customerQuery.isLoading ||
    productQuery.isLoading ||
    timePeriodQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    console.log('edit demand form', values);
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        }
      });
    }
  };

  const defaultValues = demandQuery.data
    ? {
        customerId: demandQuery.data.customerId,
        productId: demandQuery.data.productId,
        demandType: demandQuery.data.demandType as
          | 'Periodic demand'
          | 'Historic demand',
        parameters: demandQuery.data.parameters,
        timePeriodId: demandQuery.data.timePeriodId,
        revenue: demandQuery.data.revenue,
        downPenalty: demandQuery.data.downPenalty,
        upPenalty: demandQuery.data.upPenalty,
        currency: demandQuery.data.currency,
        expectedLeadTime: demandQuery.data.expectedLeadTime,
        timeUnit: demandQuery.data.timeUnit,
        minSplitRatio: demandQuery.data.minSplitRatio,
        backorderPolicy: demandQuery.data.backorderPolicy,
        inclusionType: demandQuery.data.inclusionType as
          | 'Include'
          | 'Exclude'
          | 'Consider'
      }
    : {
        customerId: 0,
        productId: 0,
        demandType: 'Periodic demand',
        parameters: {},
        timePeriodId: 0,
        revenue: 0,
        downPenalty: 0,
        upPenalty: 0,
        currency: '',
        expectedLeadTime: 0,
        timeUnit: '',
        minSplitRatio: 0,
        backorderPolicy: '',
        inclusionType: 'Consider'
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Demand</SheetTitle>
            <SheetDescription>Edit an existing demand</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <DemandForm
              id={Number(id) || undefined}
              defaultValues={defaultValues}
              onSubmit={onSubmit}
              onDelete={onDelete}
              disabled={isPending}
              // locationOptions={locationOptions}
              customerOptions={customerOptions}
              productOptions={productOptions}
              timePeriodOptions={timePeriodOptions}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
