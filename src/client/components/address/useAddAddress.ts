import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateAddress } from "../../../services/apiAddress"
import toast from "react-hot-toast"


export const useAddAddress = () => {
  const queryClient = useQueryClient()
  const { mutate: update, isPending } = useMutation({
    mutationFn: updateAddress,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['address'] })
      toast.success(data.message)
    },
  })
  return { update, isPending }
}