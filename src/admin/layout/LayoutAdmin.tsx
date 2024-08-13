import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useUser } from '../../hooks/useUser';

export default function LayoutAdmin() {
    const { data, isError, isLoading } = useUser();
    if (isLoading) return 'Cargando....';

    if (isError) {
        return <Navigate to='/auth/login' />;
    }

    if (data)
        return (
            <>
                <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
                    <Sidebar />
                    <main className='xl:col-span-5'>
                    
                        <Header data={data} />
                        <div className='h-[90vh] overflow-y-scroll'>
                            <Outlet />
                        </div>
                    </main>
                </div>
                {/* <Modal>
                <FormUsers />
            </Modal> */}
            </>
        );
}
