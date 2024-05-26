import { BiX, BiCart } from 'react-icons/bi';
import { CiShoppingBasket } from 'react-icons/ci';

type OrderProps = {
    isOrderOpen: boolean;
    handleOrder: (value: boolean) => void;
};

export default function OrderList({ isOrderOpen, handleOrder }: OrderProps) {
    return (
        <div
            className={`fixed h-full w-screen bg-black/50 top-0 right-0 backdrop-blur-sm  transition-opacity duration-300 z-10 ${
                isOrderOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
            <div
                className={`bg-white flex flex-col absolute top-0 right-0 h-screen z-50 w-full md:w-1/2 lg:w-[40%] gap-2 pt-5 p-8 transition-transform duration-300 ${
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
                {isOrderOpen ? (
                    <>
                        {/* <h1 className='text-xl font-bold text-center'>
                            Tu Carrito
                        </h1> */}
                        <div className='flex flex-col justify-center items-center h-screen'>
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
                    </>
                ) : (
                    //  <h1>Holamundo</h1>

                    <div>
                        <BiCart className='text-5xl' />
                    </div>
                )}
            </div>
        </div>
    );
}
