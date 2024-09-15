import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router-dom';
import { getCategoryById } from '../../../services/apiCategory';
import EditCategoryForm from '../../components/category/EditCategoryForm';
import Spinner from '../../../ui/Spinner';

export default function EditCategoryPage() {
    const params = useParams();
    const categoryId = params.id!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editCategory', categoryId],
        queryFn: () => getCategoryById(categoryId),
        retry: false,
    });
    if (isLoading)
        return (
            <div className='flex justify-center items-center h-screen'>
                <Spinner />
            </div>
        );
    if (isError) return <Navigate to='/not-found' />;
    
    if (data) return <EditCategoryForm data={data} categoryId={categoryId} />;
}
