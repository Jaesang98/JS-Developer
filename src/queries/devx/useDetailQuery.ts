import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxDetail } from '@/api/devx/detail';

export const useDevxDetailQuery = (dictId: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['devx', 'detail', dictId],
    queryFn: () => fetchGetDevxDetail(dictId),
    retry: 3,
    enabled: !!dictId,
    ...queryConfig,
  });
};
