import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { deleteAddress } from "../../../services/apiAddress";


export const useDeleteAddress = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteAddress,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['address'] });
      toast.success(data.message);
    },
  });
  return { mutate }
}