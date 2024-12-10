import { useQuery } from '@tanstack/react-query';

import { client } from '@/lib/hono';

export const useGetProductFlows = () => {
  const query = useQuery({
    queryKey: ['productflows'],
    queryFn: async () => {
      const response = await client.api.productflows.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch productflows');
      }

      const { data } = await response.json();

      return data;
    }
  });

  return query;
};
