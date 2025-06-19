import instance from '@/api/axiosInstance';

export const fetchGetAuthCheckId = async (email: string) => {
  const response = await instance({
    method: 'GET',
    url: 'member/check-id',
    params: {
      email: email,
    },
  });
  return response.data;
};
