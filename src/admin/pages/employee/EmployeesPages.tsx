import { BiChevronRight } from 'react-icons/bi';
import TableEmployee from './components/TableEmployee';

const employeeActions = [
    { to: '/admin/employees/view', label: 'Ver' },
    { to: '/admin/employees/edit', label: 'Editar' },
    { to: '/admin/employees/delete', label: 'Eliminar' },
];

const employees = [
    {
        id: 1,
        name: 'Juan Perez',
        email: 'raul@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        role: 'Admin',
        status: 'Activo',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
    },
    {
        id: 2,
        name: 'Juan Perez',
        email: 'raul@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        role: 'Admin',
        status: 'Activo',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
    },
];

export default function EmployeesPages() {
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Empleados</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Empleados</span>
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
                                name='category'
                                id='category'
                                className=' py-2 px-4 focus:outline-none bg-[#f9f9f9] rounded-lg text-sm w-full'>
                                <option value='' className='text-sm'>
                                    Todos
                                </option>
                                <option value='' className='text-sm '>
                                    Platos Principales
                                </option>
                                <option
                                    value=''
                                    className='text-sm hover:text-orange-400'>
                                    Entradas
                                </option>
                                <option value='' className='text-sm '>
                                    Postres
                                </option>
                                <option value='' className='text-sm'>
                                    Ensaladas
                                </option>
                                <option value='' className='text-sm'>
                                    Sopas y caldos
                                </option>
                            </select>
                        </div>
                        <button
                            type='button'
                            className='text-white font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full md:w-auto'>
                            Agregar Empleado
                        </button>
                    </div>
                </div>
            </div>
            <TableEmployee navAction={employeeActions} data={employees} />
        </>
    );
}
