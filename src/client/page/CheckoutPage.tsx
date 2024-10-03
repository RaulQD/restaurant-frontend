import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Address } from '../../types/auth';
import AddressCard from '../components/address/AddressCard';
import { useAddress } from '../components/address/useAddress';
import CardOrderList from '../components/cart/CardOrderList';
import { useCarts } from '../components/cart/useCarts';
import { BiSolidEdit } from 'react-icons/bi';
import Modal from '../../ui/Modal';
import AddressForm from '../components/address/AddressForm';
import Accordion from '../../ui/Accordion';
import { useCreateOrder } from '../components/checkout/useCreateOrder';

export default function CheckoutPage() {
    const { user } = useUser();
    const { cartData } = useCarts(user?.id);
    const { address } = useAddress();
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { createOrders } = useCreateOrder();

    // SELECCIONAR LA PRIMERA DIRECCIÓN Y MOSTRARLA
    useEffect(() => {
        if (address) {
            if (address.length > 0) {
                setSelectedAddress(address[0]);
            }
        }
    }, [address]);
    const addressConcat = `${selectedAddress?.street} ${selectedAddress?.number}, ${selectedAddress?.district}, ${selectedAddress?.provinces}, ${selectedAddress?.department}`;
    
    const handleCreateOrder = () => {
        console.log('selectedAddress', selectedAddress?.id);
        if (selectedAddress) {
            createOrders({ addressId: selectedAddress.id });
        }
    }

    if (address)
        return (
            <section className='mt-14 mb-48 px-5 md:px-16 lg:px-32 xl:px-36'>
                <div className='grid grid-cols-3 gap-4 mt-10'>
                    <div className='col-span-2'>
                        <div>
                            <h2 className='mb-5 text-xl font-outfit'>
                                Detalles de envio
                            </h2>
                        </div>
                        <div className='bg-slate-100 p-8 rounded-xl'>
                            {address.length > 0 ? (
                                <div className='flex justify-between items-center bg-white rounded-xl p-4 font-outfit'>
                                    <p>{addressConcat}</p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className='flex items-center gap-1 underline'>
                                        <BiSolidEdit className='underline' />
                                        Cambiar
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <p>No tienes dirección de envio</p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className='flex items-center gap-2'>
                                        <BiSolidEdit />
                                        Agregar dirección
                                    </button>
                                </div>
                            )}
                            <Modal
                                show={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                title='Cambiar dirección'>
                                {/* listar las direcciones o mostrar el formulario de registro */}
                                {address.length > 0 ? (
                                    <div className=' w-full'>
                                        {address?.map((address) => (
                                            <AddressCard
                                                key={address.id}
                                                address={address}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <AddressForm
                                        setIsOpenModal={setIsModalOpen}
                                    />
                                )}
                            </Modal>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='mb-5 text-xl font-outfit'>
                            Resumen de tu pedido
                        </h2>
                        <div className='bg-slate-100 rounded-xl p-10 flex flex-col justify-between'>
                            <Accordion title='Productos'>
                                <div className='mb-5 w-full overflow-x-auto'>
                                    <div className='flex justify-start items-center space-x-4 w-max'>
                                        {cartData?.items.map((item) => (
                                            <div
                                                className='bg-white pb-4 pl-4 pr-2 pt-1 rounded-xl mb-2'
                                                key={item.dishId}>
                                                <CardOrderList data={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Accordion>
                            <hr className='border-b-2' />
                            <div className='flex flex-col justify-between h-auto gap-4 mt-4'>
                                <div className='flex justify-between'>
                                    <h3>Envio</h3>
                                    <p>Envio Gratis</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h3>Total</h3>
                                    <p>100.00</p>
                                </div>
                                <button className='text-sm md:text-base bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600'
                                onClick={handleCreateOrder}>
                                    Ir a pagar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
