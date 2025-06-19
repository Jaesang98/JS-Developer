import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostLoginJWT } from '@/api/auth/login_jwt';

export const useLoginJWTMutation = () => {
  const queryClient = useQueryClient();

  const LoginJWTMutation = useMutation({
    mutationFn: ({ email, passWord }: { email: string; passWord: string }) => fetchPostLoginJWT(email, passWord),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'login', 'jwt'] });
    },
  });
  return LoginJWTMutation;
};
