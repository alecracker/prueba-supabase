import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import './pages/styles/protectedRoute.css';
export const ProtectedRoute = () => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const links = [
    { to: "/", name: "Inicio" },
    { to: "/usuarios", name: "Usuarios" },
    { to: "/clientes", name: "Clientes" },
    { to: "/personas", name: "Personas" },
  ];

  return (
    <>
      <h3>Ruta Protegida</h3>
      <h4>Bienvenido, {userData.username}</h4>
      <br />
      <nav>
        <ul className="menu">
          {links.map((link, index) => {
            return (
              <NavLink key={index} to={link.to}>
                {link.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
