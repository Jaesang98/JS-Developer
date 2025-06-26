import instance from '@/api/axiosInstance';

export const fetchPostAddDevx = async (id: string, dictTitle: string, dictDescription: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dictionary/save',
    data: {
      id: id,
      dictTitle: dictTitle,
      dictDescription: dictDescription,
    },
  });
  return response.data;
};
