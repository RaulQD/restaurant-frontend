import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/apiCategory';
import { useSearchParams } from 'react-router-dom';

export default function SortBy({ sortByCategory }: { sortByCategory: string }) {
  // useSearchParams es un custom hook que retorna los parametros de busqueda actuales y una función para actualizarlos
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtenemos el valor actual del filtro de categoría
  const currentFilter = searchParams.get(sortByCategory) || '';

  // Función para actualizar el filtro de categoria en la URL
  // el searchParams.set() actualizar el valor del filtro en la url en este caso el valor de la categoria
  //luego verificamos si hay una pagina en la url y si la hay la seteamos a 1
  const handleFilterChange = (value: string) => {
      searchParams.set(sortByCategory, value);
      if (searchParams.get('page')) searchParams.set('page', '1');
      setSearchParams(searchParams);
  };
  //useQuery es un hook que se utiliza para hacer peticiones a la API
  // en este caso se hace una petición a la API para obtener las categorias
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
    return (
        <div className=''>
            <select
                name='category'
                id='category'
                className=' py-2 px-4 focus:outline-none bg-[#f9f9f9] rounded-lg text-sm w-full'
                value={currentFilter!}
                onChange={(e) => handleFilterChange(e.target.value)}>
                <option value='todos'>Todos</option>
                {categories &&
                    categories?.map((category) => (
                        <option
                            key={category.id}
                            value={category.name}
                            className='text-sm'>
                            {category.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}
