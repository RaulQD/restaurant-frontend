import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
