import { useSearchParams } from 'react-router-dom';

type FilterInputProps = {
    filterField: string;
};

export default function FilterInput({ filterField }: FilterInputProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || '';

  const handleFilterChange = (value:string ) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

    return (
        <div className=''>
            <input
                type='text'
                id='keywordQuery'
                placeholder='Buscar platos'
                className='bg-[#F9F9F9]  w-full py-2 px-4 rounded-lg outline-none focus:bg-gray-100 transition-all ease-in-out text-sm'
                value={currentFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
            />
        </div>
    );
}
