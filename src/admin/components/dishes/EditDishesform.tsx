import { BiChevronRight } from 'react-icons/bi';
import { DishesForm } from './DishesForm';
import { useForm } from 'react-hook-form';
import { DishFormData } from '../../../types/dishes';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateDishes } from '../../../services/apiDishes';
import toast from 'react-hot-toast';

type EditDishesformProps = {
    data: DishFormData;
    dishesId: string;
};

export default function EditDishesform({
    data,
    dishesId,
}: EditDishesformProps) {
    const navigate = useNavigate();
    const initialValues: DishFormData = {
        name: data.name,
        description: data.description,
        originalPrice: data.originalPrice,
        category: data.category,
        available: data.available,
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: initialValues });

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: updateDishes,
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
        onSuccess: (data) => {
            // INVALIDA LA CACHE DE LA QUERY DE PLATOS
            queryClient.invalidateQueries({ queryKey: ['dishes'] });
            // INVALIDA LA CACHE DE LA QUERY DE EDITAR PLATOS
            queryClient.invalidateQueries({ queryKey: ['editDishes'] });
            toast.success(data.message);
            navigate('/admin/dashboard/dishes/');
        },
    });

    const handleForm = async (formData: DishFormData) => {
        const data = {
            formData,
            dishesId,
        };
        await mutation.mutateAsync(data);
    };
    const redirectTo = () => {
        navigate('/admin/dashboard/dishes/');
    };
    return (
        <>
            <div className='mb-6 px-4 md:px-6 xl:px-8 pt-8'>
                <h1 className='text-lg font-medium mb-2'>Editar Platos</h1>
                <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <span>Inicio</span>
                    <BiChevronRight />
                    <span>Platos</span>
                    <BiChevronRight />
                    <span>Editar Platos</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form onSubmit={handleSubmit(handleForm)} noValidate>
                    <DishesForm
                        register={register}
                        errors={errors}
                        isEditMode={true}
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
                            value=' Guardar cambios'
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
