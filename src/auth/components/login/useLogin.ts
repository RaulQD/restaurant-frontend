import { QueryClient, useMutation } from "@tanstack/react-query"
import { authenticateUser } from "../../../services/apiAuth"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem('AUTHENTICATION', JSON.stringify({
          token: data.token,
        }));
      }
      //  permite actualizar manualmente los datos almacenados en la cache para una consulta específica.
      queryClient.setQueryData(['user'], data);
      const roles = data?.rol || [];
      const isAdmin = roles.some(
        (role: { name: string }) => role.name === 'ADMIN_ROLE'
      );
      if (isAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
  });
  return { login, isPending };
}