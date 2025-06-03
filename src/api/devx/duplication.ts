import instance from '@/api/axiosInstance';

export const fetchGetDevxList = async (dictTitle: string) => {
  const response = await instance({
    method: 'GET',
    url: 'dictList',
    params: {
      dictTitle: dictTitle,
    },
  });
  return response.data;
};
