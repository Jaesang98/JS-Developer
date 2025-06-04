import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostDeleteDevx } from '@/api/devx/delete';

export const useDevxDeleteMutation = () => {
  const queryClient = useQueryClient();

  const AddDevxMutation = useMutation({
    mutationFn: ({ dictId }: { dictId: string }) => fetchPostDeleteDevx(dictId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devx', 'delete'] });
    },
  });
  return AddDevxMutation;
};
