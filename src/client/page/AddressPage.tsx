import { useState } from 'react';
import AddressForm from '../components/address/AddressForm';
import AddressCard from '../components/address/AddressCard';
import Ubicacion from '../../assets/ubicación.png';
import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useAddress } from '../components/address/useAddress';

export default function AddressPage() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { address, isLoading, isError, error } = useAddress();

    if (isLoading)
        return (
            <div className='flex items-center justify-center '>
                <Spinner />
            </div>
        );
    if (isError)
        return (
            <div className='flex items-center justify-center '>
                <p className='text-red-500'>{error?.message}</p>
            </div>
        );
    if (address)
        return (
            <>
                <section className='bg-white rounded-lg p-8'>
                    <h2 className='text-xl'>Direcciones</h2>
                    <hr className='border-gray-500 mt-8 mb-10' />
                    {address.length > 0 ? (
                        <ul>
                            {address.map((address) => (
                                <AddressCard
                                    key={address.id}
                                    address={address}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div className='mt-10 '>
                            <div className='flex flex-col justify-center items-center'>
                                <img
                                    src={Ubicacion}
                                    alt='ubicacion'
                                    className='size-32'
                                />
                                <p className='py-4 font-medium font-outfit'>
                                    No hay platos registrados en este momento.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className='flex justify-center mt-10'>
                        <button
                            type='button'
                            onClick={() => setIsOpenModal(true)}
                            className='w-full md:w-1/4  rounded-md py-2 text-sm font-semibold leading-6 focus:outline-none transition-all bg-orange-500 text-white hover:bg-orange-600'>
                            Agregar dirección
                        </button>
                    </div>
                </section>

                <Modal
                    onClose={() => setIsOpenModal(false)}
                    show={isOpenModal}
                    icon={<HiOutlineLocationMarker className='text-4xl' />}
                    title='Agregar dirección'>
                    <AddressForm setIsOpenModal={() => setIsOpenModal(false)} />
                </Modal>
            </>
        );
}
