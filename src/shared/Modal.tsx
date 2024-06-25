import { BiX } from 'react-icons/bi';

type ModalProps = {
    children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start md:justify-center items-end md:items-center z-50'>
            <div className='w-full sm:w-[550px] md:w-[650px]'>
                <div className='bg-white rounded flex flex-col'>
                    <button className='place-self-end pt-4 pr-4'>
                        <BiX className='text-2xl' />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};
