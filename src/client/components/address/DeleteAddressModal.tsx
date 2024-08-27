import { Fragment } from 'react';
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';
import { Address } from '../../../types/auth';
import { useDeleteAddress } from './useDeleteAddress';

type DeleteProjectModalProps = {
    data: Address;
};

export default function DeleteAddressModal({ data }: DeleteProjectModalProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const deleteAddressId = queryParams.get('deleteAddress')!;
    const show = deleteAddressId === data.id;
    const addressConcat = `${data.street} ${data.number}, ${data.district}, ${data.provinces}, ${data.department}`;

    const { mutate } = useDeleteAddress();
    const handleForm = () => {
        mutate(data.id);
        navigate(location.pathname, { replace: true });
    };

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => navigate(location.pathname, { replace: true })}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-100'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-100'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-100'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'>
                            <DialogPanel className='w-full max-w-2xl transform overflow-hidden rounded-xl bg-white text-left align-middle transition-all p-10'>
                                <DialogTitle
                                    as='h3'
                                    className='font-medium font-outfit text-2xl mb-5 flex justify-start items-center gap-2'>
                                    <BiErrorCircle className='text-3xl text-yellow-500' />
                                    Eliminar la dirección
                                </DialogTitle>
                                <hr className='border-gray-300' />
                                <p className='font-medium mt-10'>
                                    ¿Realmente quieres eliminar la dirección{' '}
                                    {addressConcat} ?
                                </p>
                                <div className='flex justify-end gap-2 mt-10'>
                                    <button
                                        type='button'
                                        onClick={() =>
                                            navigate(location.pathname, {
                                                replace: true,
                                            })
                                        }
                                        className='bg-gray-300 text-black px-4 py-2 rounded-md font-medium focus:outline-none transition-all font-outfit'>
                                        Cancelar
                                    </button>
                                    <button
                                        type='button'
                                        onClick={handleForm}
                                        className='bg-orange-500 text-white px-4 py-2 rounded-md font-medium focus:outline-none   transition-all font-outfit'>
                                        Eliminar
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
