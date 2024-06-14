import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/data';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok } from 'react-icons/bi';

export default function Footer() {
    return (
        <footer className='bg-[#191919] py-8'>
            {/* <div className='absolute inset-0 bg-black '></div> */}
            <div className='relative text-white pt-8 h-full'>
                <div className='relative flex justify-center items-center gap-2 mt-16 before:content-[""] before:block before:w-full before:h-[2px] before:bg-white after:content-[""] after:block after:w-full after:h-[2px] after:bg-white'>
                    <img src='./logov2.svg' alt='logo' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-16 lg:px-44 mt-10 lg:mt-16 '>
                    <div className='flex flex-col gap-2'>
                        <h3 className='uppercase font-bold font-poppins text-lg mb-3'>
                            Dirección
                        </h3>
                        <div className='text-[#A4A4A4] text-sm'>
                            <p> Encuentranos en:</p>
                            <span>Avenida Arriesgadores 1230, Lima</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='uppercase font-bold font-poppins text-lg mb-3'>
                            Atención
                        </h3>
                        <div className='text-[#A4A4A4] text-sm flex flex-col'>
                            <p>Luneas a viernes:</p>
                            <span> 1:00 P.M. - 10:00 P.M.</span>
                        </div>
                        <div className='text-[#A4A4A4] text-sm flex flex-col'>
                            <p> Sabados y Domingos:</p>
                            <span> 4:00 P.M. - 10:00 P.M.</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='uppercase font-bold font-poppins text-lg mb-3'>
                            Enlaces
                        </h3>
                        <div className='flex text-sm flex-col gap-2'>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className='text-[#A4A4A4] hover:text-orange-500 transition-all duration-100'>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='uppercase font-bold font-poppins text-lg mb-3'>
                            Te ayudamos
                        </h3>
                        <p className='text-white text-sm font-bold'>
                            Telefono:{' '}
                            <span className='text-[#A4A4A4]'>961450431</span>
                        </p>

                        <p className='text-[#A4A4A4] text-sm'>Libro de reclamaciones</p>
                        <p className='text-[#A4A4A4] text-sm'>Centro de ayuda</p>
                    </div>
                </div>
                <div className='mt-16'>
                    <ul className='flex  justify-center items-center gap-5'>
                        <li>
                            <a
                                href='#'
                                className='flex border border-[#A4A4A4] p-2 rounded-full hover:bg-orange-500 text-orange-500 text-lg hover:text-white transition-all duration-200 '>
                                <BiLogoFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='flex border border-[#A4A4A4] p-2 rounded-full hover:bg-orange-500 text-orange-500 text-lg hover:text-white transition-all duration-200 '>
                                <BiLogoInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='flex border border-[#A4A4A4] p-2 rounded-full hover:bg-orange-500 text-orange-500 text-lg hover:text-white transition-all duration-200 '>
                                <BiLogoTiktok />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
