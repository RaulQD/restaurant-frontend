import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiChevronDown, BiChevronRight, BiCog, BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export default function ProductsPage() {
    return (
        <>
            <div className='mb-6 px-8 pt-8'>
                <h1 className='text-lg font-medium '>Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Home</span>
                    <BiChevronRight />
                    <span>Productos</span>
                </div>
            </div>
            <div className=' h-full'>
                <div className=''>
                    <div className='flex flex-col gap-y-4 pb-5 pt-0 px-8 w-full '>
                        <div className=''>
                            <input
                                type='search'
                                name='search'
                                id='search'
                                placeholder='Buscar platos'
                                className='bg-[#F9F9F9] w-full py-2 px-4 rounded-lg outline-none focus:bg-gray-100 transition-all ease-in-out text-sm'
                            />
                            {/* <label htmlFor='search' className='absolute right-4 translate-x-1/2'>
                        <BiSearch className='text-lg' />
                    </label> */}
                        </div>
                        <div className='flex flex-col gap-y-4 w-full'>
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
                                className='text-white font-medium bg-orange-500 py-2 px-4 font-outfit hover:bg-orange-600 transition-all ease-in-out rounded-lg w-full'>
                                Agregar Producto
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' mt-10 flex flex-col'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                                <thead className='font-outfit uppercase text-[#99a1c7]'>
                                    <tr>
                                        {/* <th
                                            scope='col'
                                            className=' font-medium py-3.5 pr-3 pl-6 text-left text-sm'>
                                            Codigo
                                        </th> */}
                                        <th
                                            scope='col'
                                            className=' font-medium py-3.5 px-3 text-left text-sm'>
                                            Nombre
                                        </th>
                                        <th
                                            scope='col'
                                            className='hidden lg:table-cell font-medium px-3 py-3.5 text-left text-sm'>
                                            Descripción
                                        </th>
                                        <th
                                            scope='col'
                                            className='hidden sm:table-cell font-medium px-3 py-3.5 text-left text-sm'>
                                            Precio
                                        </th>
                                        <th
                                            scope='col'
                                            className=' hidden md:table-cell font-medium px-3 py-3.5 text-left text-sm'>
                                            Categoria
                                        </th>

                                        <th
                                            scope='col'
                                            className='font-medium px-3 py-3.5 text-left text-sm'>
                                            Estado
                                        </th>
                                        <th
                                            scope='col'
                                            className=' font-medium px-3 py-3.5 text-right text-sm'>
                                            <span className='sr-only'>
                                                Acciones
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='font-outfit divide-y divide-gray-200 bg-white'>
                                    <tr>
                                        {/* <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6'>
                                            1
                                        </td> */}
                                        <td className='w-full max-w-0 sm:w-auto whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-sm font-medium text-gray-900 sm:max-w-none truncate'>
                                            Tallarines verdes
                                            <dl className='lg:hidden font-medium'>
                                                <dt className='sr-only sm:hidden '>
                                                    Precio
                                                </dt>
                                                <dd className='sm:hidden text-gray-700 mt-1 truncate'>
                                                    S/. 50.00
                                                </dd>
                                                <dt className='sr-only md:hidden'>
                                                    Category
                                                </dt>
                                                <dd className='md:hidden mt-1 text-gray-500 sm:text-gray-700 truncate'>
                                                    Plato principal
                                                </dd>
                                                <dt className='sr-only '>
                                                    Descripción
                                                </dt>
                                                <dd className=' text-gray-500 md:text-gray-700 mt-1 truncate'>
                                                    Baño en salsa de tomate con
                                                    carne asada.
                                                </dd>
                                            </dl>
                                        </td>
                                        <td className=' hidden lg:table-cell whitespace-nowrap px-3 py-4 text-sm'>
                                            Baño en salsa de tomate con carne
                                            asada.
                                        </td>
                                        <td className='hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm'>
                                            50 SOLES
                                        </td>
                                        <td className='hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm'>
                                            PLATO PRINCIPAL
                                        </td>
                                        <td className='whitespace-nowrap px-3 py-4 text-sm'>
                                            disponible
                                        </td>
                                        <td className='  whitespace-nowrap pl-3 pr-4 sm:pr-6 py-4 text-right text-sm'>
                                            <Menu>
                                                <MenuButton>
                                                    {' '}
                                                    <button className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-orange-100 bg-gray-100 transition-all hover:text-orange-600'>
                                                        Acciones
                                                        <BiChevronDown className='text-lg' />
                                                    </button>
                                                </MenuButton>
                                                <Transition
                                                    enter='transition ease-out duration-75'
                                                    enterFrom='opacity-0 scale-95'
                                                    enterTo='opacity-100 scale-100'
                                                    leave='transition ease-in duration-100'
                                                    leaveFrom='opacity-100 scale-100'
                                                    leaveTo='opacity-0 scale-95'>
                                                    <MenuItems
                                                        anchor={{
                                                            to: 'bottom end',
                                                            gap: '4px',
                                                        }}
                                                        className='py-4 px-2 bg-white rounded-lg shadow-lg w-36'>
                                                        <MenuItem>
                                                            <NavLink
                                                                to='/settings'
                                                                className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                                Editar
                                                            </NavLink>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <NavLink
                                                                to='/settings'
                                                                className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 text-gray-400 font-medium hover:text-orange-600'>
                                                                Eliminar
                                                            </NavLink>
                                                        </MenuItem>
                                                    </MenuItems>
                                                </Transition>
                                            </Menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
