import { useMutation, useQueryClient } from "@tanstack/react-query";
import { increaseQuantity } from "../../../services/apiCart";
import toast from "react-hot-toast";


export const useIncrease = () => {
  const queryClient = useQueryClient();
  const { mutate: increaseQty, isPending } = useMutation({
    mutationFn: increaseQuantity,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Se actualizó la cantidad del producto');
    },
  });
  return { increaseQty, isPending };
}