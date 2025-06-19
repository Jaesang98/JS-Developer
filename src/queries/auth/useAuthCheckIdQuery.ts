import { useQuery } from '@tanstack/react-query';
import { fetchGetAuthCheckId } from '@/api/auth/checkId';

export const useAuthCheckIdQuery = (email: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['auth', 'checkId'],
    queryFn: () => fetchGetAuthCheckId(email),
    retry: false,
    enabled: false,
    ...queryConfig,
  });
};
