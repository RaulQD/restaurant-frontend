import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getCategories } from '../services/apiCategory';
// import { useEffect } from 'react';

export default function FilterButton({
    filterField,
    onCategoryChange,
}: {
    filterField: string;
    onCategoryChange: (category: string) => void;
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || 'todos';

    const { data: categories } = useQuery({
        queryKey: ['filterCategoryButton'],
        queryFn: getCategories,
    });

    const handleClick = (name: string) => {
        searchParams.set(filterField, name);
        setSearchParams(searchParams);
        onCategoryChange(name);
    };

    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            <ul className=' flex flex-wrap justify-center items-center gap-5'>
                <li>
                    <button
                        type='button'
                        className={`py-2 px-4 text-sm font-bold font-poppins uppercase rounded shadow-sm transition-colors duration-300 ${
                            currentFilter === 'todos'
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-black hover:bg-orange-600 hover:text-white'
                        }`}
                        onClick={() => handleClick('todos')}>
                        Todos
                    </button>
                </li>
                {categories?.map((category) => (
                    <li key={category.id}>
                        <button
                            type='button'
                            className={`py-2 px-4 text-sm font-bold font-poppins uppercase rounded shadow-sm transition-colors duration-300 ${
                                currentFilter === category.name
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-slate-100 text-black hover:bg-orange-600 hover:text-white'
                            }`}
                            onClick={() => handleClick(category.name)}>
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
