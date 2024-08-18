import {
    FingerPrintIcon,
    HomeIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/react/20/solid';
import { NavLink  , useLocation, useNavigate } from 'react-router-dom';

const tabs = [
    { name: 'Datos personales', href: '/account/profile', icon: UserIcon },
    {
        name: 'Configuración de la cuenta',
        href: '/account/password',
        icon: FingerPrintIcon,
    },
    {
        name: 'Mis compras',
        href: '/account/my-shoppings',
        icon: ShoppingCartIcon,
    },
    { name: 'Mis Direcciones', href: '/account/address', icon: HomeIcon },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentTab = tabs.filter((tab) => tab.href === location.pathname)[0]
        .href;

    return (
        <div className='bg-white px-2 pt-2 rounded-lg'>
            <div className='mb-8'>
                <div className='sm:hidden'>
                    <label htmlFor='tabs' className='sr-only'>
                        Select a tab
                    </label>
                    <select
                        id='tabs'
                        name='tabs'
                        className='block w-full rounded-md border-gray-600 p-2 '
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            navigate(e.target.value)
                        }
                        value={currentTab}>
                        {tabs.map((tab) => {
                            return (
                                <option value={tab.href} key={tab.name}>
                                    {tab.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className='hidden sm:block'>
                    <div className='border-b border-gray-200'>
                        <nav
                            className='-mb-px flex space-x-8'
                            aria-label='Tabs'>
                            {tabs.map((tab) => (
                                <NavLink  
                                    key={tab.name}
                                    to={tab.href}
                                    className={classNames(
                                        location.pathname === tab.href
                                            ? 'border-orange-500 text-orange-500'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                                    )}>
                                    <tab.icon
                                        className={classNames(
                                            location.pathname === tab.href
                                                ? 'text-orange-500'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                            '-ml-0.5 mr-2 h-5 w-5'
                                        )}
                                        aria-hidden='true'
                                    />
                                    <span>{tab.name}</span>
                                </NavLink >
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}