import instance from '@/api/axiosInstance';

export const fetchPostAddDevx = async (dictTitle: string, dictDescription: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dict/add',
    data: {
      dictTitle: dictTitle,
      dictDescription: dictDescription,
    },
  });
  return response.data;
};
