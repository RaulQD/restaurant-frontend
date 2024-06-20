import { useNavigate } from 'react-router-dom';
import { dishes } from '../../data/data';
import CardList from './CardList';

export default function PopularDishes() {
    const navigate = useNavigate();
    const redirecToMenu = () => {
        // Redirect to menu page
        navigate('/our-dishes');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };
    return (
        <section className='mt-28 mb-48 px-5 md:px-16 lg:px-32 xl:px-44 '>
            <div className='flex flex-col items-center text-center'>
                <div className='flex flex-col items-center gap-2 mb-5'>
                    <span className=' text-[10px] md:text-[12px] text-orange-500 uppercase font-bold font-poppins'>
                        nuestro menu especial
                    </span>
                    <h2 className=' text-2xl mdtext-3xl lg:text-4xl xl:text-5xl uppercase font-extrabold font-poppins'>
                        Platos Populares
                    </h2>
                </div>
                <p className='w-full lg:w-3/5 text-[#444341] font-poppins text-sm'>
                    Sumérgete en la gastronomía peruana con nuestro ceviche de
                    pescado fresco, la papa a la huancaína suave y el lomo
                    saltado jugoso y mucho más.
                </p>
            </div>
            {/*Categoria de los platos*/}
            <div className=''>
                <div className='pt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {dishes.map((dish) => (
                        <CardList key={dish.id} dish={dish} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center mt-8'>
                <button
                    className='bg-orange-500 py-2 p-4 rounded-lg text-white hover:bg-orange-600 transition-all duration-200 ease-in-out'
                    onClick={redirecToMenu}>
                    Explorar Menú
                </button>
            </div>
        </section>
    );
}
