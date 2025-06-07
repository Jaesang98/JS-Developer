import instance from '@/api/axiosInstance';

export const fetchGetAuthwithDraw = async (userId: string) => {
  const response = await instance({
    method: 'PATCH',
    url: `member/withdraw/${userId}`,
  });
  return response.data;
};
