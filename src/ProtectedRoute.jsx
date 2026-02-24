import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <main
        className={sidebarOpen ? "main-container active" : "main-container"}
      >
        {/* <section className="content-menu-hamburger">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}></button>
          </section> */}
        <section className="sidebar-container">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </section>
        <section className="outlet-container">
          <Outlet />
        </section>
      </main>
    </>
  );
};
