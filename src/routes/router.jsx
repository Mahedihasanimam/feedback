import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from './../pages/about/About';
import Mainlayout from '../layout/MainLayout/Mainlayout';
import Login from '../pages/auth/Login/Login';
import Registation from './../pages/auth/Registation/Registation';
import Forgotpassword from '../pages/auth/forgetpassword/Forgotpassword';
import Otpverification from '../pages/auth/otpverification/Otpverification';
import CreateNewPassword from '../pages/auth/createnewpass/CreateNewPassword';
    const router = createBrowserRouter([
        {
         path: '/',
          element: <Mainlayout/>,
          children: [
            {
              path:'/',
              element: <Home/>,
            },
            {
              path:'/about',
              element: <About/>,
            },
          ],
        },
        {
            path: '/auth/login',
            element:<Login/>
        },
        {
            path: '/auth/forgotpassword',
            element:<Forgotpassword/>
        },
        {
            path: '/auth/otpverification',
            element:<Otpverification/>
        },
        {
            path: '/auth/createnewpassword',
            element:<CreateNewPassword/>
        },
        {
            path: '/auth/signup',
            element:<Registation/>
        },
        
        {
            path: '*',
            element: <h1>Page not found</h1>,
        }
      ])


export default router;