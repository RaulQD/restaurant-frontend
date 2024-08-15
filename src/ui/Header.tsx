
import { useLogout } from '../auth/pages/useLogout';
import { useUser } from '../hooks/useUser';
import HeaderMenu from './HeaderMenu';

export default function Header() {
    const logout = useLogout();
    const { user } = useUser();

    if (user)
        return (
            <header className='h-[7vh] border-b border-gray-300 bg-white p-8 flex items-center justify-end'>
                <nav className='flex items-center font-outfit'>
                    <HeaderMenu logout={logout} user={user} />
                </nav>
            </header>
        );
}
