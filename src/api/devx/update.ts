import instance from '@/api/axiosInstance';

export const fetchPostUpdateDevx = async (dictId: string, dictTitle: string, dictDescription: string) => {
  const response = await instance({
    method: 'POST',
    url: 'dict/update',
    data: {
      dictId: dictId,
      dictTitle: dictTitle,
      dictDescription: dictDescription,
    },
  });
  return response.data;
};
