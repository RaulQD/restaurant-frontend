import { useForm } from 'react-hook-form';
import { BiChevronRight } from 'react-icons/bi';
import { DishesForm } from './components/DishesForm';
import { DishFormData } from './types/dishes';
import { useNavigate } from 'react-router-dom';
import { createDishes } from '../../../services/DishesApi';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function CreateProductsPage() {
    const navigate = useNavigate();
    const initialValues: DishFormData = {
        name: '',
        description: '',
        originalPrice: 0,
        category: '',
        images: '',
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValues });

    const mutation = useMutation({
        mutationFn: createDishes,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data.message);
            navigate('/dashboard/products');
            reset();
        },
    });

    const handleForm = async (data: DishFormData) => {
        console.log(data.images[0]);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('originalPrice', data.originalPrice.toString());
        formData.append('category', data.category);
        if (data.images[0]) {
            formData.append('images', data.images[0]);
        }
        await mutation.mutateAsync(formData);
    };
    const redirectTo = () => {
        navigate('/dashboard/products/');
    };
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Crear Productos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Productos</span>
                    <BiChevronRight />
                    <span>Crear Productos</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form onSubmit={handleSubmit(handleForm)} noValidate>
                    <DishesForm register={register} errors={errors} />
                    <div className='flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-5 w-full mb-20'>
                        <button
                            type='button'
                            className='bg-gray100 hover:bg-gray-200 py-2 px-4 transition-all ease-in rounded-lg font-outfit'
                            onClick={redirectTo}>
                            Cancelar
                        </button>
                        <input
                            type='submit'
                            className='bg-orange-500 hover:bg-orange-600 transition-all ease-in-out py-2 px-4 rounded-lg text-white font-outfit cursor-pointer'
                            value=' Guardar cambios'
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
