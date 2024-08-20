import { SubmitHandler, useForm } from 'react-hook-form';
import { BiChevronLeft, BiMessageAltDots } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { ResetPasswordForm } from '../../../types/auth';
import { useState } from 'react';
import { Button, Input, Label } from '../../../ui';
import { useNewPassword } from './useNewPassword';
import SpinnerMini from '../../../ui/SpinnerMini';

type NewPasswordProps = {
    token: string;
};

export default function NewPassword({ token }: NewPasswordProps) {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues: ResetPasswordForm = {
        password: '',
        confirmPassword: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({ defaultValues: initialValues });

    const { newPassword, isPending } = useNewPassword();

    const onSubmit: SubmitHandler<ResetPasswordForm> = (formData) => {
        const data = {
            formData,
            token,
        };
        newPassword(data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    const password = watch('password');

    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
                    <div className='flex flex-col items-center'>
                        <div className='mb-10 border border-gray-200 p-4 rounded-md bg-white shadow-sm'>
                            <BiMessageAltDots className='text-3xl text-black' />
                        </div>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                            Establece tu nueva contraseña
                        </h2>
                        <p className='text-gray-600 mb-8 text-sm text-center'>
                            Ingresa tu nueva contraseña y repítela para
                            confirmarla
                        </p>
                    </div>
                    <form
                        className='space-y-6'
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate>
                        <div>
                            <Label
                                htmlFor='password'
                                text='Nueva contraseña'
                            />
                            <div className='mt-2'>
                                <Input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='off'
                                    register={register('password', {
                                        required: 'La contraseña es requerida.',
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
                        <div>
                            <Label
                                htmlFor='confirmPassword'
                                text='Confirmar contraseña'
                            />

                            <div className='mt-2'>
                                <Input
                                    id='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='off'
                                    register={register('confirmPassword', {
                                        required: 'Confirma tu contraseña.',
                                        validate: (value) =>
                                            value === password ||
                                            'Las contraseñas no son iguales.',
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <ErrorMessage>
                                        {errors.confirmPassword.message}
                                    </ErrorMessage>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input
                                type='checkbox'
                                id='showPassword'
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className=' h-4 w-4 rounded transition duration-200'
                            />
                            <Label
                                htmlFor='showPassword'
                                text='Mostrar contraseña'
                            />
                        </div>
                        <Button type='submit' disabled={isPending}>
                            {!isPending ? (
                                'Restablecer contraseña'
                            ) : (
                                <div className='flex items-center justify-center'>
                                    <SpinnerMini />
                                </div>
                            )}
                        </Button>
                    </form>
                    <div className='mt-6 text-center '>
                        <NavLink
                            to='/auth/login'
                            className='text-gray-500 font-normal text-sm flex justify-center items-center'>
                            <BiChevronLeft className='text-gray-500 font-normal text-lg' />
                            Regresar al login
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
