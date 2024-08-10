import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Modal } from '../../shared/Modal';
import Login from '../../auth/pages/Login';
import { useState } from 'react';

export default function Layout() {
    const [modal, setModal] = useState(false);
    const handleRouteChange = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Navbar handleRouteChange={handleRouteChange} setModal={setModal}/>
            <Header />
            <main>
                <Outlet />
            </main>

            <Footer />
            {modal && (
                <Modal closeModal={() => setModal(false)}>
                    <Login />
                </Modal>
            )}
        </>
    );
}
