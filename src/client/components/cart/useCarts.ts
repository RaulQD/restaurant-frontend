import { useQuery } from "@tanstack/react-query"
import { getCart } from "../../../services/apiCart"




export const useCarts = (userId: string | undefined) => {

  const { data: cartData, isLoading, isError } = useQuery({
    queryKey: ['cart', userId],
    queryFn: () => getCart(userId as string),
    enabled: !!userId,
  })
  return { cartData, isLoading, isError }
}