import { useEffect, useState } from 'react';
import { BiMenu, BiUser, BiX } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/data';
import OrderList from './OrderList';
import { CiShoppingBasket } from 'react-icons/ci';

type NavbarProps = {
    handleRouteChange: () => void;
};

export default function Navbar({ handleRouteChange }: NavbarProps) {
    const [showMenu, setShowMenu] = useState(false);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && showMenu) {
                setShowMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        //LIMPIAR  EL EVENTO
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMenu]);

    const handleChangeBackgroundNavbar = () => {
        if (window.scrollY >= 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener('scroll', handleChangeBackgroundNavbar);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleMenuClose = () => {
        handleRouteChange();
        setShowMenu(false);
    };
    const handleOrder = () => {
        setIsOrderOpen(!isOrderOpen);
    };

    useEffect(() => {
        const handleBodyScroll = () => {
            if (isOrderOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        };
        handleBodyScroll(); // Ejecutar la función una vez al montar el componente

        return () => {
            document.body.style.overflow = 'visible'; // Restaurar el scrollbar al desmontar el componente
        };
    }, [isOrderOpen]);
    return (
        <nav
            className={`sticky top-0 left-0 w-full z-10 px-5 md:px-16 lg:px-32 xl:px-44 ${
                scroll ? 'bg-white shadow-sm ease-in-out' : 'bg-transparent'
            }`}>
            <div className='flex justify-between items-center h-16 '>
                <div className='flex justify-center items-center gap-2'>
                    <div className='lg:hidden'>
                        <BiMenu
                            className='text-2xl cursor-pointer'
                            onClick={handleMenu}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img
                            src='./logo-icon.svg'
                            alt='logo'
                            className='w-6 h-6'
                        />
                        <span className='font-oleo text-3xl text-[#F97316] hidden lg:block'>
                            Foodie List
                        </span>
                    </div>
                </div>
                {/* desktop menu */}
                <div className='flex justify-center items-center gap-8'>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={handleRouteChange}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-orange-500 text-sm hidden lg:block font-poppins'
                                    : 'text-sm hidden lg:block font-poppins'
                            }>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                {/* sidebar mobile menu */}
                <div
                    className={`fixed h-full w-screen lg:hidden bg-black/50 top-0 left-0 backdrop-blur-sm transition-opacity duration-300 z-10 ${
                        showMenu
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                    }`}>
                    <div
                        className={`bg-white flex flex-col absolute top-0 left-0 h-screen z-50 w-3/4 sm:w-1/2  gap-12 p-8  transition-all
                ${showMenu ? 'translate-x-0 ' : '-translate-x-full'}`}>
                        <div className='flex justify-end mt-0 mb-8'>
                            <BiX
                                className='text-2xl cursor-pointer'
                                onClick={handleMenu}
                            />
                        </div>

                        <div className='flex flex-col items-center gap-8 pt-8'>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={handleMenuClose}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-orange-500 text-lg font-bold font-poppins'
                                            : 'text-lg font-bold font-poppins'
                                    }>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                {/* sidebar mobile menu end*/}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative'>
                        <button
                            type='button'
                            onClick={handleOrder}
                            className='flex justify-center items-center'>
                            <CiShoppingBasket className='text-2xl  cursor-pointer ' />
                            <p className='text-[12px] font-medium font-poppins absolute -top-1 -right-2 w-4 h-4 bg-orange-500 flex justify-center items-center text-white rounded-full'>
                                1
                            </p>
                        </button>
                        <OrderList
                            isOrderOpen={isOrderOpen}
                            handleOrder={handleOrder}
                        />
                    </div>
                    <button
                        type='button'
                        className='flex justify-between items-center gap-2 text-sm bg-orange-500 py-2 px-3 text-white rounded-full hover:bg-orange-600 transition-all duration-200 ease-in-out'>
                        <BiUser className=' md:text-xl cursor-pointer text-white' />
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </nav>
    );
}
