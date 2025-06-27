import instance from '@/api/axiosInstance';

export const fetchGetGuideMenuAll = async () => {
  const response = await instance({
    method: 'GET',
    url: 'guide/menuAll',
  });
  return response.data;
};
