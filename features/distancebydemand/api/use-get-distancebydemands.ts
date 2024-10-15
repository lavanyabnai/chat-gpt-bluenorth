import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetdistancebydemands = () => {
  const query = useQuery({
    queryKey: ["distancebydemands"],
    queryFn: async () => {
      const response = await client.api.distancebydemands.$get();
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
