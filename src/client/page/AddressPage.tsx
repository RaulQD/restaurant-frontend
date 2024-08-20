import { useState } from 'react';
import AddressForm from '../components/address/AddressForm';
import AddressList from '../components/address/AddressList';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui';

export default function AddressPage() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <AddressList />
            <Button type='button' onClick={() => setIsOpenModal(true)}>
                Agregar dirección
            </Button>
            {isOpenModal && (
                <Modal closeModal={() => setIsOpenModal(false)}>
                    <AddressForm />
                </Modal>
            )}
        </>
    );
}
