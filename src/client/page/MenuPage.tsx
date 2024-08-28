import CardMenuList from '../components/CardMenuList';
import FilterButton from '../../ui/FilterButton';
import { useMenu } from '../components/menu/useMenu';

export default function MenuPage() {
    const { isLoading, dishes, error, isError } = useMenu();

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error: {error?.message}</p>;

    if (dishes)
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
                        Disfruta de nuestra variedad de platos, como el
                        tradicional ceviche de pescado fresco, la papa a la
                        huancaína suave y el lomo saltado jugoso y mucho más.
                    </p>
                </div>
                {/*Categoria de los platos*/}
                <div className='mt-9'>
                    <FilterButton filterField='category' />
                </div>
                <div className='pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {dishes.map((dishes) => (
                        <CardMenuList key={dishes.id} dishes={dishes} />
                    ))}
                </div>
            </section>
        );
}
