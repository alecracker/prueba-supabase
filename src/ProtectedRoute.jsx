import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Sidebar } from "./components/Sidebar";

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
          <Outlet />
        </section>
      </main>
    </>
  );
};
