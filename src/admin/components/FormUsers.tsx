export const FormUsers = () => {
    return (
        <div className=' p-4  '>
            <form action='' className='font-outfit '>
                <div className='grid grid-cols-1 md:grid-cols-2 px-8 h-[450px] overflow-x-auto'>
                    <div className=' flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='image_url'
                            className='block  leading-6 text-gray-900 '>
                            Avatar
                        </label>
                        <input type='file' className='w-full' />
                    </div>
                    <div className='col-span-2 flex flex-col md:flex-row md:items-start md:justify-center mb-6'>
                        <div className='flex flex-col items-start justify-center md:mr-4'>
                            <label
                                htmlFor='first_name'
                                className='block  leading-6 text-gray-900 '>
                                Nombres
                            </label>
                            <input
                                type='text'
                                name='first_name'
                                id='first_name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                placeholder='Nombres'
                            />
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <label
                                htmlFor='last_name'
                                className='block  leading-6 text-gray-900 '>
                                Apellidos
                            </label>
                            <input
                                type='text'
                                name='last_name'
                                id='last_name'
                                className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                                placeholder='Apellidos'
                            />
                        </div>
                    </div>

                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='dni'
                            className='block  leading-6 text-gray-900 '>
                            Documento de identidad
                        </label>
                        <input
                            type='text'
                            name='dni'
                            id='dni'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='DNI'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='phone'
                            className='block  leading-6 text-gray-900 '>
                            Telefono
                        </label>
                        <input
                            type='text'
                            name='phone'
                            id='phone'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='987654321'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='position'
                            className='block  leading-6 text-gray-900 '>
                            Cargo
                        </label>
                        <input
                            type='text'
                            name='position'
                            id='position'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='Administrador'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='salary'
                            className='block  leading-6 text-gray-900 '>
                            Sueldo
                        </label>
                        <input
                            type='text'
                            name='position'
                            id='position'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='1000.00'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='email'
                            className='block  leading-6 text-gray-900 '>
                            Correo electronico
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='example@example.com'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center mb-6'>
                        <label
                            htmlFor='password'
                            className='block leading-6 text-gray-900 '>
                            Contraseña
                        </label>
                        <input
                            type='text'
                            name='password'
                            id='password'
                            className='block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 mt-2'
                            placeholder='Contraseña'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-start justify-center gap-4 '>
                        <label
                            htmlFor='roles'
                            className='block leading-6 text-gray-900 '>
                            Roles
                        </label>
                        <div className='flex items-center justify-start gap-4  '>
                            <input
                                type='checkbox'
                                name='password'
                                id='password'
                                className=''
                            />
                            <div>
                                <p>Administrador</p>
                                <span className='text-sm text-[#808AA3] font-normal'>
                                    Manipulara todo la pagina web incluyendo
                                    dashboard y pagina web.
                                </span>
                            </div>
                        </div>
                        <div className='border-b-2 w-full  border-slate-100'></div>
                        <div className='flex items-center justify-start gap-4 '>
                            <input
                                type='checkbox'
                                name='password'
                                id='password'
                            />
                            <div>
                                <p className='text-sm'>Empleados</p>
                                <span className='text-sm text-[#808AA3] font-normal'>
                                    Manipular ciertas vistas del Dashboard
                                </span>
                            </div>
                        </div>
                        <div className='border-b-2 w-full  border-slate-100'></div>
                        <div className='flex items-center justify-start gap-4'>
                            <input
                                type='checkbox'
                                name='password'
                                id='password'
                            />
                            <div>
                                <p>Usuarios</p>
                                <span className='text-sm text-[#808AA3] font-normal'>
                                    Permiso solo para la pagina web
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-8 flex items-center justify-center gap-4'>
                    <button
                        type='button'
                        className='bg-gray-100 hover:bg-gray-200 py-2 px-4 transition-all ease-in rounded-lg font-outfit'>
                        Cancelar
                    </button>
                    <button
                        type='submit'
                        className='bg-orange-500 hover:bg-orange-600 transition-all ease-in-out py-2 px-4 rounded-lg text-white font-outfit'>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};
