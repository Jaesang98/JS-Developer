import instance from '@/api/axiosInstance';

export const fetchGetGuideMenu = async (parentId: string) => {
  const response = await instance({
    method: 'GET',
    url: 'guide/menu',
    params: {
      parentId: parentId,
    },
  });
  return response.data;
};
