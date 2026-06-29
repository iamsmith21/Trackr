import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import JobDetailPage from "./pages/JobDetailPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
