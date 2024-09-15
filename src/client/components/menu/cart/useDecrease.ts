import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decreaseQuantity } from "../../../../services/apiCart";
import toast from "react-hot-toast";


export const useDecrease = () => {
  const queryClient = useQueryClient();
  const { mutate: decreaseQty, isPending: isPendingDecrease } = useMutation({
    mutationFn: decreaseQuantity,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success(data.message);
    },
  });
  return { decreaseQty, isPendingDecrease };
}