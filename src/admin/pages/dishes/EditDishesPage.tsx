import { Navigate, useParams } from 'react-router-dom';
import EditDishesform from '../../components/dishes/EditDishesform';
import { useQuery } from '@tanstack/react-query';
import { getDishesById } from '../../../services/apiDishes';

export default function EditDishesPage() {
    const params = useParams();
    const dishesId = params.id!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editDishes', dishesId],
        queryFn: () => getDishesById(dishesId),
        retry: false,
    });
    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <Navigate to='/404' />;

    if (data) return <EditDishesform data={data} dishesId={dishesId} />;
}
