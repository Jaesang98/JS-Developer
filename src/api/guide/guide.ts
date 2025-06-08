import instance from '@/api/axiosInstance';

export const fetchGetGuideList = async (menuId: string) => {
  const response = await instance({
    method: 'GET',
    url: 'guide/list',
    params: {
      parentId: menuId,
    },
  });
  return response.data;
};
