import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate();
    const redirectTo = () => {
        // redirect to the SignUp page
        navigate('/registration');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000);
    };
    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-8 pt-5 pb-10'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm '>
                <img
                    src='./logo.svg'
                    alt='logo'
                    className='mx-auto h-15 w-auto'
                />
                <h2 className='mt-4 text-center text-base md:text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                    Inicia sesión con tu cuenta
                </h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
                <form className='space-y-6'>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Correo electronico
                        </label>
                        <div className='mt-2'>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                autoComplete='email'
                                className='block w-full rounded-md border p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                            />
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center justify-start'>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium leading-6 text-gray-900'>
                                Contraseña
                            </label>
                        </div>
                        <div className='mt-2'>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='off'
                                className='block w-full rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 border border-gray-300'
                            />
                        </div>
                        <div className='text-sm flex justify-end mt-4'>
                            <a
                                href='#'
                                className='font-semibold text-orange-600 hover:text-orange-500'>
                                ¿Olvidates tú contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-[#F29C5E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'>
                            Inicia sesión
                        </button>
                    </div>
                </form>

                <p className='mt-8 text-center text-sm text-gray-500'>
                    ¿No tienes cuenta?{' '}
                    <button
                        type='button'
                        className='font-semibold leading-6 text-black hover:underline'
                        onClick={redirectTo}>
                        Registrate y se parte de nosotros.
                    </button>
                </p>
            </div>
        </div>
    );
};
