// import { useState } from 'react';
// import Navbar from './Navbar';
import background from '../../assets/foodhero5.webp';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Hero() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    const redirectTo = () => {
        navigate('/our-dishes');
    };

    return (
        <>
            {isHome && (
                <header className='relative w-full h-screen bg-zinc-900/90'>
                    <img
                        src={background}
                        alt='foodhero5'
                        className='absolute w-full h-full object-cover mix-blend-overlay'
                    />
                    <div className='flex flex-col items-start absolute bottom-[50%] translate-y-1/2 lg:min-w-[45%] px-5 md:px-16 lg:px-32 xl:px-44'>
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
                            className='bg-orange-500 text-white hover:bg-orange-600 transition-all ease-in-out text-sm md:text-lg py-3 px-4 rounded-lg font-medium cursor-pointer'
                            onClick={() => redirectTo()}>
                            Ordena Ahora
                        </button>
                    </div>
                </header>
            )}
        </>
    );
}
