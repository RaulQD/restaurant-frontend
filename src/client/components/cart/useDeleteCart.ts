import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCartItem } from "../../../services/apiCart"
import toast from "react-hot-toast"


export const useDeleteCart = () => { 
  const queryClient = useQueryClient()
  const { mutate: deleteCart } = useMutation({
    mutationFn: deleteCartItem,
    onError: (error) => { 
      toast.error(error.message)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      toast.success(data.message)
    }
  })
  return {deleteCart}

}