import instance from '@/api/axiosInstance';

export const fetchPostSignUpJWT = async (userId: string, passWord: string) => {
  const response = await instance({
    method: 'POST',
    url: 'member/sign-up',
    data: {
      userId: userId,
      passWord: passWord,
    },
  });
  return response.data;
};
