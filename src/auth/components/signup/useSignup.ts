import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/auth/login");
    },
  });
  return { signup, isPending };
}