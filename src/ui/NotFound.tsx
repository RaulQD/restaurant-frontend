import { useLocation, useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Obtener la ruta anterior desde el estado de la navegación
    const from = location.state?.from?.pathname || '/';


    return (
        <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
            <div className='text-center'>
                <p className='text-base font-semibold text-orange-500'>404</p>
                <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Pagina no encontrada.
                </h1>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                    Lo siento, no pudimos encontrar la página que buscas.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <button
                        className='rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                        onClick={ () => navigate(from,{ replace: true })} >
                        Go back home
                    </button>
                </div>
            </div>
        </main>
    );
}
