import { NavLink } from 'react-router-dom';
import { AuthLoginForm } from '../../../types/auth';
import {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from 'react-hook-form';
// import { authenticateUser } from '../../services/apiUser';
import { useState } from 'react';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { Button, Input, Label } from '../../../ui';

type LoginForm = {
    register: UseFormRegister<AuthLoginForm>;
    errors: FieldErrors<AuthLoginForm>;
    handleSubmit: UseFormHandleSubmit<AuthLoginForm, undefined>;
    onSubmit: (data: AuthLoginForm) => Promise<void>;
};

export default function LoginForm({
    register,
    errors,
    handleSubmit,
    onSubmit,
}: LoginForm) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label title='Correo electrónico' htmlFor='email' />
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
                            <Label title='Contraseña' htmlFor='password' />
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
                        <Button type='submit'>Inicia sesión</Button>
                        {/* <button
                            type='submit'
                            className=' w-full rounded-md border border-orange-500 py-2 text-sm font-semibold leading-6 text-black hover:text-white hover:bg-orange-500 focus:outline-none transition-all'>
                            Inicia sesión
                        </button> */}
                    </div>
                </form>
            </div>
        </>
    );
}
