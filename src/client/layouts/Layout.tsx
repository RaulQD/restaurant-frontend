import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Layout() {
    const handleRouteChange = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className='bg-gray-50'>
                <Navbar handleRouteChange={handleRouteChange} />
                <Hero />
                <main>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    );
}
