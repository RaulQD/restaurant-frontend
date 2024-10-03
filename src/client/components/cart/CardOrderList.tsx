import { BiMinus, BiPlus, BiTrashAlt } from 'react-icons/bi';
import { CartItem } from '../../../types/cart';
import { formatCurrency } from '../../../helpers/index';
import { useIncrease } from './useIncrease';
import { useDecrease } from './useDecrease';
import { useDeleteCart } from './useDeleteCart';
import { useUser } from '../../../hooks/useUser';
import { useState } from 'react';
import Dialogs from '../../../ui/Dialogs';

type CardOrderListProps = {
    data: CartItem;
};

export default function CardOrderList({ data }: CardOrderListProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { user } = useUser();
    const { increaseQty } = useIncrease();
    const { decreaseQty } = useDecrease();
    const { deleteCart } = useDeleteCart();

    const handleIncrementQuantity = (dishId: string) => {
        const formData = {
            dishId,
            quantity: 1,
        };
        increaseQty(formData);
    };
    const handleDecreaseQuantity = (dishId: string) => {
        const data = {
            dishId,
            quantity: 1,
        };
        decreaseQty(data);
    };
    const handleDeleteCart = (dishId: string) => {
        if (user) {
            const dataCart = {
                dishId,
                userId: user.id,
            };
            deleteCart(dataCart);
        }
    };

    return (
        <>
            <div className='flex justify-between items-start pr-2 gap-1 md:gap-3 lg:gap-5 rounded-md pt-3 '>
                <div className='flex justify-start items-start gap-3 md:gap-6'>
                    <div>
                        <img
                            src={data.image}
                            alt={data.title}
                            className='w-20 h-20 object-cover rounded-md'
                        />
                    </div>
                    <div className='flex flex-col gap-1 md:gap-2'>
                        <div>
                            <h3 className='text-sm md:text-base font-medium '>
                                {data.title}
                            </h3>
                            <p className='text-[12px] md:text-sm text-gray-400'>
                                {formatCurrency(data.price * data.quantity)}
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <button
                                className='text-sm text-gray-400 border rounded-md p-1'
                                onClick={() =>
                                    handleDecreaseQuantity(data.dishId)
                                }>
                                <BiMinus className='text-base md:text-lg text-orange-500' />
                            </button>
                            <span className='text-sm md:text-base'>
                                {data.quantity}
                            </span>
                            <button
                                className='text-sm text-gray-400 border rounded-md p-1'
                                onClick={() =>
                                    handleIncrementQuantity(data.dishId)
                                }>
                                <BiPlus className='text-base md:text-lg text-orange-500 ' />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className='border border-orange-500 rounded-md p-1 hover:bg-orange-500 text-orange-500 hover:text-white'
                        onClick={() => setIsOpenModal(true)}>
                        <BiTrashAlt className='text-base md:text-lg' />
                    </button>
                </div>
            </div>
            <Dialogs
                show={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                title='Eliminar Plato del carrito'
                description='¿Estás seguro de eliminar este produto de tu carrito?'
                onConfirm={() => handleDeleteCart(data.dishId)}
            />
        </>
    );
}
