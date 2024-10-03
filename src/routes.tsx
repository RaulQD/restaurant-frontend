import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './client/layouts/Layout';
import MenuPage from './client/page/MenuPage';
import HomePage from './client/page/HomePage';
import AboutPage from './client/page/AboutPage';
import CheckoutPage from './client/page/CheckoutPage';

import LayoutAdmin from './admin/layout/LayoutAdmin';
import DashboardPage from './admin/pages/dashboard/DashboardPage';
import CustomersPage from './admin/pages/Customer/CustomersPages';
import Orders from './admin/pages/orders/Orders';
import DishesPage from './admin/pages/dishes/DishesPage';
import CreateDishesPage from './admin/pages/dishes/CreateDishesPage';
import EditDishesPage from './admin/pages/dishes/EditDishesPage';
import CategoryPages from './admin/pages/category/CategoryPages';
import EmployeesPages from './admin/pages/employee/EmployeesPages';
import CreateCategoryPage from './admin/pages/category/CreateCategoryPage';
import EditCategoryPage from './admin/pages/category/EditCategoryPage';

import AuthLayout from './auth/layout/AuthLayout';
import SignUp from './auth/pages/SignUp';
import Login from './auth/pages/Login';
import ForgotPassword from './auth/components/resetpassword/ForgotPassword';
import NewPasswordPage from './auth/pages/NewPasswordPage';

import ProfilePage from './client/page/ProfilePage';
import ProfileLayout from './client/layouts/ProfileLayout';
import ChangePasswordPage from './client/page/ChangePasswordPage';
import AddressPage from './client/page/AddressPage';

import ProtectedRoute from './ui/ProtectedRoute';

import NotFound from './ui/NotFound';
import ShoppingPage from './client/page/ShoppingPage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/our-dishes' element={<MenuPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route element={<ProfileLayout />}>
                        <Route
                            path='/account/profile'
                            element={<ProfilePage />}
                        />
                        <Route
                            path='/account/password'
                            element={<ChangePasswordPage />}
                        />
                        <Route
                            path='/account/address'
                            element={<AddressPage />}
                        />
                        <Route
                            path='/account/my-shoppings'
                            element={<ShoppingPage />}
                        />
                    </Route>
                </Route>
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route
                    path='/admin/'
                    element={
                        <ProtectedRoute requiresAdmin={true}>
                            <LayoutAdmin />
                        </ProtectedRoute>
                    }>
                    <Route path='dashboard' element={<DashboardPage />} />
                    <Route path='dashboard/dishes' element={<DishesPage />} />
                    <Route
                        path='dashboard/dishes/add'
                        element={<CreateDishesPage />}
                    />
                    <Route
                        path='dashboard/dishes/:id/edit'
                        element={<EditDishesPage />}
                    />
                    <Route
                        path='dashboard/category'
                        element={<CategoryPages />}
                    />
                    <Route
                        path='dashboard/category/add'
                        element={<CreateCategoryPage />}
                    />
                    <Route
                        path='dashboard/category/:id/edit'
                        element={<EditCategoryPage />}
                    />
                    <Route
                        path='dashboard/customers'
                        element={<CustomersPage />}
                    />
                    <Route path='dashboard/orders' element={<Orders />} />
                    <Route
                        path='dashboard/employees'
                        element={<EmployeesPages />}
                    />
                    {/* <Route path ='/dashboard/employees/add' element={<CreateEmployeesPage/>}/> */}
                </Route>
                <Route path='/auth/' element={<AuthLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<SignUp />} />
                    <Route
                        path='forgot-password'
                        element={<ForgotPassword />}
                    />
                    <Route
                        path='update-password/:token'
                        element={<NewPasswordPage />}
                    />
                </Route>
                <Route path='/not-found' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
