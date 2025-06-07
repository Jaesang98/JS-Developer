import instance from '@/api/axiosInstance';

export const fetchGetGuideMenu = async () => {
  const response = await instance({
    method: 'GET',
    url: 'guide/menu',
  });
  return response.data;
};
