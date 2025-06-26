import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostAddDevx } from '@/api/devx/add';

export const useDevxAddMutation = () => {
  const queryClient = useQueryClient();

  const AddDevxMutation = useMutation({
    mutationFn: ({ id, dictTitle, dictDescription }: { id: string; dictTitle: string; dictDescription: string }) =>
      fetchPostAddDevx(id, dictTitle, dictDescription),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devx', 'add'] });
    },
  });
  return AddDevxMutation;
};
