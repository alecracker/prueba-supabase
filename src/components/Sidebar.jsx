import { Outlet, Navigate, NavLink } from "react-router-dom";
import "./Sidebar.css";
export const Sidebar = () => {
  const links = [
    { to: "/", name: "Resumen" },
    { to: "/usuarios", name: "Empleados" },
    { to: "/clientes", name: "Clientes" },
    { to: "/personas", name: "Pedidos" },
  ];

  return (
    <aside>
      <header>
        <div className="logo-image"></div>
        <div className="header-text">
          <h1>QuickFire Kitchen</h1>
          <h4>Sistema de Gestión</h4>
        </div>
      </header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="footer-sidebar">
        <button>Cerrar Sesión</button>
      </footer>
    </aside>
  );
};
