import instance from '@/api/axiosInstance';

export const fetchGetDevxDetail = async (dictId: string) => {
  const response = await instance({
    method: 'GET',
    url: 'dict/dictDetail',
    params: {
      dictId: dictId,
    },
  });
  return response.data;
};
