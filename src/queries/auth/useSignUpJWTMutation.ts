import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostSignUpJWT } from '@/api/auth/register_jwt';

interface RegisterProps {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export const useSignUpJWTMutation = () => {
  const queryClient = useQueryClient();

  const SignUpJWTMutation = useMutation({
    mutationFn: ({ email, name, phone, password }: RegisterProps) => fetchPostSignUpJWT(email, name, phone, password),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'login', 'jwt'] });
    },
  });
  return SignUpJWTMutation;
};
