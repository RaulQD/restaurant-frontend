import { useState } from 'react';
import { IconType } from 'react-icons';
import { BiChevronRight } from 'react-icons/bi';
import Dropdown from './Dropdown';

type DropdownItems = {
    path: string;
    label: string;
};
type SidebarDropdownProps = {
    label: string;
    Icon: IconType;
    menuItems: DropdownItems[];
};
export default function SidebarDropdown({
    label,
    Icon,
    menuItems,
}: SidebarDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <li className='mb-3'>
                <button
                    type='button'
                    className=' w-full text-white flex justify-between items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className='flex items-center gap-4'>
                        <Icon className='text-orange-500 text-lg' />
                        {label}
                    </span>
                    <BiChevronRight
                        className={`text-orange-500 text-xl mt-1 ${
                            isOpen ? 'rotate-90' : ''
                        }  transition-all`}
                    />
                </button>
                <Dropdown isOpen={isOpen} menuItems={menuItems} />
            </li>
        </>
    );
}
