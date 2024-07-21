import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CategoryFormData } from '../../../../types/category';
import { ErrorMessage } from '../../../components/ErrorMessage';

type CategoryFormProps = {
    register: UseFormRegister<CategoryFormData>;
    errors: FieldErrors<CategoryFormData>;
};

export const CategoryForm = ({ register, errors }: CategoryFormProps) => {
    return (
        <div className=''>
            {/* <div className='mr-10 flex flex-col gap-7 '>
                <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
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
                </div>
            </div> */}
            <div className='flex-1'>
                <div className='flex flex-col gap-7 '>
                    <div className='bg-white p-8 shadow'>
                        <div className='mb-6'>
                            <label
                                htmlFor='category_name'
                                className='block text-sm  leading-6 text-gray-900'>
                                Categoria
                            </label>
                            <input
                                type='text'
                                id='category_name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 mt-2'
                                placeholder='Nombre del producto'
                                {...register('category_name', {
                                    required:
                                        'El nombre de la categoria es requerido.',
                                })}
                            />
                            {errors.category_name && (
                                <ErrorMessage>
                                    {errors.category_name.message}
                                </ErrorMessage>
                            )}
                        </div>
                        {/* <div>
                            <label
                                htmlFor='name'
                                className='block text-sm leading-6 text-gray-900'>
                                Descripción
                            </label>

                            <textarea
                                name='name'
                                id='name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 resize-none h-[200px]'
                                placeholder='Escribe tu descripción aqui'
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
