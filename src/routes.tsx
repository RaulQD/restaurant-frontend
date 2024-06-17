import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './client/layouts/Layout';
import SignUp from './auth/pages/SignUp';
import MenuPage from './client/page/MenuPage';
import HomePage from './client/page/HomePage';
import AboutPage from './client/page/AboutPage';

import LayoutAdmin from './admin/layout/LayoutAdmin';
import DashboardPage from './admin/pages/DashboardPage';
import Customers from './admin/pages/Customers';
import Orders from './admin/pages/Orders';
import Employees from './admin/pages/Employees';
import AddProductsPage from './admin/pages/AddProductsPage';
import ProductsPage from './admin/pages/ProductsPage';

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
                    <Route
                        path='/dashboard/products'
                        element={<ProductsPage />}
                    />
                    <Route
                        path='/dashboard/products/add'
                        element={<AddProductsPage />}
                    />
                    <Route
                        path='/dashboard/customers'
                        element={<Customers />}
                    />
                    <Route path='/dashboard/orders' element={<Orders />} />
                    <Route
                        path='/dashboard/employees'
                        element={<Employees />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
