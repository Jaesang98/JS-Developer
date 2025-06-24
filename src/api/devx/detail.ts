import instance from '@/api/axiosInstance';

export const fetchGetDevxDetail = async (id: string) => {
  const response = await instance({
    method: 'GET',
    url: 'dictionary/detail',
    params: {
      id: id,
    },
  });
  return response.data;
};
