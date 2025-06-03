import instance from '@/api/axiosInstance';

export const fetchGetDevxDuplicate = async (dictTitle: string) => {
  const response = await instance({
    method: 'GET',
    url: 'duplicate',
    params: {
      dictTitle: dictTitle,
    },
  });
  return response.data;
};
