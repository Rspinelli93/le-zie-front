import { createBrowserRouter } from 'react-router-dom';
import { requireAdminAuth } from '../authentication/AdminAuth';
import App from '../App';

import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';
import AdminProductDetails from '../pages/AdminProductDetails';
import Collection from '../pages/Collection';
import LoginAdmin from '../pages/LoginAdmin';
import ProductDetails from '../pages/ProductDetails';
import AdminCollection from '../pages/AdminCollection';

const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <Home /> },
        { path: 'collection', element: <Collection /> },
        { path: 'product/:id', element: <ProductDetails /> },

        { path: 'login-admin', element: <LoginAdmin /> },
        { path: 'admin/add', element: <AddProduct />, loader: requireAdminAuth },
        { path: 'admin/edit/:id', element: <AdminProductDetails />, loader: requireAdminAuth },
        { path: 'admin/collection', element: <AdminCollection />, loader: requireAdminAuth },
    ],
    },
]);

export default router;