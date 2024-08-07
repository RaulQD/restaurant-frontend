import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    updateDishesImage,
    UpdateImageAPIType,
} from '../../../services/apiDishes';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Dish } from '../types/dishes';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { ChangeEvent, useState } from 'react';

type ImageFormProps = {
    dishesId: Dish['id'];
    onClose: () => void;
};
type DishFormImage = {
    images: FileList;
};

export default function AddImageForm({ dishesId, onClose }: ImageFormProps) {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DishFormImage>();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data: UpdateImageAPIType) => updateDishesImage(data),
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            // INVALIDA LA CACHE DE LA QUERY DE PLATOS
            queryClient.invalidateQueries({ queryKey: ['dishes'] });
            // INVALIDA LA CACHE DE LA QUERY DE EDITAR PLATOS
            queryClient.invalidateQueries({ queryKey: ['editDishes'] });
            toast.success(data.message);
            onClose();
        },
    });
    // ENVIA LA IMAGEN AL SERVIDOR
    const handleSubmitImage = async (data: DishFormImage) => {
        // CREA UNA INSTANCIA DE FORM DATA
        const formData = new FormData();
        // AGREGA LA IMAGEN AL FORM DATA
        if (data.images && data.images[0]) {
            formData.append('images', data.images[0]);
        }
        // EJECUTA LA MUTACIÓN
        await mutation.mutateAsync({ formData, dishesId });
    };

    const handlePreview = (e: ChangeEvent<HTMLInputElement>) => {
        // OBTIENE EL ARCHIVO SELECCIONADO
        const file = e.target.files![0];
        // VERIFICAMOS SI HAY UN ARCHIVO
        if (file) {
            // CREA UNA INSTANCIA DE FILE READER
            const reader = new FileReader();
            // CUANDO SE CARGUE LA IMAGEN
            reader.onload = () => {
                setPreview(reader.result);
            };
            // LEE EL ARCHIVO COMO URL
            reader.readAsDataURL(file);
        }
        // RESETEA EL PREVIEW
        setPreview(null);
    };
    return (
        <>
            <form onSubmit={handleSubmit(handleSubmitImage)} noValidate>
                <div className='flex flex-col p-4'>
                    <input
                        type='file'
                        id='images'
                        {...register('images', {
                            required: 'Debes seleccionar una imagen',
                        })}
                        className='p-2  rounded-lg mt-4'
                        onChange={handlePreview}
                    />
                    {preview && (
                        <div>
                            <p>Vista previa de la imagen:</p>
                            <img
                                src={preview as string}
                                alt='Vista previa'
                                style={{ width: '200px', height: 'auto' }}
                            />
                        </div>
                    )}
                    {errors.images && (
                        <ErrorMessage>{errors.images.message}</ErrorMessage>
                    )}
                    <input type='submit' value='Subir Imagen' className='bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg mt-10'/>
                </div>
            </form>
        </>
    );
}
