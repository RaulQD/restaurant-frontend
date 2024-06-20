import { BiChevronRight, BiEditAlt, BiPlus } from 'react-icons/bi';
import NoImage from '../../assets/no-image.jpg';

export const CreateProductsPage = () => {
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Crear Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Home</span>
                    <BiChevronRight />
                    <span>Productos</span>
                    <BiChevronRight />
                    <span>Crear Productos</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='mr-10 flex flex-col gap-7 '>
                            <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg '>
                                <div>
                                    <div className='flex justify-between items-center  mb-10'>
                                        <h2 className=' text-lg font-medium'>
                                            Imagen
                                        </h2>
                                        <label
                                            htmlFor='file'
                                            className='font-outfit bg-orange-400 p-1 rounded-md cursor-pointer hover:bg-orange-600 text-white transition-all ease-in-out'>
                                            <BiEditAlt className='text-xl ' />
                                            <input
                                                type='file'
                                                name='file'
                                                id='file'
                                                className='hidden'
                                            />
                                        </label>
                                    </div>

                                    <div className='relative flex items-center justify-center'>
                                        <img
                                            src={NoImage}
                                            alt='NoImage'
                                            className='  object-cover size-44 border border-orange-400 border-dashed'
                                        />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <p className='text-sm text-center text-slate-400 font-outfit'>
                                        Configura la imagen del producto. Solo
                                        archivos .png, .jpg and .jpeg son
                                        aceptados.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
                                <div className='flex items-center justify-between mb-5'>
                                    <h2 className='font-medium text-lg'>
                                        Estado
                                    </h2>
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
                            <div className='bg-white shadow p-8 w-full lg:w-[300px] rounded-lg'>
                                <h2 className='font-medium text-lg mb-5'>
                                    Detalles del producto
                                </h2>
                                <label
                                    htmlFor='name'
                                    className='block text-sm leading-6 text-gray-900 mb-2 font-outfit'>
                                    Categoria
                                </label>

                                <select
                                    name='category'
                                    id='category'
                                    className='w-full border border-gray-300 p-2 rounded-md font-outfit focus:outline-none '>
                                    <option value='' disabled selected>
                                        Selecciona una categoria
                                    </option>
                                    <option value=''>Platos Principales</option>
                                    <option value=''>Entradas</option>
                                    <option value=''>Ensaladas</option>
                                    <option value=''>Postres</option>
                                    <option value=''>Sopas y Caldos</option>
                                </select>
                                <button
                                    type='button'
                                    className='mt-6 py-2 px-5 bg-orange-100 hover:bg-orange-500 text-orange-500 transition-all ease-in-out rounded-lg hover:text-white flex items-center justify-center gap-2 text-sm font-outfit'>
                                    <BiPlus className='text-lg' />
                                    Nueva categoria
                                </button>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='mb-7 flex space-x-8 '>
                                <h2 className='cursor-pointer pb-2 border-b-2 border-orange-500 text-orange-500'>
                                    General
                                </h2>
                            </div>
                            <div className='flex flex-col gap-7 '>
                                <div className='bg-white p-8 shadow'>
                                    <h3 className='text-lg font-medium mb-6 '>
                                        Detalles del producto
                                    </h3>
                                    <div className='mb-6'>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm  leading-6 text-gray-900'>
                                            Producto
                                        </label>

                                        <input
                                            type='text'
                                            name='price'
                                            id='price'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                            placeholder='Nombre del producto'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm  leading-6 text-gray-900'>
                                            Descripción
                                        </label>

                                        <textarea
                                            name='name'
                                            id='name'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 resize-none h-[200px]'
                                            placeholder='Escribe tu descripción aqui'
                                        />
                                    </div>
                                </div>
                                <div className='bg-white p-8 shadow'>
                                    <h3 className='text-lg font-medium mb-6 '>
                                        Precios
                                    </h3>
                                    <div>
                                        <label
                                            htmlFor='price'
                                            className='block text-sm leading-6 text-gray-900 '>
                                            Precio
                                        </label>

                                        <input
                                            type='text'
                                            name='price'
                                            id='price'
                                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2 font-outfit'
                                            placeholder='Nombre del producto'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-end gap-4 mt-5'>
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
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
