import { BiHeart, BiPlus } from 'react-icons/bi';
import NoImage from '../../../assets/not-image-found.png';
import { formatCurrency } from '../../../helpers';
import { DishesType } from '../../../types/dishes';
import { CartForm } from '../../../types/cart';
import { useUser } from '../../../hooks/useUser';
import toast from 'react-hot-toast';
import { useState } from 'react';
import DishDetails from './DishDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateCart } from '../cart/useCreateCart';
import Modal from '../../../ui/Modal';

type CardMenuListProps = {
    dishes: DishesType;
};

export default function CardDish({ dishes }: CardMenuListProps) {
    const [showButton, setShowbutton] = useState(false);
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const showDetailsDish = queryParams.get('showDetailsDish');
    const show = showDetailsDish === dishes.id;

    const { addToCart } = useCreateCart();
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
            addToCart(formData);
        }
    };
    const handleShowDetails = () => {
        //SE IMPLEMENTA LA FUNCIONALIDAD DE MOSTRAR DETALLES DEL PLATO
        queryParams.set('showDetailsDish', dishes.id);
        navigate(`${location.pathname}?${queryParams.toString()}`);
    };
    const onConfirm = () => {
        queryParams.delete('showDetailsDish');
        navigate(`${location.pathname}?${queryParams.toString()}`, {
            replace: true,
        });
    };
    const onCancel = () => {
        queryParams.delete('showDetailsDish');
        navigate(`${location.pathname}?${queryParams.toString()}`, {
            replace: true,
        });
    };

    return (
        <>
            <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between'>
                {/* Imagen del plato */}
                <div
                    className='relative '
                    onMouseLeave={() => setShowbutton(false)}
                    onMouseEnter={() => setShowbutton(true)}>
                    <img
                        src={dishes?.images || NoImage}
                        alt={dishes?.name}
                        className='w-full h-60 object-cover'
                    />
                    {/* Overlay para oscurecer la imagen */}
                    {showButton && (
                        <div
                            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                                showButton ? 'opacity-50' : 'opacity-0'
                            }`}></div> // Oscurece la imagen
                    )}
                    {showButton && (
                        <button
                            className='bg-orange-500 px-4 md:px-6 xl:px-10 py-2 text-sm xl:text-base rounded-md flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ease-in-out absolute left-1/2 -translate-x-1/2 top-28 text-white font-outfit font-bold'
                            onClick={() => handleShowDetails()}>
                            VER MÁS
                        </button>
                    )}
                </div>

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
                                className='bg-orange-500 p-1 rounded-md flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ease-in-out'
                                onClick={handleAddToCart}>
                                <BiPlus className='text-xl text-white' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title='Detalle del plato'
                show={show}
                onConfirm={onConfirm}
                onClose={onCancel}
                size='lg'>
                <DishDetails dishes={dishes} onCancel={onCancel}/>
            </Modal>
        </>
    );
}
