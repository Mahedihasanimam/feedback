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
import DashboardHome from '../components/ownerDashboard/DashboardHome';
import Ownerlayout from '../layout/ownerLauout/Ownerlayout';
import CreateNewForms from '../components/ownerDashboard/CreateNewForms';
import Profile from '../components/ownerDashboard/Profile';
import GenarateQrcode from '../components/ownerDashboard/GenarateQrcode';
import DownLoadQrcode from '../components/ownerDashboard/DownLoadQrcode';
import Feedbackresult from './../components/ownerDashboard/Feedbackresult';
    const router = createBrowserRouter([
      // layout for usr 
        // {
        //  path: '/',
        //   element: <Mainlayout/>,
        //   children: [
        //     {
        //       path:'/',
        //       element: <Home/>,
        //     },
        //     {
        //       path:'/about',
        //       element: <About/>,
        //     },
        //   ],
        // },



        // layout for owner 
        {
         path: '/',
          element: <Ownerlayout/>,
          children: [
            {
              path:'/',
              element: <DashboardHome/>,
            },
            {
              path:'/createnewforms',
              element: <CreateNewForms/>,
            },
            {
              path:'/profile',
              element: <Profile/>,
            },
            {
              path:'/genareteqrcode',
              element: <GenarateQrcode/>,
            },
            {
              path:'/downloadQRcode',
              element: <DownLoadQrcode/>,
            },
            {
              path:'/feedbackresult',
              element: <Feedbackresult/>,
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