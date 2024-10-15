import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetcoglocations = () => {
  const query = useQuery({
    queryKey: ["coglocations"],
    queryFn: async () => {
      const response = await client.api.coglocations.$get();
      // const response = await fetch('/api/coglocations', {
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
