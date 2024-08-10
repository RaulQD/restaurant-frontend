import { useQuery } from '@tanstack/react-query';
import CardMenuList from '../components/CardMenuList';
import { getCategories } from '../../admin/services/apiCategory';
// import { useAppStore } from '../../store/useAppStore';
// import { useEffect } from 'react';

export default function MenuPage() {
    // const categories = useAppStore((state) => state.categories);
    // const fetchCategories = useAppStore((state) => state.fetchCategories);

    // useEffect(() => {
    //     fetchCategories();
    // }, [fetchCategories]);
    const { data, isLoading, isError } = useQuery({
        queryKey: ['categoriesClient'],
        queryFn: getCategories,
    });

    return (
        <section className='mt-14 mb-48 px-5 md:px-16 lg:px-32 xl:px-44'>
            <div className='flex flex-col items-center text-center'>
                <div className='flex flex-col items-center gap-2 mb-5'>
                    <span className=' text-[10px] md:text-[12px] text-orange-500 uppercase font-bold font-poppins'>
                        nuestro menu especial
                    </span>
                    <h2 className=' text-2xl mdtext-3xl lg:text-4xl xl:text-5xl uppercase font-extrabold font-poppins'>
                        Menu del día
                    </h2>
                </div>
                <p className='w-full lg:w-3/5 text-[#444341] font-poppins text-sm'>
                    Disfruta de nuestra variedad de platos, como el tradicional
                    ceviche de pescado fresco, la papa a la huancaína suave y el
                    lomo saltado jugoso y mucho más.
                </p>
            </div>
            {/*Categoria de los platos*/}
            <div className='mt-9'>
                <ul className=' flex flex-wrap justify-center items-center gap-5'>
                    {data?.map((category) => (
                        <li key={category.id}>
                            <button
                                type='button'
                                className='bg-slate-100 text-black hover:text-white py-2 px-4 text-sm font-bold font-poppins uppercase hover:bg-orange-500 rounded shadow-sm'>
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                <CardMenuList />
                <CardMenuList />
                <CardMenuList />
                <CardMenuList />
                <CardMenuList />
            </div>
        </section>
    );
}
