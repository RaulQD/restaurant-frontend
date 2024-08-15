import { useQuery } from "@tanstack/react-query"
import { currentUser } from "../services/apiUser"



export const useUser = () => {
  const { data: user, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: currentUser,
    retry: false,
    refetchOnWindowFocus: false
  })
  const roles = user?.roles || [];

  // VERIFICAR SI EL USUARIO ES ADMINISTRADOR O CLIENTE
  const isAdmin = roles.some(role => role.name === 'ADMIN_ROLE');
  const isUser = roles.some(role => role.name === 'USER_ROLE');

  return { user, isError, isLoading, isAdmin, isUser };
}