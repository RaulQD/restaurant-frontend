import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';

type PaginationProps = {
    totalItems: number;
};

export default function Pagination({ totalItems }: PaginationProps) {
    const itemsPerPage = 10;
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page')
        ? 1
        : Number(searchParams.get('page'));

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        const next = currentPage === pageCount ? currentPage : currentPage + 1;
        searchParams.set('page', next.toString());
        setSearchParams(searchParams);
    };
    const prevPage = () => {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set('page', prev.toString());
        setSearchParams(searchParams);
    };

    if (pageCount <= 1) return null;

    return (
        <div className='flex mt-4 justify-between px-5'>
            <span className='text-sm'>
                Mostrando <span>{(currentPage - 1) * itemsPerPage + 1}</span> al{' '}
                <span>
                    {currentPage === pageCount
                        ? totalItems
                        : currentPage * itemsPerPage}
                </span>{' '}
                of <span>{totalItems}</span> resultados
            </span>
            <nav className='flex justify-center gap-2 text-sm'>
                <button
                    type='button'
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`p-2 flex justify-center items-center rounded-md transition-all ${
                        currentPage === 1
                            ? ''
                            : 'hover:bg-orange-500  hover:text-white'
                    }`}>
                    <BiChevronLeft className='text-xl' />
                    Anterior
                </button>

                <button
                    type='button'
                    onClick={nextPage}
                    disabled={currentPage === pageCount}
                    className={`p-2 flex justify-center items-center rounded-md transition-all ${
                        currentPage === pageCount
                            ? ''
                            : 'hover:bg-orange-500  hover:text-white'
                    }`}>
                    Siguiente
                    <BiChevronRight className='text-xl' />
                </button>
            </nav>
        </div>
    );
}
