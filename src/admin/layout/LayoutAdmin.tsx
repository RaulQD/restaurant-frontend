import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FormUsers } from '../components/projects/FormUsers';
import { Modal } from '../../shared/Modal';

export default function LayoutAdmin() {
    return (
        <>
            <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
                <Sidebar />
                <main className='xl:col-span-5'>
                    <Header />
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
