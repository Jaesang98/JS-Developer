import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxList } from '@/api/devx/list';

export const useDevxListQuery = (searchInput: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['dictionary', 'list'],
    queryFn: () => fetchGetDevxList(searchInput),
    retry: 3,
    ...queryConfig,
  });
};
