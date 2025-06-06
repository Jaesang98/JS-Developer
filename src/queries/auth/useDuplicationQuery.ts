import { useQuery } from '@tanstack/react-query';
import { fetchGetAuthDuplicate } from '@/api/auth/duplicate';

export const useAuthDuplicateQuery = (userId: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['auth', 'duplicate'],
    queryFn: () => fetchGetAuthDuplicate(userId),
    retry: false,
    enabled: false,
    ...queryConfig,
  });
};
