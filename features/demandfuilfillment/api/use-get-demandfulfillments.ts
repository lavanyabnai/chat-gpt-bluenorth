import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetDemandFulfillments = () => {
  const query = useQuery({
    queryKey: ["demandfulfillments"],
    queryFn: async () => {
      const response = await client.api.demandfulfillments.$get();
      // const response = await fetch('/api/demandbydistances', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};