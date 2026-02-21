import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Sidebar } from "./components/Sidebar";
import Header from "./components/Header";

export const ProtectedRoute = () => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <main className="main-container">
        <Sidebar />
        <section className="outlet-container">
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
};
