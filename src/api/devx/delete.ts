import instance from '@/api/axiosInstance';

export const fetchPostDeleteDevx = async (dictId: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dict/delete',
    data: {
      dictId: dictId,
    },
  });
  return response.data;
};
