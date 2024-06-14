import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function LayoutAdmin() {
    return (
        <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
            <Sidebar />
            <main className='bg-blue-500  xl:col-span-5 '>
                <Header />
                <div className='h-[92vh] overflow-y-scroll'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
