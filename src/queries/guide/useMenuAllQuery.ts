import { useQuery } from '@tanstack/react-query';
import { fetchGetGuideMenuAll } from '@/api/guide/menuAll';

export const useGuideMenuAllQuery = (queryConfig = {}) => {
  return useQuery({
    queryKey: ['guide', 'menuAll'],
    queryFn: () => fetchGetGuideMenuAll(),
    retry: 3,
    ...queryConfig,
  });
};
