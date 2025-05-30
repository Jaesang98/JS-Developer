import instance from '@/api/axiosInstance';

export const fetchGetDevxList = async () => {
  const response = await instance({
    method: 'GET',
    url: 'dictList',
  });
  return response.data;
};
