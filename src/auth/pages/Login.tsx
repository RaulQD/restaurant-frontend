import LoginForm from '../components/login/LoginForm';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-icon.svg';

export default function Login() {
    return (
        <>
            <div className='py-20 lg:py-[90px]'>
                <div className='bg-white rounded-md w-[550px] mx-auto'>
                    <div className='flex justify-center items-center gap-2 p-5'>
                        <img src={Logo} alt='logo' className='size-9' />
                        <span className='font-oleo text-4xl text-[#F97316] hidden lg:block'>
                            Foodie Hub
                        </span>
                    </div>
                    <div className='border-b-2'></div>
                    <div className='flex min-h-full flex-1 flex-col justify-center px-8 pt-5 pb-10'>
                        <div className='sm:mx-auto sm:w-full sm:max-w-sm text-center'>
                            <h2 className='mt-4 text-center text-base md:text-xl font-semibold leading-9 tracking-tight text-gray-900 mb-2'>
                                ¡Bienvenido a Foodie Hub!
                            </h2>
                            <p className='font-normal text-sm '>
                                Ingresa tu usuario y contraseña para <br />
                                iniciar sesión
                            </p>
                        </div>
                        <LoginForm />
                        <div className='flex justify-center items-center gap-2 mt-8'>
                            <p className='text-center text-sm text-gray-500'>
                                ¿No tienes cuenta en Foodie Hub?
                            </p>
                            <nav>
                                <NavLink
                                    to='/auth/register'
                                    className='font-semibold leading-6 text-sm text-orange-500'>
                                    Crea una cuenta
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
