import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Tables from '../components/Tables';

const categoryColumns = [
    { header: 'Nombre', accessor: 'name', className: 'text-gray-500' },
    {
        header: 'Descripción',
        accessor: 'description',
        className: 'hidden lg:table-cell',
    },
    { header: 'Estado', accessor: 'status' },
];
const categoryActions = [
    { to: '/admin/employees/view', label: 'Ver' },
    { to: '/admin/employees/delete', label: 'Eliminar' },
];
export const CategoryPages = () => {
    const navigate = useNavigate();

    const redirectTo = () => {
        navigate('/dashboard/category/add');
    };
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Categorias</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Categorias</span>
                </div>
            </div>
            <div className=' px-4 md:px-6 xl:px-8  '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-5 py-5 px-8 bg-white shadow-md rounded-lg'>
                    <div className=''>
                        <input
                            type='search'
                            name='search'
                            id='search'
                            placeholder='Buscar categorias'
                            className='bg-[#F9F9F9]  w-full py-2 px-4 rounded-lg outline-none focus:bg-gray-100 transition-all ease-in-out text-sm'
                        />
                        {/* <label htmlFor='search' className='absolute right-4 translate-x-1/2'>
                        <BiSearch className='text-lg' />
                    </label> */}
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <button
                            type='button'
                            className='text-white font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full md:w-auto'
                            onClick={() => redirectTo()}>
                            Agregar Categoria
                        </button>
                    </div>
                </div>
            </div>
            <Tables columns={categoryColumns} navAction={categoryActions} />
        </>
    );
};
