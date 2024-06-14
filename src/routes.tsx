import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './client/layouts/Layout';
import SignUp from './auth/pages/SignUp';
import MenuPage from './client/page/MenuPage';
import HomePage from './client/page/HomePage';
import AboutPage from './client/page/AboutPage';
import LayoutAdmin from './admin/layout/LayoutAdmin';
import DashboardPage from './admin/pages/DashboardPage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/nuestros-platos' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/registration' element={<SignUp />} />
                </Route>
                <Route element={<LayoutAdmin />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
