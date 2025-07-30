// frontend/src/routes/ProtectedRoute.jsx

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  // Jika masih dalam proses loading, jangan render apa-apa
  if (loading) {
    return <div>Loading...</div>; // Atau tampilkan spinner
  }

  // Jika sudah tidak loading dan ada user, tampilkan halamannya
  // <Outlet /> akan merender komponen anak dari rute ini (misal: DashboardPage)
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;