// frontend/src/pages/DashboardPage.jsx

import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);

  // Tampilkan pesan loading jika data user belum siap
  if (!user) {
    return <div>Loading data pengguna...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Selamat Datang, {user.name}!</h1>
      <p className="mt-2 text-gray-600">Anda login sebagai **{user.role}**.</p>
      
      <button
        onClick={logout}
        className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;