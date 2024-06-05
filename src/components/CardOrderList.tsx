import { BiMinus, BiPlus, BiTrashAlt } from 'react-icons/bi';

export default function CardOrderList() {
    return (
        <div className='flex justify-between items-start pr-2 gap-1 md:gap-3 lg:gap-5 rounded-md pt-3 '>
            <div className='flex justify-start items-start gap-3 md:gap-6'>
                <div>
                    <img
                        src='./Tallarines-verdes-bistec.webp'
                        alt='tallarines verdes'
                        className='w-20 h-20 object-cover rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <div >
                        <h3 className='text-sm md:text-base font-medium '>
                            Tallarines verdes con bistec
                        </h3>
                        <p className='text-[12px] md:text-sm text-gray-400'>
                            S/15.90
                        </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <button className='text-sm text-gray-400 border rounded-md p-1'>
                            <BiMinus className='text-base md:text-lg text-orange-500' />
                        </button>
                        <span className='text-sm md:text-base'>1</span>
                        <button className='text-sm text-gray-400 border rounded-md p-1'>
                            <BiPlus className='text-base md:text-lg text-orange-500 ' />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button className='border border-orange-500 rounded-md p-1 hover:bg-orange-500 text-orange-500 hover:text-white'>
                    <BiTrashAlt className='text-base md:text-lg' />
                </button>
            </div>
        </div>
    );
}
