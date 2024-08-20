import { useForm } from 'react-hook-form';
import Label from '../../../ui/Label';
import { UpdateCurrentUserPassword } from '../../../types/auth';
import SpinnerMini from '../../../ui/SpinnerMini';
import { Button, Input } from '../../../ui';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { usePassword } from './usePassword';
export default function ChangePasswordForm() {
    const initialValues: UpdateCurrentUserPassword = {
        current_password: '',
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

    const { updatePassword, isPending } = usePassword();

    const onSubmit = (data: UpdateCurrentUserPassword) => {
        updatePassword(data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    const password = watch('password');

    return (
        <div className='bg-white rounded-lg p-8 mb-4'>
            <h1 className='text-xl'>Cambia tu contraseña</h1>
            <hr className='border-gray-500 mt-8 mb-10' />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <Label
                            text='Contraseña actual'
                            htmlFor='current_password'
                        />
                    </div>
                    <div className='flex-1'>
                        <Input
                            type='password'
                            id='current_password'
                            register={register('current_password', {
                                required: 'Este campo es requerido',
                                minLength: {
                                    value: 8,
                                    message:
                                        'La contraseña debe tener al menos 8 caracteres',
                                },
                            })}
                        />
                        {errors.current_password && (
                            <ErrorMessage>
                                {errors.current_password.message}
                            </ErrorMessage>
                        )}
                    </div>
                </div>
                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <Label text='Nueva contraseña' htmlFor='password' />
                    </div>
                    <div className='flex-1'>
                        <Input
                            type='password'
                            id='password'
                            register={register('password', {
                                required: 'Este campo es requerido',
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
                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <Label
                            text='Repetir contraseña'
                            htmlFor='confirmPassword'
                        />
                    </div>
                    <div className='flex-1'>
                        <Input
                            id='confirmPassword'
                            type='password'
                            register={register('confirmPassword', {
                                required: 'Este campo es requerido',
                                minLength: {
                                    value: 8,
                                    message:
                                        'La contraseña debe tener al menos 8 caracteres',
                                },
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
                <div className='flex justify-end'>
                    <Button type='submit' disabled={isPending} width='w-1/6'>
                        {isPending ? (
                            <div className='flex justify-center'>
                                <SpinnerMini />
                            </div>
                        ) : (
                            'Guardar'
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
