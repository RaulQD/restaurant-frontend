import { BiHeart, BiPlus } from 'react-icons/bi';
import NoImage from '../../../assets/no-image.jpg';
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

export default function CardMenuList({ dishes }: CardMenuListProps) {
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
        <div className='bg-slate-100 rounded-md'>
            <div className=''>
                {dishes?.images ? (
                    <img src={dishes?.images} alt={dishes?.name} />
                ) : (
                    <img src={NoImage} alt={dishes?.name}/>
                )}
            </div>
            <div className='p-4 flex flex-col gap-2 '>
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold'>{dishes?.name}</h3>
                    <BiHeart className='text-red-700 text-xl' />
                </div>
                <p className='text-sm font-medium text-[#444341]'>
                    {dishes?.description}
                </p>
                <div className='flex justify-between items-center gap-20'>
                    <span className='text-lg text-red-700 font-extrabold'>
                        {formatCurrency(dishes?.originalPrice || 0)}
                    </span>
                    <button
                        type='button'
                        className='bg-orange-500 p-2 rounded-md flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ease-in-out'
                        onClick={handleAddToCart}>
                        <BiPlus className='text-xl text-white' />
                    </button>
                </div>
            </div>
        </div>
    );
}
