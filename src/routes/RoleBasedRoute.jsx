// RoleBasedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Ownerlayout from '../layout/ownerLauout/Ownerlayout';
import Mainlayout from '../layout/MainLayout/Mainlayout';

const RoleBasedRoute = () => {

  const userRole = localStorage.getItem("role");



  // Render layout based on role
  if (userRole === "business") {
    return <Ownerlayout />;
  }

  return <Mainlayout />;
};

export default RoleBasedRoute;
