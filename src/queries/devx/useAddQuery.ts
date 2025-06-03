import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostAddDevx } from '@/api/devx/add';

export const useAddDevxMutation = () => {
  const queryClient = useQueryClient();

  const AddDevxMutation = useMutation({
    mutationFn: ({ dictTitle, dictDescription }: { dictTitle: string; dictDescription: string }) =>
      fetchPostAddDevx(dictTitle, dictDescription),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devx', 'add'] });
    },
  });
  return AddDevxMutation;
};
