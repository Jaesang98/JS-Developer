import instance from '@/api/axiosInstance';

export const fetchGetAuthDuplicate = async (userId: string) => {
  const response = await instance({
    method: 'GET',
    url: 'member/duplicate',
    params: {
      userId: userId,
    },
  });
  return response.data;
};
