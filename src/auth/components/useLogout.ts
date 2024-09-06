import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  
  const logout = () => {
    queryClient.removeQueries();
    localStorage.removeItem('AUTHENTICATION');
    navigate('/');
  };
  return logout;
}