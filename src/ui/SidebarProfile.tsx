import {
    FaHeart,
    FaHome,
    FaLock,
    FaPowerOff,
    FaShoppingBag,
    FaUser,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function SidebarProfile() {
    return (
        <div className='w-64 bg-white shadow-md'>
            <nav className='mt-10'>
                <ul>
                    <li className='mb-6'>
                        <NavLink
                            to='/personal-info'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaUser className='mr-3 text-xl' />
                            <span className='font-medium'>
                                Datos personales
                            </span>
                        </NavLink>
                    </li>
                    <li className='mb-6'>
                        <NavLink
                            to='/account-settings'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaLock className='mr-3 text-xl' />
                            <span className='font-medium'>
                                Configurar mi cuenta
                            </span>
                        </NavLink>
                    </li>
                    <li className='mb-6'>
                        <NavLink
                            to='/purchases'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaShoppingBag className='mr-3 text-xl' />
                            <span className='font-medium'>Mis compras</span>
                        </NavLink>
                    </li>
                    <li className='mb-6'>
                        <NavLink
                            to='/addresses'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaHome className='mr-3 text-xl' />
                            <span className='font-medium'>Direcciones</span>
                        </NavLink>
                    </li>
                    <li className='mb-6'>
                        <NavLink
                            to='/my-lists'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaHeart className='mr-3 text-xl' />
                            <span className='font-medium'>Mis listas</span>
                        </NavLink>
                    </li>

                    <li className='mt-6'>
                        <NavLink
                            to='/logout'
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100'>
                            <FaPowerOff className='mr-3 text-xl' />
                            <span className='font-medium'>Cerrar sesión</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
