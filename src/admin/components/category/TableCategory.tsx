import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCategory, getCategories } from '../../../services/apiCategory';
import { Categories } from '../../../types/category';
import toast from 'react-hot-toast';

export default function TableCategory() {
    const { data: category, isLoading } = useQuery<Categories[]>({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: deleteCategory,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
            toast.success(data.message);
        },
    });
    const handleDelete = (id: Categories['id']) => {
        mutate(id);
    };

    if (isLoading) return <p>Loading...</p>;
    if (category)
        return (
            <>
                <div className='mb-5 flex flex-col'>
                    {category.length ? (
                        <div className='overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg align-middle'>
                            <table className='w-full divide-y divide-gray-300'>
                                <thead className='font-outfit uppercase text-[#99a1c7] text-center'>
                                    <tr>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Código
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Category
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Disponibilidad
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='font-outfit divide-y divide-gray-200 bg-white text-center'>
                                    {category.map((category) => (
                                        <tr key={category.id}>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm font-medium '>
                                                {category.id}
                                            </td>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm font-medium'>
                                                {category.name}
                                            </td>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm font-medium'>
                                                <span
                                                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset  ${
                                                        category.available ===
                                                        true
                                                            ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                            : 'bg-red-50 text-red-700 ring-red-600/20'
                                                    }`}>
                                                    {' '}
                                                    {category.available === true
                                                        ? 'Disponible'
                                                        : 'No disponible'}
                                                </span>
                                            </td>
                                            <td className='whitespace-nowrap pl-3 pr-4 sm:pr-6 py-4 text-right text-sm flex justify-center'>
                                                <Menu>
                                                    <MenuButton className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-orange-100 bg-gray-100 transition-all hover:text-orange-600'>
                                                        Acciones
                                                        <BiChevronDown className='text-lg' />
                                                    </MenuButton>
                                                    <Transition
                                                        enter='transition ease-out duration-75'
                                                        enterFrom='opacity-0 scale-95'
                                                        enterTo='opacity-100 scale-100'
                                                        leave='transition ease-in duration-100'
                                                        leaveFrom='opacity-100 scale-100'
                                                        leaveTo='opacity-0 scale-95'>
                                                        <MenuItems
                                                            anchor={{
                                                                to: 'bottom end',
                                                                gap: '4px',
                                                            }}
                                                            className='py-4 px-2 bg-white rounded-lg shadow-lg w-36'>
                                                            <MenuItem>
                                                                <NavLink
                                                                    to={`/admin/dashboard/category/${category.id}/edit`}
                                                                    className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                                    Editar
                                                                </NavLink>
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <button
                                                                    className='w-full text-start text-xs  gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            category.id
                                                                        )
                                                                    }>
                                                                    Eliminar
                                                                </button>
                                                            </MenuItem>
                                                        </MenuItems>
                                                    </Transition>
                                                </Menu>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className='text-center pt-16 font-outfit text-xl '>
                            No hay categorias disponibles.
                        </p>
                    )}
                </div>
            </>
        );
}
