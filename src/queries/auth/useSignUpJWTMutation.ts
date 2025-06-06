import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostSignUpJWT } from '@/api/auth/signUp_jwt';

export const useSignUpJWTMutation = () => {
  const queryClient = useQueryClient();

  const SignUpJWTMutation = useMutation({
    mutationFn: ({ userId, passWord }: { userId: string; passWord: string }) => fetchPostSignUpJWT(userId, passWord),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'signUp', 'jwt'] });
    },
  });
  return SignUpJWTMutation;
};
