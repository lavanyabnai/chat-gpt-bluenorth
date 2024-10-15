import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.customers.$post>;
type RequestType = InferRequestType<typeof client.api.customers.$post>["json"];

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.customers.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Customer created");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: () => {
      toast.error("Failed to create customer");
    },
  });

  return mutation;
};
