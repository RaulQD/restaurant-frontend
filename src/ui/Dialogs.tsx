import {
    Description,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { BiErrorCircle } from 'react-icons/bi';

type DialogsProps = {
    show: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};

export default function Dialogs({
    show,
    onClose,
    title,
    description,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    onConfirm,
}: DialogsProps) {

    return (
        <>
            <Dialog open={show} onClose={onClose} className='relative z-50'>
                <DialogBackdrop
                    transition
                    className='fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0'
                />
                <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                    <DialogPanel
                        transition
                        className='w-full max-w-2xl rounded-xl  bg-white p-10 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'>
                        <DialogTitle as='h3' className='font-medium font-outfit text-2xl mb-5 flex justify-start items-center gap-2'> 
                            <BiErrorCircle className='text-yellow-500 text-3xl' />
                            {title}
                        </DialogTitle>
                        <hr className='border-gray-300' />
                        <Description className='font-medium mt-10'>{description}</Description>
                        <div className='flex justify-end gap-4 mt-10'>
                            <button
                                onClick={onClose}
                                className='bg-gray-300 text-black px-4 py-2 rounded-md font-medium focus:outline-none transition-all font-outfit'>
                                {cancelText}
                            </button>
                            <button
                                onClick={onConfirm}
                                className='bg-orange-500 text-white px-4 py-2 rounded-md font-medium focus:outline-none   transition-all font-outfit'>
                                {confirmText}
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
