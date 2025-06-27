import { useQuery } from '@tanstack/react-query';
import { fetchGetGuideMenu } from '@/api/guide/menu';

export const useGuideMenuQuery = (parentId: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['guide', 'menu'],
    queryFn: () => fetchGetGuideMenu(parentId),
    retry: 3,
    ...queryConfig,
  });
};
