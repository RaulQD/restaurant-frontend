import { Address } from '../../../types/auth';
import { BiEdit, BiTrash } from 'react-icons/bi';
// import { Modal } from '../../../ui/Modal-v1';
import EditAddressForm from './EditAddressForm';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteAddress from './DeleteAddress';
import Modal from '../../../ui/Modal';
import { HiOutlineLocationMarker } from 'react-icons/hi';

type AddressCardProps = {
    address: Address;
    onSelect?: (address: Address) => void;
};

export default function AddressCard({ address }: AddressCardProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const updateAddress = queryParams.get('updateAddress')
    const show = updateAddress === address.id;
    const addressComplete = `${address.number} ${address.street}, ${address.district}, ${address.provinces}, ${address.department}`;

    const handleSelect = () => {
        console.log('address', address);
    }
    return (
        <li className='bg-gray-100 py-4 px-8 flex justify-between  gap-2 mb-4 last-of-type:mb-0'>
            <p className='font-outfit text-gray-500 truncate' onClick={handleSelect}>
                {addressComplete}
            </p>

            <div className='flex justify-end items-center'>
                <button type='button'>
                    <BiEdit
                        className='text-xl text-gray-500'
                        onClick={() => navigate(`?updateAddress=${address.id}`)}
                    />
                </button>
                <hr className='h-7 border-l mx-2 md:mx-6 border-gray-800' />
                <button
                    type='button'
                    onClick={() => navigate(`?deleteAddress=${address.id}`)}>
                    <BiTrash className='text-xl text-gray-500' />
                </button>
            </div>
            <Modal
                onClose={() => navigate(location.pathname, {replace: true})}
                show={show}
                icon={<HiOutlineLocationMarker className='text-4xl' />}
                title='Actualizar Dirección'>
                <EditAddressForm
                    data={address}
                    onClose={() => navigate(location.pathname,{replace: true})}
                />
            </Modal>

            <DeleteAddress data={address} />
        </li>
    );
}
