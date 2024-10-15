import { toast } from "sonner";
import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.periods[":id"]["$delete"]>;

export const useDeletePeriod = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      const response = await client.api.periods[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Period deleted");
      queryClient.invalidateQueries({ queryKey: ["period", { id }] });
      queryClient.invalidateQueries({ queryKey: ["periods"] });
    },
    onError: () => {
      toast.error("Failed to delete period");
    },
  });

  return mutation;
};
