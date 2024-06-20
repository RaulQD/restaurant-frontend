import { useState } from 'react';
import Logo from '../../assets/logo-icon.svg';
import {
    BiChevronRight,
    BiFile,
    BiLogOut,
    BiMenu,
    BiSolidDashboard,
    BiSolidReport,
    BiX,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import ProductsMenu from './ProductsMenu';
import CustomersMenu from './CustomersMenu';
import { EmployeesMenu } from './EmployeesMenu';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const menuItems = [
        { path: '/dashboard/orders', label: 'Reporte de ordenes' },
        { path: '/dashboard/sales', label: 'Reporte de ventas' },
    ];
    return (
        <>
            <aside
                className={`bg-secondary-100 h-full xl:h-screen overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-full top-0 py-8 pl-4 pr-2 flex flex-col justify-between z-50 ${
                    showSidebar ? 'left-0' : '-left-full'
                } transition-all`}>
                <div>
                    <div className='flex justify-start items-center gap-2 mb-10 pl-4'>
                        <img src={Logo} alt='logo' className='w-8 h-8' />
                        <span className='font-oleo text-3xl text-white '>
                            Foodie List
                        </span>
                    </div>
                    <nav className=''>
                        <ul className='font-outfit'>
                            <li className='mb-3'>
                                <NavLink
                                    to='/dashboard'
                                    className=' text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                                    <BiSolidDashboard className='text-orange-500 text-lg' />{' '}
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className='mb-3'>
                                <ProductsMenu />
                            </li>
                            <li className='mb-3'>
                                <NavLink
                                    to='/dashboard/orders'
                                    className=' text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                                    <BiFile className='text-orange-500 text-lg' />{' '}
                                    Ordenes
                                </NavLink>
                            </li>
                            <li className='mb-3'>
                                <CustomersMenu />
                            </li>
                            <li className='mb-3'>
                                <EmployeesMenu />
                            </li>
                            <li className='mb-3'>
                                <button
                                    type='button'
                                    className=' w-full text-white flex justify-between items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                                    onClick={() =>
                                        setShowDropdown(!showDropdown)
                                    }>
                                    <span className='flex items-center gap-4'>
                                        <BiSolidReport className='text-orange-500 text-lg' />{' '}
                                        Reportes
                                    </span>
                                    <BiChevronRight
                                        className={`text-orange-500 text-xl mt-1 ${
                                            showDropdown ? 'rotate-90' : ''
                                        }  transition-all`}
                                    />
                                </button>

                                <Dropdown
                                    showDropdown={showDropdown}
                                    menuItems={menuItems}
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <NavLink
                        to='/'
                        className=' text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                        <BiLogOut className='text-orange-500 text-lg' />
                        Cerrar Sesión
                    </NavLink>
                </nav>
            </aside>
            <button
                className='fixed bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full text-xl z-50 transition-all  xl:hidden'
                onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ? <BiX /> : <BiMenu />}
            </button>
        </>
    );
}
