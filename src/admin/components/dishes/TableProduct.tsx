import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Pagination from '../Pagination';
import { formatCurrency, transformId } from '../../../helpers';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getDishes } from '../../../services/apiDishes';
import { DishesResponseType } from '../../../types/dishes';
import { Modal } from '../../../ui/Modal';
import AddImageForm from './AddImageForm';
import NoImage from '../../../assets/no-image.jpg';
import Spinner from '../../../ui/Spinner';

type TableProductProps = {
    category: string;
    keyword: string;
    page: number;
    setPageQuery: React.Dispatch<React.SetStateAction<number>>
}
export default function TableProduct({ category, keyword, page, setPageQuery }: TableProductProps) {
    const [selectedDishId, setSelectedDishId] = useState<string>('');
    const [modal, setModal] = useState(false);
   
    const limit = 10;

    // VALIDAR SI MI PLATO NO TIENE UNA IMAGEN , PONER UNA IMAGEN POR DEFECTO
    const { data, isLoading, isError, error } = useQuery<DishesResponseType>({
        queryKey: ['dishes',{ page, limit, category, keyword}],
        queryFn: () => getDishes({ page, limit, category, keyword }),
        placeholderData: keepPreviousData,
    });

    const handleImageClick = (dishesId: string) => {
        setSelectedDishId(dishesId);
        setModal(true);
    };

    {
        isLoading && (
            <div className='flex justify-center items-center'>
                <Spinner />
            </div>
        );
    }
    {
        isError && <p className='text-center mt-16'>{error?.message}</p>;
    }
    if (data)
        return (
            <>
                {data.result.length > 0 && (
                    <div className='mb-5 flex flex-col'>
                        <div className='overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='w-full divide-y divide-gray-300'>
                                <thead className='font-outfit uppercase text-[#99a1c7]'>
                                    <tr>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Código
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Detalle del plato
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Precio
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Categoría
                                        </th>
                                        <th className='font-medium px-3 py-3.5 text-sm'>
                                            Disponibilidad
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='font-outfit idivide-y divide-gray-200 bg-white '>
                                    {data?.result.map((dish) => (
                                        <tr key={dish.id}>
                                            <td className=' whitespace-nowrap px-3 py-4 font-medium truncate text-center'>
                                                {transformId(dish.id)}
                                            </td>
                                            <td className=' whitespace-nowrap px-3 py-4 font-medium flex justify-start gap-5 ml-4  truncate '>
                                                <button
                                                    type='button'
                                                    onClick={() =>
                                                        handleImageClick(
                                                            dish.id
                                                        )
                                                    }>
                                                    {dish.images ? (
                                                        <img
                                                            src={dish.images}
                                                            alt={dish.name}
                                                            className='size-12'
                                                        />
                                                    ) : (
                                                        <img
                                                            src={NoImage}
                                                            alt={dish.name}
                                                            className='size-12'
                                                        />
                                                    )}
                                                </button>
                                                <div className='flex flex-col '>
                                                    <p>{dish.name}</p>
                                                    <span className='text-sm text-gray-500'>
                                                        {dish.category.name}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className=' whitespace-nowrap px-3 py-4 font-medium text-center text-sm'>
                                                {formatCurrency(
                                                    dish.originalPrice
                                                )}
                                            </td>
                                            <td className=' whitespace-nowrap px-3 py-4 text-sm font-medium text-center truncate max-w-xs '>
                                                {dish.description}
                                            </td>
                                            <td className=' whitespace-nowrap px-3 py-4 font-medium text-center'>
                                                <span
                                                    className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium  ring-1 ring-inset ${
                                                        dish.available === true
                                                            ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                            : 'bg-red-50 text-red-700 ring-red-600/20'
                                                    }`}>
                                                    {' '}
                                                    {dish.available === true
                                                        ? 'Disponible'
                                                        : 'No disponible'}
                                                </span>
                                            </td>
                                            <td className=' whitespace-nowrap pl-3 pr-4 sm:pr-6 py-4 text-right '>
                                                <Menu>
                                                    <MenuButton className='flex items-center gap-x-2 py-2 px-4 rounded-lg text-sm hover:bg-orange-100 bg-gray-100 transition-all hover:text-orange-600'>
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
                                                                    to={`/dashboard/products/${dish.id}/edit`}
                                                                    className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                                    Editar
                                                                </NavLink>
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <NavLink
                                                                    to={
                                                                        '/dashboard/products/delete'
                                                                    }
                                                                    className='text-xs flex items-center gap-x-2 rounded-lg transition-colors hover:bg-orange-100 py-2 px-4 mb-1 text-gray-400 font-medium hover:text-orange-600'>
                                                                    Eliminar
                                                                </NavLink>
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

                        <Pagination
                            page={page}
                            totalItems={data?.pagination.totalDishes || 0}
                            onPageChange={setPageQuery}
                            itemsPerPage={limit}
                        />
                    </div>
                )}
                {!isLoading && !isError && data?.result.length === 0 && (
                    <p className='text-center py-4 mt-16 font-medium font-outfit'>
                        No hay platos registrados en este momento.
                    </p>
                )}
                {/*Card view up to the md breakpoint */}
                {/* <div className='px-4'>
                    <CardViewTable  navAction={navAction} />
                </div> */}
                {modal && (
                    <Modal closeModal={() => setModal(false)}>
                        <AddImageForm
                            dishesId={selectedDishId}
                            onClose={() => setModal(false)}
                        />
                    </Modal>
                )}
            </>
        );
}
