import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxList } from '@/api/devx/list';

export const useDevxListQuery = (dictTitle: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['devx', 'list'],
    queryFn: () => fetchGetDevxList(dictTitle),
    retry: 3,
    ...queryConfig,
  });
};
