import { useNavigate } from 'react-router-dom';
import FilterInput from './FilterInput';
import SortBy from './SortBy';

export default function Filter() {
    const navigate = useNavigate();
    const redirectTo = () => {
        navigate('/admin/dashboard/dishes/add');
    };
    return (
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-5 py-5 px-8 bg-white shadow-md rounded-lg'>
            <FilterInput filterField='keyword' />
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                <SortBy sortByCategory='category' />
                <button
                    type='button'
                    className='text-white font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full md:w-auto'
                    onClick={() => redirectTo()}>
                    Agregar Producto
                </button>
            </div>
        </div>
    );
}
