import { BiChevronRight } from 'react-icons/bi';
import TableProduct from '../../components/dishes/TableProduct';
import Filter from '../../../ui/Filter';

export default function ProductsPage() {
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Productos</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8  '>
                <Filter />
            </div>

            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <TableProduct />
            </div>
        </>
    );
}
