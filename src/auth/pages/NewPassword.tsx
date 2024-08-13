import { SubmitHandler, useForm } from 'react-hook-form';
import { BiChevronLeft, BiMessageAltDots } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../admin/components/ErrorMessage';
import { ResetPasswordForm } from '../../types/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { updatePasswordToken } from '../../services/apiAuth';

type NewPasswordProps = {
    token: string;
};

export default function NewPassword({ token }: NewPasswordProps) {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const initialValues: ResetPasswordForm = {
        password: '',
        confirmPassword: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValues });

    const mutation = useMutation({
        mutationFn: updatePasswordToken,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data.message);
            reset();
            navigate('/auth/login');
        },
    });

    const onSubmit: SubmitHandler<ResetPasswordForm> = async (formData) => {
        const data = {
            formData,
            token,
        };
        await mutation.mutateAsync(data);
    };

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
                        </div>
                        <div>
                            <div className='flex items-center justify-start'>
                                <label
                                    htmlFor='confirmPassword'
                                    className='block text-sm font-medium leading-6 text-gray-900'>
                                    Nueva contraseña
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='off'
                                    className='block w-full rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 border border-gray-300'
                                    {...register('confirmPassword', {
                                        required: 'Confirma tu contraseña',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'La contraseña debe tener al menos 8 caracteres',
                                        },
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <ErrorMessage>
                                        {errors.confirmPassword.message}
                                    </ErrorMessage>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='showPassword'
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className=' h-4 w-4 rounded transition duration-200'
                            />
                            <label htmlFor='showPassword' className='ml-2 text-sm'>
                                Mostrar contraseñas
                            </label>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-200'>
                            Restablecer contraseña
                        </button>
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
