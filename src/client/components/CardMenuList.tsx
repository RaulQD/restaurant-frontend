import { BiCartAdd, BiHeart } from 'react-icons/bi';
import LomoSaltado from '../../assets/lomo-saltado.jpg';
export default function CardMenuList() {
    return (
        <div className='bg-slate-100 rounded-md'>
            <div className='overflow-hidden'>
                <img
                    src={LomoSaltado}
                    alt='tallarines verdes'
                    className=' object-cover rounded-t-md hover:scale-125 transition-transform duration-300'
                />
            </div>
            <div className='p-3 flex flex-col gap-2 '>
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold'>
                        Tallarines verdes con bistec
                    </h3>
                    <BiHeart className='text-red-700' />
                </div>
                <p className='text-sm font-medium text-[#444341]'>
                    Tallarines verdes con bistec a la parrilla, acompañado de
                    arroz blanco y papas fritas.
                </p>
                <div className='flex justify-between items-center gap-20'>
                    <span className='text-lg text-red-700 font-extrabold'>
                        S/. 15.00
                    </span>
                    <button
                        type='button'
                        className='bg-orange-500 p-2 rounded-md flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ease-in-out'>
                        <BiCartAdd className='text-2xl text-white' />
                    </button>
                </div>
            </div>
        </div>
    );
}
