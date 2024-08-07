import { BiChevronRight, BiDownload } from 'react-icons/bi';
import TableCustomer from './components/TableCustomer';

export default function CustomersPages() {
    const userColumns = [
        { header: 'Nombre', accessor: 'name', className: 'text-gray-500' },
        {
            header: 'Email',
            accessor: 'email',
            className: 'hidden sm:table-cell',
        },
        { header: 'Rol', accessor: 'role', className: 'hidden md:table-cell' },
        { header: 'Estado', accessor: 'status' },
    ];
    const customerActions = [
        { to: '/admin/employees/view', label: 'Ver' },
        { to: '/admin/employees/delete', label: 'Eliminar' },
    ];
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Clientes</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Clientes</span>
                </div>
            </div>
            <div className=' px-4 md:px-6 xl:px-8  '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-5 py-5 px-8 bg-white shadow-md rounded-lg'>
                    <div className=''>
                        <input
                            type='search'
                            name='search'
                            id='search'
                            placeholder='Buscar platos'
                            className='bg-[#F9F9F9]  w-full py-2 px-4 rounded-lg outline-none focus:bg-gray-100 transition-all ease-in-out text-sm'
                        />
                        {/* <label htmlFor='search' className='absolute right-4 translate-x-1/2'>
                        <BiSearch className='text-lg' />
                    </label> */}
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <div className=''>
                            <select
                                name='status'
                                id='status'
                                className=' py-2 px-4 focus:outline-none bg-[#f9f9f9] rounded-lg text-sm w-full'>
                                <option value='' className='text-sm'>
                                    Todos
                                </option>
                                <option value='' className='text-sm '>
                                    Activos
                                </option>
                                <option value='' className='text-sm '>
                                    Bloqueados
                                </option>
                            </select>
                        </div>
                        <button
                            type='button'
                            className=' flex items-center justify-center gap-2 font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full md:w-auto text-white'>
                            <BiDownload className='text-xl' />
                            Exportar
                        </button>
                    </div>
                </div>
            </div>
            <TableCustomer columns={userColumns} navAction={customerActions} />
        </>
    );
}
