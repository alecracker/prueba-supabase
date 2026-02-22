import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import {
  BriefCase,
  ClipboardList,
  Utensils,
  ExitIcons,
} from "../assets/Icons/Icons";
import { useAuth } from "../contexts/AuthContext";

export const Sidebar = () => {
  const { handleLogout } = useAuth();
  const links = [
    { to: "/", name: "Resumen", icon: <BriefCase /> },
    { to: "/administracion", name: "Administracion", icon: <BriefCase /> },
    { to: "/operaciones", name: "Operaciones", icon: <Utensils /> },
    // { "/personas", "Operaciones" },
  ];

  return (
    <aside>
      <header>
        <img src="/isotipo.svg" alt="QuickFire Logo" className="logo-image" />
        <div className="header-text">
          <h1>QuickFire Kitchen</h1>
          <h4>Sistema de Gestión</h4>
        </div>
      </header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>
                {link.icon} <label>{link.name}</label>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="footer-sidebar">
        <button onClick={handleLogout}>
          <ExitIcons /> Cerrar Sesión
        </button>
      </footer>
    </aside>
  );
};
