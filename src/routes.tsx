import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './client/layouts/Layout';
import SignUp from './auth/pages/SignUp';
import MenuPage from './client/page/MenuPage';
import HomePage from './client/page/HomePage';
import AboutPage from './client/page/AboutPage';

import LayoutAdmin from './admin/layout/LayoutAdmin';
import DashboardPage from './admin/pages/DashboardPage';
import CustomersPage from './admin/pages/CustomersPages';
import Orders from './admin/pages/Orders';
import { CreateProductsPage } from './admin/pages/CreateProductsPage';
import ProductsPage from './admin/pages/ProductsPage';
import NotFound from './shared/NotFound';
import { CategoryPages } from './admin/pages/CategoryPages';
import EmployeesPages from './admin/pages/EmployeesPages';
// import { CreateEmployeesPage } from './admin/pages/CreateEmployeesPage';
import { CreateCategoryPage } from './admin/pages/CreateCategoryPage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/our-dishes' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
                <Route element={<LayoutAdmin />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/dashboard/products' element={<ProductsPage />} />
                    <Route path='/dashboard/products/add' element={<CreateProductsPage />} />
                    <Route path='/dashboard/category' element={<CategoryPages/>}/>
                    <Route path='/dashboard/category/add' element={<CreateCategoryPage/>}/>
                    <Route path='/dashboard/customers' element={<CustomersPage />} />
                    <Route path='/dashboard/orders' element={<Orders />} />
                    <Route path='/dashboard/employees' element={<EmployeesPages />} />
                    {/* <Route path ='/dashboard/employees/add' element={<CreateEmployeesPage/>}/> */}
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
