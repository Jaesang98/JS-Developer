import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostUpdateDevx } from '@/api/devx/update';

export const useDevxUpdateMutation = () => {
  const queryClient = useQueryClient();

  const UpdateDevxMutation = useMutation({
    mutationFn: ({
      dictId,
      dictTitle,
      dictDescription,
    }: {
      dictId: string;
      dictTitle: string;
      dictDescription: string;
    }) => fetchPostUpdateDevx(dictId, dictTitle, dictDescription),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['devx', 'update'] });
    },
  });
  return UpdateDevxMutation;
};
