import { useNavigate, useLocation } from 'react-router-dom';
import { Address } from '../../../types/auth';
import { useDeleteAddress } from './useDeleteAddress';
import Dialogs from '../../../ui/Dialogs';

type DeleteProjectModalProps = {
    data: Address;
};

export default function DeleteAddress({ data }: DeleteProjectModalProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const deleteAddressId = queryParams.get('deleteAddress');
    const show = deleteAddressId === data.id;
    const addressConcat = `${data.street} ${data.number}, ${data.district}, ${data.provinces}, ${data.department}`;

    const { mutate } = useDeleteAddress();

    const handleForm = () => {
        mutate(data.id);
        navigate(location.pathname, { replace: true });
    };
    const handleCancel = () => {
        navigate(location.pathname, { replace: true });
    };

    // agregar la descripción de la dirección a eliminar
    const description = `¿Realmente quieres eliminar la dirección ${addressConcat}?`;

    const onClose = () => {
        navigate(location.pathname, { replace: true });
    };

    return (
        <>
            <Dialogs
                show={show}
                onClose={onClose}
                title='Eliminar la dirección'
                description={description}
                onConfirm={handleForm}
                onCancel={handleCancel}
            />
        </>
    );
}
