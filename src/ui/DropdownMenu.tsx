import { BiChevronDown, BiCog, BiLogOutCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { User } from '../types/auth';
import Avatar from '../assets/avatar1.png';
import { useState } from 'react';

type HeaderMenuProps = {
    logout: () => void;
    user: User;
};
export default function DropdownMenu({ logout, user }: HeaderMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const firstName = user?.firstName.split(' ')[0];
    const lastName = user?.lastName.split(' ')[0];
    const fullName = `${firstName} ${lastName}`;
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button
                type='button'
                className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-gray-200'
                onClick={handleOpen}>
                <img
                    src={Avatar}
                    alt='avatar1'
                    className='w-7 h-7 bg-blue-200 rounded-full object-cover'
                />
                <span className='text-sm hidden md:block'>{fullName}</span>
                <BiChevronDown />
            </button>
            {isOpen && (
                <div
                    className={`w-64 top-16 right-24 p-4 absolute rounded-lg bg-white flex flex-col gap-1 animate-fadeIn shadow-lg ${
                        isOpen ? 'animate-fadeIn' : 'animate-fadeOut'
                    }`}>
                    <nav>
                        <ul>
                            <li>
                                <h1 className='text-xs opacity-50 ml-4 mb-2 '>
                                    Perfil
                                </h1>
                                <NavLink
                                    to='/account/profile'
                                    className='flex items-center gap-x-4 rounded-lg transition-colors hover:bg-gray-200 py-2 px-4 flex-1'>
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
                            </li>
                        </ul>
                        <hr className='my-2 h-px bg-gray-200' />
                        <ul>
                            <li>
                                <h1 className='text-xs opacity-50 ml-4 mb-2 '>
                                    Support
                                </h1>
                                <NavLink
                                    to='/settings'
                                    className='text-sm flex items-center gap-x-2 rounded-lg transition-colors hover:bg-gray-200 py-2 px-4 flex-1 mb-2'>
                                    <BiCog className='text-lg' /> Configuración
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    type='button'
                                    className='w-full text-sm flex items-center gap-x-2 rounded-lg transition-colors hover:bg-gray-200 py-2 px-4 flex-1'
                                    onClick={logout}>
                                    <BiLogOutCircle className='text-lg' />{' '}
                                    Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
