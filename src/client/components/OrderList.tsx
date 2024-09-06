import { BiX } from 'react-icons/bi';
import { CiShoppingBasket } from 'react-icons/ci';
import CardOrderList from './CardOrderList';
import { CartItemsList } from '../../types/cart';

type OrderProps = {
    isOrderOpen: boolean;
    handleOrder: (value: boolean) => void;
    cartData: CartItemsList;
    isLoading: boolean;
    isError: boolean;
};

export default function OrderList({
    isOrderOpen,
    handleOrder,
    cartData,
}: OrderProps) {
    
    const isCartEmpty = !cartData?.items || cartData.items.length === 0;

    return (
        <div
            className={`fixed h-full w-screen bg-black/50 top-0 right-0 backdrop-blur-sm transition-opacity duration-300 z-10 ${
                isOrderOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
            <div
                className={`bg-white absolute top-0 right-0 h-screen z-50 w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%] gap-2 pt-5 pb-4 pl-4 transition-transform duration-300 ${
                    isOrderOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className='flex justify-start mt-0 '>
                    <BiX
                        className='text-2xl cursor-pointer'
                        onClick={() => {
                            handleOrder(false);
                        }}
                    />
                </div>
                {isOrderOpen && !isCartEmpty ? (
                    <div className='mt-3 flex flex-col gap-7 md:gap-2'>
                        <h2 className='text-lg font-medium text-center mb-2'>
                            Tu Carrito
                        </h2>
                        <div className='flex flex-col gap-4 h-[430px] md:h-[460px] lg:h-[450px] overflow-y-auto'>
                            {cartData?.items.map((item) => (
                                <CardOrderList key={item.dishId} data={item}/>
                            ))}
                        </div>
                        {/* Payment */}
                        <div className='flex flex-col gap-2 mt-5 pr-4'>
                            <div className='flex justify-between text-sm lg:text-base'>
                                <span>Subtotal</span>
                                <span>S/ 59.90</span>
                            </div>
                            <div className='flex justify-between text-sm lg:text-base'>
                                <span>Delivery</span>
                                <span>S/ 5.00</span>
                            </div>
                            <div className='flex justify-between text-sm lg:text-base'>
                                <span>Total</span>
                                <span>S/ 64.90</span>
                            </div>
                            <button className='text-sm md:text-base bg-orange-500 text-white py-2 rounded-md'>
                                Pagar
                            </button>
                            <button
                                className='text-sm md:text-base text-orange-500 border border-orange-500 py-2 rounded-md'
                                onClick={() => {
                                    handleOrder(false);
                                }}>
                                Seguir Comprando
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center h-2/3'>
                        <CiShoppingBasket className='text-7xl text-orange-500' />
                        <span className='text-sm text-gray-400'>
                            Tu canasta está vacía
                        </span>
                        <p className='text-center w-3/4'>
                            {' '}
                            Te invitamos a volver a nuestro menu y agregar
                            productos a tu canasta.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
