import { BiHeart, BiPlus } from 'react-icons/bi';
import NoImage from '../../../assets/not-image-found.png';
import { formatCurrency } from '../../../helpers';
import { DishesType } from '../../../types/dishes';
import { CartForm } from '../../../types/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCart } from '../../../services/apiCart';
import { useUser } from '../../../hooks/useUser';
import toast from 'react-hot-toast';

type CardMenuListProps = {
    dishes: DishesType;
};

export default function CardMenu({ dishes }: CardMenuListProps) {
    const { user } = useUser();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: createCart,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success(data.message);
        },
    });
    const handleAddToCart = () => {
        // Validar si el usuario está logueado
        if (!user) {
            toast.error('Debes estar logueado para agregar plato al carrito.');
            return;
        }
        //SE IMPLEMENTA LA FUNCIONALIDAD DE AGREGAR AL CARRITO
        if (user) {
            const formData: CartForm = {
                userId: user.id,
                dishId: dishes.id,
                quantity: 1,
            };
            mutate(formData);
        }
    };

    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between'>
            {/* Imagen del plato */}
            <img
                src={dishes?.images || NoImage}
                alt={dishes?.name}
                className='w-full h-60 object-cover'
            />

            <div className='p-5'>
                {/* Título del plato */}
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold'>{dishes?.name}</h3>
                    <BiHeart className='text-red-700 text-xl' />
                </div>

                {/* Descripción del plato */}
                <p className='text-sm text-gray-600 mt-2'>
                    {dishes?.description}
                </p>

                {/* Precio */}
                <div className='flex justify-between items-center mt-4'>
                    <span className='text-lg font-semibold text-red-700'>
                    {formatCurrency(dishes?.originalPrice || 0)}
                    </span>
                    {/* Botones */}
                    <div className='flex space-x-2'>
                        {/* Botón para agregar al carrito */}
                        <button
                            type='button'
                            className='bg-orange-500 p-2 rounded-md flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ease-in-out'
                            onClick={handleAddToCart}>
                            <BiPlus className='text-xl text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    );
}
