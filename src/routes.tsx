import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/client/HomePage';
import MenuPage from './pages/client/MenuPage';
import AboutPage from './pages/client/AboutPage';
import SignUp from './pages/auth/SignUp';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/nuestros-platos' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/registration' element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
