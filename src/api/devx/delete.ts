import instance from '@/api/axiosInstance';

export const fetchPostDeleteDevx = async (id: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dictionary/delete',
    data: {
      id: id,
    },
  });
  return response.data;
};
