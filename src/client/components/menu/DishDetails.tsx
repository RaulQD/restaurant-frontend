import { BiMinus, BiPlus } from 'react-icons/bi';
import { formatCurrency } from '../../../helpers';
import { DishesType } from '../../../types/dishes';
import NoImage from '../../../assets/not-image-found.png';
import { useCreateCart } from './cart/useCreateCart';
import toast from 'react-hot-toast';
import { useUser } from '../../../hooks/useUser';
import { useState } from 'react';

type DishDetailsProps = {
    dishes: DishesType;
    onCancel: () => void;
  };

export default function DishDetails({ dishes, onCancel }: DishDetailsProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCreateCart();
    const { user } = useUser();

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    const handleAddToCart = () => {
        if (!user) {
            toast.error('Debes estar logueado para agregar plato al carrito.');
            return;
        }
        if (user) {
            const formData = {
                userId: user.id,
                dishId: dishes.id,
                quantity,
            };
            addToCart(formData);
            onCancel();
        }
    };

    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mt-6'>
            <div className='lg:w-1/2 w-full'>
                <img
                    src={dishes.images || NoImage}
                    alt={dishes.name}
                    className='w-full h-auto rounded-lg shadow-md object-cover'
                />
            </div>
            {/* Detalles del plato */}
            <div className=' lg:w-1/2 w-full flex flex-col justify-between'>
                <h1 className=' text-xl lg:text-2xl font-bold text-gray-800 mb-4'>
                    {dishes.name}
                </h1>
                {/* Precio */}
                <div className=' text-base lg:text-lg font-semibold text-orange-600 mb-6'>
                    Precio: {formatCurrency(dishes.originalPrice || 0)}
                </div>
                {/* Descripción */}
                <p className='text-gray-600 leading-relaxed'>
                    {dishes.description ||
                        'Descripción del plato no disponible.'}
                </p>
                <div className='flex justify-start item-center mt-8 gap-2'>
                    <button className='text-sm text-gray-400 border rounded-md p-1'
                     onClick={() => handleDecrease()}>
                        {' '}
                        <BiMinus className='text-base md:text-lg text-orange-500' />
                    </button>
                    <span className='text-sm md:text-base'>{quantity}</span>
                    <button
                        className='text-sm text-gray-400 border rounded-md p-1'
                        onClick={() => handleIncrease()}>
                        <BiPlus className='text-base md:text-lg text-orange-500 ' />
                    </button>
                </div>
                <div className='mt-4'>
                    <button
                        className='bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300'
                        onClick={() => handleAddToCart()}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
