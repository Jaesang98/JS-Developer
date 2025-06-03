import { useQuery } from '@tanstack/react-query';
import { fetchGetDevxDuplicate } from '@/api/devx/duplicate';

export const useDevxDuplicateQuery = (dictTitle: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['devx', 'duplicate', dictTitle],
    queryFn: () => fetchGetDevxDuplicate(dictTitle),
    retry: 3,
    enabled: false,
    ...queryConfig,
  });
};
