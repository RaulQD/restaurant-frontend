import { Navigate, useParams } from 'react-router-dom';
import EditDishesform from '../../components/dishes/EditDishesform';
import { useQuery } from '@tanstack/react-query';
import { getDishesById } from '../../../services/apiDishes';
import Spinner from '../../../ui/Spinner';

export default function EditDishesPage() {
    const params = useParams();
    const dishesId = params.id!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editDishes', dishesId],
        queryFn: () => getDishesById(dishesId),
        retry: false,
    });
    if (isLoading) return <div className='flex justify-center items-center h-screen'>
        <Spinner />
    </div>;
    if (isError) return <Navigate to='/not-found' />;

    if (data) return <EditDishesform data={data} dishesId={dishesId} />;
}
