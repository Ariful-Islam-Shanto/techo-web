import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Registration from '../../Pages/Registration/Registration';
import Products from '../../Pages/Products/Products';


const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/register',
                element : <Registration/>
            }
            ,
            {
                path : '/products',
                element : <Products/>
            }
        ]
    }
])

export default routes;