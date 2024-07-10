import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Dish } from '../../../../types';

type NavActionProps = {
    to: string;
    label: string;
};

type TableProps = {
    navAction: NavActionProps[];
    data: Dish[];
};
export const CardViewTable = ({ navAction, data }: TableProps) => {
    return (
        <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden'>
            {data.map((dish) => (
                <div
                    className='relative flex items-start gap-4 space-x-3 rounded-lg bg-white px-6 py-5 shadow ring-1 ring-black ring-opacity-5'
                    key={dish.id_dish}>
                    <div className='min-w-0 flex-1'>
                        <div className='flex items-center space-x-3'>
                            <p className='truncate text-sm font-medium text-gray-900'>
                                {' '}
                                {dish.dishes_name}
                            </p>
                            <span
                                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset  ${
                                    dish.available === 1
                                        ? 'bg-green-50 text-green-700 ring-green-600/20'
                                        : 'bg-red-50 text-red-700 ring-red-600/20'
                                }`}>
                                {' '}
                                {dish.available === 1
                                    ? 'Disponible'
                                    : 'No disponible'}
                            </span>
                        </div>
                        <p className=' truncate text-sm text-gray-700 mt-1'>
                            {dish.description}
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                            {dish.category.category_name}
                        </p>
                        <p className='text-md font-medium text-gray-900 mt-3'>
                            {dish.price}
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
                                {navAction &&
                                    navAction.map((action) => (
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
            ))}
        </div>
    );
};
