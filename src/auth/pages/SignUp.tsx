import { NavLink } from 'react-router-dom';
import Hero from '../../assets/foodhero5.webp';
import Logo from '../../assets/logo-icon.svg';
export default function SignUp() {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 h-screen w-full'>
            <div className=' flex flex-col justify-center items-center p-8 md:p-10 '>
                <div className='w-full md:p-10 '>
                    <div className='flex flex-col items-center justify-center mb-11'>
                        <h1 className='text-2xl font-medium text-center mb-3 font-poppins'>
                            Registrate
                        </h1>
                        <span className='text-gray-400 font-poppins font-normal text-sm text-center'>
                            Disfruta Los Mejores Platos
                        </span>
                    </div>
                    <form action='' className='font-poppins'>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                                <div className=''>
                                    <input
                                        type='text'
                                        placeholder='Nombre'
                                        className='w-full py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none rounded-lg focus:border-orange-500'
                                    />
                                </div>
                                <div className=''>
                                    <input
                                        type='text'
                                        placeholder='Apellido'
                                        className='w-full py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none rounded-lg focus:border-orange-500'
                                    />
                                </div>
                            </div>
                            <div className='mb-8 '>
                                <input
                                    type='text'
                                    placeholder='DNI'
                                    className=' w-full py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none rounded-lg focus:border-orange-500'
                                />
                            </div>
                            <div className='mb-8'>
                                <input
                                    type='text'
                                    placeholder='Correo electronico'
                                    className=' w-full py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none rounded-lg focus:border-orange-500'
                                />
                            </div>
                            <div className='mb-8'>
                                <input
                                    type='password'
                                    placeholder='contraseña'
                                    className=' w-full py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none rounded-lg focus:border-orange-500'
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-orange-500 text-white hover:bg-orange-600 transition-all ease-in-out rounded-lg py-3 px-4 font-medium cursor-pointer'>
                            Registrarse
                        </button>
                    </form>
                    <div className='font-poppins'>
                        <p className='mt-5 text-center text-sm md:text-base'>
                            ¿Ya tienes una cuenta?{' '}
                            <NavLink
                                to='/login'
                                className='text-orange-500 font-medium hover:underline'>
                                Inicia sesión
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative hidden lg:block w-full h-screen bg-zinc-900/90'>
                <img
                    src={Hero}
                    alt='foodhero5'
                    className='absolute w-full h-full object-cover mix-blend-overlay'
                />
                <div className='flex flex-col items-start absolute bottom-[30%] translate-y-1/2  lg:p-16 xl:px-20'>
                    <div className=''>
                        <div className='flex justify-start items-center gap-2'>
                            <img
                                src={Logo}
                                alt='logo'
                                className=' md:size-9 lg:size-12'
                            />
                            <h1 className='text-white lg:text-4xl xl:text-5xl font-bold font-oleo '>
                                Foodie Hub
                            </h1>
                        </div>
                        <span className='text-white lg:text-xl xl:text-2xl'>
                            Disfruta de nuestros mejores y deliciosos platos
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
