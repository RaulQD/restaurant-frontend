import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Modal } from '../../shared/Modal';
import Login from '../../auth/pages/Login';

export default function Layout() {
    const handleRouteChange = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Navbar handleRouteChange={handleRouteChange} />
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Modal>
                <Login />
            </Modal> */}
            <Footer />
        </>
    );
}
