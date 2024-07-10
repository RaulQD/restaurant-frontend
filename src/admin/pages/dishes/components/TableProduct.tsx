import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiChevronDown} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { CardViewTable } from './CardViewTable';
import { Dish } from '../../../../types';

type NavActionProps = {
    to: string;
    label: string;
};
type TableProps = {
    navAction: NavActionProps[];
    data: Dish[];
};
export default function TableProduct({ navAction, data }: TableProps) {
    return (
        <>
          
            <div className='mb-5 hidden md:flex md:flex-col'>
                <div className='overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg align-middle'>
                    <table className='w-full divide-y divide-gray-300'>
                        <thead className='font-outfit uppercase text-[#99a1c7] text-center'>
                            <tr>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Código
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Imagen
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Nombre del Plato
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Descripción
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Precio
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Categoría
                                </th>
                                <th className='font-medium px-3 py-3.5 text-sm'>
                                    Disponibilidad
                                </th>
                            </tr>
                        </thead>
                        <tbody className='font-outfit divide-y divide-gray-200 bg-white text-center'>
                            {data.map((dish) => (
                                <tr key={dish.id_dish}>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium  truncate'>
                                        {dish.id_dish}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium flex justify-center'>
                                        <img
                                            src={dish.image_url!}
                                            alt={dish.dishes_name}
                                            className='size-12'
                                        />
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium  truncate'>
                                        {dish.dishes_name}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium  truncate max-w-xs'>
                                        {dish.description}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium  truncate'>
                                        {dish.price}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium  truncate'>
                                        {dish.category.category_name}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm font-medium'>
                                        <span
                                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ${
                                                dish.available === 1
                                                    ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                    : 'bg-red-50 text-red-700 ring-red-600/20'
                                            }`}>
                                            {' '}
                                            {dish.available === 1
                                                ? 'Disponible'
                                                : 'No disponible'}
                                        </span>
                                    </td>
                                    <td className=' whitespace-nowrap pl-3 pr-4 sm:pr-6 py-4 text-right text-sm'>
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
                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*Card view up to the md breakpoint */}
            <div className='px-4'>
                <CardViewTable data={data} navAction={navAction} />
            </div>
        </>
    );
}
