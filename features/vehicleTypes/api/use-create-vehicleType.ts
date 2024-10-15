import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.vehicleTypes.$post>;
type RequestType = InferRequestType<typeof client.api.vehicleTypes.$post>["json"];

export const useCreatevehicleType = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log('json', json);
      const response = await client.api.vehicleTypes.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("vehicleType created");
      queryClient.invalidateQueries({ queryKey: ["vehicleTypes"] });
    },
    onError: () => {
      toast.error("Failed to create vehicleType");
    },
  });

  return mutation;
};
