import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';
import { convertAmountFromMiliunits } from '@/lib/utils';

export const useGetTransactions = () => {
  const params = useSearchParams();
  // const from = params.get('from') || '';
  // const to = params.get('to') || '';
  // const accountId = params.get('accountId') || '';
  // console.log('use get transactions', { from, to, accountId });
  const query = useQuery({
    // queryKey: ['transactions', { from, to, accountId }],
    queryKey: ['transactions'],
    queryFn: async () => {
      const response = await fetch('/api/transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // queryFn: async () => {
      // const response = await client.api.transactions.$get();
      // {
      //   query: {
      //     from,
      //     to,
      //     accountId
      //   }
      // });

      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }

      const { data } = await response.json();
      // console.log('use get transactions data', data);
      return data.map((transaction) => ({
        ...transaction,
        amount: convertAmountFromMiliunits(transaction.amount)
      }));
    }
  });

  return query;
};
