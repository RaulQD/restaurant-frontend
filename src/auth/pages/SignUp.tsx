import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-icon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthRegisterform } from '../../types/auth';
import { ErrorMessage } from '../../admin/components/ErrorMessage';
import { Button, Input, Label } from '../../ui';
import { useSignup } from '../components/signup/useSignup';


export default function SignUp() {
    const initialValues: AuthRegisterform = {
        firstName: '',
        lastName: '',
        dni: '',
        email: '',
        password: '',
        phone: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: initialValues,
    });
    const { signup, isPending } = useSignup();

    const onSubmit: SubmitHandler<AuthRegisterform> = (data) => {
        signup(data, {
            onSuccess: () => reset(),
        });
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
                                    <Label text='Nombre' htmlFor='firstName' />
                                    <Input
                                        type='text'
                                        id='firstName'
                                        register={register('firstName', {
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
                                    <Label
                                        text='Apellido'
                                        htmlFor='lastName'
                                    />
                                    <Input
                                        type='text'
                                        id='lastName'
                                        register={register('lastName', {
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
                                        <Label text='DNI' htmlFor='dni' />
                                        <Input
                                            id='dni'
                                            type='text'
                                            register={register('dni', {
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
                                        <Label
                                            text='Teléfono'
                                            htmlFor='phone'
                                        />
                                        <Input
                                            id='phone'
                                            type='text'
                                            register={register('phone', {
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
                                {/* <div className='mt-8'>
                                    <Label
                                        text='Dirección'
                                        htmlFor='address'
                                    />
                                    <Input
                                        id='address'
                                        type='text'
                                        register={register('address', {
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
                                </div> */}
                                <div className='mt-8'>
                                    <Label
                                        text='Correo electronico'
                                        htmlFor='email'
                                    />
                                    <Input
                                        id='email'
                                        type='email'
                                        autoComplete='email'
                                        register={register('email', {
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
                                    <Label
                                        text='Contraseña'
                                        htmlFor='password'
                                    />

                                    <Input
                                        type='password'
                                        id='password'
                                        register={register('password', {
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
                                <div className='mt-10'>
                                    <Button disabled={isPending} type='submit'>
                                        {isPending
                                            ? 'Cargando...'
                                            : 'Crear cuenta'}
                                    </Button>
                                </div>
                            </form>
                            <div className='flex items-center justify-center gap-1 mt-8'>
                                <p className=' text-center text-sm text-gray-500'>
                                    ¿Ya tienes una cuenta en Foodie Hub?
                                </p>
                                <NavLink
                                    to='/auth/login'
                                    className='text-orange-500 font-medium text-sm'>
                                    Inicia sesión
                                </NavLink>
                            </div>
                            <div className='flex items-center justify-center gap-1 mt-4'>
                                <p className=' text-center text-sm text-gray-500'>
                                    ¿Olvidaste tu contraseña?
                                </p>
                                <NavLink
                                    to='/auth/forgot-password'
                                    className='text-orange-500 font-medium text-sm'>
                                    restablecer
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
