import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import React from 'react';

type DialogsProps = {
    show:boolean;
    onClose: () => void;
    onConfirm?: () => void;
    icon?: React.ReactNode;
    title: string;
    children:React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function Modal({
    show,
    onClose,
    title,
    children,
    icon,
    size = 'md',
}: DialogsProps) {
    
    const sizeClass = {
        sm: 'max-w-md',   // Tamaño pequeño
        md: 'max-w-3xl',  // Tamaño mediano
        lg: 'max-w-5xl',  // Tamaño grande
        xl: 'max-w-7xl', // Tamaño extra grande
    }[size];

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
                        className={`w-full ${sizeClass} rounded-xl bg-white p-10 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0`}>
                        <DialogTitle as='h3' className='font-medium font-outfit text-2xl mb-5 flex justify-start items-center gap-2'> 
                            {icon}
                            {title}
                        </DialogTitle>
                        <hr className='border-gray-300' />
                        {children}
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
