import { useLogout } from '../auth/components/useLogout';
import { useUser } from '../hooks/useUser';
import HeaderMenu from './HeaderMenu';

type HeaderProps = {
    className?: string;
};

export default function Header({ className }: HeaderProps) {
    const logout = useLogout();
    const { user } = useUser();

    if (user)
        return (
            <header
                className={`h-[7vh] border-gray-300  flex items-center justify-end ${className}`}>
                <nav className='flex items-center font-outfit'>
                    <HeaderMenu logout={logout} user={user} />
                </nav>
            </header>
        );
}
