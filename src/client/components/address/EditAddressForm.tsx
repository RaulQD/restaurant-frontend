import { ErrorMessage } from '../../../admin/components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { AddressFormData, Address } from '../../../types/auth';
import { Button, Input, Label } from '../../../ui';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useAddress } from './useAddress';
import SpinnerMini from '../../../ui/SpinnerMini';

type EditAddressFormProps = {
    data: Address;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    // addressId: Address['id'];
};

export default function EditAddressForm({
    data,
    setIsOpenModal,
}: EditAddressFormProps) {
    const addressId = data.id;
    const initialValues: AddressFormData = {
        department: data.department,
        provinces: data.provinces,
        district: data.district,
        street: data.street,
        number: data.number,
        references: data.references,
    };
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ defaultValues: initialValues, mode: 'onBlur' });

    const { update, isPending } = useAddress();

    const onSubmit = (formData: AddressFormData) => {
        const data = { formData, addressId: addressId };
        console.log(data);
        update(data, {
            onSuccess: () => {
                setIsOpenModal(false);
                reset();
            },
        });
    };

    return (
        <div className='px-4 pb-4'>
            <div>
                <div className='flex justify-start items-center'>
                    <HiOutlineLocationMarker className='text-4xl' />
                    <h1 className='text-2xl'>Actualizar dirección</h1>
                </div>
                <div className='mt-4'>
                    <h2>Información de quien recibe.</h2>
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                'Guardar cambios'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
