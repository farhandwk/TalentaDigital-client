import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const LearnerDashboard = () => (
  <div className="mt-4 space-y-2">
    <div>
      <Link to="/quiz" className="text-indigo-600 hover:text-indigo-800 font-semibold">
        Lihat & Kerjakan Tes &rarr;
      </Link>
    </div>
    <div>
      <Link to="/quiz/my-results" className="text-indigo-600 hover:text-indigo-800 font-semibold">
        Lihat Riwayat Hasil Tes &rarr;
      </Link>
    </div>
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold text-lg">Skill Lab</h3>
      <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 block mt-2">Jelajahi Katalog Kursus &rarr;</Link>
    </div>
  </div>
);

const TrainerDashboard = () => (
  <div className="mt-4 space-y-2">
    <div>
      <p className="font-semibold text-gray-700">Zona Asah Otak:</p>
      <div className="pl-4 mt-1 space-y-1">
        <Link to="/trainer/questions" className="block text-indigo-600 hover:text-indigo-800">
          Manajemen Bank Soal &rarr;
        </Link>
        {/* --- LINK BARU DI SINI --- */}
        <Link to="/trainer/tests" className="block text-indigo-600 hover:text-indigo-800">
          Manajemen Paket Tes &rarr;
        </Link>
        {/* ----------------------- */}
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold text-lg">Skill Lab</h3>
        <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 block mt-2">Jelajahi Katalog Kursus &rarr;</Link>
        <Link to="/trainer/courses" className="text-indigo-600 hover:text-indigo-800 block mt-1">Manajemen Kursus Saya &rarr;</Link>
        {/* Nanti kita tambahkan link manajemen kursus di sini */}
    </div>
    </div>
  </div>
)

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
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Menu Navigasi</h2>
        {user.role === 'trainer' ? <TrainerDashboard /> : <LearnerDashboard />}
      </div>
      
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