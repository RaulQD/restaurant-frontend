import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { DishesResponseType } from "../types/dishes";
import { getDishes } from "../../../../services/DishesApi";



export const useDishes = (page: number, limit: number,) => {
  const { data, isLoading, isError, error } =
    useQuery<DishesResponseType>({
      queryKey: ['dishes', page, limit],
      queryFn: () => getDishes({ page, limit }),
      placeholderData: keepPreviousData,
    });
  return { data, isLoading, isError, error };
}