import { useState } from 'react';
import Dropdown from './Dropdown';
import { BiChevronRight, BiSolidReport } from 'react-icons/bi';

export const EmployeesMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const menuItems = [
        { path: '/dashboard/employees', label: 'Empleados' },
        { path: '/dashboard/employees/add', label: 'Añadir Empleado' },
    ];
    return (
        <>
            <button
                type='button'
                className=' w-full text-white flex justify-between items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                onClick={() => setShowDropdown(!showDropdown)}>
                <span className='flex items-center gap-4'>
                    <BiSolidReport className='text-orange-500 text-lg' />{' '}
                    Empleados
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
};
