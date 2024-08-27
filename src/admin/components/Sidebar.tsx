import { useState } from 'react';
import Logo from '../../assets/logo-icon.svg';
import {
    BiFile,
    BiLogOut,
    BiMenu,
    BiSolidDashboard,
    BiSolidReport,
    BiX,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import SidebarItems from './SidebarItems';
import SidebarDropdown from './SidebarDropdown';
import { FaUsers } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

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
                            <SidebarItems path='/dashboard' label='Dashboard' Icon={BiSolidDashboard}/>
                            <SidebarDropdown label='Catalogo' Icon={BiSolidReport} menuItems={[
                                { path: '/dashboard/dishes', label: 'Platos' },
                                { path: '/dashboard/dishes/add', label: 'Añadir Platos' },
                                { path: '/dashboard/category', label: 'Categorias'},
                                { path: '/dashboard/category/add', label: 'Categoría de Platos', },
                            ]}/>
                            <SidebarItems path='/dashboard/orders' label='Ordenes' Icon={BiFile}/>
                            <SidebarDropdown label='Clientes' Icon={FaUsers} menuItems={[
                                { path: '/dashboard/customers', label: 'Lista de clientes' },
                            ]}/>
                            <SidebarDropdown label='Empleados' Icon={FaBuildingUser} menuItems={[
                                { path: '/dashboard/employees', label: 'Empleados' }
                            ]}/>
                            <SidebarDropdown label='Reportes' Icon={BiSolidReport} menuItems={ [
                                { path: '/dashboard/orders', label: 'Reporte de ordenes' },
                                { path: '/dashboard/sales', label: 'Reporte de ventas' },
                            ]}/>
                            
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
