import { useState } from 'react';
import { BiChevronRight, BiSolidReport } from 'react-icons/bi';
import Dropdown from './Dropdown';

export default function ProductsMenu() {
    const [showDropdown, setShowDropdown] = useState(false);
    const menuItems = [
        { path: '/dashboard/products', label: 'Productos' },
        { path: '/dashboard/products/add', label: 'Añadir Producto' },
        { path: '/dashboard/category', label: 'Categorias'},
        { path: '/dashboard/category/add', label: 'Categoría de Productos', },
    ];

    return (
        <>
            <button
                type='button'
                className=' w-full text-white flex justify-between items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                onClick={() => setShowDropdown(!showDropdown)}>
                <span className='flex items-center gap-4'>
                    <BiSolidReport className='text-orange-500 text-lg' />{' '}
                    Catalogo
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
