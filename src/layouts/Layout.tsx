import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Modal } from '../components/Modal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
            {/* <Modal /> */}
            <Footer />
        </>
    );
}
