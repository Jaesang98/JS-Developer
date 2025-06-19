import instance from '@/api/axiosInstance';

export const fetchPostLoginJWT = async (email: string, passWord: string) => {
  const response = await instance({
    method: 'POST',
    url: 'member/login',
    data: {
      email: email,
      password: passWord,
    },
  });
  return response.data;
};
