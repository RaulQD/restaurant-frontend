import { BiChevronRight } from 'react-icons/bi';
import { useLocation, useNavigate} from 'react-router-dom';
import TableProduct from '../../components/dishes/TableProduct';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../services/apiCategory';

export default function ProductsPage() {
    // const [searchParams, setSearchParams]= useSearchParams();
    const [categoryQuery, setCategoryQuery] = useState('');
    const [keywordQuery, setKeywordQuery] = useState('');
    const [pageQuery, setPageQuery] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get('category') || '';
    const keywordName = queryParams.get('keyword') || '';

    useEffect(() => {
        const params = new URLSearchParams();
        if (categoryQuery) params.set('category', categoryQuery);
        if (keywordQuery) params.set('keyword', keywordQuery);
        navigate(`?${params.toString()}`, { replace: true });
    }, [categoryQuery, keywordQuery, navigate]);

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    const redirectTo = () => {
        navigate('/dashboard/products/add');
    };

    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Productos</span>
                </div>
            </div>
            <div className=' px-4 md:px-6 xl:px-8  '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-5 py-5 px-8 bg-white shadow-md rounded-lg'>
                    <div className=''>
                        <input
                            type='text'
                            id='keywordQuery'
                            value={keywordQuery}
                            placeholder='Buscar platos'
                            className='bg-[#F9F9F9]  w-full py-2 px-4 rounded-lg outline-none focus:bg-gray-100 transition-all ease-in-out text-sm'
                            onChange={(e) => setKeywordQuery(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <div className=''>
                            <select
                                name='category'
                                id='category'
                                className=' py-2 px-4 focus:outline-none bg-[#f9f9f9] rounded-lg text-sm w-full'
                                onChange={(e) =>
                                    setCategoryQuery(e.target.value)
                                }>
                                <option value=''>Todos</option>
                                {categories &&
                                    categories?.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.name}
                                            className='text-sm'
                                            onClick={() =>
                                                setCategoryQuery(category.id)
                                            }>
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <button
                            type='button'
                            className='text-white font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full md:w-auto'
                            onClick={() => redirectTo()}>
                            Agregar Producto
                        </button>
                    </div>
                </div>
            </div>

            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <TableProduct category={categoryQuery} keyword={keywordQuery} page={pageQuery} setPageQuery={setPageQuery} />
            </div>
        </>
    );
}
