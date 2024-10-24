// RoleBasedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Ownerlayout from '../layout/ownerLauout/Ownerlayout';
import Mainlayout from '../layout/MainLayout/Mainlayout';

const RoleBasedRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("role");

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Render layout based on role
  if (userRole === "business") {
    return <Ownerlayout />;
  }

  return <Mainlayout />;
};

export default RoleBasedRoute;
