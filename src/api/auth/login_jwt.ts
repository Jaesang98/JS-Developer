import instance from '@/api/axiosInstance';

export const fetchPostLoginJWT = async (userId: string, passWord: string) => {
  const response = await instance({
    method: 'POST',
    url: 'member/sign-in',
    data: {
      userId: userId,
      passWord: passWord,
    },
  });
  return response.data;
};
