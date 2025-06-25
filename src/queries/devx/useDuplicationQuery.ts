import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxDuplicate } from '@/api/devx/duplicate';

export const useDevxDuplicateQuery = (title: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['devx', 'duplicate', title],
    queryFn: () => fetchGetDevxDuplicate(title),
    retry: 3,
    enabled: false,
    ...queryConfig,
  });
};
