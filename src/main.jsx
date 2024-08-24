import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import Login from './pages/log-reg/Login';
import Register from './pages/log-reg/Register';
import { AuthProvider } from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Cloths from './pages/productPages/Cloths';
import Gadgets from './pages/productPages/Gadgets';
import Toys from './pages/productPages/Toys';
import Furniture from './pages/productPages/Furniture';
import { CartProvider } from './provider/CartProvider';
import Profile from './pages/profile/Profile';
import Order from './pages/order/Order';
import PrivateRoute from './private/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cloths',
        element: <Cloths />
      },
      {
        path: '/gadgets',
        element: <Gadgets />
      },
      {
        path: '/toys',
        element: <Toys />
      },
      {
        path: '/furniture',
        element: <Furniture />
      },
      {
        path: '/search',
        element: <SearchProducts />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
]);



import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SearchProvider } from './provider/SearchProvider';
import SearchProducts from './pages/search/SearchProducts';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <SearchProvider>
          <HelmetProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </HelmetProvider>
        </SearchProvider>
      </CartProvider>
    </QueryClientProvider>
    <Toaster />
  </StrictMode>,
)
