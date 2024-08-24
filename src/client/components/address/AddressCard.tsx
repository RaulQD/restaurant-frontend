import { useState } from 'react';
import { Address } from '../../../types/auth';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Modal } from '../../../ui/Modal';
import EditAddressForm from './EditAddressForm';
import DeleteAddressModal from './DeleteAddressModal';
import { useNavigate } from 'react-router-dom';

type AddressCardProps = {
    address: Address;
};

export default function AddressCard({ address }: AddressCardProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const addressComplete = `${address.number} ${address.street}, ${address.district}, ${address.provinces}, ${address.department}`;
    const navigate = useNavigate();
    const handleEditModal = () => {
        setIsOpenModal(true);
    };

    return (
        <li className='bg-gray-100 py-4 px-8 flex justify-between  gap-2 mb-4 last-of-type:mb-0'>
            <p className='font-outfit text-gray-500 truncate'>
                {addressComplete}
            </p>

            <div className='flex justify-end items-center'>
                <button type='button'>
                    <BiEdit
                        className='text-xl text-gray-500'
                        onClick={handleEditModal}
                    />
                </button>
                <hr className='h-7 border-l mx-2 md:mx-6 border-gray-800' />
                <button
                    type='button'
                    onClick={() => navigate(`?deleteAddress=${address.id}`)}>
                    <BiTrash className='text-xl text-gray-500' />
                </button>
            </div>
            {isOpenModal && (
                <Modal closeModal={() => setIsOpenModal(false)}>
                    <EditAddressForm
                        data={address}
                        setIsOpenModal={setIsOpenModal}
                    />
                </Modal>
            )}
            <DeleteAddressModal data={address} />
        </li>
    );
}
