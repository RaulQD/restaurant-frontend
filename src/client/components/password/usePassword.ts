import toast from "react-hot-toast";
import { changePassword } from "../../../services/apiProfile";
import { useMutation } from "@tanstack/react-query";


export const usePassword = () => {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: changePassword,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
  return { updatePassword, isPending }
}