import instance from '@/api/axiosInstance';

export const fetchPostSignUpJWT = async (email: string, name: string, phone: string, password: string) => {
  const response = await instance({
    method: 'POST',
    url: 'member/register',
    data: {
      email: email,
      name: name,
      phone: phone,
      password: password,
    },
  });
  return response.data;
};
