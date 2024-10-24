import React from 'react';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default Privateroute;