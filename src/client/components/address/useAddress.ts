import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Address } from "../../../types/auth";
import { getUserAddress } from "../../../services/apiAddress";

export const useAddress = () => {
  const {
    data: address,
    isError,
    isLoading,
    error,
  } = useQuery<Address[]>({
    queryKey: ['address'],
    queryFn: getUserAddress,
    placeholderData: keepPreviousData,
    retry: false,
  });
  return { address, isError, isLoading, error };
}