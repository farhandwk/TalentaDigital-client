// frontend/src/App.jsx

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // <-- Impor halaman login
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'; // <-- Impor baru
import ProtectedRoute from './routes/ProtectedRoute'; // <-- Impor baru
import Navbar from './components/layout/Navbar'; // <-- Impor baru

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <Routes>
          {/* Rute Publik */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rute Privat / Dilindungi */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
            {/* Nanti rute-rute privat lainnya bisa ditambahkan di sini */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;