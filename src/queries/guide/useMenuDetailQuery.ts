import { useQuery } from '@tanstack/react-query';
import { fetchGetGuideMenuDetail } from '@/api/guide/menuDetail';

export const useGuideMenuDetailQuery = (parentId: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['guide', 'menuDetail'],
    queryFn: () => fetchGetGuideMenuDetail(parentId),
    retry: 3,
    ...queryConfig,
  });
};
