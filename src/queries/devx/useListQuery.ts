import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxList } from '@/api/devx/list';

export const useDevxListQuery = (queryConfig = {}) => {
  return useQuery({
    queryKey: ['devx', 'list'],
    queryFn: fetchGetDevxList,
    retry: 3,
    ...queryConfig,
  });
};
