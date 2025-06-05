import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostLoginJWT } from '@/api/auth/login_jwt';

export const useLoginJWTMutation = () => {
  const queryClient = useQueryClient();

  const LoginJWTMutation = useMutation({
    mutationFn: ({ userId, passWord }: { userId: string; passWord: string }) => fetchPostLoginJWT(userId, passWord),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'login', 'jwt'] });
    },
  });
  return LoginJWTMutation;
};
