import instance from '@/api/axiosInstance';

export const fetchPostAddDevx = async (dictTitle: string, dictDescription: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dictionary/save',
    data: {
      dictTitle: dictTitle,
      dictDescription: dictDescription,
    },
  });
  return response.data;
};
