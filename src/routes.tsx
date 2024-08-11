import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './client/layouts/Layout';
import SignUp from './auth/pages/SignUp';
import MenuPage from './client/page/MenuPage';
import HomePage from './client/page/HomePage';
import AboutPage from './client/page/AboutPage';

import LayoutAdmin from './admin/layout/LayoutAdmin';
import DashboardPage from './admin/pages/dashboard/DashboardPage';
import CustomersPage from './admin/pages/Customer/CustomersPages';
import Orders from './admin/pages/orders/Orders';
import  CreateProductsPage from './admin/pages/dishes/CreateProductsPage';
import  EditProductsPage  from './admin/pages/dishes/EditProductsPage';
import ProductsPage from './admin/pages/dishes/ProductsPage';
import NotFound from './shared/NotFound';
import { CategoryPages } from './admin/pages/category/CategoryPages';
import EmployeesPages from './admin/pages/employee/EmployeesPages';
// import { CreateEmployeesPage } from './admin/pages/CreateEmployeesPage';
import { CreateCategoryPage } from './admin/pages/category/CreateCategoryPage';
import AuthLayout from './auth/layout/AuthLayout';
import Login from './auth/pages/Login';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/our-dishes' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
                <Route element={<LayoutAdmin />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/dashboard/products' element={<ProductsPage />} />
                    <Route path='/dashboard/products/add' element={<CreateProductsPage />} />
                    <Route path='/dashboard/products/:id/edit' element = {<EditProductsPage />} />
                    <Route path='/dashboard/category' element={<CategoryPages/>}/>
                    <Route path='/dashboard/category/add' element={<CreateCategoryPage/>}/>
                    <Route path='/dashboard/customers' element={<CustomersPage />} />
                    <Route path='/dashboard/orders' element={<Orders />} />
                    <Route path='/dashboard/employees' element={<EmployeesPages />} />
                    {/* <Route path ='/dashboard/employees/add' element={<CreateEmployeesPage/>}/> */}
                </Route>
                <Route element= {<AuthLayout/>}>
                   <Route path='/auth/login' element={<Login/>} />
                    <Route path='/auth/register' element={<SignUp />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
