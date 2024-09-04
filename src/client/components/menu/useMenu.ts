import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getDishesByCategory } from "../../../services/apiDishes";
import { DishesType } from "../../../types/dishes";


export const useMenu = () => {

  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('category');
  const category = !filterValue || filterValue === 'todos' ? null : filterValue;

  const { data: dishes, isLoading, isError, error } = useQuery<DishesType[]>({
    queryKey: ['dishesByCategory', category],
    queryFn: () => getDishesByCategory(category!),
    retry: false,
  })
  return { isLoading, dishes, error, isError };

}