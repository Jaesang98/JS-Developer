import instance from '@/api/axiosInstance';

export const fetchGetGuideMenuDetail = async (parentId: string) => {
  const response = await instance({
    method: 'GET',
    url: 'guide/menuDetail',
    params: {
      parentId: parentId,
    },
  });
  return response.data;
};
