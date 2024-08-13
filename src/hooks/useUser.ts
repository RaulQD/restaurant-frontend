import { useQuery } from "@tanstack/react-query"
import { currentUser } from "../services/apiUser"



export const useUser = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: currentUser,
    retry: false,
    refetchOnWindowFocus: false
  })
  return { data, isError, isLoading }
}