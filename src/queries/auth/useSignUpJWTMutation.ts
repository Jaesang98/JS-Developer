import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostSignUpJWT } from '@/api/auth/register_jwt';

export const useSignUpJWTMutation = () => {
  const queryClient = useQueryClient();

  const SignUpJWTMutation = useMutation({
    mutationFn: ({ email, passWord }: { email: string; passWord: string }) => fetchPostSignUpJWT(email, passWord),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'login', 'jwt'] });
    },
  });
  return SignUpJWTMutation;
};
