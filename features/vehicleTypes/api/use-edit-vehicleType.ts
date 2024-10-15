import { toast } from 'sonner';
import { InferRequestType, InferResponseType } from 'hono';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.vehicleTypes)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.vehicleTypes)[':id']['$patch']
>['json'];

export const useEditvehicleType = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      console.log('jsonEdit', json);
      const response = await client.api.vehicleTypes[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('vehicleTypes updated');
      queryClient.invalidateQueries({ queryKey: ['vehicleType', { id }] });
      queryClient.invalidateQueries({ queryKey: ['vehicleTypes'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit vehicleType');
    }
  });

  return mutation;
};
