import { ChangeEvent, useEffect } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BiEditAlt, BiPlus } from 'react-icons/bi';

import NoImage from '../../../../assets/no-image.jpg';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { useAppStore } from '../../../../store/useAppStore';
import { DishesFormData } from '../../../../types/index';
import { getCategories } from '../../category/services/CategoryApi';

type DishesFormProps = {
    register: UseFormRegister<DishesFormData>;
    errors: FieldErrors<DishesFormData>;
};

export const DishesForm = ({ register, errors }: DishesFormProps) => {
    const navigate = useNavigate();
    const redirectTo = () => {
        navigate('/dashboard/category/add');
    };
    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: getCategories,
    });
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className='flex flex-col lg:flex-row'>
            <div className=' mr-0 lg:mr-10 flex flex-col gap-7 mb-7 lg:mb-0'>
                <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
                    <div>
                        <div className='flex justify-between items-center  mb-10'>
                            <h2 className=' text-lg font-medium'>Imagen</h2>
                            <label
                                htmlFor='image_url'
                                className='font-outfit bg-orange-400 p-1 rounded-md cursor-pointer hover:bg-orange-600 text-white transition-all ease-in-out'>
                                <BiEditAlt className='text-xl ' />
                                <input
                                    type='file'
                                    id='image_url'
                                    className='hidden'
                                    {...register('image_url', {
                                        required: true,
                                    })}
                                />
                            </label>
                        </div>

                        <div className='relative flex items-center justify-center'>
                            <img
                                src={NoImage}
                                alt='NoImage'
                                className='object-cover size-44 border border-orange-400 border-dashed'
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-center text-slate-400 font-outfit'>
                            Configura la imagen del producto. Solo archivos
                            .png, .jpg and .jpeg son aceptados.
                        </p>
                    </div>
                    {errors.image_url && (
                        <ErrorMessage>{errors.image_url.message}</ErrorMessage>
                    )}
                </div>
                {/* <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
                    <div className='flex items-center justify-between mb-5'>
                        <h2 className='font-medium text-lg'>Estado</h2>
                        <span className='bg-green-500 w-4 h-4 rounded-full'></span>
                    </div>
                    <select
                        name='available'
                        id='available'
                        className='w-full border border-gray-300 p-2 rounded-md font-outfit focus:outline-none '>
                        <option value='' className='text-sm'>
                            Disponible
                        </option>
                        <option value='' className='text-sm'>
                            No disponible
                        </option>
                    </select>
                </div> */}
                <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
                    <h2 className='font-medium text-lg mb-5'>
                        Detalles del producto
                    </h2>
                    <label
                        htmlFor='id_category'
                        className='block text-sm leading-6 text-gray-900 mb-2 font-outfit'>
                        Categoria
                    </label>

                    <select
                        id='id_category'
                        className='w-full border border-gray-300 p-2 rounded-md font-outfit focus:outline-none '
                        {...register('id_category', {
                            required: 'La categoria es requerida',
                        })}>
                        <option value='0'>Selecciona una categoria</option>
                        {categories?.map((category) => (
                            <option
                                value={category.id_category}
                                key={category.id_category}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                    {errors.id_category && (
                        <ErrorMessage>
                            {errors.id_category.message}
                        </ErrorMessage>
                    )}
                    <button
                        type='button'
                        className='mt-6 py-2 px-5 bg-orange-100 hover:bg-orange-500 text-orange-500 transition-all ease-in-out rounded-lg hover:text-white flex items-center justify-center gap-2 text-sm font-outfit'
                        onClick={() => redirectTo()}>
                        <BiPlus className='text-lg' />
                        Nueva categoria
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col gap-7 '>
                    <div className='bg-white p-8 shadow rounded-lg'>
                        <h3 className='text-lg font-medium mb-6 '>General</h3>
                        <div className='mb-6'>
                            <label
                                htmlFor='dishes_name'
                                className='block text-sm  leading-6 text-gray-900'>
                                Plato
                            </label>

                            <input
                                type='text'
                                id='dishes_name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                placeholder='Nombre del plato'
                                {...register('dishes_name', {
                                    required:
                                        'El nombre del plato es requerido',
                                })}
                            />
                            {errors.dishes_name && (
                                <ErrorMessage>
                                    {errors.dishes_name.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='description'
                                className='block text-sm leading-6 text-gray-900'>
                                Descripción
                            </label>

                            <textarea
                                id='description'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 resize-none h-[200px]'
                                placeholder='Escribe tu descripción aqui'
                                {...register('description', {
                                    required:
                                        'La descripción del plato es requerido',
                                })}
                            />
                            {errors.description && (
                                <ErrorMessage>
                                    {errors.description.message}
                                </ErrorMessage>
                            )}
                        </div>
                    </div>
                    <div className='bg-white p-8 shadow'>
                        <h3 className='text-lg font-medium mb-6 '>Precios</h3>
                        <div>
                            <label
                                htmlFor='price'
                                className='block text-sm leading-6 text-gray-900 '>
                                Precio base
                            </label>

                            <input
                                type='text'
                                id='price'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 font-outfit'
                                placeholder='0.00'
                                {...register('price', {
                                    required: 'El precio es requerido',
                                })}
                            />
                            {errors.price && (
                                <ErrorMessage>
                                    {errors.price.message}
                                </ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
