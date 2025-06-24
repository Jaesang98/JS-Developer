import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxDetail } from '@/api/devx/detail';

export const useDevxDetailQuery = (id: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['dictionary', 'detail', id],
    queryFn: () => fetchGetDevxDetail(id),
    retry: 3,
    enabled: !!id,
    ...queryConfig,
  });
};
