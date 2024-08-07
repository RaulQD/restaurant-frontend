import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

type SidebarItemsProps = {
    path: string;
    label: string;
    Icon: IconType;
    className?: string;
};
export default function SidebarItems({
    path,
    label,
    Icon,
    className,
}: SidebarItemsProps) {
    return (
        <li className='mb-3'>
        <NavLink
            to={path}
            className={`text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${className}`}>
            <Icon className='text-orange-500 text-lg' />
            {label}
        </NavLink>
        </li>
    );
}
