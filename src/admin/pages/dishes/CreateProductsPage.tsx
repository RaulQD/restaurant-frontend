import { useForm } from 'react-hook-form';
import { BiChevronRight } from 'react-icons/bi';
import { DishesForm } from '../../components/dishes/DishesForm';
import { DishFormData } from '../../../types/dishes';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createDishes } from '../../../services/apiDishes';

export default function CreateProductsPage() {

    const navigate = useNavigate();
    const initialValues: DishFormData = {
        name: '',
        description: '',
        originalPrice: undefined,
        category: '',
        images: '',
        // available: true,
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValues });
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createDishes,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['dishes'] });
            toast.success(data.message);
            navigate('/dashboard/products');
            reset();
        },
    });

    const handleForm = async (data: DishFormData) => {
        await mutation.mutateAsync(data);
    };
    // const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
    //     const target = e.target as HTMLInputElement & {
    //         files: FileList;
    //     };
    //     const selectedFile = target.files[0];
    //     setFile(selectedFile);
    // };

    // const handleForm = async (data: DishFormData) => {
    //     const formData = new FormData();
    //     formData.append('name', data.name);
    //     formData.append('description', data.description);
    //     formData.append('originalPrice', data.originalPrice?.toString() || '');
    //     formData.append('category', data.category);
    //     if (data.images && data.images.length > 0) {
    //         formData.append('images', data.images[0]);
    //     }
    //     console.log(data);
    //     console.log(data.images ? data.images[0] : 'No images');
    //     await mutation.mutateAsync(formData);
    // };

    // const submitForm = async (formData: FormData) => {
    //     console.log(formData);
    // };

    const redirectTo = () => {
        navigate('/dashboard/products/');
    };
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Crear Platos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Platos</span>
                    <BiChevronRight />
                    <span>Crear Platos</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form onSubmit={handleSubmit(handleForm)} noValidate>
                    <DishesForm
                        register={register}
                        errors={errors}
                        isEditMode={false}
                    />
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
                            value=' Crear platillo'
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
