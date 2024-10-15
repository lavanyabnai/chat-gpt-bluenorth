import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetDemandByDistance = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["demandbydistance", { id }],
    queryFn: async () => {
      const response = await client.api.demandbydistances[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch demandbydistance");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
