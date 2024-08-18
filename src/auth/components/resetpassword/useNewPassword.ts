import { useMutation } from "@tanstack/react-query"
import { updatePasswordToken } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const useNewPassword = () => {
  const navigate = useNavigate();
  const { mutate: newPassword, isPending } = useMutation({
    mutationFn: updatePasswordToken,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/auth/login');
    },
  });
  return { newPassword, isPending };
}