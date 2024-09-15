import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCart } from "../../../../services/apiCart";
import toast from "react-hot-toast";

export const useCreateCart = () => {
  const queryClient = useQueryClient();
  const { mutate: addToCart } = useMutation({
    mutationFn: createCart,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },
  });
  return { addToCart };
}