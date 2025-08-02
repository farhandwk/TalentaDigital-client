// frontend/src/App.jsx

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './components/layout/Navbar';
import QuizListPage from './pages/QuizListPage';
import QuizTakingPage from './pages/QuizTakingPage';
import QuizResultPage from './pages/QuizResultPage';
import MyResultsPage from './pages/MyResultsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import QuestionBankPage from './pages/trainer/QuestionBankPage';
import TestManagementPage from './pages/trainer/TestManagementPage';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <Routes>
          {/* --- Rute Publik --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />

          {/* --- Grup Rute Privat (Harus Login) --- */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
            
            {/* Rute untuk semua peran yang sudah login */}
            <Route path="quiz" element={<QuizListPage />} />
            <Route path="quiz/test/:id" element={<QuizTakingPage />} />
            <Route path="quiz/result/:id" element={<QuizResultPage />} />
            <Route path="quiz/my-results" element={<MyResultsPage />} />

            {/* --- Sub-Grup Rute Khusus Trainer --- */}
            <Route path="trainer" element={<ProtectedRoute allowedRoles={['trainer']} />}>
              <Route path="questions" element={<QuestionBankPage />} />
              <Route path="tests" element={<TestManagementPage />} />
              {/* Nanti rute trainer lain (misal: /trainer/tests) bisa ditambahkan di sini */}
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;