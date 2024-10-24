// router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from './../pages/about/About';
import Login from '../pages/auth/Login/Login';
import Registation from './../pages/auth/Registation/Registation';
import Forgotpassword from '../pages/auth/forgetpassword/Forgotpassword';
import Otpverification from '../pages/auth/otpverification/Otpverification';
import CreateNewPassword from '../pages/auth/createnewpass/CreateNewPassword';
import DashboardHome from '../components/ownerDashboard/DashboardHome';
import CreateNewForms from '../components/ownerDashboard/CreateNewForms';
import Profile from '../components/ownerDashboard/Profile';
import GenarateQrcode from '../components/ownerDashboard/GenarateQrcode';
import DownLoadQrcode from '../components/ownerDashboard/DownLoadQrcode';
import Feedbackresult from './../components/ownerDashboard/Feedbackresult';
import RoleBasedRoute from './RoleBasedRoute';
import Mainlayout from '../layout/MainLayout/Mainlayout';
import Ownerlayout from '../layout/ownerLauout/Ownerlayout';

// Define the router
const router = createBrowserRouter([
  // Layout for users
  {
    path: '/',
    element: (
      <RoleBasedRoute />
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },

  // Layout for owner/business (business users) - nested inside RoleBasedRoute
  {
    path: '/dashboard',
    element: (
      <RoleBasedRoute />
    ),
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/createnewforms',
        element: <CreateNewForms />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      {
        path: '/dashboard/genareteqrcode',
        element: <GenarateQrcode />,
      },
      {
        path: '/dashboard/downloadQRcode',
        element: <DownLoadQrcode />,
      },
      {
        path: '/dashboard/feedbackresult',
        element: <Feedbackresult />,
      },
    ],
  },

  // Authentication routes
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/forgotpassword',
    element: <Forgotpassword />,
  },
  {
    path: '/auth/otpverification',
    element: <Otpverification />,
  },
  {
    path: '/auth/createnewpassword',
    element: <CreateNewPassword />,
  },
  {
    path: '/auth/signup',
    element: <Registation />,
  },

  // 404 route
  {
    path: '*',
    element: <h1>Page not found</h1>,
  },
]);

export default router;
