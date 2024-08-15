import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-icon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthRegisterform } from '../../types/auth';
import { ErrorMessage } from '../../admin/components/ErrorMessage';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createAccount } from '../../services/apiAuth';
import { Button } from '../../ui';

export default function SignUp() {
    const initialValues: AuthRegisterform = {
        firstName: '',
        lastName: '',
        dni: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: initialValues,
    });
    const mutation = useMutation({
        mutationFn: createAccount,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data.message);
            reset();
        },
    });

    const onSubmit: SubmitHandler<AuthRegisterform> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await mutation.mutateAsync(data);
    };

    return (
        <>
            <div className='py-14 lg:py-[70px]'>
                <div className='bg-white rounded-md w-[600px] mx-auto'>
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
                                ¿Eres nuevo en Foodie Hub?
                            </h2>
                            <p className='font-normal text-sm '>
                                Regístrate y disfruta de estos sabores
                                inoviables y
                                <br /> ten una experiencia unica y
                                <br />
                                sencilla.
                            </p>
                        </div>
                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
                            <form
                                className='space-y-6'
                                onSubmit={handleSubmit(onSubmit)}>
                                <div className=''>
                                    <label
                                        htmlFor='firstName'
                                        className='block text-sm  leading-6 text-gray-900'>
                                        Nombre
                                    </label>

                                    <input
                                        type='text'
                                        id='firstName'
                                        className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                        {...register('firstName', {
                                            required: 'El nombre es requerido.',
                                            minLength: {
                                                value: 3,
                                                message:
                                                    'El nombre debe tener al menos 3 caracteres.',
                                            },
                                        })}
                                    />
                                    {errors.firstName && (
                                        <ErrorMessage>
                                            {errors.firstName.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className='mt-8'>
                                    <label
                                        htmlFor='lastName'
                                        className='block text-sm  leading-6 text-gray-900'>
                                        Apellido
                                    </label>

                                    <input
                                        type='text'
                                        id='lastName'
                                        className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                        {...register('lastName', {
                                            required:
                                                'El apellido es requerido.',
                                            minLength: {
                                                value: 3,
                                                message:
                                                    'El apellido debe tener al menos 3 caracteres.',
                                            },
                                        })}
                                    />
                                    {errors.lastName && (
                                        <ErrorMessage>
                                            {errors.lastName.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                                    <div>
                                        <label
                                            htmlFor='dni'
                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                            DNI
                                        </label>

                                        <input
                                            id='dni'
                                            type='text'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                            {...register('dni', {
                                                required:
                                                    'El DNI es requerido.',
                                                pattern: {
                                                    value: /^[0-9]{8}$/,
                                                    message:
                                                        'El DNI debe tener 8 digitos.',
                                                },
                                            })}
                                        />
                                        {errors.dni && (
                                            <ErrorMessage>
                                                {errors.dni.message}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='phone'
                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                            Telefono
                                        </label>

                                        <input
                                            id='phone'
                                            type='text'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                            {...register('phone', {
                                                required:
                                                    'El telefono es requerido.',
                                                pattern: {
                                                    value: /^9[0-9]{8}$/,
                                                    message:
                                                        'El telefono debe tener 9 digitos y empezar con 9.',
                                                },
                                            })}
                                        />
                                        {errors.phone && (
                                            <ErrorMessage>
                                                {errors.phone.message}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <label
                                        htmlFor='address'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        Dirección
                                    </label>

                                    <input
                                        id='address'
                                        type='text'
                                        className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                        {...register('address', {
                                            required:
                                                'La dirección es requerido.',
                                            minLength: {
                                                value: 10,
                                                message:
                                                    'La dirección debe tener al menos 10 caracteres.',
                                            },
                                        })}
                                    />
                                    {errors.address && (
                                        <ErrorMessage>
                                            {errors.address.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className='mt-8'>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        Correo electronico
                                    </label>

                                    <input
                                        id='email'
                                        type='email'
                                        autoComplete='email'
                                        className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                        {...register('email', {
                                            required: 'El email es requerido',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message:
                                                    'El email no es valido',
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <ErrorMessage>
                                            {errors.email.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className='mt-8'>
                                    <label
                                        htmlFor='password'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        Password
                                    </label>

                                    <div className='mt-2 '>
                                        <input
                                            type='password'
                                            id='password'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                            {...register('password', {
                                                required:
                                                    'La contraseña es requerida.',
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        'La contraseña debe tener al menos 8 caracteres.',
                                                },
                                            })}
                                        />
                                        {errors.password && (
                                            <ErrorMessage>
                                                {errors.password.message}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <Button
                                        disabled={isSubmitting}
                                        type='submit'>
                                        {isSubmitting
                                            ? 'Cargando...'
                                            : 'Crear cuenta'}
                                    </Button>

                                    <button
                                        disabled={isSubmitting}
                                        type='submit'
                                        className=' w-full rounded-md border border-orange-500 py-2 text-sm font-semibold leading-6 text-black focus:outline-none transition-all'>
                                        {isSubmitting
                                            ? 'Cargando...'
                                            : 'Crear cuenta'}
                                    </button>
                                </div>
                            </form>
                            <div className='flex flex-col items-center gap-6'>
                                <p className='mt-8 text-center text-sm text-gray-500'>
                                    ¿Ya tienes una cuenta en Foodie Hub?
                                </p>
                                <NavLink
                                    to='/auth/login'
                                    className='text-orange-500 font-medium text-sm'>
                                    Inicia sesión
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
