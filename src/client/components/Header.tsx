// import { useState } from 'react';
// import Navbar from './Navbar';

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    return (
        <>
            {isHome && (
                <header className='relative bg-header bg-left-bottom md:bg-center bg-no-repeat bg-cover h-screen '>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='flex flex-col items-start absolute bottom-[50%] translate-y-1/2  lg:min-w-[45%] px-5 md:px-16 lg:px-32 xl:px-44'>
                        <h1 className='font-medium text-4xl lg:text-5xl xl:text-6xl leading-none text-white font-poppins mb-3 md:mb-5'>
                            {' '}
                            Ordena tu <br />
                            comida favorita aquí.
                        </h1>
                        <p className='text-white text-sm md:text-base lg:text-lg lg:leading-8 text-balance mb-8'>
                            {' '}
                            Elige entre una variedad de platos. Nuestra misión
                            es satisfacer tus antojos y mejorar tu experiencia
                            gastronómica, una deliciosa carne a la vez.
                        </p>
                        <button
                            type='button'
                            className='bg-orange-500 text-white hover:bg-orange-600 transition-all ease-in-out text-sm md:text-lg py-3 px-4 rounded-full font-medium cursor-pointer'>
                            Ordena Ahora
                        </button>
                    </div>
                    {/* <Navbar showMenu={showMenu} setShowMenu={setShowMenu} /> */}
                </header>
            )}
        </>
    );
}
