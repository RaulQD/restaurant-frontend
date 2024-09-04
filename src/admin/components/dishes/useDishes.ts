import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getDishes } from '../../../services/apiDishes';
import { DishesResponseType } from '../../../types/dishes';


export const useDishes = () => {

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  // filter
  const filterValue = searchParams.get('category');

  // verifica si el valor del filtro es 'todos' o si no hay filtro
  const category = !filterValue || filterValue === '' ? null : filterValue;

  // keyword
  const keywordValue = searchParams.get('keyword') || '';
  // verifica si hay un valor en el campo de busqueda
  const keyword = !keywordValue ? '' : keywordValue;

  // page 
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { data: dishes, isLoading, isError, error } = useQuery<DishesResponseType>({
    queryKey: ['dishes', page, category, keyword],
    queryFn: () => getDishes({ page, category: category!, keyword })
  })

  // PRE FETCH PAGE
  const pageCount = Math.ceil(dishes?.pagination.totalDishes || 0 / 10);

  // PRE FETCH NEXT PAGE
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['dishes', page + 1, category, keyword],
      queryFn: () => getDishes({ page: page + 1, category: category!, keyword })
    });
  }

  // PRE FETCH PREVIOUS PAGE
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['dishes', page - 1, category, keyword],
      queryFn: () => getDishes({ page: page - 1, category: category!, keyword })
    });
  }
  return { isLoading, dishes, error, isError };
}