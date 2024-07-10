import { CategoryForm } from './components/CategoryForm';
import { BiChevronRight } from 'react-icons/bi';

export const CreateCategoryPage = () => {
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Crear Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Categoria</span>
                    <BiChevronRight />
                    <span>Crear Categoria</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form>
                    <CategoryForm />
                    <div className='flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-5 w-full mb-20'>
                        <button
                            type='button'
                            className='hover:bg-gray-200 py-2 px-4 transition-all ease-in rounded-lg font-outfit'>
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='bg-orange-500 hover:bg-orange-600 transition-all ease-in-out py-2 px-4 rounded-lg text-white font-outfit'>
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
