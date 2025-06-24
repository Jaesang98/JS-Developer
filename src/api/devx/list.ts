import instance from '@/api/axiosInstance';

export const fetchGetDevxList = async (searchInput: string) => {
  const response = await instance({
    method: 'GET',
    url: 'dictionary/list',
    params: {
      search: searchInput,
    },
  });
  return response.data;
};
