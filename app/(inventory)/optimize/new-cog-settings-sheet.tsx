import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { CoGSettingsForm } from './cog-settings-form';
// import { useNewLocation } from '@/features/locations/hooks/use-new-location';
import { useCreateLocation } from '@/features/locations/api/use-create-location';
import { useGetLocations } from '@/features/locations/api/use-get-locations';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Assuming you have a schema for location, replace this with the actual schema
const locationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  code: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  address: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  autofillCoordinates: z.boolean().default(true)
});

type FormValues = z.infer<typeof locationSchema>;

export const NewCoGSettingsSheet = () => {
  // const { isOpen, onClose } = useNewLocation();

  const createMutation = useCreateLocation();

  // Placeholder for useLocation hook
  const locationQuery = useGetLocations();
  const locationMutation = { isPending: false }; // Replace with actual mutation
  // const onCreateLocation = (name: string) => {
  //   // Implement location creation logic
  // };

  const isPending = createMutation.isPending || locationMutation.isPending;
  const isLoading = locationQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        // onClose();
      }
    });
  };

  return (
    <div className="space-y-4 bg-white">
      <h1 className="text-xl font-bold">Optimizer Settings</h1>
      <p>Run CoG Optimizer</p>

      <CoGSettingsForm onSubmit={onSubmit} disabled={isPending} />
    </div>
  );
};
