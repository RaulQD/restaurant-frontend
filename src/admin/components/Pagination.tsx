import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

type PaginationProps = {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    page,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const navigate = useNavigate();
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const currentPage = page;

    const nextPage = () => {
        if (currentPage === pageCount) {
            onPageChange(currentPage);
        } else {
            onPageChange(currentPage + 1);
        }
        navigate(`?page=${currentPage + 1}&limit=${itemsPerPage}`);
    };
    const prevPage = () => {
        if (currentPage === 1) {
            onPageChange(currentPage);
        } else {
            onPageChange(currentPage - 1);
        }
        navigate(`?page=${currentPage - 1}&limit=${itemsPerPage}`);
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
                    disabled={page === 1}
                    className={`p-2 flex justify-center items-center rounded-md transition-all ${
                        page === 1
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
