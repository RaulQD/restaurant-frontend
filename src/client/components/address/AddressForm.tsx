import { Button, Input, Label } from '../../../ui';
import { useForm } from 'react-hook-form';
import { AddressFormData } from '../../../types/auth';
import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAddress } from '../../../services/apiAddress';
import toast from 'react-hot-toast';
import SpinnerMini from '../../../ui/SpinnerMini';

type AddressFormProps = {
    setIsOpenModal: (value: React.SetStateAction<boolean>) => void;
};

export default function AddressForm({ setIsOpenModal }: AddressFormProps) {
    const initialValues: AddressFormData = {
        department: '',
        provinces: '',
        street: '',
        number: '',
        district: '',
        references: '',
    };
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        watch,
    } = useForm({ defaultValues: initialValues, mode: 'onBlur' });
    const selectedDepartment = watch('department');
    const selectedProvinces = watch('provinces');
    const selectedDistrict = watch('district');

    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: createAddress,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['address'] });
            toast.success(data.message);
            setIsOpenModal(false);
            reset();
        },
    });

    const onSubmit = (data: AddressFormData) => {
        mutate(data);
    };

    return (
        <div className='px-4 pb-4'>
            <div>
               
                <div className='mt-4'>
                    <h2>Información de quien recibe</h2>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=' mt-10'
                    noValidate>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='col-span-2 sm:col-auto'>
                            <Label text='Departamento' htmlFor='department' />
                            <Input
                                type='text'
                                id='department'
                                register={register('department', {
                                    required:
                                        'Recuerda ingresar tu departamento.',
                                })}
                            />
                            {errors.department && (
                                <ErrorMessage>
                                    {errors.department.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='col-span-2 sm:col-auto'>
                            <Label text='Provincia' htmlFor='provinces' />
                            <Input
                                type='text'
                                id='provinces'
                                disabled={!selectedDepartment}
                                register={register('provinces', {
                                    required: 'Recuerda ingresar tu provincia.',
                                })}
                            />
                            {errors.provinces && (
                                <ErrorMessage>
                                    {errors.provinces.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='col-span-2 sm:col-auto'>
                            <Label text='Distrito' htmlFor='district' />
                            <Input
                                type='text'
                                id='district'
                                disabled={!selectedProvinces}
                                register={register('district', {
                                    required: 'Recuerda ingresar tu distrito.',
                                })}
                            />
                            {errors.district && (
                                <ErrorMessage>
                                    {errors.district.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='col-span-2 sm:col-auto'>
                            <Label
                                text='Avenida / Calle / Jirón'
                                htmlFor='street'
                            />
                            <Input
                                type='text'
                                id='street'
                                disabled={!selectedDistrict}
                                register={register('street', {
                                    required: 'Recuerda ingresar tu dirección.',
                                })}
                            />
                            {errors.street && (
                                <ErrorMessage>
                                    {errors.street.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='col-span-2 sm:col-auto'>
                            <Label text='Número' htmlFor='number' />
                            <Input
                                type='text'
                                id='number'
                                disabled={!selectedDistrict}
                                register={register('number', {
                                    required: 'Recuerda ingresar tu número.',
                                })}
                            />
                            {errors.number && (
                                <ErrorMessage>
                                    {errors.number.message}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='col-span-2'>
                            <Label
                                text='Referencias (opcional)'
                                htmlFor='references'
                            />
                            <Input
                                type='text'
                                id='references'
                                register={register('references')}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center gap-6 mt-10'>
                        <Button
                            type='button'
                            color='secondary'
                            onClick={() => setIsOpenModal(false)}>
                            Cancelar
                        </Button>
                        <button
                            type='submit'
                            disabled={!isValid}
                            className={`w-full rounded-md ${
                                isValid
                                    ? 'bg-orange-500 hover:bg-orange-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}>
                            {isPending ? (
                                <div className='flex justify-center'>
                                    <SpinnerMini />
                                </div>
                            ) : (
                                'Guardar'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
