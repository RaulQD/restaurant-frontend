export const CategoryForm = () => {
    return (
        <div className='flex flex-collg:flex-row'>
            <div className='mr-10 flex flex-col gap-7 '>
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
            </div>
            <div className='flex-1'>
                <div className='flex flex-col gap-7 '>
                    <div className='bg-white p-8 shadow'>
                        <h3 className='text-lg font-medium mb-6 '>General</h3>
                        <div className='mb-6'>
                            <label
                                htmlFor='name'
                                className='block text-sm  leading-6 text-gray-900'>
                                Categoria
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
                                className='block text-sm leading-6 text-gray-900'>
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
                </div>
                
            </div>
        </div>
    );
};
