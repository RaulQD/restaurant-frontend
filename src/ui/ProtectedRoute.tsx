import { ReactNode, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import Spinner from './Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
    requiresAdmin?: boolean;
};

export default function ProtectedRoute({
    children,
    requiresAdmin = false,
}: ProtectedRouteProps) {
    // 1. Cargar el usuario autenticado+
    const { isLoading, isAdmin, isUser } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    // 3. Si el usuario no está autenticado, redirigir a la página de inicio de sesión /logion
    useEffect(() => {
        if (!isLoading) {
            if (!isAdmin && requiresAdmin) {
                // Redirigir a /unauthorized y pasar la ruta actual como estado
                navigate('/not-found', {
                    replace: true,
                    state: { from: location.pathname },
                });
            } else if (!isUser && !isAdmin) {
                // Redirigir a la página de login
                navigate('/auth/login', {
                    replace: true,
                    state: { from: location.pathname },
                });
            }
        }
        if (!isAdmin && !isUser && !isLoading) {
            navigate('/auth/login', {
                replace: true,
                state: { from: location.pathname },
            });
        }
    }, [isAdmin, isUser, isLoading, navigate, requiresAdmin, location]);

    // 2. mientras carga el usuario, mostrar un spinner
    if (isLoading)
        return (
            <div className='h-screen bg-gray-50 flex items-center justify-center'>
                <Spinner />
            </div>
        );
    //  4. Si el usuario está autenticado, mostrar el contenido de la ruta protegida
    return <>{children}</>;
}
