import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import JobDetailPage from "./pages/JobDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>

          <DashboardPage />
          </ProtectedRoute>
         } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
