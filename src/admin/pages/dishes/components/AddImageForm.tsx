import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    updateDishesImage,
    UpdateImageAPIType,
} from '../../../services/apiDishes';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Dish } from '../types/dishes';
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
    const { register, handleSubmit } = useForm<DishFormImage>();

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
    const removeFile = () => {
        setPreview(null);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(handleSubmitImage)}
                noValidate
                className='p-8'>
                <div className='border-2 border-dashed border-gray-300 rounded-lg py-10 px-6 '>
                    <label htmlFor='images' className='flex justify-center'>
                        Seleccionar imagen
                    </label>
                    <input
                        type='file'
                        id='images'
                        className='opacity-0 pointer-events-none'
                        accept='image/*'
                        {...register('images')}
                        onChange={handlePreview}
                    />
                </div>
                {preview && (
                    <div className='mt-4'>
                        <img
                            src={preview as string}
                            alt='Vista previa'
                            className='mx-auto rounded-lg object-cover w-52 h-52'
                        />
                        <button
                            type='button'
                            className='block text-center mt-2 text-red-500 font-outfit'
                            onClick={removeFile}>
                            Eliminar
                        </button>
                    </div>
                )}
                <div className='mt-8 flex flex-col md:flex-row justify-between items-center gap-14'>
                    <input
                        type='submit'
                        value='Subir Imagen'
                        className='w-full block font-outfit bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg cursor-pointer'
                    />
                    <button
                        type='button'
                        className='w-full block bg-gray-300 text-black py-2 rounded-lg  font-outfit'
                        onClick={onClose}>
                        Cancelar
                    </button>
                </div>
            </form>
        </>
    );
}
