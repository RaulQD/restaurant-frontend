import { useForm } from 'react-hook-form';
import { User } from '../../../types/auth';
import NoImage from '../../../assets/no-image-user2.png';
import { BiEdit, BiErrorCircle } from 'react-icons/bi';
import { Button, Input, Label } from '../../../ui';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { useProfile } from './useProfile';
import SpinnerMini from '../../../ui/SpinnerMini';

type ProfileFormProps = {
    user: User;
};

export default function ProfileForm({ user }: ProfileFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: user });

    const { profile, isPending } = useProfile();
    const onSubmit = (data: User) => {
        profile(data);
    };
    return (
        <>
            <div className='bg-white rounded-lg p-8 mb-4'>
                <h1 className='text-xl'>Actualiza tus datos</h1>
                <hr className='border-gray-500 mt-8 mb-10' />
                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p className=' text-sm font-medium'>Avatar</p>
                    </div>
                    <div className='flex-1'>
                        <div className='relative mb-2'>
                            <img
                                src={NoImage}
                                alt='no-image'
                                className='h-20 w-20 bg-gray-200 rounded-md object-cover'
                            />
                            <label
                                htmlFor='images'
                                className='absolute bg-orange-500 p-1 hover:cursor-pointer rounded-full -top-3 left-16'>
                                <BiEdit className='text-white' />
                            </label>
                            <input type='file' className='hidden' id='images' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            Solo se permiten imagenes en formato jpg, jpeg, png
                        </p>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label
                                    htmlFor='firstName'
                                    text='Nombre completo'
                                />
                            </div>
                            <div className='flex-1 flex items-center gap-4'>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='firstName'
                                        register={register('firstName', {
                                            required: 'El nombre es requerido',
                                            minLength: {
                                                value: 3,
                                                message:
                                                    'El nombre debe tener al menos 3 caracteres',
                                            },
                                        })}
                                    />
                                    {errors.firstName && (
                                        <ErrorMessage>
                                            {errors.firstName.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='lastName'
                                        register={register('lastName', {
                                            required:
                                                'El apellido es requerido',
                                            minLength: {
                                                value: 3,
                                                message:
                                                    'El apellido debe tener al menos 3 caracteres',
                                            },
                                        })}
                                    />
                                    {errors.lastName && (
                                        <ErrorMessage>
                                            {errors.lastName.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label htmlFor='phone' text='Telefono' />
                            </div>
                            <div className='flex-1 '>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='phone'
                                        register={register('phone', {
                                            required:
                                                'El telefono es requerido',
                                            maxLength: {
                                                value: 9,
                                                message:
                                                    'El telefono debe tener 9 digitos',
                                            },
                                            minLength: {
                                                value: 9,
                                                message:
                                                    'El telefono debe tener 9 digitos',
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
                        </div>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label
                                    htmlFor='address'
                                    text='Tipo de documento'
                                />
                            </div>
                            <div className='flex-1 '>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='dni'
                                        disabled
                                        register={register('dni')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4 flex items-center gap-1'>
                                <Label
                                    htmlFor='email'
                                    text='Correo electronico'
                                />
                                <BiErrorCircle />
                            </div>
                            <div className='flex-1 '>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='email'
                                        disabled
                                        register={register('email')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end gap-4'>
                            <Button
                                type='submit'
                                color='primary'
                                width='w-1/6'
                                disabled={isPending}>
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
            </div>
        </>
    );
}
