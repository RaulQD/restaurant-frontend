import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CategoryFormData } from '../../../types/category';
import { ErrorMessage } from '../ErrorMessage';

type CategoryFormProps = {
    register: UseFormRegister<CategoryFormData>;
    errors: FieldErrors<CategoryFormData>;
};

export const CategoryForm = ({ register, errors }: CategoryFormProps) => {
    return (
        <div className=''>
            <div className='flex-1'>
                <div className='flex flex-col gap-7 '>
                    <div className='bg-white p-8 shadow'>
                        <div className='mb-6'>
                            <label
                                htmlFor='name'
                                className='block text-sm  leading-6 text-gray-900'>
                                Categoria
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 mt-2'
                                placeholder='Nombre de la categoia'
                                {...register('name', {
                                    required:
                                        'El nombre de la categoria es requerido.',
                                })}
                            />
                            {errors.name && (
                                <ErrorMessage>
                                    {errors.name.message}
                                </ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
