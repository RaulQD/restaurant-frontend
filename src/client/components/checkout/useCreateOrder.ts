import { useMutation } from "@tanstack/react-query"
import { createOrder } from "../../../services/apiOrder"
import toast from "react-hot-toast"

export const useCreateOrder = () => {
  const { mutate: createOrders } = useMutation({
    mutationFn: createOrder,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      window.location.href = data.init_point
    }
  })
  return { createOrders }
}