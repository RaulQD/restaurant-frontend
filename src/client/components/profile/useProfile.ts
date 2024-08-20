import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { updateProfile } from "../../../services/apiProfile";


export const useProfile = () => {
  const queryClient = useQueryClient();
  const { mutate: profile, isPending } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success(data.message);
    },
  });
  return { profile, isPending };
}