import { ReactNode, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const navigate = useNavigate();

    // 1. Cargar el usuario autenticado+
    const { isLoading, isAdmin, isUser } = useUser();

    // 3. Si el usuario no está autenticado, redirigir a la página de inicio de sesión /logion
    useEffect(() => {
        if (!isAdmin && !isUser && !isLoading) {
            navigate('/auth/login');
        }
    }, [isAdmin, isUser, isLoading, navigate]);

    // 2. mientras carga el usuario, mostrar un spinner
    if (isLoading)
        return (
            <div className='h-screen bg-gray-50 flex items-center justify-center'>
                <Spinner />
            </div>
        );
    //  4. Si el usuario está autenticado, mostrar el contenido de la ruta protegida
    if (isAdmin || isUser) return children;
}
