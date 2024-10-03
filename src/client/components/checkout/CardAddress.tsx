import { Address } from '../../../types/auth';

type CardAddressProps = {
    address: Address;
};

export default function CardAddress({ address }: CardAddressProps) {
    return (
        <div className='bg-white border-2 p-4'>
            <div className='font-outfit'>
                <p className='mb-1 font-semibold'>
                    Departamento:
                    <span className='font-normal'> {address.department}</span>
                </p>
                <p className='mb-1 font-semibold'>
                    Provincia:
                    <span className='font-normal'> {address.provinces}</span>
                </p>
                <p className='mb-1 font-semibold'>
                    Distrito:
                    <span className='font-normal'> {address.district}</span>
                </p>
                <p className='mb-1 font-semibold'>
                    Av./Jr./Cl.:
                    <span className='font-normal'> {address.street}</span>
                </p>
                <p className='mb-1 font-semibold'>
                    Número:
                    <span className='font-normal'> {address.number}</span>
                </p>
            </div>
        </div>
    );
}
