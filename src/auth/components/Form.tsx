import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-icon.svg';
import { UserLoginForm } from '../../types/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from '../../services/apiUser';
import toast from 'react-hot-toast';
import { ErrorMessage } from '../../admin/components/ErrorMessage';
import { useState } from 'react';

export default function Form() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const initialValues: UserLoginForm = {
        email: '',
        password: '',
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: initialValues,
    });
    const mutation = useMutation({
        mutationFn: authenticateUser,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success('Inicio de sesión exitoso');
            reset();
            // navigate('/dashboard');
        },
    });
    const onSubmit: SubmitHandler<UserLoginForm> = async (data) => {
        await mutation.mutateAsync(data);
    };

    const redirectTo = () => {
        navigate('/auth/register');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000);
    };
    return (
        <>
            <div className='py-14 lg:py-[70px]'>
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
                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
                            <form
                                className='space-y-6'
                                onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        Correo electronico
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='email'
                                            type='email'
                                            autoComplete='email'
                                            className='block w-full rounded-md border p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                                            {...register('email', {
                                                required:
                                                    'El email es requerido',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                    message: 'Email invalido',
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <ErrorMessage>
                                                {errors.email.message}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <div className='flex items-center justify-start'>
                                        <label
                                            htmlFor='password'
                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                            Contraseña
                                        </label>
                                    </div>
                                    <div className='mt-2'>
                                        <input
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete='off'
                                            className='block w-full rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 border border-gray-300'
                                            {...register('password', {
                                                required:
                                                    'La contraseña es requerida',
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        'La contraseña debe tener al menos 8 caracteres',
                                                },
                                            })}
                                        />
                                        {errors.password && (
                                            <ErrorMessage>
                                                {errors.password.message}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div className='text-sm flex justify-between mt-4'>
                                        <div className='flex items-center'>
                                            <input
                                                type='checkbox'
                                                id='showPassword'
                                                checked={showPassword}
                                                onChange={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className=' h-3 w-3 rounded transition duration-200'
                                            />
                                            <label
                                                htmlFor='showPassword'
                                                className='ml-2 text-sm'>
                                                Mostrar contraseñas
                                            </label>
                                        </div>
                                        <NavLink
                                            to='/auth/forgot-password'
                                            className='font-medium text-orange-600 hover:text-orange-500'>
                                            ¿Olvidates tú contraseña?
                                        </NavLink>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className=' w-full rounded-md border border-orange-500 py-2 text-sm font-semibold leading-6 text-black hover:text-white hover:bg-orange-500 focus:outline-none transition-all'>
                                        Inicia sesión
                                    </button>
                                </div>
                            </form>
                            <div className='flex justify-center items-center gap-2 mt-8'>
                                <p className='text-center text-sm text-gray-500'>
                                    ¿No tienes cuenta en Foodie Hub?
                                </p>
                                <nav>
                                    <NavLink
                                        to='/auth/register'
                                        className='font-semibold leading-6 text-sm text-orange-500'
                                        onClick={redirectTo}>
                                        Crea una cuenta
                                    </NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
