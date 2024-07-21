import { BiHeart, BiSolidPlusCircle } from 'react-icons/bi';
import { Dishes } from '../../types/dishes';


type CardListProps = {
    dish: Dishes;
};
export default function CardList({ dish }: CardListProps) {
    return (
        <div className='bg-slate-100 rounded-md'>
            <div className='overflow-hidden'>
                <img
                    src={dish.image_url!}
                    alt={dish.dishes_name}
                    className=' object-cover rounded-t-md hover:scale-125 transition-transform duration-300'
                />
            </div>
            <div className='p-3 flex flex-col gap-2 '>
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold font-poppins'>{dish.dishes_name}</h3>
                    <BiHeart className='text-red-700 text-xl' />
                </div>
                <p className='text-sm font-medium text-[#444341]'>
                    {dish.description}
                </p>
                <div className='flex justify-between items-center gap-20'>
                    <span className='text-lg text-red-700 font-extrabold'>
                        {dish.price}
                    </span>
                    <button type='button'>
                        <BiSolidPlusCircle className='text-3xl text-orange-500 hover:text-orange-600' />
                    </button>
                </div>
            </div>
        </div>
    );
}
