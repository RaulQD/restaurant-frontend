import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getCategories } from '../services/apiCategory';


export default function FilterButton({ filterField }: { filterField: string }) {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [categoryId, setCategoryId] = useState('');
    const currentFilter = searchParams.get(filterField) || '';
  

    const { data: categories } = useQuery({
        queryKey: ['filterCategoryButton'],
        queryFn: getCategories,
    });
    const handleClick = (name: string) => {
        searchParams.set(filterField, name);
        setSearchParams(searchParams);
    };

    return (
        <ul className=' flex flex-wrap justify-center items-center gap-5'>
            {categories?.map((category) => (
                <li key={category.id}>
                    <button
                        type='button'
                        className={`py-2 px-4 text-sm font-bold font-poppins uppercase rounded shadow-sm transition-colors duration-300 ${
                          currentFilter === category.id
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-black hover:bg-orange-600 hover:text-white'
                        }`}
                        onClick={() => handleClick(category.name)}>
                        {category.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}
