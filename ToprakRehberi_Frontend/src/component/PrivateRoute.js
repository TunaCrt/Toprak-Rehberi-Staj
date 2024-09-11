import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Token'ı kontrol et

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/Signin" />;
};

export default PrivateRoute;
