import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Dropdown from './Dropdown';
import { FaUsers } from 'react-icons/fa';

export default function CustomersMenu() {
    const [showDropdown, setShowDropdown] = useState(false);
    const menuItems = [
        { path: '/dashboard/customers', label: 'Lista de clientes' },
    ];

    return (
        <>
            <button
                type='button'
                className=' w-full text-white flex justify-between items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                onClick={() => setShowDropdown(!showDropdown)}>
                <span className='flex items-center gap-4'>
                    <FaUsers className='text-orange-500 text-lg' />{' '}
                    Clientes
                </span>
                <BiChevronRight
                    className={`text-orange-500 text-xl mt-1 ${
                        showDropdown ? 'rotate-90' : ''
                    }  transition-all`}
                />
            </button>
            <Dropdown showDropdown={showDropdown} menuItems={menuItems} />
        </>
    );
}
