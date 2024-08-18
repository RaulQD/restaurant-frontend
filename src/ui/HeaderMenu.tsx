import { BiChevronDown, BiCog, BiLogOutCircle } from 'react-icons/bi';
import {
    Menu,
    MenuButton,
    MenuHeading,
    MenuItem,
    MenuItems,
    MenuSection,
    MenuSeparator,
    Transition,
} from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import Avatar from '../assets/avatar1.png';
import { User } from '../types/auth';

type HeaderMenuProps = {
    logout: () => void;
    user: User;
};

export default function HeaderMenu({ logout, user }: HeaderMenuProps) {
    // OBTENER EL PRIMER NOMBRE Y APELLIDO DEL USUARIO Y LUEGO CONCATENARLOS
    const firstName = user?.firstName.split(' ')[0];
    const lastName = user?.lastName.split(' ')[0];
    const fullName = `${firstName} ${lastName}`;
    return (
        <Menu>
            <MenuButton className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-gray-200'>
                <img
                    src={Avatar}
                    alt='avatar1'
                    className='w-7 h-7 bg-blue-200 rounded-full object-cover'
                />
                <span className='text-sm'>{fullName}</span>
                <BiChevronDown />
            </MenuButton>
            <Transition
                enter='transition ease-out duration-75'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <MenuItems
                    anchor={{ to: 'bottom end', gap: '4px' }}
                    className='p-4 bg-white rounded-lg shadow-lg w-50 '>
                    <MenuSection>
                        <MenuHeading className='text-xs opacity-50 ml-4 mb-2 '>
                            Perfil
                        </MenuHeading>
                        <MenuItem>
                            <NavLink
                                to='/account/profile'
                                className='flex items-center gap-x-4 rounded-lg transition-colors hover:bg-gray-200  py-2 px-4 flex-1'>
                                <img
                                    src={Avatar}
                                    alt='avatar1'
                                    className='w-9 h-9 bg-blue-200 rounded-full object-cover'
                                />
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='text-sm font-outfit'>
                                        {fullName}
                                    </span>
                                    <span className='text-xs font-outfit text-gray-400'>
                                        {user.email}
                                    </span>
                                </div>
                            </NavLink>
                        </MenuItem>
                    </MenuSection>
                    <MenuSeparator className='my-2 h-px bg-gray-200' />
                    <MenuSection>
                        <MenuHeading className='text-xs opacity-50 ml-4 mb-2'>
                            Support
                        </MenuHeading>
                        <MenuItem>
                            <NavLink
                                to='/settings'
                                className='text-sm flex items-center gap-x-2 rounded-lg transition-colors hover:bg-gray-200 py-2 px-4 flex-1 mb-2'>
                                <BiCog className='text-lg' /> Configuración
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <button
                                type='button'
                                className='w-full text-sm flex items-center gap-x-2 rounded-lg transition-colors hover:bg-gray-200 py-2 px-4 flex-1'
                                onClick={logout}>
                                <BiLogOutCircle className='text-lg' /> Cerrar
                                Sesión
                            </button>
                        </MenuItem>
                    </MenuSection>
                </MenuItems>
            </Transition>
        </Menu>
    );
}
