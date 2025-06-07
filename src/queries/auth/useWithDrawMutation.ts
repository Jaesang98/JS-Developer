import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchGetAuthwithDraw } from '@/api/auth/withDraw';

export const useWithDrawMutation = () => {
  const queryClient = useQueryClient();

  const WithDrawMutation = useMutation({
    mutationFn: ({ userId }: { userId: string }) => fetchGetAuthwithDraw(userId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth', 'withdraw', 'jwt'] });
    },
  });
  return WithDrawMutation;
};
