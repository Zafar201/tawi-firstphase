import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;
    return adminInfo ? children : <Navigate to="/superadminlogin"/>;
  };
  
  export default AdminRoute;