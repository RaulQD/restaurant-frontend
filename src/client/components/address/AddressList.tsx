import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Address } from '../../../types/auth';
import { getUserAddress } from '../../../services/apiAddress';
import Spinner from '../../../ui/Spinner';

export default function AddressList() {
    const {
        data: address,
        isLoading,
        isError,
        error
    } = useQuery<Address[]>({
        queryKey: ['address'],
        queryFn: getUserAddress,
        placeholderData: keepPreviousData,
    });
    {
        isLoading && (
            <div className='flex justify-center items-center'>
                <Spinner />
            </div>
        );
    }
    {
      isError && <p className='text-center mt-16'>{error?.message}</p>;
  }
    if (address)
        return (
            <>
                {address.length > 0 && (
                    <div>
                        {address.map((address) => (
                            <div key={address.id}>
                                <p>Raul Quispe</p>
                                <p>
                                    {address.street}
                                    {address.number}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                {!isLoading && !isError && address.length === 0 && (
                    <p className='text-center py-4 mt-16 font-medium font-outfit'>
                        No hay platos registrados en este momento.
                    </p>
                )}
            </>
        );
}
