import { BiX } from 'react-icons/bi';
import { Form } from './Form';

export const Modal = () => {
    

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-end md:items-center z-10'>
            <div className=' w-full sm:w-[400px] md:w-[600px]'>
                <div className='bg-white rounded flex flex-col'>
                    <button className='place-self-end pt-4 pr-4'>
                        <BiX className='text-2xl' />
                    </button>
                    <Form />
                </div>
            </div>
        </div>
    );
};
