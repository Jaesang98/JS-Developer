import { useQuery } from '@tanstack/react-query';
import { fetchGetGuideMenu } from '@/api/guide/menu';

export const useGuideMenuQuery = (queryConfig = {}) => {
  return useQuery({
    queryKey: ['guide', 'menu'],
    queryFn: () => fetchGetGuideMenu(),
    retry: 3,
    ...queryConfig,
  });
};
