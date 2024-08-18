import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../../ui/Header';

export default function LayoutAdmin() {
    return (
        <>
            <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
                <Sidebar />
                <main className='xl:col-span-5'>
                    <Header className='p-8'/>
                    <div className='h-[90vh] overflow-y-scroll'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}
