import { useQuery } from '@tanstack/react-query';
import { fetchGetGuideList } from '@/api/guide/guide';

export const useGuideListQuery = (menuId: string, queryConfig = {}) => {
  return useQuery({
    queryKey: ['guide', 'list', menuId],
    queryFn: () => fetchGetGuideList(menuId),
    retry: 3,
    enabled: !!menuId,
    ...queryConfig,
  });
};
