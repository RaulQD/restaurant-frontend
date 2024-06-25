import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiChevronDown, BiDotsVerticalRounded } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

type Columns = {
    header: string;
    accessor: string;
    className?: string;
    hidden?: 'sm' | 'md' | 'lg';
};
type NavActionProps = {
    to: string;
    label: string;
};
// type DataRow = {
//     [key: string]: string;
// };
type TableProps = {
    columns: Columns[];
    // data: DataRow[];
    navAction: NavActionProps[];
};

export default function Tables({ columns, navAction }: TableProps) {
    return (
        <>
            <div className=' mt-5 hidden md:flex md:flex-col'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                    <div className='overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-300'>
                            <thead className='font-outfit uppercase text-[#99a1c7]'>
                                <tr>
                                    {columns.map((column) => (
                                        <th
                                            key={column.accessor}
                                            className={`font-medium px-3 py-3.5 text-left text-sm ${
                                                column.className
                                            } ${
                                                column.hidden
                                                    ? `hidden ${column.hidden}:table-cell`
                                                    : ''
                                            }`}
                                            scope='col'>
                                            {column.header}
                                        </th>
                                    ))}
                                    <th
                                        scope='col'
                                        className='font-medium px-3 py-3.5 text-right text-sm'>
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
                                        Bañado en salsa de tomate con carne
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
                                            <MenuButton className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-orange-100 bg-gray-100 transition-all hover:text-orange-600'>
                                                Acciones
                                                <BiChevronDown className='text-lg' />
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
                                                    {navAction.map((action) => (
                                                        <MenuItem
                                                            key={action.label}>
                                                            <NavLink
                                                                to={action.to}
                                                                className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                                {action.label}
                                                            </NavLink>
                                                        </MenuItem>
                                                    ))}
                                                    {/* <MenuItem>
                                                       <NavLink
                                                            to='/settings'
                                                            className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 text-gray-400 font-medium hover:text-orange-600'>
                                                            Eliminar
                                                        </NavLink> 
                                                    </MenuItem> */}
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
            {/*Card view up to the md breakpoint */}
            <div className='px-4'>
                <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden'>
                    <div className='relative flex items-start gap-4 space-x-3 rounded-lg bg-white px-6 py-5 shadow ring-1 ring-black ring-opacity-5'>
                        <div className='min-w-0 flex-1'>
                            <div className='flex items-center space-x-3'>
                                <p className='truncate text-sm font-medium text-gray-900'>
                                    {' '}
                                    Tallarines verdes con bisteck
                                </p>
                                <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                                    Disponible
                                </span>
                            </div>
                            <p className=' truncate text-sm text-gray-700 mt-1'>
                                Bañado en salsa de tomate con carne asada.
                            </p>
                            <p className='text-sm text-gray-500 mt-1'>
                                Plato principal
                            </p>
                            <p className='text-md font-medium text-gray-900 mt-3'>
                                S/. 50.00
                            </p>
                        </div>
                        <Menu>
                            <MenuButton className='text-sm'>
                                <BiDotsVerticalRounded className='text-lg' />
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
                                    {navAction && navAction.map((action) => (
                                        <MenuItem key={action.label}>
                                            <NavLink
                                                to={action.to}
                                                className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                {action.label}
                                            </NavLink>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}
