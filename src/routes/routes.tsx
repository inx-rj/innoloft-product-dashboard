import { createBrowserRouter } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';
import Home from 'pages/Home';
import ErrorPage from 'components/common/ErrorPage';
import ProductDetails from 'pages/productView/ProductDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:productId',
        element: <ProductDetails />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default routes;
