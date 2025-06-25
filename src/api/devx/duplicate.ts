import instance from '@/api/axiosInstance';

export const fetchGetDevxDuplicate = async (title: string) => {
  const response = await instance({
    method: 'GET',
    url: 'dictionary/check-id',
    params: {
      title: title,
    },
  });
  return response.data;
};
