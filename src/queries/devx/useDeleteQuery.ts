import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostDeleteDevx } from '@/api/devx/delete';

export const useDevxDeleteMutation = () => {
  const queryClient = useQueryClient();

  const AddDevxMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => fetchPostDeleteDevx(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['dictionary', 'delete'] });
    },
  });
  return AddDevxMutation;
};
