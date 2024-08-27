import { NavLink} from 'react-router-dom';

import { useState } from 'react';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { Button, Input, Label } from '../../../ui';
import { useForm } from 'react-hook-form';
import { AuthLoginForm } from '../../../types/auth';
import { useLogin } from './useLogin';
import SpinnerMini from '../../../ui/SpinnerMini';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues: AuthLoginForm = {
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
    const { login, isPending } = useLogin();
    const onSubmit = (data: AuthLoginForm) => {
        login(data,{
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label text='Correo electrónico' htmlFor='email' />
                        <div className='mt-2'>
                            <Input
                                id='email'
                                type='email'
                                autoComplete='email'
                                placeholder='example@example.com'
                                register={register('email', {
                                    required: 'El email es requerido',
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
                            <Label text='Contraseña' htmlFor='password' />
                        </div>
                        <div className='mt-2'>
                            <Input
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                autoComplete='off'
                                placeholder='********'
                                register={register('password', {
                                    required: 'La contraseña es requerida',
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
                                        setShowPassword(!showPassword)
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
                        <Button type='submit' disabled={isPending}>
                            {!isPending ? (
                                'Iniciar Sesión'
                            ) : (
                                <div className='flex items-center justify-center'>
                                    {' '}
                                    <SpinnerMini />
                                </div>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
