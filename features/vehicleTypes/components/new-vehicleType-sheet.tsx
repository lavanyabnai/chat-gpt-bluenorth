import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { VehicleTypeForm } from '@/features/vehicleTypes/components/vehicleType-form';
import { useNewvehicleType } from '@/features/vehicleTypes/hooks/use-new-vehicleType';
import { useCreatevehicleType } from '@/features/vehicleTypes/api/use-create-vehicleType';
import { useGetUnits } from '@/features/units/api/use-get-units';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';

// Assuming you have a schema for vehicleType, replace this with the actual schema
const vehicleTypeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  capacity: z
    .string()
    .transform((val) => (val ? parseFloat(val) : undefined))
    .optional(),
  capacityUnit: z.string().optional(),
  speed: z
    .string()
    .transform((val) => (val ? parseFloat(val) : undefined))
    .optional(),
  speedUnit: z.string().optional()
});

type FormValues = z.infer<typeof vehicleTypeSchema>;

export const NewvehicleTypeSheet = () => {
  const { isOpen, onClose } = useNewvehicleType();

  const createMutation = useCreatevehicleType();

  // Placeholder for usevehicleType hook
  const unitsQuery = useGetUnits();
  const unitsMutation = { isPending: false }; // Replace with actual mutation
  // const onCreatevehicleType = (name: string) => {
  //   // Implement vehicleType creation logic
  // };
  const unitsOptions = (unitsQuery.data ?? []).map((unit) => ({
    label: unit.name,
    value: unit.name
  }));

  const isPending = createMutation.isPending || unitsMutation.isPending;
  const isLoading = unitsQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>New vehicleType</SheetTitle>
          <SheetDescription>Add a new vehicleType</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <VehicleTypeForm
            onSubmit={onSubmit}
            disabled={isPending}
            unitsOptions={unitsOptions}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
