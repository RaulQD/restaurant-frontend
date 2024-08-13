import { SubmitHandler, useForm } from 'react-hook-form';
import { BiChevronLeft } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { ErrorMessage } from '../../admin/components/ErrorMessage';
import { ForgotPasswordForm } from '../../types/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { forgotPassword } from '../../services/apiAuth';

export default function ForgotPassword() {
    const initialValues: ForgotPasswordForm = {
        email: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ defaultValues: initialValues });

    const mutation = useMutation({
        mutationFn: forgotPassword,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data.message);
            reset()
        },
    });

    const onSubmit: SubmitHandler<ForgotPasswordForm> = async (data) => {
        await mutation.mutateAsync(data);
    };

    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
                    <div className='flex flex-col items-center'>
                        <div className='mb-10 border border-gray-200 p-4 rounded-md bg-white shadow-sm'>
                            <RiLockPasswordLine className='text-3xl text-black' />
                        </div>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                            ¿Olvidaste tu contraseña?
                        </h2>
                        <p className='text-gray-600 mb-8 text-sm text-center'>
                            No te preocupes, Te enviaremos las instrucciones
                            <span className='text-orange-500'>
                                {' '}
                                para restablecerlo
                            </span>
                            .
                        </p>
                    </div>
                    <form
                        className='space-y-6'
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate>
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
                                        required: 'El email es requerido.',
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
                        <button
                            type='submit'
                            className='w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-200'>
                            Reset password
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
