import { BiX } from 'react-icons/bi';
import { Form } from './Form';

export const Modal = () => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] md:w-[600px]'>
                <div className='bg-white p-2 rounded  flex flex-col'>
                    <button className='place-self-end'>
                        <BiX className='text-2xl' />
                    </button>
                    <Form />
                </div>
            </div>
        </div>
    );
};
