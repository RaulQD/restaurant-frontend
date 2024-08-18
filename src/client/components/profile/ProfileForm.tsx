import { useForm } from 'react-hook-form';
import { User } from '../../../types/auth';
import NoImage from '../../../assets/no-image-user2.png';
import { BiEdit, BiErrorCircle } from 'react-icons/bi';
import { Button, Input, Label } from '../../../ui';

type ProfileFormProps = {
    user: User;
};

export default function ProfileForm({ user }: ProfileFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ defaultValues: user });

    const onSubmit = (data: User) => {};
    return (
        <>
            <div className='bg-white rounded-lg p-8 mb-4'>
                <h1 className='text-xl'>Actualiza tus datos</h1>
                <hr className='border-gray-500 mt-8 mb-10' />
                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p className='font-medium'>Imagen</p>
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
                    <form>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label
                                    htmlFor='firstName'
                                    title='Nombre completo'
                                />
                            </div>
                            <div className='flex-1 flex items-center gap-4'>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='firstName'
                                        register={register('firstName')}
                                    />
                                </div>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='lastName'
                                        register={register('lastName')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label htmlFor='phone' title='Telefono' />
                            </div>
                            <div className='flex-1 '>
                                <div className='w-full'>
                                    <Input
                                        type='text'
                                        id='phone'
                                        register={register('phone')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <Label
                                    htmlFor='address'
                                    title='Tipo de documento'
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
                                    title='Correo electronico'
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
                                color='secondary'
                                width='w-1/6'>
                                Cancelar
                            </Button>
                            <Button type='submit' color='primary' width='w-1/6'>
                                Guardar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
