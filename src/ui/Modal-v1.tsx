import { BiX } from 'react-icons/bi';

type ModalProps = {
    children: React.ReactNode;
    // title: string;
    closeModal: () => void;
};

export const Modal = ({ children, closeModal}: ModalProps) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-end md:items-center z-50'>
            <div className='w-full sm:w-[550px] md:w-[650px]'>
                <div className='bg-white rounded flex flex-col'>
                    <div className='flex justify-end items-end'>
                        {/* <h1 className='pt-4 pl-4 font-medium font-outfit text-xl'>
                            {title}
                        </h1> */}
                        <button
                            className='place-self-end pt-4 pr-4'
                            onClick={closeModal}>
                            <BiX className='text-2xl' />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};
