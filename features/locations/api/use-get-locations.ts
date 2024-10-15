import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetLocations = () => {
  const query = useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      const response = await client.api.locations.$get();
      // const response = await fetch('/api/locations', {
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
