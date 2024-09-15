import { BiChevronRight } from 'react-icons/bi';
import { CategoryFormData } from '../../../types/category';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCategory } from '../../../services/apiCategory';
import toast from 'react-hot-toast';
import { CategoryForm } from './CategoryForm';

type EditCategoryFormProps = {
    data: CategoryFormData;
    categoryId: string;
};

export default function EditCategoryForm({
    data,
    categoryId,
}: EditCategoryFormProps) {
    const navigate = useNavigate();
    const initialValue: CategoryFormData = {
        name: data.name,
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValue });

    const queryCliente = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: updateCategory,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryCliente.invalidateQueries({ queryKey: ['editCategory'] });
            toast.success(data.message);
            navigate('/admin/dashboard/category');
        },
    });
    const handleForm = (formData: CategoryFormData) => {
        const data = {
            formData,
            categoryId,
        };
        mutate(data);
        reset();
    };
    const redirectTo = () => {
        navigate('/admin/dashboard/category');
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
                    <span>Editar Categoria</span>
                </div>
            </div>
            <div className='px-4 md:px-6 xl:px-8 mb-10'>
                <form onSubmit={handleSubmit(handleForm)} noValidate>
                    <CategoryForm register={register} errors={errors} />
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
