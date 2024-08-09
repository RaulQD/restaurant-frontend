import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ErrorMessage } from '../../../components/ErrorMessage';
import { getCategories } from '../../../services/apiCategory';
import { DishFormData } from '../types/dishes';
import { BiPlus } from 'react-icons/bi';

type DishesFormProps = {
    register: UseFormRegister<DishFormData>;
    errors: FieldErrors<DishFormData>;
    isEditMode: boolean;
};

export const DishesForm = ({
    register,
    errors,
    isEditMode,
}: DishesFormProps) => {
    const navigate = useNavigate();
    const redirectTo = () => {
        navigate('/dashboard/category/add');
    };
    const { data } = useQuery({
        queryKey: ['category'],
        queryFn: getCategories,
    });

    if (data)
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='bg-white shadow p-4 md:p-6 lg:p-8 w-full rounded-lg col-span-2'>
                        <h2 className='font-outfit text-xl font-medium mb-5'>
                            Información básica
                        </h2>
                        <div className='border border-gray-300 rounded-lg p-4'>
                            <div className='mb-6'>
                                <label
                                    htmlFor='name'
                                    className='block text-sm leading-6 text-gray-600 font-medium'>
                                    Ingresa el nombre del plato
                                </label>

                                <input
                                    type='text'
                                    id='name'
                                    className='block w-full rounded-md border-0 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 text-sm sm:leading-6 mt-4'
                                    placeholder='Nombre del plato'
                                    {...register('name', {
                                        required:
                                            'El nombre del plato es requerido.',
                                        minLength: {
                                            value: 5,
                                            message:
                                                'El nombre de plato debe tener al menos 5 caracteres.',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z\s]+$/i,
                                            message:
                                                'El nombre del plato solo debe contener letras',
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <ErrorMessage>
                                        {errors.name.message}
                                    </ErrorMessage>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor='description'
                                    className='block text-sm leading-6 text-gray-600 font-medium'>
                                    Ingresa la descripción aquí
                                </label>

                                <textarea
                                    id='description'
                                    className='block w-full rounded-md border-0 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-red-500 text-sm sm:leading-6 mt-4 resize-none h-[200px]'
                                    placeholder='Escribe tu descripción aqui'
                                    {...register('description', {
                                        required:
                                            'La descripción del plato es requerido.',
                                        minLength: {
                                            value: 20,
                                            message:
                                                'La descripción debe tener al menos 20 caracteres.',
                                        },
                                    })}
                                />
                                {errors.description && (
                                    <ErrorMessage>
                                        {errors.description.message}
                                    </ErrorMessage>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 col-span-2'>
                      
                        <div className='bg-white shadow p-4 md:p-6 lg:p-8 w-full rounded-lg'>
                            <h2 className='font-medium text-lg mb-5'>
                                Categoria del producto
                            </h2>
                            <label
                                htmlFor='category'
                                className='block text-sm leading-6 text-gray-600 font-medium'>
                                Categoria
                            </label>

                            <select
                                id='category'
                                className='w-full border border-gray-300 p-2 rounded-md font-outfit text-sm focus:outline-none mt-2'
                                {...register('category', {
                                    required: 'La categoria es requerida.',
                                })}>
                                <option value=''>
                                    Selecciona una categoria
                                </option>
                                {data?.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <ErrorMessage>
                                    {errors.category.message}
                                </ErrorMessage>
                            )}
                            <button
                                type='button'
                                className='mt-7 py-2 px-5 bg-orange-100 hover:bg-orange-500 text-orange-500 transition-all ease-in-out rounded-lg hover:text-white flex items-center justify-center gap-2 text-sm font-outfit'
                                onClick={() => redirectTo()}>
                                <BiPlus className='text-lg' />
                                Nueva categoria
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 col-span-2'>
                        <div className='bg-white shadow p-4 md:p-6 lg:p-8 w-full rounded-lg'>
                            <div className='border border-gray-300 rounded-lg p-4'>
                                <h2 className='font-outfit text-xl font-medium mb-5'>
                                    Precios
                                </h2>
                                <div className='relative'>
                                    <label
                                        htmlFor='originalPrice'
                                        className='block text-sm leading-6 text-gray-900 '>
                                        Precio base
                                    </label>
                                    <input
                                        type='number'
                                        id='originalPrice'
                                        className='block w-full rounded-md border-0 py-2 pl-10 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 font-outfit'
                                        placeholder='0.00'
                                        {...register('originalPrice', {
                                            required: 'El precio es requerido',
                                            min: {
                                                value: 5.0,
                                                message:
                                                    'El precio debe ser mayor a S/. 5.00.',
                                            },
                                        })}
                                    />
                                    <span className='absolute bottom-2 translate-x-1/2 font-outfit'>
                                        S/.
                                    </span>
                                </div>
                                {errors.originalPrice && (
                                    <ErrorMessage>
                                        {errors.originalPrice.message}
                                    </ErrorMessage>
                                )}
                            </div>
                        </div>
                        {isEditMode && (
                            <div className='bg-white shadow p-4 md:p-6 lg:p-8 rounded-lg w-full'>
                                <div className='border border-gray-300 rounded-lg p-4'>
                                    <div className='flex justify-between items-center mb-5'>
                                        <h2 className='font-outfit text-xl font-medium'>
                                            Disponibilidad
                                        </h2>
                                    </div>
                                    <label
                                        htmlFor='available'
                                        className='block text-sm leading-6 text-gray-600 font-medium '>
                                        Ingresa la disponibilidad del plato
                                    </label>
                                    <select
                                        id='available'
                                        className='w-full border border-gray-300 p-2 rounded-md font-outfit focus:outline-none text-sm mt-2'
                                        {...register('available', {
                                            required:
                                                'La disponibilidad es requerida.',
                                        })}>
                                        <option value=''>
                                            Selecciona la disponibilidad
                                        </option>
                                        <option
                                            value='true'
                                            className='text-sm'>
                                            Disponible
                                        </option>
                                        <option
                                            value='false'
                                            className='text-sm'>
                                            No disponible
                                        </option>
                                    </select>
                                    {errors.available && (
                                        <ErrorMessage>
                                            {errors.available.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
};
