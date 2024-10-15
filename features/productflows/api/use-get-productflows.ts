import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetProductFlows = () => {
  const query = useQuery({
    queryKey: ["productflows"],
    queryFn: async () => {
      const response = await client.api.productflows.$get();
      // const response = await fetch('/api/distancebydemands', {
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
